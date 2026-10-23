'use strict';

const assert = require('node:assert/strict');
const { mkdtemp, rm } = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { afterEach, test } = require('node:test');
const { EvidenceLedger, PaperFundEngine, listApprovalTasks, ordersToCsv, searchEvents, searchOrders, summarizePortfolio } = require('../build/governance');

const roots = [];
const secret = 'test-paper-ledger-key-that-is-at-least-32-characters';
const t0 = '2026-07-19T12:00:00.000Z';
const policy = {
  maxMarketAgeMs: 60_000, maxOrderNotionalCents: 500_000, maxGrossExposureCents: 700_000,
  maxAssetExposureCents: 600_000, maxDailyLossCents: 50_000, maxDailyVolumeParticipationBps: 1_000,
  approvalNotionalCents: 50_000,
};

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'enzyme-insights-'));
  roots.push(root);
  const ledger = await EvidenceLedger.open(path.join(root, 'evidence.ledger.ndjson'), secret);
  const engine = new PaperFundEngine(ledger, policy);
  await engine.ingestMarket({ asset: 'WETH', priceCents: 10_000, dailyVolumeUnits: 10_000, source: 'licensed-market-feed', sourceTimestamp: t0, receivedAt: t0, licenseReference: 'contract-market-2026', sourceEventId: 'quote-1' });
  await engine.initializeCustody({ cashCents: 1_000_000, source: 'licensed-custodian', sourceTimestamp: t0, receivedAt: t0, licenseReference: 'contract-custody-2026', sourceEventId: 'cash-open' }, 'custody-adapter');
  return { engine, ledger };
}

afterEach(async () => { await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true }))); });

test('search, approval tasks, and CSV export read the engine snapshot', async () => {
  const { engine, ledger } = await fixture();
  const big = await engine.submitOrder({ clientOrderId: 'insights-big', asset: 'WETH', side: 'buy', quantity: 5, limitPriceCents: 10_000, submittedBy: 'manager-a', now: t0 });
  await engine.submitOrder({ clientOrderId: 'insights-small', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 10_000, submittedBy: 'manager-a', now: t0 });
  const snapshot = engine.snapshot();
  assert.equal(searchOrders(snapshot, 'INSIGHTS-BIG').length, 1);
  assert.equal(searchOrders(snapshot, 'weth', { state: 'approved' }).length, 1);
  assert.deepEqual(listApprovalTasks(snapshot).map((task) => task.orderId), [big.id]);
  assert.match(ordersToCsv(snapshot), /insights-big/);
  assert.equal(searchEvents(ledger.events(), 'order.submitted').length, 2);
  assert.equal(searchEvents(ledger.events(), '', 'custody.initialized').length, 1);
});

test('AI summary uses the labelled deterministic fallback without a key and the provider only with one', async () => {
  const { engine } = await fixture();
  const fallback = await summarizePortfolio(engine.snapshot(), { apiKey: '' });
  assert.equal(fallback.provider, 'deterministic-fallback');
  assert.match(fallback.text, /Paper portfolio/);
  let seenUrl = '';
  const provided = await summarizePortfolio(engine.snapshot(), {
    apiKey: 'test-key',
    fetcher: async (url) => { seenUrl = url; return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: 'Provider summary.' } }] }) }; },
  });
  assert.equal(provided.provider, 'openai-compatible');
  assert.equal(provided.text, 'Provider summary.');
  assert.match(seenUrl, /\/chat\/completions$/);
});
