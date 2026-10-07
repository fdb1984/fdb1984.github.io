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
const imageKeys = ['dashboard', 'controls', 'alerts', 'settings', 'phoneDashboard', 'phoneControls', 'phoneScenes'];

for (const language of ['nl', 'en', 'de']) {
  test(`${language}: all seven localized screenshots exist at their native aspect ratios`, () => {
    assert.deepEqual(Object.keys(copy[language].images), imageKeys);
    for (const [key, image] of Object.entries(copy[language].images)) {
      assert.ok(image.src.includes(`web-2026-10-07/${language}/`));
      assert.ok(image.alt.length > 10);
      const png = fs.readFileSync(path.join(root, 'homescreen', image.src));
      assert.equal(png.subarray(1, 4).toString(), 'PNG');
      assert.equal(png.readUInt32BE(16), key.startsWith('phone') ? 1320 : 2752);
      assert.equal(png.readUInt32BE(20), key.startsWith('phone') ? 2868 : 2064);
    }
  });

  test(`${language}: upcoming release, purchase sharing and phone explanations are localized`, () => {
    assert.ok(copy[language].release.title.includes('2.1.4'));
    assert.ok(copy[language].release.text.includes('Apple'));
    assert.equal(Object.keys(copy[language].phone).length, 9);
    assert.ok(copy[language].value.afterOne.length > 15);
    assert.ok(copy[language].gallery.settingsText.length > 20);
  });

  test(`${language}: studio preview uses the same current dashboard`, () => {
    assert.equal(studio[language].images.homeDashboard.src, `homescreen/${copy[language].images.dashboard.src}`);
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
  for (const pending of ['wacht op Apple-review', 'awaiting Apple review', 'wartet auf die Prüfung durch Apple']) {
    assert.ok(support.includes(pending));
  }
});
