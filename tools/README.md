# Outils d'import (dev uniquement)

`npm install` dans ce dossier, puis `npm run import:carimali` : télécharge/convertit les images
(`img/carimali/`, `data/carimali-imgmap.json`) puis régénère les lignes CARIMALI de `mizu-catalogue.js`
et `mizu-i18n-carimali.js`. Idempotent (les lignes CARIMALI sont remplacées, pas dupliquées).

Entrées : `data/CARIMALI.xlsx` (versionné) et `data/carimali-translations.json` (cache FR/EN, par gabarit de phrase).
Si le fichier Excel contient des textes nouveaux, l'import s'arrête sur « traduction manquante » :
ajouter les gabarits manquants dans `data/carimali-translations.json` (`{n:{gabarit:[fr,en]}, s:{…}}`, nombres remplacés par `#`).

Documents Carimali (PDF, STP… ~4 Go) : non versionnés, hors dépôt (dossier livrable `LIVRABLE_PRODUITS/CARIMALI/documents`).
`carimali-placeholders.js` génère les visuels provisoires de la maison (TODO photos).
