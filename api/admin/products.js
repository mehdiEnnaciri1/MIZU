// Gestion des produits (admin) : GET liste, POST créer, PATCH modifier, DELETE supprimer.
const { sb, requireAdmin } = require('../_admin');
const { clean } = require('../_lib');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const BRANDS = ['TOTO', 'BAGNODESIGN', 'JEE-O', 'CARIMALI'];
const body = (req) => (typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {}));

// Ne garde que les champs autorisés ; lève 'invalid' si un champ obligatoire manque ou est invalide.
function build(b, partial) {
  const row = {};
  const put = (k, v) => { if (v !== undefined) row[k] = v; };
  put('ref', b.ref !== undefined ? clean(b.ref, 80) : undefined);
  put('brand', b.brand !== undefined ? clean(b.brand, 40) : undefined);
  put('category', b.category !== undefined ? clean(b.category, 80) : undefined);
  put('name', b.name !== undefined ? clean(b.name, 200) : undefined);
  ['name_en', 'finish'].forEach((k) => put(k, b[k] !== undefined ? clean(b[k], 200) || null : undefined));
  ['description', 'description_en'].forEach((k) => put(k, b[k] !== undefined ? clean(b[k], 2000) || null : undefined));
  ['image_url', 'product_url'].forEach((k) => put(k, b[k] !== undefined ? clean(b[k], 500) || null : undefined));
  if (typeof b.active === 'boolean') row.active = b.active;
  if (row.brand !== undefined && !BRANDS.includes(row.brand)) throw new Error('invalid');
  ['image_url', 'product_url'].forEach((k) => { if (row[k] && !/^https?:\/\//i.test(row[k])) throw new Error('invalid'); });
  ['ref', 'brand', 'category', 'name'].forEach((k) => {
    if (partial ? (k in row && !row[k]) : !row[k]) throw new Error('invalid');
  });
  return row;
}

module.exports = async (req, res) => {
  if (!['GET', 'POST', 'PATCH', 'DELETE'].includes(req.method)) { res.setHeader('Allow', 'GET, POST, PATCH, DELETE'); return res.status(405).json({ ok: false }); }
  if (!(await requireAdmin(req, res))) return;
  const b = body(req);
  try {
    let r;
    if (req.method === 'GET') {
      r = await sb('/rest/v1/products?select=*&order=created_at.desc&limit=2000');
      if (!r.ok) throw new Error('supabase ' + r.status);
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ ok: true, rows: await r.json() });
    }
    if (req.method === 'POST') {
      let row; try { row = build(b, false); } catch (e) { return res.status(400).json({ ok: false, error: 'invalid' }); }
      r = await sb('/rest/v1/products', { method: 'POST', headers: { Prefer: 'return=representation' }, body: JSON.stringify(row) });
      if (r.status === 409) return res.status(409).json({ ok: false, error: 'duplicate' });
      if (!r.ok) throw new Error('supabase ' + r.status + ' ' + (await r.text()).slice(0, 200));
      return res.status(200).json({ ok: true, row: (await r.json())[0] });
    }
    if (!UUID.test(String(b.id || ''))) return res.status(400).json({ ok: false });
    if (req.method === 'PATCH') {
      let row; try { row = build(b, true); } catch (e) { return res.status(400).json({ ok: false, error: 'invalid' }); }
      if (!Object.keys(row).length) return res.status(400).json({ ok: false });
      r = await sb('/rest/v1/products?id=eq.' + b.id, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify(row) });
      if (r.status === 409) return res.status(409).json({ ok: false, error: 'duplicate' });
      if (!r.ok) throw new Error('supabase ' + r.status);
      return res.status(200).json({ ok: true, row: (await r.json())[0] });
    }
    r = await sb('/rest/v1/products?id=eq.' + b.id, { method: 'DELETE', headers: { Prefer: 'return=minimal' } });
    if (!r.ok) throw new Error('supabase ' + r.status);
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
