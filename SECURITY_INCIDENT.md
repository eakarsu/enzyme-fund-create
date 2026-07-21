# Historical credential containment

The reviewed working tree contained a tracked `.env`, `test-wallets.js` with eight bundled private keys, and signing examples with embedded development keys. They were removed from the working tree and all supported runtime paths. Their values were not copied into replacement files.

A full-history Gitleaks scan reports 15 findings across those already documented artifacts. Their exact commit/path/rule/line fingerprints are checked into `.gitleaksignore` so CI fails on any new finding while the known incident awaits coordinated history repair. This is an incident baseline, not an assertion that the findings are harmless.

Removal does not revoke secrets or erase Git history. The `.env` and wallet file were present by commit `0c3320934d9fd40f9675b70f1e3ce97ba4072585`; a signing example existed from the first commit. Treat every historical mnemonic, API token, key, derived account, and funded address as compromised—even if it resembles a public development fixture.

An authorized incident owner must:

1. Inventory and revoke/rotate the mnemonic, Alchemy/Infura/Etherscan/Tenderly credentials, private keys, derived addresses, CI variables, package tokens, and any copied secrets.
2. Review provider usage/billing, chain activity, approvals, deployments, package releases, logs, forks, caches, mirrors, and artifacts from first exposure onward.
3. Move assets/permissions to newly generated custody identities using an approved ceremony; never reuse a derived address.
4. Coordinate an approved history rewrite and force-push across every branch/tag, then invalidate forks/caches/artifacts. This repository was not rewritten automatically because that is destructive and coordination-sensitive.
5. Re-clone, scan the full rewritten history with at least two secret scanners, document residual false positives, and obtain security sign-off.

Until those steps and the provenance review are complete, this repository is not approved for live funds, custody, network signing, publication, or distribution.
