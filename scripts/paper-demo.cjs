'use strict';
const { mkdtemp, rm } = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { EvidenceLedger, PaperFundEngine } = require('../build/governance');

async function main() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'enzyme-paper-demo-'));
  try {
    const ledger = await EvidenceLedger.open(path.join(root, 'demo.ledger.ndjson'), 'local-paper-demo-key-with-at-least-32-characters');
    const engine = new PaperFundEngine(ledger, {
      maxMarketAgeMs: 60_000, maxOrderNotionalCents: 500_000, maxGrossExposureCents: 1_000_000,
      maxAssetExposureCents: 750_000, maxDailyLossCents: 50_000,
      maxDailyVolumeParticipationBps: 1_000, approvalNotionalCents: 100_000,
    });
    const now = new Date().toISOString();
    await engine.ingestMarket({ asset: 'WETH', priceCents: 250_000, dailyVolumeUnits: 100_000, source: 'paper-demo-feed', sourceTimestamp: now, receivedAt: now, licenseReference: 'local-demo-only', sourceEventId: 'quote-1' });
    await engine.initializeCustody({ cashCents: 1_000_000, source: 'paper-demo-custody', sourceTimestamp: now, receivedAt: now, licenseReference: 'local-demo-only', sourceEventId: 'cash-1' }, 'demo');
    const order = await engine.submitOrder({ clientOrderId: 'demo-order-1', asset: 'WETH', side: 'buy', quantity: 1, limitPriceCents: 250_000, submittedBy: 'demo-manager', now });
    await engine.approveOrder(order.id, 'demo-risk');
    await engine.applyFill({ orderId: order.id, brokerEventId: 'demo-fill-1', quantity: 1, priceCents: 250_000, sourceTimestamp: now });
    console.log(JSON.stringify({ mode: 'paper-only', ...engine.snapshot(), auditVerified: (await engine.auditExport()).verified }, null, 2));
  } finally { await rm(root, { recursive: true, force: true }); }
}
main().catch((error) => { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; });
