# MIZU

Site vitrine du showroom MIZU (salle de bain de luxe, B2B/B2C, FR/EN) : maisons TOTO, BAGNODESIGN et JEE-O.
Site 100 % statique, sans framework ni build.

## Lancer en local

`file://` ne fonctionne pas (les composants sont chargés par `fetch`). Il faut un serveur statique :

```bash
npx serve .
```

Puis ouvrir : `http://localhost:3000/MIZU%20Accueil%20Desktop%20v2.dc.html`

Une connexion internet est nécessaire (React et Babel via unpkg.com, polices Google Fonts).

## Structure

| Élément | Rôle |
|---|---|
| `MIZU *.dc.html` | Pages (Accueil v2, Catalogue, Produit, Maison, Projets, Showroom, Technologie, Contact, Recherche, Selection) |
| `MIZU-Header / Footer / Carte.dc.html` | Composants partagés (`<dc-import>`) |
| `support.js` | Runtime fourni qui interprète les `.dc.html` (**ne pas modifier**) |
| `mizu-data.js` | `window.MIZU` : produits démo, maisons, sélection (localStorage) |
| `mizu-catalogue.js` | Catalogue importé (~5 500 produits) |
| `mizu-docs.js` | Index des fiches techniques (généré) |
| `mizu-i18n.js` | Traduction FR/EN |
| `img/`, `docs/` | Images et documents (PDF, DWG) |
| `data/`, `tools/` | Sources du catalogue et script de génération |

Mettre à jour l'index des documents après ajout de fichiers dans `docs/<maison>/` :

```bash
node tools/build-docs.js
```

## Données

Aucun back-end pour l'instant : sélection, langue et leads sont stockés dans le `localStorage` du navigateur. Les formulaires Contact, Sélection (devis), Showroom et Newsletter n'envoient rien.

## Documentation

Architecture détaillée, flux de données, formulaires et plan de déploiement Vercel / CRM : voir [ARCHITECTURE.md](ARCHITECTURE.md).
