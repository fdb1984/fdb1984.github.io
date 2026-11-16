const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const context = { window: {} };
vm.runInNewContext(read('migrainemaatje/product-copy.js'), context);
const support = read('migrainemaatje/support.html');
const sections = [...support.matchAll(/<section data-lang="(nl|en|de|fr)">([\s\S]*?)(?=<section data-lang=|<\/main>)/g)];

for (const lang of ['nl', 'en', 'de', 'fr']) {
  test(`${lang}: all five patient-choice points are independently checkable`, () => {
    const html = sections.find(section => section[1] === lang)?.[2];
    assert.ok(html, 'translated support section');
    const check = html.match(new RegExp(`<section class="card" id="app-check-${lang}">([\\s\\S]*?)</section>`))?.[1];
    assert.ok(check, 'choice section with unique deep link');
    assert.equal((check.match(/<li>/g) || []).length, 5);
    for (const url of ['https://apps.apple.com/app/id6779200491',
      'https://play.google.com/store/apps/details?id=com.fdbruin.migrainemaatje',
      'https://www.patientenfederatie.nl/vijf-tips-die-jou-helpen-de-juiste-gezondheidsapp-te-vinden',
      `privacy.html?lang=${lang}`]) assert.ok(check.includes(url), url);
    assert.match(check, /Google Drive/);
    assert.match(html, /2\.3\.1/);
    assert.doesNotMatch(html, /version 2\.2|versie 2\.2|Version 2\.2/);
    const product = read(`migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}index.html`);
    assert.ok(product.includes(context.window.PRODUCT_TRANSLATIONS[lang].choice.title));
    assert.ok(product.includes(`/migrainemaatje/support.html?lang=${lang}#app-check-${lang}`));
    assert.doesNotMatch(product, /aggregateRating|"reviewedBy"/);
  });
}

test('no fabricated approval or universal trial is promised', () => {
  assert.match(support, /geen keuring, keurmerk of aanbeveling/);
  assert.match(support, /not their assessment, quality label or endorsement/);
  assert.match(support, /keine Prüfung, kein Gütesiegel/);
  assert.match(support, /ni son évaluation, ni son label/);
  assert.match(support, /niet voor iedereen beschikbaar/);
  assert.match(support, /Trials are not available to everyone/);
  assert.match(support, /Nicht jeder ist für eine Probephase berechtigt/);
  assert.match(support, /Tout le monde n’est pas éligible/);
  assert.doesNotMatch(support, /100% veilig|clinically proven|garantiert sicher/);
});

test('support and legal information stay readable when JavaScript is unavailable', () => {
  for (const file of ['support', 'privacy', 'terms']) {
    assert.match(read(`migrainemaatje/${file}.html`), /<noscript><style>body\.app-page \[data-lang\] \{ display: block; \}/);
  }
});
