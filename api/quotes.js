// POST /api/quotes : demande de devis (coordonnées + sélection)
const { clean, okEmail, route } = require('./_lib');

module.exports = route('quotes', (b) => {
  if (!okEmail(b.email) || !clean(b.name, 120)) throw new Error('invalid');
  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 100).map((i) => ({
    ref: clean(i && i.ref, 120), name: clean(i && i.name, 200), brand: clean(i && i.brand, 60), finish: clean(i && i.finish, 80),
    qty: Math.max(1, Math.min(999, parseInt(i && i.qty, 10) || 1))
  }));
  if (!items.length) throw new Error('invalid');
  return {
    name: clean(b.name, 120), email: b.email.trim(), phone: clean(b.phone, 40), company: clean(b.company, 120), city: clean(b.city, 80),
    profile: b.profile === 'pro' ? 'pro' : 'particulier',
    job: clean(b.job, 60), delay: clean(b.delay, 60), wants_visit: !!b.wants_visit, notes: clean(b.notes, 3000),
    items
  };
});
