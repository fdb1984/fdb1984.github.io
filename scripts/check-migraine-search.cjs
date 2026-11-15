const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const output = process.env.SCREENSHOT_DIR || '/tmp/MigraineMaatje-website-search';
const routes = ['/migrainemaatje/', '/migrainemaatje/en/', '/migrainemaatje/de/', '/migrainemaatje/fr/', '/migrainemaatje/migraine-dagboek/', '/migrainemaatje/pppd-en-migraine/'];
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.svg': 'image/svg+xml', '.xml': 'application/xml' };

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
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
      for (const viewport of [{ width: 320, height: 740 }, { width: 390, height: 844 }, { width: 820, height: 1180 }, { width: 1440, height: 1000 }]) {
        const context = await browser.newContext({ viewport, javaScriptEnabled, locale: 'en-US', reducedMotion: 'reduce' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => { if (response.status() >= 400 && response.url().startsWith(base)) errors.push(`${response.status()}: ${response.url()}`); });
        for (const route of routes) {
          const response = await page.goto(base + route, { waitUntil: 'networkidle' });
          assert.equal(response.status(), 200, route);
          await page.locator('h1').waitFor({ state: 'visible' });
          const info = await page.evaluate(() => {
            const heading = document.querySelector('h1');
            return {
              language: document.documentElement.lang,
              h1Count: document.querySelectorAll('h1').length,
              heading: heading.textContent,
              top: heading.getBoundingClientRect().top,
              overflow: document.documentElement.scrollWidth > window.innerWidth,
              canonical: document.querySelector('link[rel="canonical"]').href,
              alternates: [...document.querySelectorAll('link[hreflang]')].map(n => [n.hreflang, n.href]),
              missingImages: [...document.images].filter(img => !img.getAttribute('src')).length,
              schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent)),
              missingAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => a.hash.length > 1 && !document.getElementById(decodeURIComponent(a.hash.slice(1)))).map(a => a.hash),
              localLinks: [...document.querySelectorAll('a[href], img[src], script[src], link[rel="stylesheet"]')].map(n => n.getAttribute('href') || n.getAttribute('src')).filter(value => value?.startsWith('/'))
            };
          });
          const language = /^\/migrainemaatje\/(en|de|fr)\/$/.exec(route)?.[1] || 'nl';
          assert.equal(info.language, language, `${route}: wrong language`);
          assert.equal(info.h1Count, 1, route);
          assert.equal(info.overflow, false, `${route}: horizontal overflow`);
          assert.ok(info.top >= 0, `${route}: heading above viewport`);
          assert.equal(info.canonical, `https://debruinstudio.nl${route}`);
          assert.equal(info.missingImages, 0, route);
          assert.deepEqual(info.missingAnchors, []);
          for (const link of info.localLinks) {
            const url = new URL(link, base);
            let file = path.join(root, url.pathname);
            if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
            assert.ok(fs.existsSync(file), `${route}: missing ${link}`);
          }
          if (info.alternates.length) {
            assert.equal(info.alternates.length, 5);
            assert.ok(info.alternates.some(([lang, url]) => lang === language && url === info.canonical));
          }
          if (javaScriptEnabled) {
            const name = route.split('/').filter(Boolean).slice(1).join('-') || 'nl';
            await page.screenshot({ path: path.join(output, `${name}-${viewport.width}.png`) });
            if (viewport.width >= 820 && await page.locator('.product-facts').count()) {
              await page.locator('.product-facts').screenshot({ path: path.join(output, `${name}-product-facts-${viewport.width}.png`) });
            }
          }
          assert.deepEqual(errors, [], `${route}: browser errors`);
          passed++;
        }
        if (javaScriptEnabled) {
          await page.goto(base + '/migrainemaatje/?lang=de');
          await page.waitForURL('**/migrainemaatje/de/');
          await page.getByRole('link', { name: 'English', exact: true }).click();
          await page.waitForURL('**/migrainemaatje/en/');
          assert.equal(await page.locator('html').getAttribute('lang'), 'en');
          passed++;
        }
        await context.close();
      }
    }
    console.log(`${passed} browser checks passed; screenshots: ${output}`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
