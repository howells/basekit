#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to convert camelCase to PascalCase
function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to process a single config file
function processConfigFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let hasChanges = false;
  
  // Update import statements - convert camelCase imports to PascalCase
  updatedContent = updatedContent.replace(
    /import\s*\{\s*([^}]+)\s*\}\s*from\s*"\.\/examples"/g,
    (match, imports) => {
      const updatedImports = imports
        .split(',')
        .map(imp => {
          const trimmed = imp.trim();
          // Only convert if it starts with lowercase (camelCase)
          if (/^[a-z]/.test(trimmed)) {
            const pascalCase = toPascalCase(trimmed);
            console.log(`${filePath}: Import ${trimmed} → ${pascalCase}`);
            hasChanges = true;
            return pascalCase;
          }
          return trimmed;
        })
        .join(', ');
      
      return `import { ${updatedImports} } from "./examples"`;
    }
  );
  
  // Update jsxToString calls - convert function calls to JSX components
  updatedContent = updatedContent.replace(
    /jsxToString\(([a-z][a-zA-Z0-9]*)\(\)\)/g,
    (match, functionName) => {
      const pascalCase = toPascalCase(functionName);
      console.log(`${filePath}: jsxToString(${functionName}()) → jsxToString(<${pascalCase} />)`);
      hasChanges = true;
      return `jsxToString(<${pascalCase} />)`;
    }
  );
  
  // Also handle cases where the function name was already PascalCase but still called as function
  updatedContent = updatedContent.replace(
    /jsxToString\(([A-Z][a-zA-Z0-9]*)\(\)\)/g,
    (match, functionName) => {
      console.log(`${filePath}: jsxToString(${functionName}()) → jsxToString(<${functionName} />)`);
      hasChanges = true;
      return `jsxToString(<${functionName} />)`;
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

console.log(`Found ${configFiles.length} config files to process:\n`);

let updatedCount = 0;
configFiles.forEach(file => {
  console.log(`Processing: ${file}`);
  if (processConfigFile(file)) {
    updatedCount++;
  }
  console.log('');
});

console.log(`\nSummary: Updated ${updatedCount} config files.`);