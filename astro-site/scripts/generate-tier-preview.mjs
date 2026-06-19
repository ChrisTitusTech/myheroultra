import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = path.join(projectRoot, 'public');
const characterDirectory = path.join(projectRoot, 'src/assets/characters');
const sourceFile = path.join(publicDirectory, 'season-17-tier-list-preview.svg');
const outputFile = path.join(publicDirectory, 'season-17-tier-list-preview.png');

const portraitRows = [
  {
    top: 178,
    size: 62,
    leftPositions: [643, 721, 799, 877, 955],
    files: [
      'lady-nagant.webp',
      'izuku-midoriya-ofa.webp',
      'nejire-hado-fairy.webp',
      'tomura-shigaraki-thousand-hand-break.webp',
      'mirio-togata-sheer-counter.webp',
    ],
  },
  {
    top: 314,
    size: 52,
    leftPositions: [643, 711, 779, 847, 915, 983],
    files: [
      'all-might-gatling.webp',
      'all-for-one.webp',
      'fumikage-tokoyami.webp',
      'mirko.webp',
      'katsuki-bakugo-cluster.webp',
      'overhaul-blighted-precipice.webp',
    ],
  },
  {
    top: 440,
    size: 52,
    leftPositions: [643, 711, 779, 847, 915, 983],
    files: [
      'all-might.webp',
      'star-and-stripe.webp',
      'hawks.webp',
      'overhaul.webp',
      'kurogiri.webp',
      'himiko-toga.webp',
    ],
  },
];

const composites = await Promise.all(
  portraitRows.flatMap((row) =>
    row.files.map(async (file, index) => ({
      input: await sharp(path.join(characterDirectory, file))
        .resize({
          width: row.size,
          height: row.size,
          fit: 'contain',
          position: 'center',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer(),
      left: row.leftPositions[index],
      top: row.top,
    })),
  ),
);

await sharp(sourceFile)
  .composite(composites)
  .png({ compressionLevel: 9 })
  .toFile(outputFile);
