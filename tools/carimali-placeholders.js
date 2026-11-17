// TODO(photos) : visuels PROVISOIRES de la maison CARIMALI (produits sur fond crème) en attendant de vraies photos.
const sharp = require('sharp'), path = require('path');
const SRC = 'C:/Users/user/Downloads/LIVRABLE_PRODUITS/CARIMALI/images/', OUT = path.join(__dirname, '../img/');
const CREAM = '#E9E2D8';
const make = async (file, w, h, scale, left, top, dest) => {
  const prod = await sharp(SRC + file).resize({ height: Math.round(768 * scale) }).toBuffer();
  const P = 1600;
  const big = await sharp({ create: { width: w + 2 * P, height: h + 2 * P, channels: 3, background: CREAM } })
    .composite([{ input: prod, left: left + P, top: top + P, blend: 'multiply' }]).png().toBuffer();
  await sharp(big).extract({ left: P, top: P, width: w, height: h }).jpeg({ quality: 80 }).toFile(OUT + dest);
};
(async () => {
  await make('00-0900-CR.jpg', 1920, 1080, 1.45, 600, -20, 'web/carimali-hero.jpg');        // colonne de douche
  await make('23012-CR.jpg', 1200, 1200, 1.3, -25, 160, 'amb/carimali-1.jpg');              // tête de douche
  await make('0-CRW0701-CR.jpg', 1200, 1200, 1.5, -120, 20, 'amb/carimali-2.jpg');          // mitigeur lavabo
})();
