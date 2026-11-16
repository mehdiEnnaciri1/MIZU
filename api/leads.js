// POST /api/leads : téléchargement de document, contact, newsletter
const { clean, okEmail, route } = require('./_lib');

module.exports = route('leads', (b) => {
  const type = ['doc_download', 'contact', 'newsletter'].includes(b.type) ? b.type : null;
  if (!type || !okEmail(b.email)) throw new Error('invalid');
  if (type !== 'newsletter' && !clean(b.name, 120)) throw new Error('invalid');
  const consent = !!b.consent;
  return {
    type,
    name: clean(b.name, 120), email: b.email.trim(), phone: clean(b.phone, 40), company: clean(b.company, 120), city: clean(b.city, 80),
    profile: b.profile === 'pro' ? 'pro' : b.profile === 'particulier' ? 'particulier' : null,
    subject: clean(b.subject, 120), message: clean(b.message, 3000),
    product_ref: clean(b.product_ref, 120), file: clean(b.file, 300),
    consent, consent_at: consent ? new Date().toISOString() : null,
    lang: b.lang === 'en' ? 'en' : 'fr'
  };
});
