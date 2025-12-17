import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const QUALITY = 80;
const MAX_WIDTH = 1200;

async function optimizeImage(inputPath: string): Promise<void> {
  const stats = fs.statSync(inputPath);
  const fileSizeKB = stats.size / 1024;
  
  if (fileSizeKB < 200) {
    console.log(`Skipping ${inputPath} (already small: ${fileSizeKB.toFixed(0)}KB)`);
    return;
  }
  
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, undefined, { withoutEnlargement: true });
    }
    
    const outputBuffer = ext === '.png' 
      ? await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer()
      : await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    
    const newSizeKB = outputBuffer.length / 1024;
    
    if (newSizeKB < fileSizeKB * 0.9) {
      fs.writeFileSync(inputPath, outputBuffer);
      console.log(`Optimized ${inputPath}: ${fileSizeKB.toFixed(0)}KB -> ${newSizeKB.toFixed(0)}KB`);
    } else {
      console.log(`Skipping ${inputPath} (no significant reduction)`);
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function walkDir(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function main() {
  const dirs = ['client/src/assets', 'attached_assets'];
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    
    console.log(`\nOptimizing images in ${dir}...`);
    const files = await walkDir(dir);
    
    for (const file of files) {
      await optimizeImage(file);
    }
  }
  
  console.log('\nImage optimization complete!');
}

main().catch(console.error);
