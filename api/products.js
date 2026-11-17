// GET /api/products -> {ok, rows} : produits visibles ajoutés depuis l'admin (public).
const { sb } = require('./_admin');
const FIELDS = 'ref,brand,category,name,name_en,description,description_en,finish,image_url,product_url';

module.exports = async (req, res) => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).json({ ok: false }); }
  try {
    const r = await sb('/rest/v1/products?select=' + FIELDS + '&active=eq.true&order=created_at.desc&limit=2000');
    if (!r.ok) throw new Error('supabase ' + r.status);
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ ok: true, rows: await r.json() });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false, rows: [] }); }
};
