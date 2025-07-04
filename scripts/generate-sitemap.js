/**
 * Sitemap Generator Script
 * 
 * This script generates a sitemap.xml file based on the routes defined in App.tsx
 * Run with: npm run generate-sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Base URL for sitemap
const BASE_URL = 'https://syntora.io';

// Explicit routes to include (in case regex fails)
const EXPLICIT_ROUTES = [
  '/',
  '/time-audit',
  '/contact',
  '/book-a-call',
  '/pricing',
  '/features',
  '/about',
  '/chicago-naperville-automation-services',
  '/privacy-policy',
  '/blog',
  '/blog/n8n-vs-zapier-make',
  '/blog/stop-manual-data-entry',
  '/blog/diy-vs-managed-automation',
  '/blog/chicago-automation-opportunities'
];

// Paths to exclude from sitemap
const EXCLUDED_PATHS = [
  '*', // Exclude the catch-all route for 404 pages
  '/not-found', 
  '/404', 
  '/chat',  // If you don't want chat page indexed
  '/*/not-found', // Generic pattern match
  '/*?*' // URLs with query parameters
];

// Priority and change frequency mappings
const PRIORITY_MAP = {
  '/': 1.0,
  '/pricing': 0.9,
  '/blog': 0.9,
  '/features': 0.8,
  '/about': 0.8,
  '/chicago-naperville-automation-services': 0.8,
  '/time-audit': 0.8,
  '/book-a-call': 0.7,
  '/contact': 0.7,
  '/blog/*': 0.7,
  '/privacy-policy': 0.5
};

const CHANGE_FREQ_MAP = {
  '/': 'daily',
  '/blog': 'weekly',
  '/blog/*': 'monthly',
  '/pricing': 'monthly',
  '/features': 'monthly',
  '/about': 'monthly',
  '/chicago-naperville-automation-services': 'monthly',
  '/time-audit': 'monthly',
  '/book-a-call': 'monthly',
  '/contact': 'yearly',
  '/privacy-policy': 'yearly'
};

/**
 * Extract routes from App.tsx
 */
async function extractRoutesFromApp() {
  try {
    const appPath = path.resolve(__dirname, '../src/App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf8');

    // Regular expression to match route paths in App.tsx
    // This pattern looks for path="..." or path='...' in Route components
    const routeRegex = /Route[^>]*path=["']([^"']+)["']/g;
    const routes = new Set(); // Use Set to avoid duplicates
    
    // Add explicit routes first
    EXPLICIT_ROUTES.forEach(route => routes.add(route));
    
    // Add routes from App.tsx
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      if (!match[1].includes('*')) { // Exclude wildcard routes
        routes.add(match[1]);
      }
    }

    return Array.from(routes);
  } catch (error) {
    console.error('Error extracting routes:', error);
    // Return explicit routes as fallback
    return EXPLICIT_ROUTES;
  }
}

/**
 * Get path information including priority and change frequency
 */
function getPathInfo(path) {
  // Find exact match first
  let priority = PRIORITY_MAP[path];
  let changefreq = CHANGE_FREQ_MAP[path];

  // If no exact match, try wildcard patterns
  if (!priority || !changefreq) {
    for (const pattern of Object.keys(PRIORITY_MAP)) {
      if (pattern.includes('*') && new RegExp('^' + pattern.replace('*', '.*') + '$').test(path)) {
        priority = priority || PRIORITY_MAP[pattern];
        changefreq = changefreq || CHANGE_FREQ_MAP[pattern];
      }
    }
  }

  return {
    priority: priority || 0.5,
    changefreq: changefreq || 'monthly'
  };
}

/**
 * Check if path should be excluded from sitemap
 */
function shouldExcludePath(path) {
  for (const pattern of EXCLUDED_PATHS) {
    if (pattern.includes('*')) {
      const regexPattern = new RegExp('^' + pattern.replace('*', '.*') + '$');
      if (regexPattern.test(path)) {
        return true;
      }
    } else if (path === pattern) {
      return true;
    }
  }
  return false;
}

/**
 * Generate sitemap XML from routes
 */
function generateSitemapXML(routes) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  console.log('Processing routes:', routes); // Debug log
  
  for (const route of routes) {
    if (shouldExcludePath(route)) {
      console.log(`Skipping excluded route: ${route}`); // Debug log
      continue;
    }
    
    const { priority, changefreq } = getPathInfo(route);
    console.log(`Adding route: ${route} (priority: ${priority}, changefreq: ${changefreq})`); // Debug log
    
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('Extracting routes from App.tsx...');
    const routes = await extractRoutesFromApp();
    
    if (routes.length === 0) {
      console.error('No routes found in App.tsx');
      process.exit(1);
    }
    
    console.log(`Found ${routes.length} routes:`, routes); // Debug log
    
    console.log('Generating sitemap.xml...');
    const sitemap = generateSitemapXML(routes);
    
    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    console.log('Writing to:', outputPath); // Debug log
    console.log('Sitemap content:', sitemap); // Debug log
    
    try {
      fs.writeFileSync(outputPath, sitemap, { encoding: 'utf8', flag: 'w' });
      console.log('File written successfully');
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      throw writeError;
    }
    
    // Verify the file was written
    try {
      const written = fs.readFileSync(outputPath, 'utf8');
      console.log('Verification - file contents:', written);
    } catch (readError) {
      console.error('Error verifying file:', readError);
      throw readError;
    }
    
    console.log(`Sitemap generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main(); 