import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const ASSETS_DIR = './client/src/assets';
const QUALITY = 80; // PNG quality
const JPG_QUALITY = 75; // JPG quality

interface FileInfo {
  path: string;
  originalSize: number;
  compressedSize: number;
  compression: number;
}

async function getFileSize(filePath: string): Promise<number> {
  try {
    const stat = await fs.stat(filePath);
    return stat.size;
  } catch {
    return 0;
  }
}

async function compressImage(filePath: string): Promise<FileInfo | null> {
  try {
    const originalSize = await getFileSize(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip small files
    if (originalSize < 100000) { // Skip files under 100KB
      return null;
    }

    let transformer = sharp(filePath);

    if (ext === '.png') {
      transformer = transformer.png({ 
        quality: QUALITY,
        compressionLevel: 9
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      transformer = transformer.jpeg({ 
        quality: JPG_QUALITY,
        progressive: true
      });
    } else {
      return null;
    }

    await transformer.toFile(filePath + '.tmp');
    
    const compressedSize = await getFileSize(filePath + '.tmp');
    
    // Only replace if compression actually helped
    if (compressedSize < originalSize) {
      await fs.rename(filePath + '.tmp', filePath);
      const compression = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
      
      return {
        path: filePath.replace(process.cwd() + '/', ''),
        originalSize,
        compressedSize,
        compression: parseFloat(compression)
      };
    } else {
      // Remove temp file if no improvement
      try {
        await fs.unlink(filePath + '.tmp');
      } catch {}
      return null;
    }
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error);
    return null;
  }
}

async function compressAllImages(): Promise<void> {
  console.log('🖼️  Starting image compression...\n');

  const results: FileInfo[] = [];
  let totalOriginal = 0;
  let totalCompressed = 0;

  async function traverseDir(dir: string): Promise<void> {
    const files = await fs.readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await traverseDir(filePath);
      } else if (['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase())) {
        const result = await compressImage(filePath);
        if (result) {
          results.push(result);
          totalOriginal += result.originalSize;
          totalCompressed += result.compressedSize;
          console.log(`✅ ${path.basename(result.path)}`);
          console.log(`   ${(result.originalSize / 1024).toFixed(1)}K → ${(result.compressedSize / 1024).toFixed(1)}K (${result.compression}% reduction)\n`);
        }
      }
    }
  }

  await traverseDir(ASSETS_DIR);

  if (results.length > 0) {
    console.log('\n📊 Summary:');
    console.log(`Total files compressed: ${results.length}`);
    console.log(`Original total size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Compressed total size: ${(totalCompressed / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Overall reduction: ${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}%`);
    console.log(`Space saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)}MB`);
  } else {
    console.log('No images needed compression or all are already optimized.');
  }
}

compressAllImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
