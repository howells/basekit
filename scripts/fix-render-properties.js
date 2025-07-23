#!/usr/bin/env node

const fs = require('fs');

// Function to convert camelCase to PascalCase
function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to process a single config file
function processConfigFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let hasChanges = false;
  
  // Update render properties - convert camelCase references to PascalCase
  updatedContent = updatedContent.replace(
    /render:\s*([a-z][a-zA-Z0-9]*),/g,
    (match, varName) => {
      const pascalCase = toPascalCase(varName);
      console.log(`${filePath}: render: ${varName} → render: ${pascalCase}`);
      hasChanges = true;
      return `render: ${pascalCase},`;
    }
  );
  
  // Write the updated content if changes were made
  if (hasChanges) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  }
  return false;
}

// Find all config files
const { execSync } = require('child_process');
const configFiles = execSync('find src/components/ui -name "config.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${configFiles.length} config files to check:\n`);

let updatedCount = 0;
configFiles.forEach(file => {
  console.log(`Checking: ${file}`);
  if (processConfigFile(file)) {
    updatedCount++;
  }
});

console.log(`\nSummary: Updated ${updatedCount} config files with render property fixes.`);