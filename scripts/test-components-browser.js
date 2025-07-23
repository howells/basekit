#!/usr/bin/env node

// Component testing script using browser automation
// This script will systematically test all component pages

const COMPONENT_CATEGORIES = {
  ui: [
    "accordion", "alert-dialog", "avatar", "badge", "breadcrumbs", "button", 
    "calendar", "callout", "card", "carousel", "code-block", "collapsible", 
    "combobox", "command", "context-menu", "copy-button", "description-list", 
    "dialog", "divider", "drawer", "empty-state", "grid", "heading", "subheading", 
    "label", "loader", "menu", "menu-bar", "meter", "navbar", "navigation-menu", 
    "pagination", "popover", "preview-card", "progress", "progress-circle", 
    "responsive-drawer", "scroll-area", "separator", "sheet", "sidebar", 
    "skeleton", "split-button", "stack", "stacked-list", "status-dot", 
    "tab-navigation", "table", "tabs", "tag", "text", "toast", "toggle", 
    "toggle-group", "toolbar", "tooltip", "touch-target", "tracker"
  ],
  inputs: [
    "checkbox", "checkbox-group", "date-picker", "date-range-picker", "input", 
    "number-field", "radio", "radio-card-group", "radio-group", "select", 
    "select-native", "slider", "switch", "textarea"
  ],
  forms: ["field", "fieldset", "form"],
  charts: [
    "area-chart", "bar-chart", "bar-list", "category-bar", "combo-chart", 
    "donut-chart", "line-chart", "spark-chart"
  ]
};

// Generate all component URLs to test
function generateTestUrls() {
  const urls = [];
  
  Object.entries(COMPONENT_CATEGORIES).forEach(([category, components]) => {
    components.forEach(component => {
      urls.push({
        category,
        component,
        url: `http://localhost:3000/${category}/${component}`,
        id: `${category}-${component}`
      });
    });
  });
  
  return urls;
}

// Test results tracking
const testResults = {
  passed: [],
  failed: [],
  total: 0,
  startTime: new Date()
};

console.log('🚀 StencilUI Component Testing Suite');
console.log('====================================');

const allUrls = generateTestUrls();
testResults.total = allUrls.length;

console.log(`📋 Total components to test: ${allUrls.length}`);
console.log(`📅 Started at: ${testResults.startTime.toISOString()}`);
console.log('');

// Export the URLs and testing function for use with browser automation
module.exports = {
  COMPONENT_CATEGORIES,
  generateTestUrls,
  testResults,
  
  // Function to test a single component page
  async testComponentPage(browserClient, { category, component, url, id }) {
    console.log(`🔍 Testing: ${category}/${component}`);
    
    try {
      // Navigate to the component page
      await browserClient.navigate(url);
      
      // Wait a moment for the page to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take a screenshot for verification
      await browserClient.screenshot({ name: `${id}-test` });
      
      // Check if page loaded successfully by looking for common elements
      const pageContent = await browserClient.extract('Get the page title and check if there are any error messages visible on the page');
      
      if (pageContent && !pageContent.toLowerCase().includes('error') && !pageContent.toLowerCase().includes('not found')) {
        console.log(`✅ ${component}: Loaded successfully`);
        testResults.passed.push({ category, component, url, id });
        return { success: true, component, category };
      } else {
        console.log(`❌ ${component}: Page load issues detected`);
        testResults.failed.push({ category, component, url, id, error: 'Page load issues' });
        return { success: false, component, category, error: 'Page load issues' };
      }
      
    } catch (error) {
      console.log(`❌ ${component}: Test failed - ${error.message}`);
      testResults.failed.push({ category, component, url, id, error: error.message });
      return { success: false, component, category, error: error.message };
    }
  },
  
  // Function to generate final report
  generateReport() {
    const endTime = new Date();
    const duration = Math.round((endTime - testResults.startTime) / 1000);
    
    console.log('\n' + '='.repeat(80));
    console.log('📊 FINAL TEST RESULTS');
    console.log('='.repeat(80));
    console.log(`⏱️  Duration: ${duration} seconds`);
    console.log(`📋 Total: ${testResults.total}`);
    console.log(`✅ Passed: ${testResults.passed.length}`);
    console.log(`❌ Failed: ${testResults.failed.length}`);
    console.log(`📈 Success Rate: ${Math.round((testResults.passed.length / testResults.total) * 100)}%`);
    
    if (testResults.passed.length > 0) {
      console.log(`\n✅ PASSING COMPONENTS (${testResults.passed.length}):`);
      testResults.passed.forEach(({ category, component }) => {
        console.log(`   • ${category}/${component}`);
      });
    }
    
    if (testResults.failed.length > 0) {
      console.log(`\n❌ FAILING COMPONENTS (${testResults.failed.length}):`);
      testResults.failed.forEach(({ category, component, error }) => {
        console.log(`   • ${category}/${component} - ${error}`);
      });
    }
    
    // Save detailed report
    const fs = require('fs');
    const reportData = {
      timestamp: endTime.toISOString(),
      duration: duration,
      summary: {
        total: testResults.total,
        passed: testResults.passed.length,
        failed: testResults.failed.length,
        successRate: Math.round((testResults.passed.length / testResults.total) * 100)
      },
      results: testResults
    };
    
    fs.writeFileSync('component-test-results.json', JSON.stringify(reportData, null, 2));
    console.log('\n📄 Detailed report saved to: component-test-results.json');
    console.log('='.repeat(80));
    
    return reportData;
  }
};