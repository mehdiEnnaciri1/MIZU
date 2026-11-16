# MIZU — Architecture (version courte)

Site 100 % statique (FR/EN), sans build ni back-end. Chaque page est un `*.dc.html` interprété dans le navigateur par `support.js` (React 18 + Babel chargés depuis unpkg.com). `<dc-import name="X">` fait un `fetch("./X.dc.html")` : les composants restent à la racine.

## Pages et navigation

| Page | Paramètre d'URL |
|---|---|
| `MIZU Accueil Desktop v2` (header intégré) | — |
| `MIZU Catalogue` | `?m=toto\|bagnodesign\|jeeo` |
| `MIZU Produit` | `?id=<réf encodée>` (ex. `neorest`, `PJY1724HPWEE%23MW`) |
| `MIZU Maison` | `?m=<maison>` |
| `MIZU Recherche` | `?q=<texte>` |
| `MIZU Selection`, `Projets`, `Showroom`, `Technologie`, `Contact` | — |

Composants : `MIZU-Header` (badge sélection, FR/EN), `MIZU-Footer` (newsletter), `MIZU-Carte` (→ `Produit?id=`). Header et Footer lient toutes les pages. Produit mène à Selection via « Demander un devis ». Liens factices : `#whatsapp`, `#instagram`, `#linkedin`, `#facebook`.

## Données

Ordre dans `<helmet>` : `support.js` → `mizu-data.js` (`window.MIZU`, 13 produits démo + 3 maisons, événement `mizu-ready`) → `mizu-catalogue.js` (1,45 Mo, 5 530 produits : BAGNODESIGN 4 769, JEE-O 661, TOTO 100) → `mizu-docs.js` (Produit) → `mizu-i18n.js`.

`window.MIZU` : `all()`, `byId`, `variants`, `docsFor`, `param`, `getSel/setSel/addSel/count`. Images du catalogue : 2 989 sprites locaux, 757 URLs distantes (toto.com, jee-o.com), 1 784 sans image.

## localStorage

| Clé | Contenu |
|---|---|
| `mizu-sel` | sélection `[{id, qty}]` (Selection y met 3 produits de démo si vide) |
| `mizu-lang` | `fr` / `en` |
| `mizu-lead` | dernier lead (préremplit le formulaire) |
| `mizu-leads` | journal des leads, jamais lu |

## Formulaires

| Formulaire | Destination actuelle |
|---|---|
| Produit : modale avant téléchargement d'un document (nom*, e-mail*, tél*, société, ville, consentement*) | localStorage uniquement, puis le fichier est servi. Les fichiers restent publics. |
| Contact, Selection (devis), Showroom (rendez-vous), Newsletter | **Rien n'est envoyé** (affiche « envoyé » seulement). Aucune validation. |

Aucune donnée client n'est donc collectée aujourd'hui.

## Dépendances externes

unpkg.com (React, ReactDOM, Babel : sans lui le site ne s'affiche pas), Google Fonts (Jost, Cormorant Garamond, Noto Sans JP), images distantes TOTO / JEE-O.

## Taille et risques

À déployer : environ 42 Mo (`img/` 20 Mo, `docs/` 20,5 Mo, catalogue 1,45 Mo). Documents : seulement BAGNODESIGN (8 PDF + 7 DWG).
Risques : noms de fichiers avec espaces ; pas de SEO (HTML initial vide) ; catalogue de 1,45 Mo téléchargé à chaque page ; images en hotlink ; desktop uniquement (min 1440 px) ; `data/` et `uploads/` à ne pas publier.

## Lancer en local

`file://` ne marche pas (fetch). Utiliser `npx serve .` puis ouvrir `http://localhost:3000/MIZU%20Accueil%20Desktop%20v2.dc.html`. Régénérer `mizu-docs.js` : `node tools/build-docs.js`.
