const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = { window: {} };
vm.runInNewContext(read('migrainemaatje/product-copy.js'), context);
const copy = context.window.PRODUCT_TRANSLATIONS;
const route = lang => `migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}`;
const keys = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) =>
  typeof child === 'object' ? keys(child, `${prefix}${key}.`) : [`${prefix}${key}`]).sort();

test('all four product translations retain the same keys', () => {
  for (const lang of ['en', 'de', 'fr']) assert.deepEqual(keys(copy[lang]), keys(copy.nl));
});
for (const lang of ['nl', 'en', 'de', 'fr']) {
  test(`${lang}: product copy and real localized screenshots are present without JavaScript`, () => {
    const html = read(`${route(lang)}index.html`);
    assert.ok(html.includes(`<html lang="${lang}"`));
    assert.ok(html.includes(`data-static-language="${lang}"`));
    assert.ok(html.includes(copy[lang].meta.title));
    assert.ok(html.includes(copy[lang].hero.description));
    for (const guide of ['migraine-dagboek', 'pppd-en-migraine']) assert.ok(html.includes(`/migrainemaatje/${guide}/`));
    for (const image of Object.values(copy[lang].images)) {
      assert.ok(html.includes(image.src));
      assert.ok(fs.existsSync(path.join(root, image.src)));
    }
    for (const alternate of ['nl', 'en', 'de', 'fr']) {
      assert.ok(html.includes(`hreflang="${alternate}"`));
      assert.ok(read('sitemap.xml').includes(`https://debruinstudio.nl/${route(alternate)}`));
    }
  });
}
for (const guide of ['migraine-dagboek', 'pppd-en-migraine']) {
  test(`${guide}: transparent sourcing, actual byline, no invented medical endorsement`, () => {
    const html = read(`migrainemaatje/${guide}/index.html`);
    assert.ok(html.includes('maker van MigraineMaatje'));
    assert.ok(html.includes('Verzonnen voorbeeld'));
    assert.ok(html.includes('Bronnen en verantwoording'));
    assert.ok(html.includes('niet beoordeeld of aanbevolen'));
    assert.ok(html.includes('https://www.thuisarts.nl/'));
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const schema = JSON.parse(scripts[0][1]);
    assert.ok(schema['@graph'].some(node => node['@type'] === 'Article'));
    assert.equal(/aggregateRating|MedicalOrganization|"reviewedBy"|FAQPage/.test(html), false);
    assert.ok(read('sitemap.xml').includes(`https://debruinstudio.nl/migrainemaatje/${guide}/`));
  });
}
test('crawling remains permitted and search does not depend on a speculative AI file', () => {
  assert.match(read('robots.txt'), /User-Agent: \*[\s\S]*Allow: \//i);
  assert.match(read('robots.txt'), /Sitemap: https:\/\/debruinstudio.nl\/sitemap.xml/);
  assert.equal(/OAI-SearchBot[\s\S]*Disallow: \//i.test(read('robots.txt')), false);
});
