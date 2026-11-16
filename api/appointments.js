// POST /api/appointments : rendez-vous showroom / chantier / visio
const { clean, okEmail, route } = require('./_lib');

module.exports = route('appointments', (b) => {
  if (!clean(b.name, 120) || !clean(b.slot_label, 120)) throw new Error('invalid');
  if (b.email && !okEmail(b.email)) throw new Error('invalid');
  return {
    kind: clean(b.kind, 60), slot_label: clean(b.slot_label, 120),
    brands: (Array.isArray(b.brands) ? b.brands : []).slice(0, 5).map((x) => clean(x, 40)),
    name: clean(b.name, 120), email: b.email ? b.email.trim() : null, phone: clean(b.phone, 40), city: clean(b.city, 80), project: clean(b.project, 3000)
  };
});
