# Paper-control operations

## Data contracts

Adapters may only submit source-attributed facts to the paper engine. Each market/custody/corporate-action input requires a stable source event ID, source timestamp, receipt timestamp where applicable, vendor name, and license/contract reference. Adapters must persist the vendor raw record outside this package under the applicable retention policy. A repeated ID with changed content fails closed.

There is deliberately no live broker interface. Paper fills must originate from an approved simulator or broker sandbox export and use the external execution ID as `brokerEventId`.

## Risk policy change

Risk policy is constructor configuration and is not mutable during a process. Store reviewed policy as versioned deployment configuration, require maker/checker approval, restart the paper process, and append the policy version/hash as deployment evidence outside the ledger. Lowering a limit is safe; raising or disabling a limit requires risk-owner sign-off.

## Evidence storage

Store `PAPER_LEDGER_HMAC_KEY` in a secret manager, not `.env` or source. Use one key scope per environment, restrict the ledger directory to the service identity, and place it on encrypted storage. Back up the ledger after every session to separately administered immutable storage. Key rotation starts a new ledger with a signed cross-reference; never rewrite prior events.

On restore, `EvidenceLedger.open` verifies sequence, previous hash, HMAC, and idempotency consistency before state replay. A failed verification is an incident: stop processing, preserve copies, compare with immutable backup, and do not hand-edit the ledger.

## Reconciliation and incidents

Reconcile calculated paper cash/positions with the licensed custody/broker snapshot at least daily and after provider recovery. Any mismatch is recorded and activates the kill switch. Corrections reverse a specific fill with a reason and independent approver; they never edit prior events. Corporate actions require licensed attribution and reject fractional results the engine cannot represent.

Daily loss or manual incident containment also activates the kill switch. Re-enabling requires a different approver. Open and pending orders consume projected exposure, liquidity, and cash capacity until filled or explicitly cancelled. Alerts should cover stale/future feeds, idempotency conflicts, limit rejection spikes, partial fills older than the desk threshold, reconciliation mismatch, kill-switch changes, ledger verification failure, backup lag, and unauthorized file access.

## External certification gates

Before production-like paper use: contract licensed vendors, review timestamp semantics, test outage/429/timeout/duplicate/reordering behavior, calibrate liquidity and loss limits, run at least one full market cycle, restore a ledger backup, review audit exports, and obtain risk/compliance/security approval. Live trading remains outside scope.
