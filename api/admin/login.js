// POST /api/admin/login {email, password} -> {token}
// Connexion via Supabase Auth ; seuls les e-mails de ADMIN_EMAILS sont acceptés.
const { allowed } = require('../_admin');

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {});
  const email = String(b.email || '').trim().toLowerCase();
  const password = String(b.password || '');
  if (!email || !password || !allowed().includes(email)) return res.status(401).json({ ok: false });
  try {
    const key = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
    const r = await fetch(process.env.SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password })
    });
    if (!r.ok) return res.status(401).json({ ok: false });
    const d = await r.json();
    return res.status(200).json({ ok: true, token: d.access_token, expires_in: d.expires_in });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
