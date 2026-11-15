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
