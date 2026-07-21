import { randomBytes } from 'node:crypto';
import { EvidenceLedger } from './ledger';
import type { CustodySnapshot, MarketSnapshot, PaperOrder, ReconciliationResult, RiskPolicy, Side } from './types';

type Fill = { id: string; orderId: string; quantity: number; priceCents: number; brokerEventId: string; corrected: boolean };

function positiveInteger(value: number, name: string): void {
  if (!Number.isSafeInteger(value) || value <= 0) throw new Error(`invalid_${name}`);
}

function timestamp(value: string, name: string): number {
  const parsed = Date.parse(value);
  if (!Number.isFinite(parsed)) throw new Error(`invalid_${name}`);
  return parsed;
}

function normalizeAsset(asset: string): string {
  const normalized = asset.trim().toUpperCase();
  if (!/^[A-Z0-9][A-Z0-9._-]{0,31}$/.test(normalized)) throw new Error('invalid_asset');
  return normalized;
}

export class PaperFundEngine {
  private readonly markets = new Map<string, MarketSnapshot>();
  private readonly positions = new Map<string, number>();
  private readonly orders = new Map<string, PaperOrder>();
  private readonly fills = new Map<string, Fill>();
  private cashCents = 0;
  private initialEquityCents = 0;
  private custodyInitialized = false;
  private killSwitch = false;

  constructor(private readonly ledger: EvidenceLedger, private readonly policy: RiskPolicy) {
    positiveInteger(policy.maxMarketAgeMs, 'max_market_age');
    positiveInteger(policy.maxOrderNotionalCents, 'max_order_notional');
    positiveInteger(policy.maxGrossExposureCents, 'max_gross_exposure');
    positiveInteger(policy.maxAssetExposureCents, 'max_asset_exposure');
    positiveInteger(policy.maxDailyLossCents, 'max_daily_loss');
    positiveInteger(policy.maxDailyVolumeParticipationBps, 'max_volume_participation');
    positiveInteger(policy.approvalNotionalCents, 'approval_notional');
    if (policy.maxDailyVolumeParticipationBps > 10_000) throw new Error('invalid_max_volume_participation');
    this.replay();
  }

  private replay(): void {
    for (const event of this.ledger.events()) this.apply(event.type, event.payload as Record<string, unknown>);
  }

  private apply(type: string, payload: Record<string, unknown>): void {
    if (type === 'market.snapshot') {
      const snapshot = payload as unknown as MarketSnapshot;
      this.markets.set(snapshot.asset, snapshot);
    } else if (type === 'custody.initialized') {
      this.cashCents = Number(payload.cashCents);
      this.initialEquityCents = Number(payload.cashCents);
      this.custodyInitialized = true;
    } else if (type === 'order.submitted') {
      const order = payload as unknown as PaperOrder;
      this.orders.set(order.id, { ...order });
    } else if (type === 'order.approved') {
      const order = this.orders.get(String(payload.orderId));
      if (order) { order.state = 'approved'; order.approvedBy = String(payload.approvedBy); }
    } else if (type === 'order.cancelled') {
      const order = this.orders.get(String(payload.orderId));
      if (order) order.state = 'cancelled';
    } else if (type === 'fill.applied') {
      const fill = payload as unknown as Fill;
      this.fills.set(fill.id, { ...fill, corrected: false });
      this.applyFillDelta(fill, 1);
    } else if (type === 'fill.corrected') {
      const fill = this.fills.get(String(payload.fillId));
      if (fill && !fill.corrected) { this.applyFillDelta(fill, -1); fill.corrected = true; }
    } else if (type === 'corporate_action.split') {
      const asset = String(payload.asset);
      const current = this.positions.get(asset) || 0;
      this.positions.set(asset, current * Number(payload.numerator) / Number(payload.denominator));
      const market = this.markets.get(asset);
      if (market) market.priceCents = market.priceCents * Number(payload.denominator) / Number(payload.numerator);
    } else if (type === 'kill_switch.changed') {
      this.killSwitch = Boolean(payload.enabled);
    }
  }

