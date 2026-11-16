// PATCH /api/admin/row {table, id, status}  -> change le statut
// DELETE /api/admin/row {table, id}         -> supprime la ligne
const { sb, requireAdmin, TABLES, STATUSES } = require('../_admin');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

module.exports = async (req, res) => {
  if (!['PATCH', 'DELETE'].includes(req.method)) { res.setHeader('Allow', 'PATCH, DELETE'); return res.status(405).json({ ok: false }); }
  if (!(await requireAdmin(req, res))) return;
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch (e) { return {}; } })() : (req.body || {});
  if (!TABLES.includes(b.table) || !UUID.test(String(b.id || ''))) return res.status(400).json({ ok: false });
  try {
    let r;
    if (req.method === 'PATCH') {
      if (!STATUSES[b.table].includes(b.status)) return res.status(400).json({ ok: false });
      r = await sb('/rest/v1/' + b.table + '?id=eq.' + b.id, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ status: b.status }) });
    } else {
      r = await sb('/rest/v1/' + b.table + '?id=eq.' + b.id, { method: 'DELETE', headers: { Prefer: 'return=minimal' } });
    }
    if (!r.ok) throw new Error('supabase ' + r.status);
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e.message); return res.status(500).json({ ok: false }); }
};
