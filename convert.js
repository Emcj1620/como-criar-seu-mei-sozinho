import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/images';
const files = ['ebook-mockup.png', 'ebook-insides.png', 'specialist.png'];

files.forEach(file => {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace('.png', '.webp'));
  
  if (fs.existsSync(input)) {
    sharp(input)
      .webp({ quality: 85 })
      .toFile(output)
      .then(() => {
        console.log(`Converted ${file} to WebP successfully!`);
        // Delete the original PNG to save space and avoid bundling unused files
        fs.unlinkSync(input);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  } else {
    console.warn(`Input file not found: ${input}`);
  }
});
