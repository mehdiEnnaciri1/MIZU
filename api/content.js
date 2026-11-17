// GET /api/content -> {ok, blocks: {key: data}} : blocs de contenu modifiés dans l'admin (public).
const { sb } = require('./_admin');

module.exports = async (req, res) => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).json({ ok: false }); }
  try {
    const r = await sb('/rest/v1/site_blocks?select=key,data&limit=200');
    if (!r.ok) throw new Error('supabase ' + r.status);
    const blocks = {};
    (await r.json()).forEach((x) => { blocks[x.key] = x.data; });
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ ok: true, blocks });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false, blocks: {} }); }
};
