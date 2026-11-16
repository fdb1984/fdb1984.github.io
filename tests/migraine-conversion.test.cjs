const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = { window: {} };
vm.runInNewContext(read('migrainemaatje/product-copy.js'), context);
const copy = context.window.PRODUCT_TRANSLATIONS;
for (const language of ['nl', 'en', 'de', 'fr']) {
  test(`${language}: conversion copy is useful, honest and server-rendered`, () => {
    const c = copy[language];
    const html = read(`migrainemaatje/${language === 'nl' ? '' : language + '/'}index.html`);
    for (const text of [c.hero.promise, c.proof.label, c.proof.note, c.price.text, c.price.terms]) {
      assert.ok(html.includes(text), text);
    }
    assert.equal((html.match(/class="primary-action"/g) || []).length, 4);
    assert.ok(html.indexOf('id="insight"') < html.indexOf('id="migraine-dagboek-app"'));
    assert.ok(html.includes('id="download"'));
    assert.equal(/Vanaf versie|From version|Ab Version|Depuis la version/.test(html), false);
    assert.equal(/aggregateRating|reviewRating|testimonial/i.test(html), false);
    for (const image of Object.values(c.images)) {
      assert.ok(image.src.includes(`/web-2026-11-16/${language}/`));
      assert.ok(fs.statSync(path.join(root, image.src)).size > 1000);
    }
  });
}
test('all website screenshots have synthetic-data provenance', () => {
  const manifest = JSON.parse(read('migrainemaatje/assets/web-2026-11-16/manifest.json'));
  assert.equal(manifest.length, 24);
  assert.ok(manifest.every(item => item.sampleData && item.source.includes('StoreConversion-20261116')));
});
test('renderer does not require browser automation or network access', () => {
  assert.equal(/playwright|puppeteer|fetch\(/.test(read('scripts/render-migraine-languages.cjs')), false);
});
