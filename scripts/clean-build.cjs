'use strict';
const fs = require('node:fs');
const path = require('node:path');
const target = path.resolve(__dirname, '..', 'build');
const expected = `${path.resolve(__dirname, '..')}${path.sep}build`;
if (target !== expected) throw new Error('refusing_unexpected_clean_target');
fs.rmSync(target, { recursive: true, force: true });
