// Import CARIMALI : data/CARIMALI.xlsx + images + traductions -> mizu-catalogue.js (idempotent) et mizu-i18n-carimali.js
// Usage : node import-carimali.js   (images : node carimali-images.js d'abord ; traductions : data/carimali-translations.json)
const fs = require('fs'), path = require('path'), L = require('./carimali-lib');
const ROOT = path.join(__dirname, '..');
const TR = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/carimali-translations.json'), 'utf8')); // {n:{tpl:[fr,en]}, s:{tpl:[fr,en]}}
const IMG = JSON.parse(fs.readFileSync(path.join(__dirname, '_tr/imgmap.json'), 'utf8'));

const CAT = {
  'miscelatori lavabo': 'Robinetterie – Lavabo', 'miscelatori bidet': 'Robinetterie – Bidet', 'miscelatori vasca': 'Robinetterie – Baignoire',
  'miscelatori cucina': 'Robinetterie – Cuisine', 'miscelatori esterni': 'Robinetterie – Extérieur', 'rubinetti deviatori': 'Robinetterie – Inverseurs',
  'kit lavabo bidet': 'Robinetterie – Kits lavabo/bidet', 'bocche a parete': 'Robinetterie – Becs',
  'miscelatori doccia': 'Douche – Mitigeurs encastrés', 'incassi': 'Douche – Mitigeurs encastrés', 'comandi': 'Douche – Mitigeurs encastrés',
  'soffioni': 'Douche – Têtes & jets', 'bracci doccia': 'Douche – Têtes & jets', 'cascate': 'Douche – Têtes & jets', 'nebulizzatori': 'Douche – Têtes & jets', 'body-jets': 'Douche – Têtes & jets',
  'colonne con miscelatore': 'Colonnes de douche', 'colonne singole': 'Colonnes de douche',
  'kit doccia base': 'Douchettes & kits', 'kit doccia completo': 'Douchettes & kits', 'saliscendi': 'Douchettes & kits', 'flessibili': 'Douchettes & kits',
  'complementi doccia': 'Douchettes & kits', 'idroscopini': 'Douchettes & kits', 'docce': 'Douchettes & kits', 'docce pulsanti': 'Douchettes & kits',
  'sistemi wellness': 'Wellness', 'ambienti esterni': 'Extérieur',
  'accessori bagno': 'Accessoire', 'complementi': 'Accessoire', 'articoli vari': 'Accessoire', 'piastre wc': 'Plaque de chasse', 'lavabi': 'Vasque'
};
const CAT_EN = {
  'Robinetterie – Lavabo': 'Taps – Basin', 'Robinetterie – Bidet': 'Taps – Bidet', 'Robinetterie – Baignoire': 'Taps – Bath', 'Robinetterie – Cuisine': 'Taps – Kitchen',
  'Robinetterie – Extérieur': 'Taps – Outdoor', 'Robinetterie – Inverseurs': 'Taps – Diverters', 'Robinetterie – Kits lavabo/bidet': 'Taps – Basin/bidet kits', 'Robinetterie – Becs': 'Taps – Spouts',
  'Douche – Mitigeurs encastrés': 'Shower – Concealed mixers', 'Douche – Têtes & jets': 'Shower – Heads & jets', 'Colonnes de douche': 'Shower columns',
  'Douchettes & kits': 'Handshowers & kits', 'Wellness': 'Wellness', 'Extérieur': 'Outdoor'
};
// suffixe de référence -> [FR, EN]
const FIN = {
  'CR': ['Chromé', 'Chrome'], 'CRX': ['Chromé', 'Chrome'], '316': ['Inox brossé 316', 'Brushed 316 stainless steel'],
  'CR/NE': ['Chromé, manette noire', 'Chrome, black handle'], 'CR/BI': ['Chromé, manette blanche', 'Chrome, white handle'], 'CR/NEOP': ['Chromé / noir mat', 'Chrome / matt black'],
  'CRNE': ['Chromé noir', 'Black chrome'], 'CRNE/NEOP': ['Chromé noir / noir mat', 'Black chrome / matt black'], 'CRSAT': ['Chromé satiné', 'Satin chrome'],
  'STN': ['Chromé', 'Chrome'], 'NEOP': ['Noir mat', 'Matt black'], 'NKSP': ['Nickel brossé', 'Brushed nickel'], 'OR': ['Or', 'Gold'],
  'BR': ['Blanc RAL', 'RAL white'], 'BA': ['Blanc azuré', 'Azure white'], 'VO': ['Vieux laiton', 'Aged brass'], 'VR': ['Vieux cuivre', 'Aged copper'], 'AC': ['Acrylique', 'Acrylic']
};
const STD = ['Standard', 'Standard'];
const SUF = /-(CRNE\/NEOP|CR\/NEOP|CR\/NE|CR\/BI|CRNE|CRSAT|CRX|CR|316|STN|NEOP|NKSP|OR|BR|BA|VO|VR|AC)(?: \(\d+\))?$/;

