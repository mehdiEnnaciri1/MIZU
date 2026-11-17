// POST /api/admin/upload {data: "<base64>", type: "image/jpeg|png|webp"} -> {ok, url}
// Envoie la photo dans le dossier public « products » de Supabase Storage.
const crypto = require('crypto');
const { requireAdmin } = require('../_admin');
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  if (!(await requireAdmin(req, res))) return;
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {});
  const ext = EXT[b.type];
  if (!ext || typeof b.data !== 'string') return res.status(400).json({ ok: false, error: 'invalid' });
  const buf = Buffer.from(b.data, 'base64');
  if (!buf.length || buf.length > 3 * 1024 * 1024) return res.status(400).json({ ok: false, error: 'size' });
  try {
    const name = Date.now() + '-' + crypto.randomBytes(4).toString('hex') + '.' + ext;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY, base = process.env.SUPABASE_URL;
    const r = await fetch(base + '/storage/v1/object/products/' + name, { method: 'POST', headers: { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': b.type, 'x-upsert': 'false' }, body: buf });
    if (!r.ok) throw new Error('storage ' + r.status + ' ' + (await r.text()).slice(0, 200));
    return res.status(200).json({ ok: true, url: base + '/storage/v1/object/public/products/' + name });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