  private applyFillDelta(fill: Fill, direction: 1 | -1): void {
    const order = this.orders.get(fill.orderId);
    if (!order) throw new Error('fill_order_missing');
    const signedQuantity = (order.side === 'buy' ? fill.quantity : -fill.quantity) * direction;
    this.positions.set(order.asset, (this.positions.get(order.asset) || 0) + signedQuantity);
    this.cashCents += (order.side === 'buy' ? -1 : 1) * fill.quantity * fill.priceCents * direction;
    order.filledQuantity += fill.quantity * direction;
    order.state = order.filledQuantity === 0 ? 'approved' : order.filledQuantity < order.quantity ? 'partially_filled' : 'filled';
  }

  async initializeCustody(snapshot: CustodySnapshot, actor: string): Promise<void> {
    if (this.custodyInitialized) throw new Error('custody_already_initialized');
    this.validateSource(snapshot);
    if (!Number.isSafeInteger(snapshot.cashCents) || snapshot.cashCents < 0) throw new Error('invalid_cash');
    const result = await this.ledger.append('custody.initialized', snapshot, { actor, idempotencyKey: `custody:${snapshot.source}:${snapshot.sourceEventId}`, occurredAt: snapshot.receivedAt });
    if (!result.replayed) this.apply(result.event.type, result.event.payload as unknown as Record<string, unknown>);
  }

  async ingestMarket(snapshot: MarketSnapshot, actor = 'market-adapter'): Promise<{ replayed: boolean }> {
    snapshot = { ...snapshot, asset: normalizeAsset(snapshot.asset) };
    positiveInteger(snapshot.priceCents, 'price');
    positiveInteger(snapshot.dailyVolumeUnits, 'daily_volume');
    this.validateSource(snapshot);
    const result = await this.ledger.append('market.snapshot', snapshot, { actor, idempotencyKey: `market:${snapshot.source}:${snapshot.sourceEventId}`, occurredAt: snapshot.receivedAt });
    if (!result.replayed) this.apply(result.event.type, result.event.payload as unknown as Record<string, unknown>);
    await this.enforceLossLimit();
    return { replayed: result.replayed };
  }

  private validateSource(snapshot: Pick<MarketSnapshot, 'source' | 'sourceTimestamp' | 'receivedAt' | 'licenseReference' | 'sourceEventId'>): void {
    if (!snapshot.source.trim() || !snapshot.licenseReference.trim() || !snapshot.sourceEventId.trim()) throw new Error('source_evidence_required');
    const sourceTime = timestamp(snapshot.sourceTimestamp, 'source_timestamp');
    const received = timestamp(snapshot.receivedAt, 'received_at');
    if (sourceTime > received + 60_000) throw new Error('future_source_timestamp');
  }

