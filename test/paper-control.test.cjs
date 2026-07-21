'use strict';

const assert = require('node:assert/strict');
const { mkdtemp, readFile, rm, writeFile } = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { afterEach, test } = require('node:test');
const { EvidenceLedger, PaperFundEngine } = require('../build/governance');

const roots = [];
const secret = 'test-paper-ledger-key-that-is-at-least-32-characters';
const t0 = '2026-07-19T12:00:00.000Z';
const policy = {
  maxMarketAgeMs: 60_000,
  maxOrderNotionalCents: 500_000,
  maxGrossExposureCents: 700_000,
  maxAssetExposureCents: 600_000,
  maxDailyLossCents: 50_000,
  maxDailyVolumeParticipationBps: 1_000,
  approvalNotionalCents: 50_000,
};

async function fixture(customPolicy = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'enzyme-paper-control-'));
  roots.push(root);
  const ledgerPath = path.join(root, 'evidence.ledger.ndjson');
  const ledger = await EvidenceLedger.open(ledgerPath, secret);
  const engine = new PaperFundEngine(ledger, { ...policy, ...customPolicy });
  await engine.ingestMarket({
    asset: 'WETH', priceCents: 10_000, dailyVolumeUnits: 10_000,
    source: 'licensed-market-feed', sourceTimestamp: t0, receivedAt: t0,
    licenseReference: 'contract-market-2026', sourceEventId: 'quote-1',
  });
  await engine.initializeCustody({
    cashCents: 1_000_000, source: 'licensed-custodian', sourceTimestamp: t0, receivedAt: t0,
    licenseReference: 'contract-custody-2026', sourceEventId: 'cash-open',
  }, 'custody-adapter');
  return { engine, ledger, ledgerPath };
}

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test('requires licensed, timestamped source evidence and deduplicates ingestion', async () => {
  const { engine } = await fixture();
  const snapshot = {
    asset: 'WBTC', priceCents: 100_000, dailyVolumeUnits: 2_000,
    source: 'licensed-market-feed', sourceTimestamp: t0, receivedAt: t0,
    licenseReference: 'contract-market-2026', sourceEventId: 'wbtc-1',
  };
  assert.equal((await engine.ingestMarket(snapshot)).replayed, false);
  assert.equal((await engine.ingestMarket(snapshot)).replayed, true);
  await assert.rejects(engine.ingestMarket({ ...snapshot, priceCents: 99_000 }), /idempotency_conflict/);
  await assert.rejects(engine.ingestMarket({ ...snapshot, sourceEventId: 'unlicensed', licenseReference: '' }), /source_evidence_required/);
});

test('fails closed on stale and future-dated market data', async () => {
  const { engine } = await fixture();
  await assert.rejects(engine.submitOrder({ clientOrderId: 'stale', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 10_000, submittedBy: 'manager', now: '2026-07-19T12:02:00.000Z' }), /market_data_stale/);
  await assert.rejects(engine.ingestMarket({ asset: 'USDC', priceCents: 100, dailyVolumeUnits: 1000, source: 'feed', sourceTimestamp: '2026-07-19T12:10:00.000Z', receivedAt: t0, licenseReference: 'contract', sourceEventId: 'future' }), /future_source_timestamp/);
});

