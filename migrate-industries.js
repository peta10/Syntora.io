/**
 * This script automates the migration of industries from timeAuditData.ts to individual files
 * 
 * To use:
 * 1. Run with Node.js: node migrate-industries.js
 * 2. It will extract industries from src/data/timeAuditData.ts
 * 3. For each industry, it creates a file in src/data/timeAudit/industries/{id}.ts
 * 4. It then updates src/data/timeAudit/allIndustries.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SOURCE_FILE = path.join(__dirname, 'src', 'data', 'timeAuditData.ts');
const TARGET_DIR = path.join(__dirname, 'src', 'data', 'timeAudit', 'industries');
const ALL_INDUSTRIES_FILE = path.join(__dirname, 'src', 'data', 'timeAudit', 'allIndustries.ts');

// Check if source file exists
if (!fs.existsSync(SOURCE_FILE)) {
  console.error(`Source file not found: ${SOURCE_FILE}`);
  process.exit(1);
}

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`Created directory: ${TARGET_DIR}`);
}

// Read the source file
let sourceCode = fs.readFileSync(SOURCE_FILE, 'utf8');

// Extract industries array
const industriesMatch = sourceCode.match(/export const industries: Industry\[] = \[([^]*?)\];/);
if (!industriesMatch) {
  console.error('Could not find industries array in source file');
  process.exit(1);
}

const industriesCode = industriesMatch[1];

// Parse individual industries
const industryRegex = /{\s*id: ['"](.+?)['"],\s*label: ['"](.+?)['"],\s*icon: (\w+),\s*sections: \[\s*([^]*?)\s*\]\s*}/g;
const industries = [];
let match;

while ((match = industryRegex.exec(industriesCode)) !== null) {
  const [fullMatch, id, label, icon, sectionsCode] = match;
  
  // Further parse sections
  const sections = parseSections(sectionsCode);
  
  industries.push({
    id,
    label,
    icon,
    sections,
    fullMatch
  });
}

console.log(`Found ${industries.length} industries in source file`);

// Track migrated industries
const migratedIndustries = [];

// Iterate through industries and create files
for (const industry of industries) {
  const { id, label, icon, sections, fullMatch } = industry;
  
  // Skip industries that have already been migrated
  const targetFile = path.join(TARGET_DIR, `${id}.ts`);
  if (fs.existsSync(targetFile)) {
    console.log(`Skipping existing file: ${targetFile}`);
    migratedIndustries.push({ id, icon });
    continue;
  }
  
  // Create the individual industry file
  const fileContent = generateIndustryFile(id, label, icon, sections);
  fs.writeFileSync(targetFile, fileContent);
  console.log(`Created file: ${targetFile}`);
  
  migratedIndustries.push({ id, icon });
}

// Update allIndustries.ts
updateAllIndustriesFile(migratedIndustries);

console.log('Migration completed successfully');

// Helper functions

// Parse sections from the source code
function parseSections(sectionsCode) {
  return sectionsCode;
}

// Generate the content for an industry file
function generateIndustryFile(id, label, icon, sectionsCode) {
  return `import { ${icon} } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const ${id.replace(/[^a-zA-Z0-9_]/g, '_')}Sections: Section[] = [
${sectionsCode}
];

const ${id.replace(/[^a-zA-Z0-9_]/g, '_')}: Industry = {
  id: '${id}',
  label: '${label}',
  icon: ${icon},
  sections: ${id.replace(/[^a-zA-Z0-9_]/g, '_')}Sections
};

export default ${id.replace(/[^a-zA-Z0-9_]/g, '_')};`;
}

// Update the allIndustries.ts file
function updateAllIndustriesFile(migratedIndustries) {
  // Generate imports
  const imports = migratedIndustries
    .map(({ id }) => `import ${id.replace(/[^a-zA-Z0-9_]/g, '_')} from './industries/${id}';`)
    .join('\n');
  
  // Generate import icons that are not used yet
  const allIcons = new Set(migratedIndustries.map(i => i.icon));
  const iconImports = `import {
  ${Array.from(allIcons).join(', ')}
} from "lucide-react";`;
  
  // Generate industry list
  const industryList = migratedIndustries
    .map(({ id }) => `  ${id.replace(/[^a-zA-Z0-9_]/g, '_')},`)
    .join('\n');
  
  // Create the file content
  const content = `// Import all industry modules
${imports}

// Import lucide icons
${iconImports}

// Export all imported industries as a single array
const allIndustries = [
${industryList}
  // Other industries will be added as they're migrated to separate files
];

export default allIndustries;`;
  
  fs.writeFileSync(ALL_INDUSTRIES_FILE, content);
  console.log(`Updated file: ${ALL_INDUSTRIES_FILE}`);
} 