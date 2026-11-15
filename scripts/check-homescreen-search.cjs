const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const output = process.env.SCREENSHOT_DIR || '/tmp/HomeScreen-website-search-20261115';
const routes = { nl: '/homescreen/', en: '/homescreen/en/', de: '/homescreen/de/' };
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' };

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const server = http.createServer((req, res) => {
    let file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
    if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
      res.end(fs.readFileSync(file));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.env.SITE_URL || `http://127.0.0.1:${server.address().port}`;
  let browser;
  let passed = 0;
  try {
    browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome', headless: true });
    for (const javaScriptEnabled of [false, true]) {
      for (const viewport of [{ width: 320, height: 740 }, { width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1440, height: 1000 }]) {
        // An English browser must not silently replace an explicitly requested language.
        const context = await browser.newContext({ viewport, javaScriptEnabled, locale: 'en-US', reducedMotion: 'reduce' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => { if (response.status() >= 400 && response.url().startsWith(base)) errors.push(`${response.status()}: ${response.url()}`); });
        for (const [language, route] of Object.entries(routes)) {
          const response = await page.goto(base + route, { waitUntil: 'networkidle' });
          assert.equal(response.status(), 200);
          await page.locator('h1').waitFor({ state: 'visible' });
          const info = await page.evaluate(async () => {
            for (const image of document.images) image.loading = 'eager';
            await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
            return {
              language: document.documentElement.lang,
              overflow: document.documentElement.scrollWidth > innerWidth,
              missingImages: [...document.images].filter(image => !image.naturalWidth).length,
              canonical: document.querySelector('link[rel="canonical"]').href,
              alternates: [...document.querySelectorAll('link[hreflang]')].length,
              answers: [...document.querySelectorAll('#questions details p[data-i18n]')].map(node => node.textContent),
              brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(node => !document.getElementById(node.hash.slice(1))).length,
              localAssets: [...document.querySelectorAll('[src], link[rel="stylesheet"]')].map(node => node.getAttribute('src') || node.getAttribute('href'))
            };
          });
          assert.equal(info.language, language, route);
          assert.equal(info.overflow, false, `${route}: overflow at ${viewport.width}`);
          assert.equal(info.missingImages, 0, route);
          assert.equal(info.canonical, 'https://debruinstudio.nl' + route);
          assert.equal(info.alternates, 4);
          assert.equal(info.answers.length, 8);
          assert.ok(info.answers.every(answer => answer.length > 50));
          assert.equal(info.brokenAnchors, 0);
          for (const asset of info.localAssets) {
            assert.ok(fs.existsSync(path.join(root, new URL(asset, base + route).pathname)), asset);
          }
          await page.locator('#questions details').nth(1).locator('summary').click();
          assert.equal(await page.locator('#questions details').nth(1).getAttribute('open'), '');
          if (javaScriptEnabled) {
            await page.screenshot({ path: path.join(output, `${language}-${viewport.width}-questions.png`) });
            await page.locator('h1').scrollIntoViewIfNeeded();
            await page.screenshot({ path: path.join(output, `${language}-${viewport.width}.png`) });
          }
          assert.deepEqual(errors, []);
          passed++;
        }
        await page.getByRole('link', { name: 'English', exact: true }).click();
        await page.waitForURL('**/homescreen/en/');
        assert.equal(await page.locator('html').getAttribute('lang'), 'en');
        if (javaScriptEnabled) {
          await page.goto(base + '/homescreen/?lang=de');
          await page.waitForURL('**/homescreen/de/');
          assert.equal(await page.locator('html').getAttribute('lang'), 'de');
        }
        passed++;
        await context.close();
      }
    }
    console.log(`${passed} browser checks passed; screenshots: ${output}`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
