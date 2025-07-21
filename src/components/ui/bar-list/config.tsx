import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "bar-list",
  name: "BarList",
  description: "A horizontal bar chart component for displaying comparative data with optional interactivity.",
  category: "charts" as const,
  badge: "Chart",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { BarList } from "@/components/ui/bar-list";`,
  componentId: "BarListExample",
  props: [
    {
      name: "data",
      type: "object",
      defaultValue: [
        { name: "New York", value: 400 },
        { name: "London", value: 300 },
        { name: "Tokyo", value: 200 },
        { name: "Paris", value: 100 },
      ],
      description: "Array of data objects with name and value properties.",
    },
    {
      name: "valueFormatter",
      type: "function",
      description: "Optional function to format the displayed values.",
    },
    {
      name: "showAnimation",
      type: "boolean",
      defaultValue: false,
      description: "Whether to show animation when bars appear.",
    },
    {
      name: "sortOrder",
      type: "select",
      options: ["ascending", "descending", "none"],
      defaultValue: "descending",
      description: "How to sort the bars by their values.",
    },
    {
      name: "onValueChange",
      type: "function",
      description: "Callback function when a bar is clicked (makes bars interactive).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic bar list with default settings.",
      code: `<BarList 
  data={[
    { name: "New York", value: 400 },
    { name: "London", value: 300 },
    { name: "Tokyo", value: 200 },
    { name: "Paris", value: 100 },
  ]} 
/>`,
    },
    {
      id: "with-formatter",
      title: "With Value Formatter",
      description: "Bar list with custom value formatting.",
      code: `<BarList 
  data={[
    { name: "Revenue", value: 125000 },
    { name: "Expenses", value: 75000 },
    { name: "Profit", value: 50000 },
  ]}
  valueFormatter={(value) => \`$\${value.toLocaleString()}\`}
/>`,
    },
    {
      id: "interactive",
      title: "Interactive",
      description: "Clickable bars with hover effects.",
      code: `<BarList 
  data={[
    { name: "Product A", value: 85 },
    { name: "Product B", value: 70 },
    { name: "Product C", value: 45 },
  ]}
  onValueChange={(item) => console.log(item)}
/>`,
    },
    {
      id: "with-links",
      title: "With Links",
      description: "Bar list items with external links.",
      code: `<BarList 
  data={[
    { name: "Documentation", value: 95, href: "https://docs.example.com" },
    { name: "GitHub", value: 80, href: "https://github.com/example" },
    { name: "Website", value: 60, href: "https://example.com" },
  ]}
/>`,
    },
    {
      id: "animated",
      title: "Animated",
      description: "Bar list with smooth animations.",
      code: `<BarList 
  data={[
    { name: "Q1", value: 100 },
    { name: "Q2", value: 150 },
    { name: "Q3", value: 125 },
    { name: "Q4", value: 175 },
  ]}
  showAnimation={true}
/>`,
    },
    {
      id: "ascending",
      title: "Ascending Order",
      description: "Bars sorted in ascending order by value.",
      code: `<BarList 
  data={[
    { name: "Small", value: 25 },
    { name: "Large", value: 100 },
    { name: "Medium", value: 60 },
  ]}
  sortOrder="ascending"
/>`,
    },
  ],
};