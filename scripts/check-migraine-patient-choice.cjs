const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const base = process.env.SITE_URL || 'http://127.0.0.1:8768';
const output = process.env.SCREENSHOT_DIR || '/tmp/migrainemaatje-patient-choice-20261116';

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  try {
    for (const viewport of [{ width: 390, height: 844 }, { width: 1024, height: 1366 }]) {
      const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
      for (const lang of ['nl', 'en', 'de', 'fr']) {
        const errors = [];
        const onError = error => errors.push(error.message);
        page.on('pageerror', onError);
        const route = `/migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}`;
        const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        const link = page.locator('[data-language-anchor="app-check"]');
        await link.scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(output, `product-choice-${lang}-${viewport.width}.png`) });
        await link.click();
        await page.waitForURL(`**/support.html?lang=${lang}#app-check-${lang}`);
        await page.waitForFunction(language => document.documentElement.lang === language, lang);
        const section = page.locator(`#app-check-${lang}`);
        await section.locator('ol > li').first().waitFor({ state: 'visible' });
        await section.scrollIntoViewIfNeeded();
        assert.equal(await section.locator('ol > li').count(), 5);
        assert.equal(await page.locator('section[data-lang].active').getAttribute('data-lang'), lang);
        await page.screenshot({ path: path.join(output, `manual-choice-${lang}-${viewport.width}.png`) });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${lang}: no horizontal overflow`);
        for (const other of ['nl', 'en', 'de', 'fr']) {
          await page.locator(`[data-language-button="${other}"]`).click();
          assert.equal(await page.locator('section[data-lang].active').getAttribute('data-lang'), other);
        }
        assert.deepEqual(errors, []);
        page.off('pageerror', onError);
        console.log(`PASS ${lang} ${viewport.width}px: product link, five points, language switch, overflow`);
      }
      await page.close();
    }
    const noJs = await browser.newPage({ javaScriptEnabled: false });
    for (const lang of ['nl', 'en', 'de', 'fr']) {
      await noJs.goto(`${base}/migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}`);
      assert.ok(await noJs.locator('[data-language-anchor="app-check"]').getAttribute('href') === `/migrainemaatje/support.html?lang=${lang}#app-check-${lang}`);
    }
    await noJs.goto(`${base}/migrainemaatje/support.html`);
    for (const lang of ['nl', 'en', 'de', 'fr']) assert.ok(await noJs.locator(`#app-check-${lang}`).isVisible());
    for (const name of ['privacy', 'terms']) {
      await noJs.goto(`${base}/migrainemaatje/${name}.html`);
      for (const lang of ['nl', 'en', 'de', 'fr']) assert.ok(await noJs.locator(`[data-lang="${lang}"]`).isVisible());
    }
    console.log('PASS no JavaScript: all four static product links, manual, privacy and terms');
    await noJs.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
