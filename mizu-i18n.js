(function () {
  const D = {
    'Maisons': 'Brands', 'Technologie TOTO': 'TOTO Technology', 'Catalogue': 'Catalogue', 'Nouveautés': 'New arrivals', 'Projets': 'Projects',
    'Consultation privée': 'Private consultation', 'Recherche': 'Search', 'Showroom : 35, rue 1, Bd de la Mecque, Casablanca': 'Showroom: 35, rue 1, Bd de la Mecque, Casablanca',
    'Sur rendez-vous uniquement': 'By appointment only', 'Écrire sur WhatsApp': 'Message us on WhatsApp', 'L’art de composer': 'The art of composing', 'l’invisible': 'the invisible',
    'Nous composons des expériences de bien-être autour de trois maisons d’exception : TOTO, BAGNODESIGN et JEE-O.': 'We compose wellness experiences around three exceptional brands: TOTO, BAGNODESIGN and JEE-O.',
    'Réservez votre consultation privée': 'Book your private consultation', 'Réservez votre consultation privée →': 'Book your private consultation →', 'Découvrir les maisons': 'Discover the brands',
    'Nos maisons': 'Our brands', 'Trois maisons d’exception, de la céramique à la douche extérieure.': 'Three exceptional brands, from ceramics to outdoor showers.',
    '01 · Japon': '01 · Japan', '02 · Royaume-Uni': '02 · United Kingdom', '03 · Pays-Bas': '03 · Netherlands', 'Japon': 'Japan', 'Royaume-Uni': 'United Kingdom', 'Pays-Bas': 'Netherlands',
    'Haute technologie et hygiène absolue. Une salle de bain pensée comme un rituel japonais.': 'High technology and absolute hygiene. A bathroom designed as a Japanese ritual.',
    'WC suspendus': 'Wall-hung toilets', 'Vasques': 'Basins', 'Robinetterie': 'Taps & mixers', 'Explorer l’univers TOTO': 'Explore the world of TOTO',
    'Le lifestyle britannique en solutions complètes, accordées aux matières chaudes du Maroc.': 'British lifestyle in complete solutions, matched to the warm materials of Morocco.',
    'Douches': 'Showers', 'Baignoires': 'Bathtubs', 'Explorer l’univers BAGNODESIGN': 'Explore the world of BAGNODESIGN',
    'Un minimalisme sculptural en acier inoxydable, pour le dedans comme pour le jardin.': 'Sculptural minimalism in stainless steel, for indoors and the garden.',
    'Douches extérieures': 'Outdoor showers', 'Colonnes de douche': 'Shower columns', 'Robinetterie inox': 'Stainless steel taps', 'Accessoires': 'Accessories', 'Explorer l’univers JEE-O': 'Explore the world of JEE-O',
    'La précision japonaise au service de l’hygiène absolue.': 'Japanese precision in the service of absolute hygiene.',
    'Voir la fiche': 'View product', 'Voir la fiche →': 'View product →', 'Fiche': 'Details', 'Devis': 'Quote', 'Toute la sélection': 'View all',
    'TOTO · Pièce maîtresse': 'TOTO · Masterpiece', 'Baignoire à flottaison ZERO DIMENSION': 'ZERO DIMENSION floating bathtub',
    'Une position allongée en apesanteur, un appuie-tête réglable à effet cascade, et la fonction massante HYDROHANDS.': 'A weightless reclining position, an adjustable cascade headrest and the HYDROHANDS massage function.',
    'Demander un devis': 'Request a quote', 'Réf. PJYD2200PWEE': 'Ref. PJYD2200PWEE', 'Réf.': 'Ref.',
    'Votre projet mérite une écoute privée': 'Your project deserves a private conversation',
    'Au showroom de Casablanca ou sur votre chantier, nous composons avec vous chaque détail, du choix des pièces à leur installation.': 'At our Casablanca showroom or on your site, we work through every detail with you, from choosing the pieces to installing them.',
    'Showroom sur rendez-vous · Casablanca': 'Showroom by appointment · Casablanca', 'Showroom sur rendez-vous': 'Showroom by appointment', 'Accompagnement technique': 'Technical support',
    'Installation suivie': 'Supervised installation', 'Espace professionnels': 'Professionals', 'Aide': 'Help', 'Contactez-nous': 'Contact us', 'Mentions légales': 'Legal notice',
    'Confidentialité': 'Privacy', 'Recevez le Lookbook 2026 et nos nouvelles sélections.': 'Receive the 2026 Lookbook and our latest selections.', 'Suivez-nous': 'Follow us',
    'MIZU MAROC 2026 | Conception et Réalisation': 'MIZU MAROC 2026 | Design and development', 'Politique de confidentialité': 'Privacy policy', 'Votre adresse e-mail': 'Your email address',
    'Accueil': 'Home', '/ Catalogue': '/ Catalogue', '/ Contact': '/ Contact', '/ Ma sélection': '/ My selection', '› Projets': '› Projects', '› Showroom': '› Showroom',
    'Les pièces TOTO, BAGNODESIGN et JEE-O présentées au showroom MIZU de Casablanca.': 'TOTO, BAGNODESIGN and JEE-O pieces on display at the MIZU showroom in Casablanca.',
    'Maison': 'Brand', 'Catégorie': 'Category', 'Effacer les filtres': 'Clear filters', 'Un projet complet ?': 'A complete project?',
    'Architectes, promoteurs, hôtels : nous préparons un devis sur plan.': 'Architects, developers, hotels: we prepare quotes from plans.', 'Nous contacter →': 'Contact us →', 'Trier': 'Sort',
    'Aucune pièce ne correspond à ces filtres.': 'No pieces match these filters.', 'Parlons de votre projet': 'Let’s talk about your project', 'Réponse sous 24 h': 'Reply within 24 h',
    'Formulaire de contact': 'Contact form', 'Dites-nous en un peu plus sur vous et votre projet.': 'Tell us a little more about yourself and your project.', 'Envoyer le message →': 'Send message →',
    'Message envoyé': 'Message sent', 'Merci. Nous revenons vers vous sous 24 h.': 'Thank you. We will get back to you within 24 h.', 'Écrire': 'Write to us', 'Rendez-vous': 'Appointments',
    'Prendre rendez-vous': 'Book an appointment', 'Prendre rendez-vous →': 'Book an appointment →', 'Contacts directs': 'Direct contacts', 'Nom et prénom': 'Full name', 'E-mail': 'Email',
    'Téléphone': 'Phone', 'Ville': 'City', 'Message': 'Message', 'La maison': 'The brand', 'L’univers': 'The world of', 'Pièce signature ·': 'Signature piece ·', 'Finition': 'Finish',
    'Dimensions': 'Dimensions', 'Ajouter à ma sélection': 'Add to my selection', 'La collection': 'Collection', 'Tout le catalogue →': 'Full catalogue →', 'Composer votre salle de bain': 'Design your bathroom with',
    'Une question sur cette pièce ?': 'A question about this piece?', 'Vous aimerez aussi': 'You may also like',
    'Résidences, hôtels et villas : une sélection de salles de bain composées avec nos clients et leurs architectes, partout au Maroc.': 'Residences, hotels and villas: a selection of bathrooms designed with our clients and their architects across Morocco.',
    'Architectes, promoteurs, hôteliers': 'Architects, developers, hoteliers', 'Nous vous accompagnons du chiffrage sur plan jusqu’au suivi de chantier.': 'We support you from quoting on plans through to site supervision.',
    'Parler de votre projet →': 'Discuss your project →', 'Maisons': 'Brands', 'Année': 'Year', 'Prestation': 'Service', 'Un projet similaire ? →': 'A similar project? →', 'Effacer': 'Clear',
    'Recherches fréquentes': 'Popular searches', 'Pages': 'Pages', 'Aucun résultat pour «': 'No results for “', '»': '”',
    'Essayez une maison, une catégorie ou une référence. Nos conseillers peuvent aussi vous orienter.': 'Try a brand, a category or a reference. Our advisors can also help.',
    'Pièce, maison, référence…': 'Piece, brand, reference…', 'Ma sélection': 'My selection', 'Rassemblez vos pièces, nous vous adressons un devis détaillé sous 48 h.': 'Gather your pieces and we will send you a detailed quote within 48 h.',
    '+ Ajouter des pièces': '+ Add pieces', 'Retirer': 'Remove', 'Votre sélection est vide': 'Your selection is empty', 'Parcourez le catalogue et ajoutez les pièces qui vous intéressent.': 'Browse the catalogue and add the pieces you like.',
    'Voir le catalogue →': 'View the catalogue →', 'Devis sous 48 h': 'Quote within 48 h', 'Prix, délais et disponibilités pour chaque pièce.': 'Prices, lead times and availability for each piece.',
    'Conseil technique': 'Technical advice', 'Compatibilité avec votre installation vérifiée.': 'Compatibility with your installation checked.', 'Sans engagement': 'No commitment',
    'Votre sélection reste modifiable à tout moment.': 'Your selection can be changed at any time.', 'Demande de devis': 'Quote request', 'Votre activité': 'Your profession',
    'Échéance des travaux': 'Project timeline', 'Je souhaite aussi une consultation au showroom': 'I would also like a showroom consultation', 'Envoyer ma demande →': 'Send my request →',
    'Vos données servent uniquement à établir votre devis.': 'Your data is used only to prepare your quote.', 'Demande envoyée': 'Request sent', 'transmises. Vous recevez votre devis sous 48 h.': 'sent. You will receive your quote within 48 h.',
    'Continuer la visite': 'Continue browsing', 'Société': 'Company', 'Ville du projet': 'Project city', 'Précisions sur votre projet': 'Details about your project',
    'Showroom & rendez-vous': 'Showroom & appointments', 'Adresse': 'Address', 'Itinéraire': 'Directions', 'Sur rendez-vous': 'By appointment', 'Un conseiller vous reçoit seul,': 'An advisor welcomes you privately,',
    'pour le temps nécessaire.': 'for as long as you need.', 'Une question avant votre visite ?': 'A question before your visit?', 'Sur votre chantier': 'On your site',
    'Nous venons relever les contraintes': 'We come to assess the technical', 'techniques sur place.': 'constraints on site.', 'Réserver votre consultation privée': 'Book your private consultation',
    'Confirmation par téléphone ou WhatsApp sous 24 h.': 'Confirmation by phone or WhatsApp within 24 h.', 'Type de rendez-vous': 'Appointment type', 'Date': 'Date', 'Créneau': 'Time slot',
    'Vos coordonnées': 'Your details', 'Maisons qui vous intéressent': 'Brands you are interested in', 'Confirmer le rendez-vous →': 'Confirm appointment →',
    '. Un conseiller MIZU vous contacte sous 24 h pour confirmer.': '. A MIZU advisor will contact you within 24 h to confirm.', 'Modifier ma demande': 'Edit my request',
    'Votre projet en quelques mots': 'Your project in a few words', 'La précision japonaise,': 'Japanese precision,', 'au service de l’eau': 'in the service of water',
    'Quatre technologies développées par TOTO pour une hygiène absolue, une consommation d’eau maîtrisée et un confort quotidien.': 'Four technologies developed by TOTO for absolute hygiene, controlled water use and everyday comfort.',
    'Les pièces équipées': 'Equipped pieces', 'Essayer un Washlet au showroom': 'Try a Washlet at the showroom',
    'Nos conseillers vous présentent chaque fonction en situation réelle, sur rendez-vous à Casablanca.': 'Our advisors demonstrate every function in real conditions, by appointment in Casablanca.',
    'L’univers TOTO': 'The world of TOTO', 'Tout': 'All', 'Toutes les maisons': 'All brands', 'Toutes': 'All', 'Nom': 'Name', 'Tous': 'All', 'Tous les projets': 'All projects',
    'Douche à eau chaude, siège chauffant à température réglable et séchage doux. L’hygiène par l’eau, réglée au degré près.': 'Warm water cleansing, heated seat with adjustable temperature and gentle drying. Hygiene through water, set to the exact degree.',
    'Une chasse d’eau tourbillonnaire, extrêmement efficace et silencieuse, sans éclaboussures. 4,5 litres par chasse, sans rebord.': 'A swirling flush that is highly effective and quiet, with no splashing. 4.5 litres per flush, rimless.',
    'Un vernis céramique ultra-lisse qui empêche la saleté de se déposer. La surface reste propre plus longtemps.': 'An ultra-smooth ceramic glaze that prevents dirt from settling. The surface stays clean for longer.',
    'Une eau électrolysée qui nettoie la douchette et la cuvette après chaque utilisation, sans produit chimique.': 'Electrolysed water that cleans the wand and bowl after each use, without chemicals.',
    'WC lavant': 'Shower toilet', 'WC': 'Toilet', 'Mitigeur lavabo': 'Basin mixer', 'Bronze satiné': 'Satin bronze', 'Original douche 01': 'Original shower 01', 'Inox brossé': 'Brushed stainless steel',
    'Robinet automatique ZN': 'ZN automatic faucet', 'Sans contact': 'Touchless', 'Douchette à main': 'Hand shower', 'Finition bronze': 'Bronze finish', 'WC RP suspendu': 'RP wall-hung toilet',
    'Mitigeur lavabo mural': 'Wall-mounted basin mixer', 'Baignoire en îlot': 'Freestanding bathtub', 'Finition marbre': 'Marble finish', 'Abattant lavant': 'Shower seat',
    'Vasque à encastrer': 'Inset basin', 'Céramique blanche': 'White ceramic', 'Bec mural': 'Wall spout', 'Bonde de vasque': 'Basin waste', 'Vasque sous plan WU': 'WU undercounter basin',
    'Baignoire ZERO DIMENSION': 'ZERO DIMENSION bathtub', 'Noir mat': 'Matt black', 'Blanc': 'White', 'Blanc / argent': 'White / silver', 'Chrome': 'Chrome', 'Vasque': 'Basin', 'Douche': 'Shower',
    'Baignoire': 'Bathtub', 'Accessoire': 'Accessory', 'Effet marbre': 'Marble effect', 'Marbre': 'Marble', 'Noir': 'Black', 'Bronze': 'Bronze',
    'Projet particulier': 'Private project', 'Professionnel': 'Professional', 'Service après-vente': 'After-sales service', 'Autre': 'Other', 'Particuliers': 'Private clients',
    'Conseil, sélection de pièces, devis': 'Advice, product selection, quotes', 'Architectes & promoteurs': 'Architects & developers', 'Chiffrage sur plan, échantillons, suivi de chantier': 'Quotes from plans, samples, site supervision',
    'Installation, entretien, pièces détachées': 'Installation, maintenance, spare parts', 'Caractéristiques': 'Specifications', 'Référence': 'Reference', 'Technologies': 'Technologies',
    'Livraison & installation': 'Delivery & installation', 'Livraison': 'Delivery', 'Partout au Maroc, sur rendez-vous': 'Across Morocco, by appointment', 'Installation': 'Installation',
    'Pose suivie par nos techniciens': 'Fitting supervised by our technicians', 'Garantie': 'Warranty', 'Garantie constructeur': 'Manufacturer’s warranty', 'Technologie TOTO ': 'TOTO Technology',
    'Ajouté à ma sélection ✓': 'Added to my selection ✓', 'Ajouté ✓': 'Added ✓', '+ Sélection': '+ Selection',
    'Villa': 'Villa', 'Hôtellerie': 'Hospitality', 'Résidence': 'Residence', 'Tertiaire': 'Commercial', 'Conseil, fourniture, suivi de pose': 'Advice, supply, installation supervision',
    'Chiffrage sur plan, fourniture': 'Quotes from plans, supply', 'Conseil, fourniture': 'Advice, supply', 'Chiffrage, fourniture, suivi de chantier': 'Quotes, supply, site supervision',
    'Une suite parentale ouverte sur le jardin, avec WC lavant NEOREST et douche extérieure JEE-O en inox.': 'A master suite opening onto the garden, with a NEOREST shower toilet and a JEE-O stainless steel outdoor shower.',
    'Douze chambres équipées de robinetterie bronze et de vasques à poser, accordées au tadelakt.': 'Twelve rooms fitted with bronze taps and countertop basins, matched to tadelakt walls.',
    'Une salle de bain compacte en tons minéraux, autour d’un WC suspendu Tornado Flush et d’une vasque CeFiONtect.': 'A compact bathroom in mineral tones, built around a Tornado Flush wall-hung toilet and a CeFiONtect basin.',
    'Un espace bien-être avec baignoire en îlot face à la baie et équipements TOTO dans chaque suite.': 'A wellness space with a freestanding bathtub facing the bay and TOTO fittings in every suite.',
    'Douches de piscine et robinetterie extérieure en inox 316, pensées pour le climat côtier.': 'Pool showers and outdoor taps in 316 stainless steel, designed for the coastal climate.',
    'Sanitaires de direction équipés de robinets sans contact et de WC lavants.': 'Executive washrooms fitted with touchless faucets and shower toilets.',
    'Cinq salles de bain et un pool house, entre inox brossé et finitions bronze.': 'Five bathrooms and a pool house, combining brushed stainless steel and bronze finishes.',
    'Riad Médina': 'Riad Medina', 'Maison de jardin': 'Garden house', 'Siège social': 'Headquarters', 'Appartement Racine': 'Racine apartment',
    'Maison · Japon': 'Brand · Japan', 'Maison · Royaume-Uni': 'Brand · United Kingdom', 'Maison · Pays-Bas': 'Brand · Netherlands', 'Réalisations': 'Completed projects', 'Pièces': 'Pieces',
    'Particulier': 'Private client', 'Architecte': 'Architect', 'Promoteur': 'Developer', 'Installateur': 'Installer', 'Moins de 3 mois': 'Under 3 months', '3 à 6 mois': '3 to 6 months', 'Plus de 6 mois': 'Over 6 months',
    'Au showroom': 'At the showroom', 'Casablanca · 1 h': 'Casablanca · 1 h', 'Relevé technique': 'Technical survey', 'En visio': 'Video call', '30 min · à distance': '30 min · remote',
    'Dim': 'Sun', 'Lun': 'Mon', 'Mar': 'Tue', 'Mer': 'Wed', 'Jeu': 'Thu', 'Ven': 'Fri', 'Sam': 'Sat',
    'janv.': 'Jan', 'févr.': 'Feb', 'mars': 'Mar', 'avr.': 'Apr', 'mai': 'May', 'juin': 'Jun', 'juil.': 'Jul', 'août': 'Aug', 'sept.': 'Sep', 'oct.': 'Oct', 'nov.': 'Nov', 'déc.': 'Dec',
    'Choisissez une date et un créneau': 'Choose a date and a time slot',
    'Température et pression de l’eau réglables': 'Adjustable water temperature and pressure', 'Siège chauffant': 'Heated seat', 'Séchage à air tiède': 'Warm air drying',
    'Cuvette sans bride, plus facile à nettoyer': 'Rimless bowl, easier to clean', '4,5 litres par chasse': '4.5 litres per flush', 'Fonctionnement silencieux': 'Quiet operation',
    'Surface lisse à l’échelle nanométrique': 'Surface smooth at nanometre scale', 'Moins de dépôts et de calcaire': 'Less residue and limescale', 'Entretien simplifié': 'Easier maintenance',
    'Nettoyage automatique de la douchette': 'Automatic wand cleaning', 'Sans produit chimique': 'No chemicals', 'Activé après chaque utilisation': 'Activated after every use',
    'WC lavant suspendu avec douche à eau chaude, siège chauffant, séchage doux et désodorisation automatique. Une pièce de référence de la collection NEOREST.': 'Wall-hung shower toilet with warm water cleansing, heated seat, gentle drying and automatic deodorising. A benchmark piece of the NEOREST collection.',
    'Abattant lavant à installer sur une cuvette existante. Douche réglable, siège chauffant et nettoyage automatique de la douchette.': 'Shower seat to fit on an existing bowl. Adjustable wash, heated seat and automatic wand cleaning.',
    'Cuvette suspendue sans bride avec chasse tourbillonnaire Tornado Flush, silencieuse et économe : 4,5 litres par chasse.': 'Rimless wall-hung bowl with the quiet, water-saving Tornado Flush: 4.5 litres per flush.',
    'Robinet de lavabo à détection, sans contact. Autoalimenté par micro-générateur hydraulique.': 'Sensor basin faucet, touchless. Self-powered by a hydro micro-generator.',
    'H. 120 mm · saillie 110 mm': 'H. 120 mm · reach 110 mm', 'H. 165 mm · saillie 120 mm': 'H. 165 mm · reach 120 mm', 'Saillie 190 mm': 'Reach 190 mm', 'Saillie 200 mm': 'Reach 200 mm',
    'Vasque en céramique émaillée CeFiONtect, à installer sous plan. Surface ultra-lisse qui retient moins les dépôts.': 'CeFiONtect glazed ceramic undercounter basin. An ultra-smooth surface that holds less residue.',
    'Baignoire à flottaison : position allongée en apesanteur, appuie-tête réglable à effet cascade et fonction massante HYDROHANDS.': 'Floating bathtub: weightless reclining position, adjustable cascade headrest and HYDROHANDS massage function.',
    'Mitigeur monocommande de lavabo, lignes épurées et finition bronze satiné.': 'Single-lever basin mixer with clean lines and a satin bronze finish.',
    'Douchette à main avec support mural et flexible. Jet pluie doux.': 'Hand shower with wall bracket and hose. Soft rain spray.',
    'Baignoire en îlot aux bords fins, en matériau composite à finition marbre.': 'Thin-rimmed freestanding bathtub in composite with a marble finish.',
    'Vasque à encastrer en céramique blanche, forme douce et bord fin.': 'Inset basin in white ceramic, soft shape and thin rim.',
    'Colonne de douche autoportante en acier inoxydable 316, conçue pour l’intérieur comme pour le jardin.': 'Freestanding shower column in 316 stainless steel, designed for indoors and the garden.',
    'Mitigeur mural en inox massif, géométrie cylindrique minimale.': 'Wall-mounted mixer in solid stainless steel, minimal cylindrical geometry.',
    'Bec de remplissage mural en inox brossé, pour baignoire ou vasque.': 'Brushed stainless steel wall spout, for bathtub or basin.',
    'Bonde clic-clac en inox, assortie à la robinetterie JEE-O.': 'Stainless steel click-clack waste, matching JEE-O taps.',
    'Haute technologie et hygiène absolue.': 'High technology and absolute hygiene.',
    'Depuis 1917, TOTO conçoit la salle de bain comme un rituel japonais : l’eau, la chaleur et la propreté réglées au degré près. MIZU présente au Maroc les collections NEOREST, WASHLET et la céramique CeFiONtect.': 'Since 1917, TOTO has designed the bathroom as a Japanese ritual: water, warmth and cleanliness set to the exact degree. MIZU presents the NEOREST and WASHLET collections and CeFiONtect ceramics in Morocco.',
    'Le lifestyle britannique en solutions complètes.': 'British lifestyle in complete solutions.',
    'BAGNODESIGN compose des salles de bain complètes, de la vasque à la baignoire, avec des finitions chaudes qui s’accordent aux matières du Maroc : bronze, laiton, marbre.': 'BAGNODESIGN creates complete bathrooms, from basin to bathtub, with warm finishes that suit Moroccan materials: bronze, brass, marble.',
    'Un minimalisme sculptural en acier inoxydable.': 'Sculptural minimalism in stainless steel.',
    'JEE-O dessine aux Pays-Bas des douches et une robinetterie en inox 316, pensées pour durer dehors comme dedans. Des lignes nettes, une matière unique.': 'JEE-O designs showers and taps in 316 stainless steel in the Netherlands, built to last outdoors and in. Clean lines, a single material.',
    'Vasque noire sur mur en pierre': 'Black basin on a stone wall',
    'Bidet': 'Bidet', 'Sèche-mains': 'Hand dryer', 'Urinoir': 'Urinal', 'Mobilier': 'Furniture', 'Douchette WC': 'Bidet spray', 'Plaque de chasse': 'Flush plate', 'Miroir': 'Mirror',
    'Sèche-serviettes': 'Towel warmer', 'Hammam': 'Steam room', 'Espaces publics': 'Public washrooms', 'Plomberie': 'Plumbing', 'Accessibilité': 'Accessibility',
    'Filtrer par nom ou référence': 'Filter by name or reference', 'Documents techniques': 'Technical documents', 'Fiche technique, notice d’installation et fichiers CAO de cette pièce.': 'Technical data sheet, installation guide and CAD files for this piece.', 'Télécharger la fiche technique': 'Download the data sheet', 'Télécharger la documentation': 'Download the documentation', 'Renseignez vos coordonnées pour accéder à la documentation technique de cette pièce.': 'Enter your details to access the technical documentation for this piece.', 'Nom et prénom *': 'Full name *', 'E-mail *': 'Email *', 'Téléphone *': 'Phone *', 'Société / cabinet': 'Company / firm', 'J’accepte que MIZU me recontacte au sujet de mon projet. *': 'I agree that MIZU may contact me about my project. *', 'Merci de remplir les champs obligatoires.': 'Please fill in the required fields.', 'Télécharger le document': 'Download the document', 'Accéder à la documentation': 'Access the documentation', 'Envoyer ma demande': 'Send my request', 'Merci': 'Thank you', 'Votre téléchargement a démarré. S’il ne se lance pas, utilisez le bouton ci-dessous.': 'Your download has started. If it doesn’t, use the button below.', 'Relancer le téléchargement': 'Restart the download', 'Ouvrir à nouveau': 'Open again', 'Fermer': 'Close', 'Valider mes informations': 'Confirm my details', 'Ouvrir le site officiel': 'Open the official website', 'Revenir à la fiche produit': 'Back to the product page', 'Un conseiller MIZU vous envoie la fiche technique sous 24 h.': 'A MIZU advisor will send you the data sheet within 24 h.', 'Télécharger': 'Download', 'Fiche technique, notice d’installation et fichiers CAO disponibles sur demande.': 'Technical data sheet, installation guide and CAD files available on request.', 'Demander la fiche technique': 'Request the data sheet', 'Documents sur le site officiel ↗': 'Documents on the official website ↗', 'Notice d’installation': 'Installation guide', 'Fichier CAO 3D': '3D CAD file', 'Fichier CAO 2D': '2D CAD file', 'Fiche technique': 'Technical data sheet', 'Certificat': 'Certificate', 'Document PDF': 'PDF document', 'Voir sur le site officiel ↗': 'View on the official website ↗', 'Variantes': 'Variants', 'Standard': 'Standard', 'Vasque en bronze et eau courante': 'Bronze basin and running water', 'Baignoire noire face au jardin': 'Black bathtub facing the garden'
  };
  const RULES = [
    [/^(\d+) pièces$/, '$1 pieces'], [/^(\d+) pièce$/, '$1 piece'], [/^(\d+) résultats$/, '$1 results'], [/^(\d+) résultat$/, '$1 result'],
    [/^Afficher plus \((\d+) \/ (\d+)\)$/, 'Show more ($1 / $2)'], [/^(\d+) finitions?$/, (m, n) => n + (n > 1 ? ' finishes' : ' finish')],
    [/^Renseignez vos coordonnées pour télécharger « (.+) »\.$/, (m, a) => 'Enter your details to download “' + tr(a) + '”.'],
    [/^La documentation s’ouvre sur le site officiel de (.+) dans un nouvel onglet\.$/, 'The documentation opens on the official $1 website in a new tab.'],
    [/^Vos informations sont enregistrées\. Votre document « (.+) » est prêt à être téléchargé\.$/, (m, a) => 'Your details have been saved. Your document “' + tr(a) + '” is ready to download.'],
    [/^Vos informations sont enregistrées\. La documentation de cette pièce est disponible sur le site officiel (.+)\.$/, 'Your details have been saved. The documentation for this piece is available on the official $1 website.'],
    [/^Réf\. (.+)$/, 'Ref. $1'], [/^Pièce signature · (.+)$/, (m, a) => 'Signature piece · ' + tr(a)],
    [/^(.+) · (.+)$/, (m, a, b) => { const x = tr(a), y = tr(b); return (x !== a || y !== b) ? x + ' · ' + y : null; }],
    [/^(.+) à (\d\d:\d\d)$/, (m, a, b) => tr(a) + ' at ' + b],
    [/^(\w+) (\d+) (\S+)$/, (m, a, b, c) => (D[a] && D[c]) ? D[a] + ' ' + b + ' ' + D[c] : null]
  ];
  const norm = (s) => s.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  function tr(s) {
    const k = norm(s);
    if (!k) return s;
    if (D[k] !== undefined) return D[k];
    for (const [re, rep] of RULES) {
      if (re.test(k)) { const r = typeof rep === 'function' ? k.replace(re, rep) : k.replace(re, rep); if (r && r !== 'null' && r !== k) return r; }
    }
    return s;
  }
  const getLang = () => { try { return localStorage.getItem('mizu-lang') || 'fr'; } catch (e) { return 'fr'; } };
  let busy = false;
  function translateNode(n, en) {
    if (n.__set !== undefined && n.nodeValue === n.__set) { /* ours */ } else { n.__fr = n.nodeValue; }
    const fr = n.__fr;
    let out = fr;
    if (en) {
      const t = tr(fr);
      if (t !== fr) { const lead = fr.match(/^\s*/)[0], trail = fr.match(/\s*$/)[0]; out = lead + t + trail; }
    }
    if (n.nodeValue !== out) { n.__set = out; n.nodeValue = out; } else n.__set = out;
  }
  function apply(root) {
    if (busy) return;
    busy = true;
    const en = getLang() === 'en';
    document.documentElement.lang = en ? 'en' : 'fr';
    const r = root || document.body;
    const w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) ? 2 : 1 });
    let n; while ((n = w.nextNode())) if (/[A-Za-zÀ-ÿ]/.test(n.nodeValue)) translateNode(n, en);
    r.querySelectorAll && r.querySelectorAll('[placeholder]').forEach((el) => {
      const cur = el.getAttribute('placeholder');
      if (el.__phSet !== cur) el.__phFr = cur;
      const out = en ? tr(el.__phFr) : el.__phFr;
      el.__phSet = out;
      if (cur !== out) el.setAttribute('placeholder', out);
    });
    busy = false;
    if (window.__mizuMO) window.__mizuMO.takeRecords();
  }
  let raf = 0;
  let last = 0;
  const schedule = () => { if (raf) return; const wait = Math.max(0, 250 - (Date.now() - last)); raf = setTimeout(() => { raf = 0; last = Date.now(); apply(); }, wait); };
  let started = false;
  function start() {
    if (getLang() !== 'en' || started) return;
    started = true;
    apply();
    const mo = new MutationObserver(() => { if (!busy) schedule(); });
    mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['placeholder'] });
    window.__mizuMO = mo;
  }
  window.MIZU_I18N = { tr, apply, getLang };
  window.MIZU_LANG = {
    get: getLang,
    set: (l) => { try { localStorage.setItem('mizu-lang', l); } catch (e) {} window.dispatchEvent(new Event('mizu-lang')); if (l === 'en') start(); apply(); }
  };
  window.addEventListener('storage', (e) => { if (e.key === 'mizu-lang') { window.dispatchEvent(new Event('mizu-lang')); apply(); } });
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
