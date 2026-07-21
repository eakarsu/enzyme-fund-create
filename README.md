# Enzyme Fund Paper Control

This repository now has one supported executable boundary: an offline, paper-only fund risk and evidence engine. It has no broker, blockchain, wallet, mnemonic, signing, or live-order adapter. Historical Enzyme/Aave source remains quarantined for provenance review and is excluded from the build, exports, dependencies, CLI, and tests.

## Supported workflow

1. Ingest explicitly licensed market and custody snapshots with source event IDs, source timestamps, receipt timestamps, and contract references.
2. Reject stale/future data and idempotency conflicts.
3. Evaluate order notional, per-asset and gross exposure, cash, liquidity participation, daily loss, approval, short-sale, and kill-switch limits deterministically.
4. Require independent approval for material orders, apply paper fills exactly once, and preserve partial-fill state.
5. Record two-person error corrections, corporate actions, custody reconciliation, automatic/manual risk halts, and two-person release.
6. Persist every fact and decision in an fsync-backed, HMAC hash-chained, append-only NDJSON evidence ledger that is verified on reopen/export.

No LLM participates in a limit, approval, correction, fill, or kill-switch decision.

## Install and verify

Use Node.js 20.19+ and the pinned Yarn 1.22.22 package manager.

```bash
corepack yarn install --frozen-lockfile --ignore-scripts
corepack yarn run verify:boundary
corepack yarn test
corepack yarn start
```

`yarn start` uses a unique temporary directory, performs a paper-only demonstration, verifies its evidence chain, and removes the temporary directory. `yarn legacy:build` and package publication fail closed intentionally.

The persistent library entry point is `build/governance`. Construct `EvidenceLedger.open(path, secret)` with a secret of at least 32 characters, then construct `PaperFundEngine` with an explicit `RiskPolicy`. The ledger file is created with mode `0600`; deploy its directory on encrypted storage with OS-level access control, backup, retention, and immutable archival.

## Important boundary

The historical tree declared conflicting/missing licensing metadata and previously contained tracked environment and wallet artifacts. Those working-tree artifacts and executable signing examples were removed. They remain in Git history, so rotation, usage investigation, authorized history rewriting, mirror/artifact cleanup, and legal/provenance sign-off are external launch blockers. See [PROVENANCE.md](PROVENANCE.md), [SECURITY_INCIDENT.md](SECURITY_INCIDENT.md), and [OPERATIONS.md](OPERATIONS.md).

Real market, bank, custodian, corporate-action, and broker integrations are not claimed. Deployment owners must contract for licensed sources, implement read-only ingestion adapters against these typed contracts, and complete paper certification. A future live adapter requires a separate security-reviewed repository and explicit owner authorization; adding custody secrets here is prohibited.
