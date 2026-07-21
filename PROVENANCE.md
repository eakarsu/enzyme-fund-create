# Provenance and licensing quarantine

The current Git remote is `https://github.com/eakarsu/enzyme-fund-create`; HEAD at review time is `06d8dfe`. The history contains 39 commits beginning at `d8ab6b617605b6f63fba49941a8c0fbe5ffdcfc1` on 2021-11-12.

The root manifest formerly declared MIT but contained no root license text. `packages/protocol/package.json` declares GPL-3.0 and attributes Enzyme Council DAO with repository `https://github.com/enzymefinance/protocol`; copied Aave/ABI/generated material has no consolidated source/commit mapping in this repository. These facts are evidence, not permission or a legal conclusion.

The following HEAD inventories are frozen by `scripts/check-provenance.cjs`:

| Quarantined path | Files | SHA-256 of `git ls-tree -r HEAD <path>` |
| --- | ---: | --- |
| `src/aave` | 436 | `47b91776d105e9f0438311793c9c7321307378c00a1f9f6bcca9ddfe19303194` |
| `src/abis` | 293 | `9634d643d07182afdf901cc6908b742e7a01fe4c1a03d88675970c37240883fd` |
| `packages/protocol` | 421 | `2347f25f2cb23b7f84d537609fcd4598d346b0cd05401bef3671b53ee706eab8` |
| `packages/testutils` | 47 | `913c35cf68d9cca75f63b783dfd453f75ba35f8e8d4e0adc5527a7c291b518c1` |

These paths are excluded from compilation and package exports. Dependencies needed only by them were removed. The supported paper-control code is new, private, and marked `UNLICENSED`; publication is blocked.

Before reuse or distribution, an authorized owner must map every copied path to an exact upstream repository/tag/commit, recover all applicable license and notice files, identify modifications, obtain counsel/owner approval for license compatibility and attribution, and record signed approval. If that work cannot be completed, remove the quarantined paths in a separately authorized cleanup.
