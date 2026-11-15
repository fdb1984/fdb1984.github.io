// Prerender the existing product translations; GitHub Pages serves these as HTML.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'migrainemaatje/product-copy.js'), 'utf8'), context);
const translations = context.window.PRODUCT_TRANSLATIONS;
const source = fs.readFileSync(path.join(root, 'migrainemaatje/index.html'), 'utf8');
const route = language => `/migrainemaatje/${language === 'nl' ? '' : `${language}/`}`;

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  try {
    const page = await browser.newPage();
    await page.route('**/*', r => r.abort());
    for (const [language, copy] of Object.entries(translations)) {
      await page.setContent(source.replace(/<script\b[^>]*src=[^>]*><\/script>/g, ''), { waitUntil: 'domcontentloaded' });
      const html = await page.evaluate(({ language, copy, routes }) => {
        const valueAt = key => key.split('.').reduce((value, part) => value?.[part], copy);
        document.documentElement.lang = language;
        document.body.dataset.staticLanguage = language;
        document.title = copy.meta.title;
        for (const [attribute, prefix, value] of [
          ['name', 'description', copy.meta.description],
          ['property', 'og:title', copy.meta.title],
          ['property', 'og:description', copy.meta.description],
          ['property', 'og:url', `https://debruinstudio.nl${routes[language]}`],
          ['property', 'og:locale', copy.meta.locale],
          ['name', 'twitter:title', copy.meta.title],
          ['name', 'twitter:description', copy.meta.description]
        ]) document.querySelector(`meta[${attribute}="${prefix}"]`).content = value;
        document.querySelector('link[rel="canonical"]').href = `https://debruinstudio.nl${routes[language]}`;
        document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(node => node.remove());
        for (const [lang, url] of Object.entries({ ...routes, 'x-default': routes.nl })) {
          const link = document.createElement('link');
          link.rel = 'alternate'; link.hreflang = lang;
          link.href = `https://debruinstudio.nl${url}`;
          document.head.append(link);
        }
        for (const node of document.querySelectorAll('[data-i18n]')) {
          const value = valueAt(node.dataset.i18n);
          if (typeof value !== 'string') throw new Error(`Missing ${language}: ${node.dataset.i18n}`);
          node.textContent = value;
        }
        for (const node of document.querySelectorAll('[data-i18n-aria]')) node.setAttribute('aria-label', valueAt(node.dataset.i18nAria));
        for (const node of document.querySelectorAll('[data-image]')) {
          const image = copy.images[node.dataset.image];
          node.setAttribute('src', image.src); node.alt = image.alt;
        }
        for (const node of document.querySelectorAll('[data-lang]')) {
          node.href = routes[node.dataset.lang];
          if (node.dataset.lang === language) node.setAttribute('aria-current', 'page');
          else node.removeAttribute('aria-current');
        }
        for (const node of document.querySelectorAll('[href], [src]')) {
          for (const attribute of ['href', 'src']) {
            const value = node.getAttribute(attribute);
            if (!value || value.startsWith('#') || /^(https?:|mailto:|data:)/.test(value)) continue;
            const url = new URL(value, 'https://debruinstudio.nl/migrainemaatje/');
            node.setAttribute(attribute, `${url.pathname}${url.search}${url.hash}`);
          }
        }
        for (const node of document.querySelectorAll('script[type="application/ld+json"]')) {
          const schema = JSON.parse(node.textContent);
          schema.inLanguage = language;
          schema.description = copy.meta.description;
          node.textContent = `\n${JSON.stringify(schema, null, 2)}\n`;
        }
        for (const src of ['/migrainemaatje/product-copy.js?v=20261115-search', '/product-site.js?v=20261115-search']) {
          const script = document.createElement('script'); script.src = src; document.body.append(script);
        }
        return '<!doctype html>\n' + document.documentElement.outerHTML + '\n';
      }, { language, copy, routes: Object.fromEntries(Object.keys(translations).map(l => [l, route(l)])) });
      const target = path.join(root, route(language), 'index.html');
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, html.replace(/[\t ]+$/gm, ''));
      console.log(`Rendered ${route(language)}`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
