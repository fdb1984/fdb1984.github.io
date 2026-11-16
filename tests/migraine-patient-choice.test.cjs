const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const support = read('migrainemaatje/support.html');
const sections = [...support.matchAll(/<section data-lang="(nl|en|de|fr)">([\s\S]*?)(?=<section data-lang=|<\/main>)/g)];

for (const lang of ['nl', 'en', 'de', 'fr']) {
  test(`${lang}: practical help remains without an artificial quality checklist or review claims`, () => {
    const html = sections.find(section => section[1] === lang)?.[2];
    assert.ok(html);
    assert.match(html, /2\.3\.1/);
    assert.match(html, /Google Drive/);
    assert.ok(html.includes(`privacy.html?lang=${lang}`));
    assert.ok(html.includes(`terms.html?lang=${lang}`));
    for (const content of [html, read(`migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}index.html`)]) {
      assert.doesNotMatch(content, /app-check-|choice-title|Patiëntenfederatie|Patient Federation|Patientenföderation|Fédération néerlandaise des patients/);
      assert.doesNotMatch(content, /Read store reviews|Lees ervaringen|Lies Store-Bewertungen|Lisez les avis|testimonials|getuigenissen/);
      assert.doesNotMatch(content, /aggregateRating|"reviewedBy"/);
    }
  });
}

test('support and legal information stay readable when JavaScript is unavailable', () => {
  for (const file of ['support', 'privacy', 'terms']) {
    assert.match(read(`migrainemaatje/${file}.html`), /<noscript><style>body\.app-page \[data-lang\] \{ display: block; \}/);
  }
});
