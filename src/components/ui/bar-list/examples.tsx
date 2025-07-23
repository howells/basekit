import React from "react";
import { BarList } from "./bar-list";

// Default bar list
export const DefaultExample = () => (
  <BarList 
    data={[
      { name: "New York", value: 400 },
      { name: "London", value: 300 },
      { name: "Tokyo", value: 200 },
      { name: "Paris", value: 100 },
    ]} 
  />
);

// Bar list with value formatter
export const WithFormatterExample = () => (
  <BarList 
    data={[
      { name: "Revenue", value: 125000 },
      { name: "Expenses", value: 75000 },
      { name: "Profit", value: 50000 },
    ]}
    valueFormatter={(value) => `$${value.toLocaleString()}`}
  />
);

// Interactive bar list
export const InteractiveExample = () => (
  <BarList 
    data={[
      { name: "Product A", value: 85 },
      { name: "Product B", value: 70 },
      { name: "Product C", value: 45 },
    ]}
    onValueChange={(item) => console.log(item)}
  />
);

// Bar list with links
export const WithLinksExample = () => (
  <BarList 
    data={[
      { name: "Documentation", value: 95, href: "https://docs.example.com" },
      { name: "GitHub", value: 80, href: "https://github.com/example" },
      { name: "Website", value: 60, href: "https://example.com" },
    ]}
  />
);

// Animated bar list
export const AnimatedExample = () => (
  <BarList 
    data={[
      { name: "Q1", value: 100 },
      { name: "Q2", value: 150 },
      { name: "Q3", value: 125 },
      { name: "Q4", value: 175 },
    ]}
    showAnimation={true}
  />
);

// Ascending order bar list
export const AscendingExample = () => (
  <BarList 
    data={[
      { name: "Small", value: 25 },
      { name: "Large", value: 100 },
      { name: "Medium", value: 60 },
    ]}
    sortOrder="ascending"
  />
);

// Performance metrics example
export const PerformanceExample = () => (
  <BarList 
    data={[
      { name: "Page Load Time", value: 92 },
      { name: "First Contentful Paint", value: 88 },
      { name: "Time to Interactive", value: 75 },
      { name: "Speed Index", value: 83 },
    ]}
    valueFormatter={(value) => `${value}/100`}
  />
);

// Sales by region
export const SalesByRegionExample = () => (
  <BarList 
    data={[
      { name: "North America", value: 345000 },
      { name: "Europe", value: 287000 },
      { name: "Asia Pacific", value: 198000 },
      { name: "Latin America", value: 123000 },
      { name: "Middle East", value: 89000 },
    ]}
    valueFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
    showAnimation={true}
  />
);

// Percentage values
export const PercentageExample = () => (
  <BarList 
    data={[
      { name: "Completed", value: 85 },
      { name: "In Progress", value: 12 },
      { name: "Not Started", value: 3 },
    ]}
    valueFormatter={(value) => `${value}%`}
  />
);

// No sorting example
export const NoSortingExample = () => (
  <BarList 
    data={[
      { name: "First", value: 50 },
      { name: "Second", value: 80 },
      { name: "Third", value: 30 },
      { name: "Fourth", value: 90 },
      { name: "Fifth", value: 60 },
    ]}
    sortOrder="none"
  />
);