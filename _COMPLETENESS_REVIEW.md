# Completeness Review: enzyme-fund-create

**Review date:** 2026-07-18

## Assessment basis

Static inspection of project-owned source and configuration only; no dependency installation, build, database migration, external-service call, or runtime launch was performed. The scan considered 1218 project files (521 source files), 3 manifest(s), 0 test-like file(s), and 0 CI workflow(s), excluding dependency/generated directories.

## Classification

**Not an app**

This repository is an offline paper-governance library with a bounded
demonstration command, not an independently runnable application. Its
supported entrypoint creates a unique temporary evidence ledger, evaluates a
paper workflow, verifies the chain, cleans the temporary directory, and exits.
It has no HTTP listener, browser UI, identity store, or login/session surface.

## Why it is not complete

- Checked-in environment files or credential-bearing artifacts require containment and secret-history review before execution.
- The supported build/runtime path and a trustworthy end-to-end workflow have not been demonstrated from the checked-in state.

## Needed features

1. Remove credential-bearing artifacts from the working tree, rotate any real secrets, and add safe environment templates plus secret scanning.
2. Establish provenance/licensing and reproduce a clean build in an isolated environment before adding product surface.
3. Integrate licensed market/bank/broker data with idempotent ingestion, reconciliation, and explicit source timestamps.
4. Add deterministic exposure, liquidity, loss, approval, and kill-switch limits outside any LLM decision path.
5. Implement ledger-grade transaction history, corporate-action/error correction, custody boundaries, and audit exports.
6. Backtest and paper-trade realistic failure, stale-data, duplicate-order, and partial-fill scenarios before live use.

## Risks or launch blockers

- Credential/configuration exposure: environment files are present in the repository tree and must be checked against Git history and rotated if real.
- Regression risk is high because no recognizable project-owned automated tests cover the main path.
- No CI evidence prevents broken or insecure changes from reaching a release.

## Evidence inspected

- `README.md`
- `scripts/main-fork/runtest.ts`
- `src/aave/types/IAaveIncentivesController.d.ts`
- `src/aave/types/IAaveIncentivesControllerFactory.ts`
- `package.json`

## Recommended next action

Quarantine execution, repair provenance/secret/startup/build blockers in an isolated branch, and reassess only after a clean reproducible build and smoke test.

## Implementation progress (2026-07-19)

The source-actionable work is complete, with live trading intentionally kept blocked.

1. The tracked `.env`, eight-key `test-wallets.js`, and executable signing examples were removed from the working tree and every supported runtime path. The new environment template contains only an evidence-ledger key/path and explicitly has no chain, broker, mnemonic, or wallet configuration. `SECURITY_INCIDENT.md` dates the exposure, requires revocation/rotation, usage and on-chain investigation, custody migration, coordinated history/mirror/artifact cleanup, rescanning, and owner sign-off. A full-history scan identified 15 known findings; exact fingerprints are incident-baselined so CI rejects every new finding without misrepresenting the old history as repaired.
2. The package is now private, `UNLICENSED`, non-publishable, and reproducibly builds only four new paper-governance source files with two pinned development packages. `PROVENANCE.md` records the remote/HEAD/history, the root MIT-versus-embedded GPL metadata conflict, missing consolidated notices, and checksum inventories for 1,197 Enzyme/Aave/ABI/test utility files. Those trees are excluded from compilation, exports, dependencies, CLI, and tests; a validator detects drift. Reuse/distribution remains blocked until an authorized owner maps exact upstream commits and counsel/owners approve licensing and attribution.
3. The supported engine now accepts explicitly licensed market, custody, and corporate-action facts with vendor, contract reference, source event ID, source timestamp, and receipt timestamp. It rejects missing evidence, future timestamps, stale quotes at decision time, identical-key conflicts, and duplicate events. Broker/custody reconciliation is durable and fail-closed. Real licensed vendor endpoints and contracts were not present, so deployment-specific read-only adapters and their credentials remain an honest external certification gate; no mock is presented as a live integration.
4. A deterministic non-LLM risk engine enforces order notional, projected per-asset/gross exposure including open orders, cash commitments, market-volume participation, stale data, short-sale prohibition, daily mark-to-market loss, material-order independent approval, manual/automatic kill switch, and two-person re-enable. Late fills cannot breach limit prices or overfill an order.
5. Every source fact, order, approval, partial fill, cancellation, reconciliation, kill change, independently approved reversal correction, and corporate action is fsync-appended to a sequence-checked HMAC hash chain. Startup and audit export verify the full ledger before replay. Custody initialization is explicit, mismatches halt new risk, prior events are never edited, and operational guidance covers encrypted storage, secret management, immutable backups, restore, key rotation, alerts, retention, and incident handling. The supported API contains no signing or live-custody primitive.
6. Eleven automated tests cover licensed/idempotent ingestion, stale/future data, notional/liquidity/exposure/cash/short/open-order limits, cancellation capacity release, independent approval, client-order replay conflict, partial/duplicate/over/limit-price fills, daily-loss halt, reconciliation halt, two-person correction, corporate actions, two-person kill release, restart replay, audit export, and tamper detection. Clean frozen install, strict TypeScript build, boundary/provenance checks, paper-only smoke execution, deliberate legacy-build refusal, zero-vulnerability dependency audit, working-tree and full-history secret scans with the documented incident baseline, and diff checks all pass. CI repeats these gates without executing quarantined source.

This is a complete paper-control and containment boundary, not a live fund product. Secret revocation/history repair, provenance/legal clearance, licensed provider contracts, calibrated policies, paper-cycle/backtest certification, backup/restore evidence, risk/compliance/security approval, and any separately authorized live-adapter design remain external launch gates.

## Runtime verification disposition (2026-07-20)

The correct executable validation is `yarn test`, boundary/provenance checks,
and the bounded `yarn start` paper demo. Authentication is not applicable. No
root `start.sh` is provided intentionally because a long-running listener
would fabricate an application surface outside this library's containment
contract.

Current verification: `yarn test` rebuilt the supported boundary and passed
all 11 scenarios. `yarn start` completed the bounded paper demonstration with
`auditVerified: true`, removed its temporary workspace, and exited without a
listener.
