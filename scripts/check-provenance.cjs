'use strict';
const { createHash } = require('node:crypto');
const { execFileSync } = require('node:child_process');

const expected = {
  'src/aave': { files: 436, tree: '47b91776d105e9f0438311793c9c7321307378c00a1f9f6bcca9ddfe19303194' },
  'src/abis': { files: 293, tree: '9634d643d07182afdf901cc6908b742e7a01fe4c1a03d88675970c37240883fd' },
  'packages/protocol': { files: 421, tree: '2347f25f2cb23b7f84d537609fcd4598d346b0cd05401bef3671b53ee706eab8' },
  'packages/testutils': { files: 47, tree: '913c35cf68d9cca75f63b783dfd453f75ba35f8e8d4e0adc5527a7c291b518c1' },
};
for (const [directory, inventory] of Object.entries(expected)) {
  const tree = execFileSync('git', ['ls-tree', '-r', 'HEAD', directory], { encoding: 'utf8' });
  const files = tree.split('\n').filter(Boolean).length;
  const digest = createHash('sha256').update(tree).digest('hex');
  if (files !== inventory.files || digest !== inventory.tree) throw new Error(`legacy_inventory_changed:${directory}`);
}
console.log('Historical source inventory matches the documented HEAD tree; it remains quarantined, not license-cleared.');
