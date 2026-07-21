'use strict';
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const forbidden = ['.env', 'test-wallets.js', 'src/example/index.ts', 'src/example/create-fund.ts', 'src/example/pool-operations.ts'];
for (const relative of forbidden) {
  if (fs.existsSync(path.join(root, relative))) throw new Error(`credential_or_live_artifact_present:${relative}`);
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (manifest.private !== true || manifest.license !== 'UNLICENSED') throw new Error('package_must_remain_private_and_unlicensed');
if (manifest.dependencies || manifest.workspaces || manifest.scripts?.pub || manifest.scripts?.dev) throw new Error('legacy_runtime_dependency_or_publish_boundary_present');
const supported = fs.readdirSync(path.join(root, 'src', 'governance')).filter((name) => name.endsWith('.ts'));
for (const name of supported) {
  const source = fs.readFileSync(path.join(root, 'src', 'governance', name), 'utf8');
  if (/\b(?:private[_-]?key|mnemonic|seed phrase|sendTransaction|JsonRpcProvider)\b/i.test(source)) throw new Error(`live_custody_primitive_in_supported_source:${name}`);
}
console.log(`Supported paper-only boundary verified (${supported.length} source files).`);
