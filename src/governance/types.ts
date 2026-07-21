export type Side = 'buy' | 'sell';
export type OrderState = 'pending_approval' | 'approved' | 'partially_filled' | 'filled' | 'cancelled';

export interface RiskPolicy {
  maxMarketAgeMs: number;
  maxOrderNotionalCents: number;
  maxGrossExposureCents: number;
  maxAssetExposureCents: number;
  maxDailyLossCents: number;
  maxDailyVolumeParticipationBps: number;
  approvalNotionalCents: number;
}

export interface MarketSnapshot {
  asset: string;
  priceCents: number;
  dailyVolumeUnits: number;
  source: string;
  sourceTimestamp: string;
  receivedAt: string;
  licenseReference: string;
  sourceEventId: string;
}

export interface CustodySnapshot {
  cashCents: number;
  source: string;
  sourceTimestamp: string;
  receivedAt: string;
  licenseReference: string;
  sourceEventId: string;
}

export interface PaperOrder {
  id: string;
  clientOrderId: string;
  asset: string;
  side: Side;
  quantity: number;
  filledQuantity: number;
  limitPriceCents: number;
  state: OrderState;
  submittedBy: string;
  approvedBy?: string;
  createdAt: string;
}

export interface LedgerEvent<T = Record<string, unknown>> {
  sequence: number;
  id: string;
  type: string;
  payload: T;
  actor: string;
  idempotencyKey: string;
  occurredAt: string;
  previousHash: string;
  eventHash: string;
}

export interface LedgerAppend<T> {
  event: LedgerEvent<T>;
  replayed: boolean;
}

export interface ReconciliationResult {
  consistent: boolean;
  issues: string[];
}
