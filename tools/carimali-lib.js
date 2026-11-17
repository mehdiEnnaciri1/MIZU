// Lecture de data/CARIMALI.xlsx + découpage des textes en "gabarits" (nombres -> #) pour la traduction.
const X = require('xlsx'), path = require('path');
const NUM = /\d+([.,]\d+)?/g;
const rows = () => X.utils.sheet_to_json(X.readFile(path.join(__dirname, '../data/CARIMALI.xlsx')).Sheets.CARIMALI, { header: 1 }).slice(1)
  .map(r => ({ ref: String(r[1]).trim(), desc: String(r[3] || '').trim(), name: String(r[4] || '').trim(), cat: String(r[5] || '').trim(), url: r[7] || '', img: r[8] || '' }));
const sentences = d => d.split(/(?<=\.)\s+/).map(s => s.trim()).filter(Boolean);
const isFinish = s => /^Finitur/i.test(s);
const tpl = s => s.replace(NUM, '#');
const nums = s => s.match(NUM) || [];
const fill = (t, n) => { let i = 0; return t.replace(/#/g, () => n[i++] ?? '#'); };
module.exports = { rows, sentences, isFinish, tpl, nums, fill };
