// GET /api/admin/data?table=leads|quotes|appointments -> {ok, rows}
const { sb, requireAdmin, TABLES } = require('../_admin');

module.exports = async (req, res) => {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).json({ ok: false }); }
  if (!(await requireAdmin(req, res))) return;
  const table = String((req.query && req.query.table) || '');
  if (!TABLES.includes(table)) return res.status(400).json({ ok: false });
  try {
    const r = await sb('/rest/v1/' + table + '?select=*&order=created_at.desc&limit=1000');
    if (!r.ok) throw new Error('supabase ' + r.status);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ ok: true, rows: await r.json() });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