  async submitOrder(input: { clientOrderId: string; asset: string; side: Side; quantity: number; limitPriceCents: number; submittedBy: string; now?: string }): Promise<PaperOrder> {
    if (!this.custodyInitialized) throw new Error('custody_not_initialized');
    if (this.killSwitch) throw new Error('kill_switch_active');
    const asset = normalizeAsset(input.asset);
    if (!['buy', 'sell'].includes(input.side)) throw new Error('invalid_side');
    positiveInteger(input.quantity, 'quantity');
    positiveInteger(input.limitPriceCents, 'limit_price');
    if (!input.clientOrderId.trim() || !input.submittedBy.trim()) throw new Error('order_identity_required');
    const existingOrder = [...this.orders.values()].find((order) => order.clientOrderId === input.clientOrderId);
    if (existingOrder) {
      const sameRequest = existingOrder.asset === asset && existingOrder.side === input.side
        && existingOrder.quantity === input.quantity && existingOrder.limitPriceCents === input.limitPriceCents
        && existingOrder.submittedBy === input.submittedBy;
      if (!sameRequest) throw new Error('idempotency_conflict');
      return structuredClone(existingOrder);
    }
    const market = this.markets.get(asset);
    if (!market) throw new Error('market_data_missing');
    const now = input.now || new Date().toISOString();
    if (timestamp(now, 'order_time') - timestamp(market.sourceTimestamp, 'market_time') > this.policy.maxMarketAgeMs) throw new Error('market_data_stale');
    const notional = input.quantity * input.limitPriceCents;
    if (!Number.isSafeInteger(notional)) throw new Error('order_notional_overflow');
    if (notional > this.policy.maxOrderNotionalCents) throw new Error('order_notional_limit');
    if (input.quantity * 10_000 > market.dailyVolumeUnits * this.policy.maxDailyVolumeParticipationBps) throw new Error('liquidity_limit');
    const currentQuantity = this.positions.get(asset) || 0;
    const committedByAsset = new Map<string, number>();
    let committedBuyCash = 0;
    for (const order of this.orders.values()) {
      if (!['pending_approval', 'approved', 'partially_filled'].includes(order.state)) continue;
      const remaining = order.quantity - order.filledQuantity;
      const signed = order.side === 'buy' ? remaining : -remaining;
      committedByAsset.set(order.asset, (committedByAsset.get(order.asset) || 0) + signed);
      if (order.side === 'buy') committedBuyCash += remaining * order.limitPriceCents;
    }
    const projectedQuantity = currentQuantity + (committedByAsset.get(asset) || 0) + (input.side === 'buy' ? input.quantity : -input.quantity);
    if (projectedQuantity < 0) throw new Error('short_sales_disabled');
    if (projectedQuantity * market.priceCents > this.policy.maxAssetExposureCents) throw new Error('asset_exposure_limit');
    let gross = 0;
    const allAssets = new Set([...this.positions.keys(), ...committedByAsset.keys()]);
    for (const heldAsset of allAssets) {
      const quantity = (this.positions.get(heldAsset) || 0) + (committedByAsset.get(heldAsset) || 0);
      gross += Math.abs(quantity * (this.markets.get(heldAsset)?.priceCents || 0));
    }
    const priorCommittedQuantity = currentQuantity + (committedByAsset.get(asset) || 0);
    const projectedGross = gross - Math.abs(priorCommittedQuantity * market.priceCents) + Math.abs(projectedQuantity * market.priceCents);
    if (projectedGross > this.policy.maxGrossExposureCents) throw new Error('gross_exposure_limit');
    if (input.side === 'buy' && notional + committedBuyCash > this.cashCents) throw new Error('cash_limit');
    if (this.lossCents() > this.policy.maxDailyLossCents) throw new Error('daily_loss_limit');
    const order: PaperOrder = {
      id: randomBytes(12).toString('hex'), clientOrderId: input.clientOrderId, asset, side: input.side,
      quantity: input.quantity, filledQuantity: 0, limitPriceCents: input.limitPriceCents,
      state: notional >= this.policy.approvalNotionalCents ? 'pending_approval' : 'approved',
      submittedBy: input.submittedBy, createdAt: now,
    };
    const result = await this.ledger.append('order.submitted', order, { actor: input.submittedBy, idempotencyKey: `order:${input.clientOrderId}`, occurredAt: now });
    if (!result.replayed) this.apply(result.event.type, result.event.payload as unknown as Record<string, unknown>);
    return structuredClone((result.event.payload as unknown as PaperOrder));
  }

  async approveOrder(orderId: string, approver: string): Promise<PaperOrder> {
    const order = this.orders.get(orderId);
    if (!order) throw new Error('order_not_found');
    if (order.state !== 'pending_approval') return structuredClone(order);
    if (order.submittedBy === approver) throw new Error('independent_approval_required');
    const payload = { orderId, approvedBy: approver };
    const result = await this.ledger.append('order.approved', payload, { actor: approver, idempotencyKey: `order-approval:${orderId}` });
    if (!result.replayed) this.apply(result.event.type, result.event.payload);
    return structuredClone(this.orders.get(orderId)!);
  }