test('enforces notional, liquidity, asset, gross, cash, and short-sale limits deterministically', async () => {
  const { engine } = await fixture();
  await assert.rejects(engine.submitOrder({ clientOrderId: 'notional', asset: 'WETH', side: 'buy', quantity: 60, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 }), /order_notional_limit/);
  await assert.rejects(engine.submitOrder({ clientOrderId: 'liquidity', asset: 'WETH', side: 'buy', quantity: 1001, limitPriceCents: 100, submittedBy: 'manager', now: t0 }), /liquidity_limit/);
  await assert.rejects(engine.submitOrder({ clientOrderId: 'short', asset: 'WETH', side: 'sell', quantity: 1, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 }), /short_sales_disabled/);
  const constrained = await fixture({ maxAssetExposureCents: 20_000 });
  await assert.rejects(constrained.engine.submitOrder({ clientOrderId: 'asset', asset: 'WETH', side: 'buy', quantity: 3, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 }), /asset_exposure_limit/);
  const committed = await engine.submitOrder({ clientOrderId: 'committed-1', asset: 'WETH', side: 'buy', quantity: 50, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  await assert.rejects(engine.submitOrder({ clientOrderId: 'committed-2', asset: 'WETH', side: 'buy', quantity: 20, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 }), /asset_exposure_limit/);
  assert.equal((await engine.cancelOrder(committed.id, 'manager', 'cancel-committed-1')).state, 'cancelled');
  assert.equal((await engine.submitOrder({ clientOrderId: 'after-cancel', asset: 'WETH', side: 'buy', quantity: 20, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 })).state, 'pending_approval');
});

test('requires independent approval above the configured threshold', async () => {
  const { engine } = await fixture();
  const order = await engine.submitOrder({ clientOrderId: 'approval-1', asset: 'WETH', side: 'buy', quantity: 5, limitPriceCents: 10_000, submittedBy: 'manager-a', now: t0 });
  assert.equal(order.state, 'pending_approval');
  await assert.rejects(engine.approveOrder(order.id, 'manager-a'), /independent_approval_required/);
  assert.equal((await engine.approveOrder(order.id, 'risk-b')).state, 'approved');
});

test('replays an identical client order and rejects conflicting reuse', async () => {
  const { engine } = await fixture();
  const request = { clientOrderId: 'client-order-1', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 };
  const first = await engine.submitOrder(request);
  assert.equal((await engine.submitOrder(request)).id, first.id);
  await assert.rejects(engine.submitOrder({ ...request, quantity: 2 }), /idempotency_conflict/);
});

test('applies partial fills exactly once and rejects overfills', async () => {
  const { engine } = await fixture();
  const order = await engine.submitOrder({ clientOrderId: 'partial', asset: 'WETH', side: 'buy', quantity: 4, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  const first = await engine.applyFill({ orderId: order.id, brokerEventId: 'fill-1', quantity: 2, priceCents: 10_000, sourceTimestamp: t0 });
  assert.equal(first.replayed, false);
  assert.equal((await engine.applyFill({ orderId: order.id, brokerEventId: 'fill-1', quantity: 2, priceCents: 10_000, sourceTimestamp: t0 })).replayed, true);
  assert.equal(engine.snapshot().positions.WETH, 2);
  await assert.rejects(engine.applyFill({ orderId: order.id, brokerEventId: 'bad-price', quantity: 1, priceCents: 10_001, sourceTimestamp: t0 }), /limit_price_breached/);
  await assert.rejects(engine.applyFill({ orderId: order.id, brokerEventId: 'fill-over', quantity: 3, priceCents: 10_000, sourceTimestamp: t0 }), /overfill_rejected/);
});

test('activates the kill switch after a deterministic mark-to-market loss', async () => {
  const { engine } = await fixture();
  const order = await engine.submitOrder({ clientOrderId: 'loss', asset: 'WETH', side: 'buy', quantity: 10, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  await engine.approveOrder(order.id, 'risk');
  await engine.applyFill({ orderId: order.id, brokerEventId: 'loss-fill', quantity: 10, priceCents: 10_000, sourceTimestamp: t0 });
  await engine.ingestMarket({ asset: 'WETH', priceCents: 1_000, dailyVolumeUnits: 10_000, source: 'licensed-market-feed', sourceTimestamp: '2026-07-19T12:00:30.000Z', receivedAt: '2026-07-19T12:00:30.000Z', licenseReference: 'contract-market-2026', sourceEventId: 'quote-crash' });
  assert.equal(engine.snapshot().killSwitch, true);
  await assert.rejects(engine.submitOrder({ clientOrderId: 'blocked', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 1_000, submittedBy: 'manager', now: '2026-07-19T12:00:30.000Z' }), /kill_switch_active/);
});

test('reconciliation detects custody drift and blocks new risk', async () => {
  const { engine } = await fixture();
  const result = await engine.reconcile({ reconciliationId: 'recon-1', cashCents: 999_999, positions: {}, sourceTimestamp: t0, actor: 'operations' });
  assert.equal(result.consistent, false);
  assert.deepEqual(result.issues, ['cash_mismatch']);
  assert.equal(engine.snapshot().killSwitch, true);
});

test('records independently approved error corrections and corporate actions', async () => {
  const { engine } = await fixture();
  const order = await engine.submitOrder({ clientOrderId: 'correct', asset: 'WETH', side: 'buy', quantity: 2, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  const applied = await engine.applyFill({ orderId: order.id, brokerEventId: 'bad-fill', quantity: 2, priceCents: 10_000, sourceTimestamp: t0 });
  await assert.rejects(engine.correctFill({ fillId: applied.fill.id, requestedBy: 'ops', approvedBy: 'ops', reason: 'Broker confirmed bad execution', correctionId: 'correction-1' }), /independent_approval_required/);
  await engine.correctFill({ fillId: applied.fill.id, requestedBy: 'ops', approvedBy: 'controller', reason: 'Broker confirmed bad execution', correctionId: 'correction-1' });
  assert.equal(engine.snapshot().positions.WETH, 0);
  const second = await engine.submitOrder({ clientOrderId: 'split-position', asset: 'WETH', side: 'buy', quantity: 2, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  await engine.applyFill({ orderId: second.id, brokerEventId: 'good-fill', quantity: 2, priceCents: 10_000, sourceTimestamp: t0 });
  await engine.applySplit({ asset: 'WETH', numerator: 2, denominator: 1, source: 'licensed-actions', sourceEventId: 'split-1', sourceTimestamp: t0, licenseReference: 'contract-actions-2026' });
  assert.equal(engine.snapshot().positions.WETH, 4);
  assert.equal(engine.snapshot().equityCents, 1_000_000);
});

test('requires two people to release a kill switch', async () => {
  const { engine } = await fixture();
  await engine.changeKillSwitch({ enabled: true, actor: 'risk', reason: 'Manual incident containment', changeId: 'incident-1' });
  await assert.rejects(engine.changeKillSwitch({ enabled: false, actor: 'risk', approvedBy: 'risk', reason: 'Incident has been resolved', changeId: 'release-1' }), /independent_reenable_approval_required/);
  await engine.changeKillSwitch({ enabled: false, actor: 'risk', approvedBy: 'controller', reason: 'Incident has been resolved', changeId: 'release-1' });
  assert.equal(engine.snapshot().killSwitch, false);
});

test('restores state from the append-only ledger and detects tampering', async () => {
  const { engine, ledger, ledgerPath } = await fixture();
  const order = await engine.submitOrder({ clientOrderId: 'restore', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 10_000, submittedBy: 'manager', now: t0 });
  await engine.applyFill({ orderId: order.id, brokerEventId: 'restore-fill', quantity: 1, priceCents: 10_000, sourceTimestamp: t0 });
  assert.equal((await engine.auditExport()).verified, true);
  const reopened = await EvidenceLedger.open(ledgerPath, secret);
  assert.equal(new PaperFundEngine(reopened, policy).snapshot().positions.WETH, 1);
  const text = await readFile(ledgerPath, 'utf8');
  await writeFile(ledgerPath, text.replace('licensed-market-feed', 'untrusted-market-feed'));
  assert.equal(await ledger.verify(), false);
  await assert.rejects(EvidenceLedger.open(ledgerPath, secret), /ledger_signature_invalid/);
});
