// Build crawlable language pages from the existing HTML and shared product copy.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const origin = 'https://debruinstudio.nl';
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'homescreen/product-copy.js'), 'utf8'), context);
const translations = context.window.PRODUCT_TRANSLATIONS;
const source = fs.readFileSync(path.join(root, 'homescreen/index.html'), 'utf8');
const routes = { nl: '/homescreen/', en: '/homescreen/en/', de: '/homescreen/de/' };

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  try {
    const page = await browser.newPage();
    await page.route('**/*', route => route.abort());
    for (const [language, copy] of Object.entries(translations)) {
      await page.setContent(source.replace(/<script\b[^>]*src=[^>]*><\/script>/g, ''), { waitUntil: 'domcontentloaded' });
      const html = await page.evaluate(({ language, copy, routes, origin }) => {
        const valueAt = key => key.split('.').reduce((value, part) => value?.[part], copy);
        const url = origin + routes[language];
        document.documentElement.lang = language;
        document.body.dataset.staticLanguage = language;
        document.title = copy.meta.title;
        for (const [attribute, key, value] of [
          ['name', 'description', copy.meta.description],
          ['property', 'og:title', copy.meta.title],
          ['property', 'og:description', copy.meta.description],
          ['property', 'og:url', url],
          ['property', 'og:locale', copy.meta.locale],
          ['name', 'twitter:title', copy.meta.title],
          ['name', 'twitter:description', copy.meta.description]
        ]) document.querySelector(`meta[${attribute}="${key}"]`).content = value;
        document.querySelector('link[rel="canonical"]').href = url;
        document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(node => node.remove());
        for (const [lang, route] of Object.entries({ ...routes, 'x-default': routes.nl })) {
          const link = document.createElement('link');
          link.rel = 'alternate'; link.hreflang = lang; link.href = origin + route;
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
        // Resolve against the original NL page, not a generated subdirectory.
        for (const node of document.querySelectorAll('[href], [src]')) {
          for (const attribute of ['href', 'src']) {
            const value = node.getAttribute(attribute);
            if (!value || value.startsWith('#') || /^(https?:|mailto:|data:)/.test(value)) continue;
            const resolved = new URL(value, origin + routes.nl);
            node.setAttribute(attribute, resolved.pathname + resolved.search + resolved.hash);
          }
        }
        for (const node of document.querySelectorAll('[data-keep-language]')) {
          const resolved = new URL(node.getAttribute('href'), origin);
          resolved.searchParams.set('lang', language);
          node.setAttribute('href', resolved.pathname + resolved.search + resolved.hash);
        }
        const stylesheet = document.querySelector('link[href*="website-release.css"]');
        stylesheet.href = '/homescreen/website-release.css?v=20261115-search';
        const schema = {
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'Organization', '@id': origin + '/#studio', name: 'de Bruin Studio', url: origin + '/' },
            {
              '@type': 'SoftwareApplication', '@id': origin + '/homescreen/#app', name: 'HomeScreen for HomeKit',
              url: origin + routes.nl, applicationCategory: 'LifestyleApplication', operatingSystem: 'iOS, iPadOS',
              description: copy.faq.purposeAnswer, inLanguage: ['nl', 'en', 'de'],
              author: { '@id': origin + '/#studio' }, publisher: { '@id': origin + '/#studio' },
              downloadUrl: 'https://apps.apple.com/app/id6771712686', sameAs: 'https://apps.apple.com/app/id6771712686',
              image: origin + '/homescreen-icon.png', screenshot: origin + copy.images.dashboard.src
            },
            {
              '@type': 'WebPage', '@id': url + '#page', url, name: copy.meta.title, description: copy.meta.description,
              inLanguage: language, about: { '@id': origin + '/homescreen/#app' },
              mainEntity: { '@id': origin + '/homescreen/#app' }, publisher: { '@id': origin + '/#studio' }
            }
          ]
        };
        document.querySelector('script[type="application/ld+json"]').textContent = '\n' + JSON.stringify(schema, null, 2) + '\n';
        for (const src of ['/homescreen/product-copy.js?v=20261115-search', '/product-site.js?v=20261115-search']) {
          const script = document.createElement('script'); script.src = src; document.body.append(script);
        }
        return '<!doctype html>\n' + document.documentElement.outerHTML + '\n';
      }, { language, copy, routes, origin });
      const target = path.join(root, routes[language], 'index.html');
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, html.replace(/[\t ]+$/gm, ''));
      console.log(`Rendered ${routes[language]}`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
