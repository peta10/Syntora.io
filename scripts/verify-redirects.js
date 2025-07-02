import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the site URL from command line or default to syntora.io
const siteUrl = process.argv[2] || 'syntora.io';

// URLs to test from _redirects file
const urlsToTest = [
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

// Function to check a single URL
function checkUrl(url) {
  return new Promise((resolve) => {
    const options = {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SyntoraRedirectChecker/1.0)'
      }
    };
    
    const fullUrl = `https://${siteUrl}${url}`;
    const req = https.request(fullUrl, options, (res) => {
      const statusCode = res.statusCode;
      console.log(`${fullUrl}: ${statusCode} ${res.statusMessage} ${statusCode === 200 ? '✓' : '✗'}`);
      resolve({
        url: url,
        status: statusCode,
        success: statusCode === 200
      });
    });
    
    req.on('error', (error) => {
      console.error(`Error checking ${fullUrl}: ${error.message}`);
      resolve({
        url: url,
        status: 'Error',
        success: false,
        error: error.message
      });
    });
    
    req.end();
  });
}

// Check all URLs
async function checkAllUrls() {
  console.log(`\nChecking Netlify redirects for ${siteUrl}...\n`);
  
  const results = await Promise.all(urlsToTest.map(url => checkUrl(url)));
  
  // Summarize results
  const successes = results.filter(r => r.success).length;
  const total = results.length;
  
  console.log(`\nResults: ${successes}/${total} routes are correctly serving 200 status codes`);
  
  if (successes < total) {
    console.log('\nErrors detected. Possible causes:');
    console.log('1. _redirects file is not being included in the build');
    console.log('2. netlify.toml is not configured correctly');
    console.log('3. The site is still deploying or has not been deployed since fixes were applied');
    console.log('\nRecommendation: Run "npm run build" and deploy again to Netlify');
  } else {
    console.log('\nAll routes are working correctly! Your SPA redirect configuration is good.');
  }
}

// Run the checks
checkAllUrls(); 