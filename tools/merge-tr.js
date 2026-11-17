const fs = require('fs');
const it = JSON.parse(fs.readFileSync('_tr/items.json')), T = { n: {}, s: {} }, o = [];
for (let i = 0; i < 5; i++) o.push(...JSON.parse(fs.readFileSync('_tr/out-' + i + '.json')));
if (o.length !== it.length) throw new Error('len ' + o.length + ' ' + it.length);
const c = s => (s.match(/#/g) || []).length;
it.forEach((x, i) => { const [fr, en] = o[i]; if (c(fr) !== c(x.t) || c(en) !== c(x.t)) console.log('bad #', x.t); T[x.k][x.t] = [fr, en]; });
fs.writeFileSync('../data/carimali-translations.json', JSON.stringify(T));
console.log(Object.keys(T.n).length, Object.keys(T.s).length);