const trText = (kind, s, i) => {
  const t = TR[kind][L.tpl(s)];
  if (!t) throw new Error('traduction manquante (' + kind + '): ' + s);
  return L.fill(t[i], L.nums(s));
};

const items = L.rows().map(r => {
  const m = r.ref.match(SUF);
  return { ...r, base: m ? r.ref.slice(0, m.index) : r.ref, fin: m ? FIN[m[1]] : STD, suf: m ? m[1] : '' };
});
// nom partagé par plusieurs produits de base différente -> on ajoute la référence de base (évite de fausses "finitions" via variants())
const groupsByName = {};
items.forEach(i => { (groupsByName[i.name] = groupsByName[i.name] || new Set()).add(i.base); });
const out = items.map(i => {
  const shared = groupsByName[i.name].size > 1;
  const model = [0, 1].map(k => trText('n', i.name, k) + (shared ? ' (' + i.base + ')' : ''));
  const descs = L.sentences(i.desc).filter(s => !L.isFinish(s));
  const desc = [0, 1].map(k => descs.map(s => trText('s', s, k)).join(' '));
  return { i, model, desc, cat: CAT[i.cat] };
});
const unmapped = [...new Set(out.filter(o => !o.cat).map(o => o.i.cat))];
if (unmapped.length) throw new Error('catégories non mappées: ' + unmapped);

// --- catalogue ---
const file = path.join(ROOT, 'mizu-catalogue.js');
const src = fs.readFileSync(file, 'utf8');
const mm = src.match(/^window\.MIZU_CATALOG=(\{[\s\S]*\});(window\.dispatchEvent\(new Event\("mizu-ready"\)\);)\s*$/);
if (!mm) throw new Error('format mizu-catalogue.js inattendu');
const C = new Function('return (' + mm[1] + ')')();
let b = C.brands.indexOf('CARIMALI');
if (b < 0) { C.brands.push('CARIMALI'); b = C.brands.length - 1; }
C.rows = C.rows.filter(r => r[1] !== b);
const ci = n => { let k = C.cats.indexOf(n); if (k < 0) { C.cats.push(n); k = C.cats.length - 1; } return k; };
const missing = [];
out.forEach(o => {
  const img = IMG[o.i.img];
  if (!img) missing.push(o.i.ref);
  C.rows.push([o.i.ref, b, o.model[0] + ' - ' + o.i.fin[0], o.desc[0], ci(o.cat), o.i.url, img || '']);
});
fs.writeFileSync(file, 'window.MIZU_CATALOG=' + JSON.stringify(C) + ';' + mm[2] + '\n');

// --- dictionnaire EN (chaîne FR exacte -> EN), lu par mizu-i18n.js ---
const D = {};
out.forEach(o => {
  D[o.model[0] + ' - ' + o.i.fin[0]] = o.model[1] + ' - ' + o.i.fin[1];
  D[o.model[0]] = o.model[1];
  D[o.i.fin[0]] = o.i.fin[1];
  if (o.desc[0]) D[o.desc[0]] = o.desc[1];
});
Object.entries(CAT_EN).forEach(([k, v]) => { D[k] = v; });
fs.writeFileSync(path.join(ROOT, 'mizu-i18n-carimali.js'),
  '// Généré par tools/import-carimali.js — traductions EN des textes CARIMALI (clé = texte FR exact)\nwindow.MIZU_I18N_EXTRA=Object.assign(window.MIZU_I18N_EXTRA||{},' + JSON.stringify(D) + ');\n');

const groups = new Set(out.map(o => o.i.base + '|' + o.model[0]));
const cnt = {}; out.forEach(o => { const k = o.i.suf || '(standard)'; cnt[k] = (cnt[k] || 0) + 1; });
const cc = {}; out.forEach(o => { cc[o.cat] = (cc[o.cat] || 0) + 1; });
console.log('lignes', out.length, '| produits (groupes)', groups.size, '| sans image', missing.length, '| brand idx', b);
console.log(JSON.stringify(cnt));
console.log(JSON.stringify(cc));
