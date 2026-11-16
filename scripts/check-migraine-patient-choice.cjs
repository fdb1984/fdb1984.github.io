const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const base = process.env.SITE_URL || 'http://127.0.0.1:8768';
const output = process.env.SCREENSHOT_DIR || '/tmp/migrainemaatje-help-20261116';

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  try {
    for (const viewport of [{ width: 390, height: 844 }, { width: 1024, height: 1366 }]) {
      const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
      for (const lang of ['nl', 'en', 'de', 'fr']) {
        const route = `/migrainemaatje/${lang === 'nl' ? '' : `${lang}/`}`;
        const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        assert.equal(await page.locator('#choice-title').count(), 0);
        const link = page.locator('[data-i18n="footer.support"]');
        await link.scrollIntoViewIfNeeded();
        await link.click();
        await page.waitForURL(`**/support.html?lang=${lang}`);
        await page.waitForFunction(language => document.documentElement.lang === language, lang);
        const section = page.locator(`section[data-lang="${lang}"]`);
        assert.equal(await section.locator('[id^="app-check-"]').count(), 0);
        await page.screenshot({ path: path.join(output, `manual-${lang}-${viewport.width}.png`) });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${lang}: no horizontal overflow`);
        for (const other of ['nl', 'en', 'de', 'fr']) {
          await page.locator(`[data-language-button="${other}"]`).click();
          assert.equal(await page.locator('section[data-lang].active').getAttribute('data-lang'), other);
        }
        console.log(`PASS ${lang} ${viewport.width}px: support link, practical guide, language switch, overflow`);
      }
      await page.close();
    }
    const noJs = await browser.newPage({ javaScriptEnabled: false });
    for (const name of ['support', 'privacy', 'terms']) {
      await noJs.goto(`${base}/migrainemaatje/${name}.html`);
      for (const lang of ['nl', 'en', 'de', 'fr']) assert.ok(await noJs.locator(`[data-lang="${lang}"]`).isVisible());
    }
    console.log('PASS no JavaScript: manual, privacy and terms remain readable');
    await noJs.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
