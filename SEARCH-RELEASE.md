# MigraineMaatje search release - 15 November 2026

## Purpose and scope

Improve the public product site's discoverability and usefulness for people
looking for a migraine diary or help describing dizziness alongside migraine.
This is not a clinical authority, endorsement, ranking or sales guarantee.
No app release, subscription price change, advertising or visitor tracking is
part of this change. No patient information was used in the new public copy;
the example diary notes are fictional.

## Public changes

- Dutch practical guides at `/migrainemaatje/migraine-dagboek/` and
  `/migrainemaatje/pppd-en-migraine/`.
- Visible publisher/byline, editorial date, source links, limitations and a
  correction contact. No fictitious medical reviewer or recommendations.
- Direct links between the product and guides, and from each guide to the other.
- Full product HTML at `/migrainemaatje/`, `/migrainemaatje/en/`,
  `/migrainemaatje/de/` and `/migrainemaatje/fr/`. The new guides are Dutch;
  the other product languages explicitly label them as Dutch-language guides.
- Reciprocal hreflang links and self-canonical product URLs; old `?lang=`
  links redirect in the browser to the corresponding static locale route.
- Product screenshots have real src/alt attributes before JavaScript executes.
- Article and BreadcrumbList structured data describe actual visible content.
  No fabricated reviews, ratings, MedicalOrganization or FAQ rich-result claims.
- Sitemap includes the new routes. The existing robots.txt already allows
  crawling, including search bots; it did not need a new permission or AI file.

## Sources checked

- Google: https://developers.google.com/search/docs/appearance/ai-features
- Google: https://developers.google.com/search/docs/essentials
- OpenAI search crawler: https://developers.openai.com/api/docs/bots
- Thuisarts diary: https://www.thuisarts.nl/hoofdpijn/ik-ga-hoofdpijn-dagboek-invullen
- Thuisarts migraine: https://www.thuisarts.nl/migraine/ik-heb-migraine
- Thuisarts vestibular migraine:
  https://www.thuisarts.nl/evenwichts-migraine/ik-heb-aanvallen-van-duizeligheid-en-heb-of-had-ook-migraine
- Amsterdam UMC PPPD:
  https://www.amsterdamumc.nl/nl/patienteninformatie/persisterende-positionele-perceptie-duizeligheid-pppd
- Barany Society PPPD consensus: https://doi.org/10.3233/VES-170622

## Repeatable checks

Requires Node.js and Playwright with Chrome (or PLAYWRIGHT_CHANNEL set to another
installed Playwright-supported channel). NODE_PATH can point to a preinstalled
Playwright package directory; no dependency download is required on this Mac.

```sh
node scripts/render-migraine-languages.cjs
node --test tests/*.test.cjs
node scripts/check-migraine-search.cjs
xmllint --noout sitemap.xml
```

The browser check covers six routes at 320, 390, 820 and 1440 px, with and
without JavaScript, using an English browser locale to catch unintended Dutch
page replacement. It also exercises legacy language links and language switching.
It checks canonical/hreflang, visible titles, horizontal overflow, structured
data parsing, local files/anchors and browser errors. Screenshots go to
SCREENSHOT_DIR or `/tmp/MigraineMaatje-website-search`.

## After deployment

1. Verify actual live HTML and sitemap, not just local output.
2. Submit `https://debruinstudio.nl/sitemap.xml` in the owner's Google Search
   Console and Bing Webmaster Tools, once access/property verification exists.
   Request indexing of both guides. Do not claim this happened without proof.
3. Record a baseline for organic impressions, searches, landing-page visits and
   attributable app installs, where store reporting permits. No health-data
   analytics are needed.
4. Review at four and eight weeks. Few impressions suggests an indexing/reach
   issue; impressions without clicks suggests presentation/search-intent work;
   visits without app interest suggests the offer or audience fit needs work.
   Low traffic cannot establish a statistically reliable A/B winner.

Access and indexing do not guarantee selection as an AI citation or any fixed
position. Broad medical queries and app-selection queries have different intent;
the website should not pretend to replace a hospital or physician's information.

## Follow-up: broad diary discovery and search notifications

The first observed baseline was mixed: Google's AI Overview mentioned the app
for a Dutch-language migraine-and-PPPD app query without the brand name, citing
the real Google Play listing. The user's broader Claude diary request did not
mention the app. This does not establish an effect caused by the site changes.
Do not call a narrowly positive query a general ranking improvement.

The next patch adds a visible factual product summary in all four languages:
diary category, supported devices and languages, free functions, optional
Premium, use without a smartwatch, and privacy. SoftwareApplication metadata
matches those visible facts and links to the actual store identities. The Dutch
diary guide now also answers the ordinary diary-selection question, clearly
labelled as the maker's own explanation rather than an independent ranking.

The public root text file ending in `812d6ef9318a1086dd6c06a405cce3ba.txt`
is IndexNow's intentionally public domain-ownership proof, not a password or an
account access token. The publisher script sends only an allowlist of public
MigraineMaatje page URLs. It does not transmit visitor, diary or health data.
It first verifies the live ownership file. HTTP 200 means received; HTTP 202
means received with ownership validation pending. Neither establishes indexing
or inclusion in ChatGPT, Claude, Gemini or another AI answer.

```sh
node scripts/notify-search-engines.cjs --all-current --dry-run
node scripts/notify-search-engines.cjs --all-current --receipt=/tmp/indexnow-receipt.json
```

The second command performs a real notification; use the dry run for testing.
The Pages workflow tests static content before deployment and notifies changed
maintained MigraineMaatje HTML routes afterward. Notification failure warns
without taking the already-published website offline. Other products are not
submitted by this MigraineMaatje-specific script.

Sources for search controls and notification semantics:

- https://developers.openai.com/api/docs/bots
- https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- https://www.indexnow.org/documentation
- https://www.bing.com/indexnow/getstarted

Next evaluation: use the same ordinary unbranded diary question in independent
fresh conversations. Record whether web search was actually used when visible,
the app mention, cited URL, date and model if shown. Keep negative results.
Do not silently change the question, feed the app name to the model or turn
web search on only for a positive retest and present it as the same baseline.
