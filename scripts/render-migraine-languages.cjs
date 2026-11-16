// Render all public languages without a browser or remote assets.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'migrainemaatje/product-copy.js'), 'utf8'), context);
const payload = {
  translations: context.window.PRODUCT_TRANSLATIONS,
  source: fs.readFileSync(path.join(root, 'migrainemaatje/index.html'), 'utf8'),
};
process.stdout.write(execFileSync(
  process.env.PYTHON_BIN || 'python3',
  [path.join(__dirname, 'render-migraine-html.py'), root],
  { input: JSON.stringify(payload), encoding: 'utf8' },
));
