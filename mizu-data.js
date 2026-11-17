(function () {
  const P = (o) => Object.assign({ zoom: 1, finishes: [] }, o);
  const products = [
    P({ id: 'neorest', brand: 'TOTO', name: 'NEOREST® WX1', cat: 'WC lavant', finish: 'Noir mat', ref: 'TCF95580GEU', img: 'img/toto/TCF95580GEU_MBL.jpg', tech: ['Washlet', 'Tornado Flush', 'Ewater+'], desc: 'WC lavant suspendu avec douche à eau chaude, siège chauffant, séchage doux et désodorisation automatique. Une pièce de référence de la collection NEOREST.', dims: '390 × 565 × 380 mm', finishes: [['Noir mat', '#2A2622'], ['Blanc', '#F4F2EE']] }),
    P({ id: 'rw', brand: 'TOTO', name: 'WASHLET® RW', cat: 'WC lavant', finish: 'Blanc / argent', ref: 'TCF801EG', img: 'img/toto/TCF801EG_NW1.jpg', tech: ['Washlet', 'Ewater+'], desc: 'Abattant lavant à installer sur une cuvette existante. Douche réglable, siège chauffant et nettoyage automatique de la douchette.', dims: '380 × 520 × 140 mm', finishes: [['Blanc', '#F4F2EE']] }),
    P({ id: 'wcrp', brand: 'TOTO', name: 'WC RP suspendu', cat: 'WC', finish: 'Noir mat', ref: 'CW552RY', img: 'img/toto/CW552RY_MBL.jpg', tech: ['Tornado Flush', 'CeFiONtect'], desc: 'Cuvette suspendue sans bride avec chasse tourbillonnaire Tornado Flush, silencieuse et économe : 4,5 litres par chasse.', dims: '370 × 540 × 340 mm', finishes: [['Noir mat', '#2A2622'], ['Blanc', '#F4F2EE']] }),
    P({ id: 'zn', brand: 'TOTO', name: 'Robinet automatique ZN', cat: 'Robinetterie', finish: 'Noir mat', ref: 'TLP01701G', img: 'img/toto/TLP01701G_MBL.jpg', desc: 'Robinet de lavabo à détection, sans contact. Autoalimenté par micro-générateur hydraulique.', dims: 'H. 120 mm · saillie 110 mm', finishes: [['Noir mat', '#2A2622'], ['Chrome', '#C9CBCC']] }),
    P({ id: 'lw', brand: 'TOTO', name: 'Vasque sous plan WU', cat: 'Vasque', finish: 'Blanc', ref: 'LW1535Y', img: 'img/toto/LW1535Y.jpg', tech: ['CeFiONtect'], desc: 'Vasque en céramique émaillée CeFiONtect, à installer sous plan. Surface ultra-lisse qui retient moins les dépôts.', dims: '540 × 410 × 180 mm', finishes: [['Blanc', '#F4F2EE']] }),
    P({ id: 'zero', brand: 'TOTO', name: 'Baignoire ZERO DIMENSION', cat: 'Baignoire', finish: 'Blanc', ref: 'PJYD2200PWEE', img: 'img/toto/PJYD2200PWEE_GW.jpg', desc: 'Baignoire à flottaison : position allongée en apesanteur, appuie-tête réglable à effet cascade et fonction massante HYDROHANDS.', dims: '2200 × 1050 × 785 mm', finishes: [['Blanc', '#F4F2EE']] }),
    P({ id: 'mit', brand: 'BAGNODESIGN', name: 'Mitigeur lavabo', cat: 'Robinetterie', finish: 'Bronze satiné', ref: 'AQE-ECO-I302', img: 'img/bagno/AQE-ECO-I302-A-SBZ.jpg', desc: 'Mitigeur monocommande de lavabo, lignes épurées et finition bronze satiné.', dims: 'H. 165 mm · saillie 120 mm', finishes: [['Bronze satiné', '#8A6E4B'], ['Noir mat', '#2A2622'], ['Chrome', '#C9CBCC']] }),
    P({ id: 'dch', brand: 'BAGNODESIGN', name: 'Douchette à main', cat: 'Douche', finish: 'Bronze', ref: 'BDD-BCH-535', img: 'img/bagno/BDD-BCH-535-TF-C.jpg', desc: 'Douchette à main avec support mural et flexible. Jet pluie doux.', dims: 'L. 230 mm', finishes: [['Bronze', '#8A6E4B'], ['Chrome', '#C9CBCC']] }),
    P({ id: 'bai', brand: 'BAGNODESIGN', name: 'Baignoire en îlot', cat: 'Baignoire', finish: 'Effet marbre', ref: 'BDB-TUS-875', img: 'img/bagno/BDB-TUS-875-AV.jpg', desc: 'Baignoire en îlot aux bords fins, en matériau composite à finition marbre.', dims: '1700 × 800 × 600 mm', finishes: [['Marbre', '#E7E2DA'], ['Blanc', '#F4F2EE']] }),
    P({ id: 'vas', brand: 'BAGNODESIGN', name: 'Vasque à encastrer', cat: 'Vasque', finish: 'Céramique blanche', ref: 'AQS-ENV-713', img: 'img/bagno/AQS-ENV-713-WH.jpg', desc: 'Vasque à encastrer en céramique blanche, forme douce et bord fin.', dims: '500 × 380 × 150 mm', finishes: [['Blanc', '#F4F2EE']] }),
    P({ id: 'd01', brand: 'JEE-O', name: 'Original douche 01', cat: 'Douche', finish: 'Inox brossé', ref: '100-6100', img: 'img/jeeo/100-6100.jpg', zoom: 1.1, desc: 'Colonne de douche autoportante en acier inoxydable 316, conçue pour l’intérieur comme pour le jardin.', dims: 'H. 2200 mm', finishes: [['Inox brossé', '#B9B7B2'], ['Noir', '#2A2622']] }),
    P({ id: 'mur', brand: 'JEE-O', name: 'Mitigeur lavabo mural', cat: 'Robinetterie', finish: 'Inox brossé', ref: '400-1510', img: 'img/jeeo/400-1510.jpg', zoom: 2.2, desc: 'Mitigeur mural en inox massif, géométrie cylindrique minimale.', dims: 'Saillie 190 mm', finishes: [['Inox brossé', '#B9B7B2']] }),
    P({ id: 'bec', brand: 'JEE-O', name: 'Bec mural', cat: 'Robinetterie', finish: 'Inox brossé', ref: '300-1500', img: 'img/jeeo/300-1500.jpg', zoom: 2.2, desc: 'Bec de remplissage mural en inox brossé, pour baignoire ou vasque.', dims: 'Saillie 200 mm', finishes: [['Inox brossé', '#B9B7B2']] }),
    P({ id: 'bon', brand: 'JEE-O', name: 'Bonde de vasque', cat: 'Accessoire', finish: 'Inox brossé', ref: '001-0010', img: 'img/jeeo/001-0010.jpg', zoom: 2.4, desc: 'Bonde clic-clac en inox, assortie à la robinetterie JEE-O.', dims: 'Ø 63 mm', finishes: [['Inox brossé', '#B9B7B2']] })
  ];
  const maisons = {
    toto: { key: 'toto', name: 'TOTO', origin: 'Japon', jp: '日本', num: '01', logoH: '96px', hero: 'img/web/m5.jpg', pos: 'center 60%', tagline: 'Haute technologie et hygiène absolue.', intro: 'Depuis 1917, TOTO conçoit la salle de bain comme un rituel japonais : l’eau, la chaleur et la propreté réglées au degré près. MIZU présente au Maroc les collections NEOREST, WASHLET et la céramique CeFiONtect.', cats: ['WC lavant', 'WC', 'Vasque', 'Robinetterie', 'Baignoire'], feature: ['neorest', 'zero'], amb: ['img/amb/m1.jpg', 'img/amb/m2.jpg'] },
    bagnodesign: { key: 'bagnodesign', name: 'BAGNODESIGN', origin: 'Royaume-Uni', jp: '', num: '02', logoH: '54px', hero: 'img/web/f3.jpg', pos: '40% center', tagline: 'Le lifestyle britannique en solutions complètes.', intro: 'BAGNODESIGN compose des salles de bain complètes, de la vasque à la baignoire, avec des finitions chaudes qui s’accordent aux matières du Maroc : bronze, laiton, marbre.', cats: ['Robinetterie', 'Douche', 'Vasque', 'Baignoire'], feature: ['mit', 'bai'], amb: ['img/amb/f1.jpg', 'img/amb/f4.jpg'] },
    jeeo: { key: 'jeeo', name: 'JEE-O', origin: 'Pays-Bas', jp: '', num: '03', logoH: '200px', hero: 'img/web/o2.jpg', pos: 'center 30%', tagline: 'Un minimalisme sculptural en acier inoxydable.', intro: 'JEE-O dessine aux Pays-Bas des douches et une robinetterie en inox 316, pensées pour durer dehors comme dedans. Des lignes nettes, une matière unique.', cats: ['Douche', 'Robinetterie', 'Accessoire'], feature: ['d01', 'mur'], amb: ['img/amb/o1.jpg', 'img/amb/o4.jpg'] },
    // TODO(photos) : hero + ambiances = produits sur fond crème PROVISOIRES (tools/carimali-placeholders.js) ; remplacer par de vraies photos.
    // TODO(texte) : tagline + intro à faire valider. Logo = PNG (pas de SVG disponible), cf. champ logo.
    carimali: { key: 'carimali', name: 'CARIMALI', origin: 'Italie', jp: '', num: '04', logoH: '72px', logo: 'img/logos/carimali.png', logoBlack: 'img/logos/carimali-footer.png', hero: 'img/web/carimali-hero.jpg', pos: 'center center', tagline: 'Robinetterie et systèmes de douche, fabriqués en Italie.', intro: 'CARIMALI est une marque italienne de robinetterie et de systèmes de douche. Ses collections, fabriquées en Italie, couvrent les mitigeurs, les colonnes, les pommeaux et les accessoires de salle de bain.', cats: ['Douche – Mitigeurs encastrés', 'Colonnes de douche', 'Robinetterie – Lavabo'], feature: ['00-0900-CR', '0-CRW0701-CR'], amb: ['img/amb/carimali-1.jpg', 'img/amb/carimali-2.jpg'] }
  };
  const KEY = 'mizu-sel';
  const getSel = () => {
    try { const v = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(v)) return v; } catch (e) {}
    return null;
  };
  const setSel = (list) => {
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new Event('mizu-sel'));
  };
  const sel = () => getSel() || [];
  const addSel = (id, qty) => {
    const l = sel();
    const it = l.find((x) => x.id === id);
    if (it) it.qty += qty || 1; else l.push({ id, qty: qty || 1 });
    setSel(l);
  };
  const count = () => sel().reduce((a, x) => a + x.qty, 0);
  products.forEach((p) => { p.qid = p.id; p.model = p.name; p.noSprite = true; p.hasSprite = false; });
  let cache = null;
  // Produits ajoutés depuis /admin (table Supabase « products »), chargés via /api/products.
  let extra = [];
  const fromAdmin = (x) => ({ id: x.ref, qid: encodeURIComponent(x.ref), brand: x.brand, name: x.name + (x.finish ? ' - ' + x.finish : ''), model: x.name, finish: x.finish || '', desc: x.description || '', cat: x.category, url: x.product_url || '', img: x.image_url || ('img/logos/' + x.brand.toLowerCase().replace('-', '') + '-black.svg'), ref: x.ref, zoom: x.image_url ? 1 : 0.4, noimg: !x.image_url, sprite: null, hasSprite: false, noSprite: true, finishes: [], finishNote: '', kw: '', ext: true });
  const all = () => {
    const C = window.MIZU_CATALOG;
    if (!C) return extra.length ? products.concat(extra.map(fromAdmin)) : products;
    if (cache) return cache;
    cache = C.rows.map((r) => {
      const name = r[2] || r[0];
      const k = name.lastIndexOf(' - ');
      const model = k > 0 ? name.slice(0, k) : name;
      const finish = k > 0 ? name.slice(k + 3) : '';
      const brand = C.brands[r[1]];
      const sp = typeof r[6] === 'string' && r[6].startsWith('s:') ? +r[6].slice(2) : -1;
      const noimg = !r[6];
      let sprite = null;
      if (sp >= 0 && C.sprite) {
        const S = C.sprite, sheet = Math.floor(sp / S.PER), k = sp % S.PER;
        const n = Math.min(S.PER, S.total - sheet * S.PER), rows = Math.ceil(n / S.C);
        const col = k % S.C, row = Math.floor(k / S.C);
        sprite = { url: 'img/bagno-sprites/s' + sheet + '.jpg', size: (S.C * 100) + '% ' + (rows * 100) + '%', pos: (col / (S.C - 1) * 100).toFixed(3) + '% ' + (rows > 1 ? (row / (rows - 1) * 100).toFixed(3) : '0') + '%' };
      }
      const fallback = 'img/logos/' + brand.toLowerCase().replace('-', '') + '-black.svg';
      return { id: r[0], qid: encodeURIComponent(r[0]), brand, name, model, finish, desc: r[3], cat: C.cats[r[4]], url: r[5], img: (noimg || sprite) ? fallback : r[6], ref: r[0], zoom: noimg ? 0.4 : 1, noimg, sprite, hasSprite: !!sprite, noSprite: !sprite, finishes: [], finishNote: r[7] || '', kw: r[8] || '', ext: true };
    });
    cache = extra.map(fromAdmin).concat(cache);
    cache.sort((a, b) => (a.noimg ? 1 : 0) - (b.noimg ? 1 : 0));
    return cache;
  };
  const byId = (id) => products.find((p) => p.id === id) || all().find((p) => p.id === id);
  const variants = (p) => all().filter((x) => x.ext && x.brand === p.brand && x.model === p.model);
  const param = (k) => { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } };
  const DOC_TYPES = { INS: 'Notice d’installation', '3DC': 'Fichier CAO 3D', '2DC': 'Fichier CAO 2D', FT: 'Fiche technique', TDS: 'Fiche technique', SPEC: 'Fiche technique', CAT: 'Catalogue', CER: 'Certificat', WAR: 'Garantie' };
  let docIdx = null;
  const docsIndex = () => {
    if (docIdx) return docIdx;
    const L = window.MIZU_DOCS || [];
    docIdx = L.map((path) => {
      const file = path.split('/').pop();
      const brandDir = path.split('/')[0];
      const ext = (file.split('.').pop() || '').toLowerCase();
      const base = file.replace(/\.[^.]+$/, '');
      const m = base.match(/^([A-Z0-9]+)-(.+)$/);
      const pre = m && DOC_TYPES[m[1]] ? m[1] : '';
      const core = pre ? m[2] : base;
      const parts = core.split('-').filter((x) => !/^(XX|WH|LF|RH)$/.test(x));
      const src = parts.map((x) => x.replace(/(\d)X|X(\d)/g, (s, a, b) => (a ? a + '\\d' : '\\d' + b))).join('-');
      const re = parts.length ? new RegExp('(^|-)' + src + '(-|$)') : null;
      const special = /UNDCNTBASIN/.test(core) ? (p) => p.cat === 'Vasque' && /under.?counter|sous plan/i.test(p.name) : null;
      return { path: 'docs/' + path, file, ext, brandDir, label: pre ? DOC_TYPES[pre] : (ext === 'pdf' ? 'Document PDF' : ext.toUpperCase()), re, special };
    });
    return docIdx;
  };
  const docsFor = (p) => {
    if (!p) return [];
    const bk = (p.brand || '').toLowerCase().replace('-', '');
    return docsIndex().filter((d) => d.brandDir.replace('-', '') === bk && (d.special ? d.special(p) : d.re && d.re.test(p.ref)));
  };
  // Envoi vers le back-end (/api/<route>) ; rejette si le serveur répond une erreur.
  const send = (route, body) => fetch('/api/' + route, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then((r) => { if (!r.ok) throw new Error('http ' + r.status); return r.json(); });
  window.MIZU = { products, maisons, getSel, setSel, sel, addSel, count, byId, param, all, variants, docsFor, send };
  window.dispatchEvent(new Event('mizu-ready'));
  fetch('/api/products').then((x) => (x.ok ? x.json() : null)).then((d) => {
    if (!d || !Array.isArray(d.rows) || !d.rows.length) return;
    extra = d.rows; cache = null;
    const en = {};
    extra.forEach((x) => { if (x.name_en) { en[x.name + (x.finish ? ' - ' + x.finish : '')] = x.name_en + (x.finish ? ' - ' + x.finish : ''); en[x.name] = x.name_en; } if (x.description && x.description_en) en[x.description] = x.description_en; });
    window.MIZU_I18N_EXTRA = Object.assign(window.MIZU_I18N_EXTRA || {}, en);
    window.dispatchEvent(new Event('mizu-ready'));
  }).catch(() => {});
})();
