#!/usr/bin/env python3
"""Déclare un fichier de recettes dans index.html et dans le cache du service worker."""
import sys
for f in sys.argv[1:]:
    html = open('index.html').read()
    if f not in html:
        html = html.replace('  <script src="js/donnees.js"></script>', f'  <script src="{f}"></script>\n  <script src="js/donnees.js"></script>')
        open('index.html', 'w').write(html)
    sw = open('sw.js').read()
    if f"'{f}'" not in sw:
        sw = sw.replace("  'js/donnees.js',", f"  '{f}',\n  'js/donnees.js',")
        open('sw.js', 'w').write(sw)
