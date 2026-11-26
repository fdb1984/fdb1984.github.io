const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');

function translations(file) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  return context.window.PRODUCT_TRANSLATIONS;
}

const copy = translations('homescreen/product-copy.js');
const studio = translations('studio-copy.js');
const imageKeys = ['dashboard', 'controls', 'idle', 'scenes', 'phoneDashboard', 'phoneControls', 'phoneSearch'];

for (const language of ['nl', 'en', 'de']) {
  test(`${language}: all seven localized screenshots exist at their native aspect ratios`, () => {
    assert.deepEqual(Object.keys(copy[language].images), imageKeys);
    for (const [key, image] of Object.entries(copy[language].images)) {
      assert.ok(image.src.includes(`web-2026-11-26/${key.startsWith('phone') ? 'iphone' : 'ipad'}/${language}/`));
      assert.ok(image.alt.length > 10);
      const png = fs.readFileSync(path.join(root, image.src));
      assert.equal(png.subarray(1, 4).toString(), 'PNG');
      assert.equal(png.readUInt32BE(16), key.startsWith('phone') ? 1206 : 2752);
      assert.equal(png.readUInt32BE(20), key.startsWith('phone') ? 2622 : 2064);
    }
  });

  test(`${language}: existing-home requirements, purchase sharing and phone explanations are localized`, () => {
    assert.ok(copy[language].requirements.title.includes('HomeKit'));
    assert.ok(copy[language].requirements.text.includes('HomeKit'));
    assert.ok(copy[language].requirements.text.includes('Apple'));
    assert.equal(copy[language].release, undefined);
    assert.equal(Object.keys(copy[language].phone).length, 9);
    assert.ok(copy[language].value.afterOne.length > 15);
    assert.ok(copy[language].gallery.idleText.includes('15'));
    assert.match(copy[language].gallery.idleTitle, /2\.5/);
    assert.match(copy[language].value.trialText, /2\.5.*HomeKit/);
  });

  test(`${language}: studio preview uses the same current dashboard`, () => {
    assert.equal(`/${studio[language].images.homeDashboard.src}`, copy[language].images.dashboard.src);
  });

  test(`${language}: static product page identifies the 2.5 screenshots`, () => {
    const route = language === 'nl' ? 'homescreen/index.html' : `homescreen/${language}/index.html`;
    const html = fs.readFileSync(path.join(root, route), 'utf8');
    assert.match(copy[language].preview, /2\.5.*App Store/);
    assert.ok(html.includes(`data-i18n="preview">${copy[language].preview}</small>`));
  });
}

test('every product localization has the same translation keys', () => {
  function keys(value, prefix = '') {
    return Object.entries(value).flatMap(([key, child]) => {
      const name = `${prefix}${key}`;
      return typeof child === 'object' ? keys(child, `${name}.`) : [name];
    }).sort();
  }
  assert.deepEqual(keys(copy.nl), keys(copy.en));
  assert.deepEqual(keys(copy.nl), keys(copy.de));
});

test('support guide documents purchase help in all three languages', () => {
  const support = fs.readFileSync(path.join(root, 'homescreen/support.html'), 'utf8');
  for (const title of ['Hulp bij aankoop', 'Purchase support', 'Hilfe beim Kauf']) {
    assert.ok(support.includes(title));
  }
  for (const pending of ['wacht op Apple-review', 'awaiting Apple review', 'wartet auf die Prüfung durch Apple', 'Upcoming update', 'Kommendes Update']) {
    assert.equal(support.includes(pending), false);
  }
});

test('product page explains the household use case without a stale review announcement', () => {
  const html = fs.readFileSync(path.join(root, 'homescreen/index.html'), 'utf8');
  assert.ok(html.includes('Een bedienpaneel voor het hele huishouden.'));
  assert.ok(html.includes('data-i18n="requirements.title"'));
  assert.equal(html.includes('data-i18n="release.title"'), false);
  assert.equal(html.includes('wacht op beoordeling'), false);
});
