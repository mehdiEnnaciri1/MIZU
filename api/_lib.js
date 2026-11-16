// Aides communes aux routes /api (le préfixe _ évite que Vercel en fasse une route).
const clean = (v, n = 500) => (typeof v === 'string' ? v.trim().slice(0, n) : null);
const okEmail = (v) => typeof v === 'string' && v.length < 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

async function insert(table, row) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.SUPABASE_URL;
  if (!key || !url) throw new Error('Supabase non configuré');
  const r = await fetch(url + '/rest/v1/' + table, {
    method: 'POST',
    headers: { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(row)
  });
  if (!r.ok) throw new Error('Supabase ' + r.status + ' ' + (await r.text()).slice(0, 200));
}

// build(body) -> ligne à insérer, ou lève une Error('invalid') si la validation échoue.
const route = (table, build) => async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {});
  if (b.website) return res.status(200).json({ ok: true }); // honeypot anti-spam
  let row;
  try { row = build(b); } catch (e) { return res.status(400).json({ ok: false, error: 'invalid' }); }
  try { await insert(table, row); return res.status(200).json({ ok: true }); }
  catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};

module.exports = { clean, okEmail, route };
