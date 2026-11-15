const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = { window: {} };
vm.runInNewContext(read('homescreen/product-copy.js'), context);
const translations = context.window.PRODUCT_TRANSLATIONS;
const routes = { nl: '/homescreen/', en: '/homescreen/en/', de: '/homescreen/de/' };

for (const [language, route] of Object.entries(routes)) {
  test(`${language}: product, FAQs and screenshot URLs are available without JavaScript`, () => {
    const html = read(route.slice(1) + 'index.html');
    const copy = translations[language];
    assert.ok(html.includes(`<html lang="${language}"`));
    assert.ok(html.includes(`data-static-language="${language}"`));
    for (const value of [copy.meta.title, copy.hero.description, copy.dashboard.title, ...Object.values(copy.faq)]) {
      assert.ok(html.includes(value), `Missing static content: ${value}`);
    }
    for (const image of Object.values(copy.images)) {
      assert.ok(html.includes(`src="${image.src}"`));
      assert.ok(fs.existsSync(path.join(root, image.src)));
    }
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/<details\b/g) || []).length, 8);
    assert.equal(/noindex|nosnippet|aggregateRating|reviewRating|FAQPage/.test(html), false);
  });

  test(`${language}: canonical, language links and sitemap point to actual static pages`, () => {
    const html = read(route.slice(1) + 'index.html');
    assert.ok(html.includes(`rel="canonical" href="https://debruinstudio.nl${route}"`));
    assert.ok(html.includes(`property="og:url" content="https://debruinstudio.nl${route}"`));
    for (const [lang, href] of Object.entries({ ...routes, 'x-default': routes.nl })) {
      assert.ok(html.includes(`hreflang="${lang}" href="https://debruinstudio.nl${href}"`));
      assert.ok(read('sitemap.xml').includes(`<loc>https://debruinstudio.nl${href}</loc>`));
    }
    for (const href of Object.values(routes)) assert.ok(html.includes(`href="${href}"`));
    assert.ok(html.includes(`href="/homescreen/support.html?lang=${language}"`));
    assert.ok(html.includes(`href="/homescreen/privacy.html?lang=${language}"`));
  });

  test(`${language}: product identity has an official store source and no invented price or reviews`, () => {
    const html = read(route.slice(1) + 'index.html');
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    const app = schema['@graph'].find(node => node['@type'] === 'SoftwareApplication');
    const page = schema['@graph'].find(node => node['@type'] === 'WebPage');
    assert.equal(app['@id'], 'https://debruinstudio.nl/homescreen/#app');
    assert.equal(app.downloadUrl, 'https://apps.apple.com/app/id6771712686');
    assert.equal(app.description, translations[language].faq.purposeAnswer);
    assert.equal(app.offers, undefined);
    assert.equal(app.aggregateRating, undefined);
    assert.equal(page.url, `https://debruinstudio.nl${route}`);
    assert.equal(page.inLanguage, language);
    assert.equal(page.about['@id'], app['@id']);
  });
}

test('search crawlers remain allowed without changing training preferences or adding ranking tricks', () => {
  assert.match(read('robots.txt'), /User-Agent: \*\s+Allow: \/\s/i);
  assert.equal(/Disallow:\s*\//i.test(read('robots.txt')), false);
  assert.ok(read('robots.txt').includes('Sitemap: https://debruinstudio.nl/sitemap.xml'));
});
