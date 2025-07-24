#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to convert camelCase to PascalCase
function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to process a single config file
function processConfigFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  let updatedContent = content;
  let hasChanges = false;

  // Remove render properties entirely to fix Next.js 15 server/client component issues
  updatedContent = updatedContent.replace(
    /,?\s*render:\s*[a-zA-Z0-9_]+,?\s*/g,
    (match) => {
      console.log(`${filePath}: Removing render property: ${match.trim()}`);
      hasChanges = true;
      // If the match starts with a comma, keep it for the next property
      // If it ends with a comma, remove it entirely
      if (match.startsWith(",")) {
        return ",";
      }
      return "";
    }
  );

  // Clean up any double commas that might result from the removal
  updatedContent = updatedContent.replace(/,\s*,/g, ",");

  // Clean up trailing commas before closing braces/brackets
  updatedContent = updatedContent.replace(/,(\s*[\]}])/g, "$1");

  // Write the updated content if changes were made
  if (hasChanges) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  }
  return false;
}

// Function to recursively find all config.tsx files
function findConfigFiles(dir) {
  const configFiles = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === "config.tsx") {
        configFiles.push(fullPath);
      }
    }
  }

  traverse(dir);
  return configFiles;
}

// Main execution
const uiComponentsDir = path.join(__dirname, "..", "src", "components", "ui");

if (!fs.existsSync(uiComponentsDir)) {
  console.error("UI components directory not found:", uiComponentsDir);
  process.exit(1);
}

const configFiles = findConfigFiles(uiComponentsDir);
console.log(`Found ${configFiles.length} config files`);

let processedCount = 0;

configFiles.forEach((filePath) => {
  if (processConfigFile(filePath)) {
    processedCount++;
  }
});

console.log(
  `\nProcessed ${processedCount} files with render property removals`
);
console.log(
  "All render properties have been removed to fix Next.js 15 server/client component issues"
);
