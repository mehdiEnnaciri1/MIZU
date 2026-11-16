// Usage : node tools/build-docs.js
// Parcourt le dossier docs/ (docs/<maison>/<fichiers>) et régénère mizu-docs.js.
// Convention de nommage : INS-<ref>.pdf (notice), 3DC-<ref>.dwg (CAO), FT-<ref>.pdf (fiche technique)…
// <ref> = référence produit sans suffixe de finition ; X = chiffre quelconque (ex. VER-7X2).
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'docs');
const out = [];
for (const brand of fs.readdirSync(root)) {
  const dir = path.join(root, brand);
  if (!fs.statSync(dir).isDirectory()) continue;
  const walk = (d, rel) => {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p, rel + f + '/');
      else if (!f.startsWith('.')) out.push(brand + '/' + rel + f);
    }
  };
  walk(dir, '');
}
fs.writeFileSync(path.join(__dirname, '..', 'mizu-docs.js'),
  '// Liste générée par tools/build-docs.js — ne pas éditer à la main.\nwindow.MIZU_DOCS = ' + JSON.stringify(out, null, 1) + ';\n');
console.log(out.length + ' documents indexés dans mizu-docs.js');
