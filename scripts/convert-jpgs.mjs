import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, '..', 'app', 'assets');

const JPGsToConvert = [
  '68ded4c98e130e416f7fb1c1_field team-p-500.jpg',
  'insights.jpg',
  'strategy.jpg',
  'josh.jpg',
  'dom.jpg',
  'michael.jpg',
  'daniel.jpg',
];

async function convertToWebP(inputPath, outputPath, quality = 80) {
  const info = await sharp(inputPath)
    .webp({ quality })
    .toFile(outputPath);
  return info;
}

async function main() {
  for (const filename of JPGsToConvert) {
    const inputPath = join(assetsDir, filename);
    const ext = extname(filename);
    const outputPath = join(assetsDir, filename.replace(ext, '.webp'));
    
    try {
      const inputStat = await stat(inputPath);
      const result = await convertToWebP(inputPath, outputPath, 80);
      console.log(`✓ ${filename} → ${basename(outputPath)}`);
      console.log(`  ${Math.round(inputStat.size / 1024)}KB → ${Math.round(result.size / 1024)}KB (${Math.round((1 - result.size / inputStat.size) * 100)}% savings)`);
    } catch (err) {
      console.error(`✗ Failed ${filename}: ${err.message}`);
    }
  }
}

main();
