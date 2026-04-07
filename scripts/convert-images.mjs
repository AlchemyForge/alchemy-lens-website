import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, '..', 'app', 'assets');

const PNGsToConvert = [
  'hero.png',
  'transmute.png',
  'reveal.png',
  'forge.png',
  'logo-short.png',
  'logo.png',
];

async function convertToWebP(inputPath, outputPath, quality = 80) {
  const info = await sharp(inputPath)
    .webp({ quality })
    .toFile(outputPath);
  return info;
}

async function main() {
  for (const filename of PNGsToConvert) {
    const inputPath = join(assetsDir, filename);
    const outputPath = join(assetsDir, filename.replace('.png', '.webp'));
    
    try {
      const inputStat = await stat(inputPath);
      const result = await convertToWebP(inputPath, outputPath, 80);
      console.log(`✓ ${filename} → ${filename.replace('.png', '.webp')}`);
      console.log(`  ${Math.round(inputStat.size / 1024)}KB → ${Math.round(result.size / 1024)}KB (${Math.round((1 - result.size / inputStat.size) * 100)}% savings)`);
    } catch (err) {
      console.error(`✗ Failed ${filename}: ${err.message}`);
    }
  }
}

main();
