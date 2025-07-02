import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Make sure the dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy _redirects file
try {
  const redirectsSource = path.join(__dirname, '../public/_redirects');
  const redirectsDest = path.join(distDir, '_redirects');
  
  if (fs.existsSync(redirectsSource)) {
    fs.copyFileSync(redirectsSource, redirectsDest);
    console.log('✓ _redirects file successfully copied to dist/');
  } else {
    console.error('× _redirects file not found in public/');
  }
} catch (error) {
  console.error('Error copying _redirects file:', error);
}

// Make sure netlify.toml settings are available
// This is a backup in case the _redirects file doesn't work
console.log('Note: Make sure your netlify.toml is correctly configured in the root directory'); 