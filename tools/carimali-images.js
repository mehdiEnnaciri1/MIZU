// Télécharge les images (colonne URL IMAGE) -> img/carimali/<nom>.webp (800 px max, q75). Dédoublonné par URL.
const L = require('./carimali-lib'), sharp = require('sharp'), fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '../img/carimali'); fs.mkdirSync(OUT, { recursive: true });
const slug = u => path.basename(u.split('?')[0]).replace(/\.[^.]+$/, '').replace(/[^A-Za-z0-9_-]+/g, '_').toLowerCase();
(async () => {
  const urls = [...new Set(L.rows().map(r => r.img).filter(Boolean))];
  const map = {}, fail = []; let i = 0, bytes = 0;
  const work = async () => { while (i < urls.length) { const u = urls[i++], f = slug(u) + '.webp', p = path.join(OUT, f);
    try {
      if (!fs.existsSync(p)) {
        const r = await fetch(u); if (!r.ok) throw new Error('http ' + r.status);
        await sharp(Buffer.from(await r.arrayBuffer())).resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true }).webp({ quality: 75 }).toFile(p);
      }
      bytes += fs.statSync(p).size; map[u] = 'img/carimali/' + f;
    } catch (e) { fail.push([u, e.message]); } } };
  await Promise.all(Array.from({ length: 8 }, work));
  fs.writeFileSync(path.join(__dirname, '_tr/imgmap.json'), JSON.stringify(map));
  console.log('urls', urls.length, 'ok', Object.keys(map).length, 'fail', fail.length, 'MB', (bytes / 1e6).toFixed(1)); console.log(fail.slice(0, 10));
})();
