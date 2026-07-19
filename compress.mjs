import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public';
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(dir, file);
      const basename = path.parse(file).name;
      const outputPath = path.join(dir, `${basename}.webp`);
      
      console.log(`Processing ${file}...`);
      try {
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath);
        console.log(`Converted and deleted ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages();