  async cancelOrder(orderId: string, actor: string, cancellationId: string): Promise<PaperOrder> {
    const order = this.orders.get(orderId);
    if (!order) throw new Error('order_not_found');
    if (['filled', 'cancelled'].includes(order.state)) return structuredClone(order);
    if (!actor.trim() || !cancellationId.trim()) throw new Error('cancellation_evidence_required');
    const payload = { orderId, cancelledBy: actor, priorState: order.state };
    const result = await this.ledger.append('order.cancelled', payload, { actor, idempotencyKey: `order-cancellation:${cancellationId}` });
    if (!result.replayed) this.apply(result.event.type, result.event.payload);
    return structuredClone(this.orders.get(orderId)!);
  }

  async applyFill(input: { orderId: string; brokerEventId: string; quantity: number; priceCents: number; sourceTimestamp: string }): Promise<{ fill: Fill; replayed: boolean }> {
    const order = this.orders.get(input.orderId);
    if (!order) throw new Error('order_not_found');
    if (!['approved', 'partially_filled'].includes(order.state)) throw new Error('order_not_fillable');
    positiveInteger(input.quantity, 'fill_quantity');
    positiveInteger(input.priceCents, 'fill_price');
    timestamp(input.sourceTimestamp, 'fill_timestamp');
    const existingFill = [...this.fills.values()].find((fill) => fill.brokerEventId === input.brokerEventId);
    if (existingFill) {
      const sameRequest = existingFill.orderId === input.orderId && existingFill.quantity === input.quantity && existingFill.priceCents === input.priceCents;
      if (!sameRequest) throw new Error('idempotency_conflict');
      return { fill: structuredClone(existingFill), replayed: true };
    }
    if (order.filledQuantity + input.quantity > order.quantity) throw new Error('overfill_rejected');
    if ((order.side === 'buy' && input.priceCents > order.limitPriceCents)
      || (order.side === 'sell' && input.priceCents < order.limitPriceCents)) throw new Error('limit_price_breached');
    const fill: Fill = { id: randomBytes(12).toString('hex'), orderId: order.id, quantity: input.quantity, priceCents: input.priceCents, brokerEventId: input.brokerEventId, corrected: false };
    const result = await this.ledger.append('fill.applied', fill, { actor: 'paper-broker-adapter', idempotencyKey: `fill:${input.brokerEventId}`, occurredAt: input.sourceTimestamp });
    if (!result.replayed) this.apply(result.event.type, result.event.payload as unknown as Record<string, unknown>);
    await this.enforceLossLimit();
    return { fill: structuredClone(result.event.payload as unknown as Fill), replayed: result.replayed };
  }

  async correctFill(input: { fillId: string; requestedBy: string; approvedBy: string; reason: string; correctionId: string }): Promise<void> {
    const fill = this.fills.get(input.fillId);
    if (!fill || fill.corrected) throw new Error('fill_not_correctable');
    if (input.requestedBy === input.approvedBy) throw new Error('independent_approval_required');
    if (input.reason.trim().length < 12) throw new Error('correction_reason_required');
    const payload = { fillId: input.fillId, requestedBy: input.requestedBy, approvedBy: input.approvedBy, reason: input.reason };
    const result = await this.ledger.append('fill.corrected', payload, { actor: input.approvedBy, idempotencyKey: `correction:${input.correctionId}` });
    if (!result.replayed) this.apply(result.event.type, result.event.payload);
  }

  async applySplit(input: { asset: string; numerator: number; denominator: number; source: string; sourceEventId: string; sourceTimestamp: string; licenseReference: string }): Promise<void> {
    const asset = normalizeAsset(input.asset);
    positiveInteger(input.numerator, 'split_numerator');
    positiveInteger(input.denominator, 'split_denominator');
    if (!input.source || !input.sourceEventId || !input.licenseReference) throw new Error('source_evidence_required');
    timestamp(input.sourceTimestamp, 'split_timestamp');
    const current = this.positions.get(asset) || 0;
    if ((current * input.numerator) % input.denominator !== 0) throw new Error('fractional_position_not_supported');
    const market = this.markets.get(asset);
    if (market && (market.priceCents * input.denominator) % input.numerator !== 0) throw new Error('fractional_price_not_supported');
    const payload = { ...input, asset };
    const result = await this.ledger.append('corporate_action.split', payload, { actor: 'corporate-action-adapter', idempotencyKey: `corporate-action:${input.source}:${input.sourceEventId}`, occurredAt: input.sourceTimestamp });
    if (!result.replayed) this.apply(result.event.type, result.event.payload);
  }

