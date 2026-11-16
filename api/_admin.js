// Aides pour les routes d'administration : accès Supabase + vérification de l'admin.
const URL_ = () => process.env.SUPABASE_URL;
const KEY = () => process.env.SUPABASE_SERVICE_ROLE_KEY;
const allowed = () => (process.env.ADMIN_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

const sb = (path, init = {}) => fetch(URL_() + path, {
  ...init,
  headers: { apikey: KEY(), Authorization: 'Bearer ' + KEY(), 'Content-Type': 'application/json', ...(init.headers || {}) }
});

// Vérifie le jeton de session Supabase ET que l'e-mail est dans ADMIN_EMAILS.
// Répond 401/403 et renvoie null si l'accès est refusé.
async function requireAdmin(req, res) {
  const token = (req.headers.authorization || '').replace(/^Bearer /i, '');
  if (!token || !allowed().length) { res.status(401).json({ ok: false }); return null; }
  const r = await fetch(URL_() + '/auth/v1/user', { headers: { apikey: KEY(), Authorization: 'Bearer ' + token } });
  if (!r.ok) { res.status(401).json({ ok: false }); return null; }
  const u = await r.json();
  if (!allowed().includes(String(u.email || '').toLowerCase())) { res.status(403).json({ ok: false }); return null; }
  return u;
}

const TABLES = ['leads', 'quotes', 'appointments'];
const STATUSES = {
  leads: ['new', 'in_progress', 'done'],
  appointments: ['new', 'in_progress', 'done'],
  quotes: ['new', 'in_progress', 'sent', 'won', 'lost']
};

module.exports = { sb, requireAdmin, allowed, TABLES, STATUSES };
