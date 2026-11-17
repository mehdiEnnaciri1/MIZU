// Blocs de contenu (admin) : GET liste, PUT enregistrer {key, data}, DELETE {key} (retour au texte d'origine).
const { sb, requireAdmin } = require('../_admin');
const { clean } = require('../_lib');
const KEYS = ['maison:toto', 'maison:bagnodesign', 'maison:jeeo', 'maison:carimali'];
const TEXT = { tagline: 300, tagline_en: 300, intro: 1200, intro_en: 1200, feature1: 80, feature2: 80 };
const IMG = ['hero', 'amb1', 'amb2'];
const body = (req) => (typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {}));

// Ne garde que les champs connus et non vides ; lève 'invalid' si une image n'est pas une URL https ou un chemin img/.
function build(d) {
  const out = {};
  Object.entries(TEXT).forEach(([k, n]) => { const v = clean((d || {})[k], n); if (v) out[k] = v; });
  IMG.forEach((k) => {
    const v = clean((d || {})[k], 500);
    if (!v) return;
    if (!/^https:\/\//i.test(v) && !/^img\/[\w\-./]+$/.test(v)) throw new Error('invalid');
    out[k] = v;
  });
  return out;
}

module.exports = async (req, res) => {
  if (!['GET', 'PUT', 'DELETE'].includes(req.method)) { res.setHeader('Allow', 'GET, PUT, DELETE'); return res.status(405).json({ ok: false }); }
  if (!(await requireAdmin(req, res))) return;
  try {
    let r;
    if (req.method === 'GET') {
      r = await sb('/rest/v1/site_blocks?select=key,data,updated_at&limit=200');
      if (!r.ok) throw new Error('supabase ' + r.status);
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ ok: true, rows: await r.json() });
    }
    const b = body(req);
    if (!KEYS.includes(b.key)) return res.status(400).json({ ok: false });
    if (req.method === 'DELETE') {
      r = await sb('/rest/v1/site_blocks?key=eq.' + encodeURIComponent(b.key), { method: 'DELETE', headers: { Prefer: 'return=minimal' } });
    } else {
      let data; try { data = build(b.data); } catch (e) { return res.status(400).json({ ok: false, error: 'invalid' }); }
      r = await sb('/rest/v1/site_blocks?on_conflict=key', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify({ key: b.key, data, updated_at: new Date().toISOString() }) });
    }
    if (!r.ok) throw new Error('supabase ' + r.status + ' ' + (await r.text()).slice(0, 200));
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
