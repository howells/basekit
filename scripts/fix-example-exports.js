#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to convert camelCase to PascalCase
function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all camelCase exports and convert them to PascalCase
  const updatedContent = content.replace(
    /export const ([a-z][a-zA-Z0-9]*) = /g,
    (match, varName) => {
      const pascalCase = toPascalCase(varName);
      console.log(`${filePath}: ${varName} → ${pascalCase}`);
      return `export const ${pascalCase} = `;
    }
  );
  
  // Only write if changes were made
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  }
  return false;
}

// Find all problematic files
const { execSync } = require('child_process');
const problematicFiles = execSync('find src/components/ui -name "examples.tsx" -exec grep -l "export const [a-z]" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${problematicFiles.length} files to update:\n`);

let updatedCount = 0;
problematicFiles.forEach(file => {
  console.log(`Processing: ${file}`);
  if (processFile(file)) {
    updatedCount++;
  }
  console.log('');
});

console.log(`\nSummary: Updated ${updatedCount} files with PascalCase exports.`);