  async reconcile(input: { reconciliationId: string; cashCents: number; positions: Record<string, number>; sourceTimestamp: string; actor: string }): Promise<ReconciliationResult> {
    timestamp(input.sourceTimestamp, 'reconciliation_timestamp');
    if (!Number.isSafeInteger(input.cashCents) || input.cashCents < 0) throw new Error('invalid_reconciliation_cash');
    const normalizedPositions: Record<string, number> = {};
    for (const [rawAsset, quantity] of Object.entries(input.positions)) {
      if (!Number.isSafeInteger(quantity) || quantity < 0) throw new Error('invalid_reconciliation_position');
      normalizedPositions[normalizeAsset(rawAsset)] = quantity;
    }
    const issues: string[] = [];
    if (input.cashCents !== this.cashCents) issues.push('cash_mismatch');
    const assets = new Set([...this.positions.keys(), ...Object.keys(normalizedPositions)]);
    for (const asset of assets) if ((normalizedPositions[asset] || 0) !== (this.positions.get(asset) || 0)) issues.push(`position_mismatch:${asset}`);
    const payload = { cashCents: input.cashCents, positions: normalizedPositions, issues, consistent: issues.length === 0 };
    const result = await this.ledger.append('custody.reconciled', payload, { actor: input.actor, idempotencyKey: `reconciliation:${input.reconciliationId}`, occurredAt: input.sourceTimestamp });
    if (issues.length && !this.killSwitch && !result.replayed) await this.changeKillSwitch({ enabled: true, actor: input.actor, reason: `Reconciliation mismatch: ${issues.join(',')}`, changeId: `reconciliation-${input.reconciliationId}` });
    return { consistent: issues.length === 0, issues };
  }

  async changeKillSwitch(input: { enabled: boolean; actor: string; reason: string; changeId: string; approvedBy?: string }): Promise<void> {
    if (input.reason.trim().length < 8) throw new Error('kill_switch_reason_required');
    if (!input.enabled && (!input.approvedBy || input.approvedBy === input.actor)) throw new Error('independent_reenable_approval_required');
    const payload = { enabled: input.enabled, reason: input.reason, requestedBy: input.actor, approvedBy: input.approvedBy || null };
    const result = await this.ledger.append('kill_switch.changed', payload, { actor: input.approvedBy || input.actor, idempotencyKey: `kill-switch:${input.changeId}` });
    if (!result.replayed) this.apply(result.event.type, result.event.payload);
  }

  private equityCents(): number {
    let equity = this.cashCents;
    for (const [asset, quantity] of this.positions) equity += quantity * (this.markets.get(asset)?.priceCents || 0);
    return equity;
  }

  private lossCents(): number { return Math.max(0, this.initialEquityCents - this.equityCents()); }

  private async enforceLossLimit(): Promise<void> {
    const loss = this.lossCents();
    if (this.custodyInitialized && loss > this.policy.maxDailyLossCents && !this.killSwitch) {
      await this.changeKillSwitch({ enabled: true, actor: 'risk-engine', reason: `Daily loss ${loss} exceeds configured limit`, changeId: `daily-loss-${this.ledger.events().length + 1}` });
    }
  }

  snapshot(): { cashCents: number; initialEquityCents: number; equityCents: number; lossCents: number; positions: Record<string, number>; orders: PaperOrder[]; killSwitch: boolean } {
    return {
      cashCents: this.cashCents, initialEquityCents: this.initialEquityCents, equityCents: this.equityCents(), lossCents: this.lossCents(),
      positions: Object.fromEntries(this.positions), orders: [...this.orders.values()].map((order) => structuredClone(order)), killSwitch: this.killSwitch,
    };
  }

  async auditExport(): Promise<{ verified: boolean; events: ReturnType<EvidenceLedger['events']> }> {
    return { verified: await this.ledger.verify(), events: this.ledger.events() };
  }
}
