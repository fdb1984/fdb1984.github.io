"""Prerender the existing static site using structured HTML transforms."""
import copy
import json
from pathlib import Path
import sys
from urllib.parse import urljoin, urlsplit
from lxml import etree, html

root = Path(sys.argv[1])
payload = json.load(sys.stdin)
template = html.document_fromstring(payload['source'])
translations = payload['translations']
routes = {language: '/migrainemaatje/' + (language + '/' if language != 'nl' else '')
          for language in translations}


def value_at(source, key):
    for part in key.split('.'):
        source = source[part]
    return source


def set_text(node, value):
    for child in list(node):
        node.remove(child)
    node.text = value


for language, text in translations.items():
    document = copy.deepcopy(template)
    document.set('lang', language)
    head = document.find('head')
    body = document.find('body')
    body.set('data-static-language', language)
    document.find('.//title').text = text['meta']['title']
    for attribute, key, value in [
        ('name', 'description', text['meta']['description']),
        ('property', 'og:title', text['meta']['title']),
        ('property', 'og:description', text['meta']['description']),
        ('property', 'og:url', 'https://debruinstudio.nl' + routes[language]),
        ('property', 'og:locale', text['meta']['locale']),
        ('name', 'twitter:title', text['meta']['title']),
        ('name', 'twitter:description', text['meta']['description']),
    ]:
        for node in document.xpath(f'//meta[@{attribute}="{key}"]'):
            node.set('content', value)
    for node in document.xpath('//link[@rel="canonical"]'):
        node.set('href', 'https://debruinstudio.nl' + routes[language])
    for node in document.xpath('//link[@rel="alternate"][@hreflang]'):
        node.getparent().remove(node)
    for alternate, route in {**routes, 'x-default': routes['nl']}.items():
        etree.SubElement(head, 'link', rel='alternate', hreflang=alternate,
                         href='https://debruinstudio.nl' + route)
    for node in document.xpath('//*[@data-i18n]'):
        value = value_at(text, node.get('data-i18n'))
        if not isinstance(value, str):
            raise TypeError(f'{language}: {node.get("data-i18n")} is not text')
        set_text(node, value)
    for node in document.xpath('//*[@data-i18n-aria]'):
        node.set('aria-label', value_at(text, node.get('data-i18n-aria')))
    for node in document.xpath('//*[@data-image]'):
        image = text['images'][node.get('data-image')]
        node.set('src', image['src'])
        node.set('alt', image['alt'])
    for node in document.xpath('//*[@data-lang]'):
        node.set('href', routes[node.get('data-lang')])
        if node.get('data-lang') == language:
            node.set('aria-current', 'page')
        else:
            node.attrib.pop('aria-current', None)
    for node in document.iter():
        for attribute in ('href', 'src'):
            value = node.get(attribute)
            if value and not value.startswith(('#', 'https:', 'http:', 'mailto:', 'data:')):
                parsed = urlsplit(urljoin('https://debruinstudio.nl/migrainemaatje/', value))
                node.set(attribute, parsed.path + ('?' + parsed.query if parsed.query else '')
                         + ('#' + parsed.fragment if parsed.fragment else ''))
    for node in document.xpath('//script[@type="application/ld+json"]'):
        schema = json.loads(node.text)
        schema['inLanguage'] = language
        schema['description'] = text['meta']['description']
        if schema.get('@type') == 'SoftwareApplication':
            schema['url'] = 'https://debruinstudio.nl' + routes[language]
            schema['sameAs'] = schema['downloadUrl']
            schema['isAccessibleForFree'] = True
            schema['featureList'] = [text['value']['free' + key] for key in ('One', 'Two', 'Three', 'Four')]
            schema['offers'] = {
                '@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR',
                'description': text['facts']['freeLabel'] + ': ' + text['facts']['free'] + ' '
                + text['facts']['premiumLabel'] + ': ' + text['facts']['premium'],
            }
        node.text = '\n' + json.dumps(schema, ensure_ascii=False, indent=2) + '\n'
    for node in document.xpath('//script[@src]'):
        node.getparent().remove(node)
    for source in ('/migrainemaatje/product-copy.js?v=20261116-conversion', '/product-site.js?v=20261116-guide'):
        etree.SubElement(body, 'script', src=source)
    target = root / routes[language].lstrip('/') / 'index.html'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html.tostring(document, encoding='unicode', doctype='<!doctype html>') + '\n', encoding='utf-8')
    print(f'Rendered {routes[language]}')
