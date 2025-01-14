import { copyFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyStyles() {
  try {
    // Ensure dist directory exists
    await mkdir(`${__dirname}/../dist`, { recursive: true });
    
    // Copy styles.css to dist folder
    await copyFile(
      `${__dirname}/../src/styles.css`,
      `${__dirname}/../dist/styles.css`
    );
    
    console.log('✅ Styles copied successfully');
  } catch (error) {
    console.error('❌ Error copying styles:', error);
    process.exit(1);
  }
}

copyStyles(); 