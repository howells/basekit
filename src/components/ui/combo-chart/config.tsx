import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "combo-chart",
  name: "Combo Chart",
  description: "A combination chart that displays both bar and line charts in a single visualization with shared or separate Y-axes.",
  category: "charts" as const,
  badge: "Chart",
  importStatement: `import { ComboChart } from "@/components/ui/combo-chart";`,
  componentId: "ComboChartExample",
  props: [
    {
      name: "showXAxis",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the X-axis.",
    },
    {
      name: "showLegend",
      type: "boolean", 
      defaultValue: true,
      description: "Whether to show the legend.",
    },
    {
      name: "showTooltip",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show tooltips on hover.",
    },
    {
      name: "showGridLines",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show grid lines.",
    },
    {
      name: "enableBiaxial",
      type: "boolean", 
      defaultValue: false,
      description: "Whether to enable separate Y-axes for bar and line series.",
    },
    {
      name: "enableLegendSlider",
      type: "boolean",
      defaultValue: false,
      description: "Whether to enable scrollable legend for many categories.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic combo chart with bars and lines sharing the same Y-axis.",
      code: `const data = [
  { month: "Jan", sales: 4000, visitors: 2400 },
  { month: "Feb", sales: 3000, visitors: 1398 },
  { month: "Mar", sales: 2000, visitors: 9800 },
  { month: "Apr", sales: 2780, visitors: 3908 },
  { month: "May", sales: 1890, visitors: 4800 },
  { month: "Jun", sales: 2390, visitors: 3800 },
];

<ComboChart
  data={data}
  index="month"
  barSeries={{
    categories: ["sales"],
    colors: ["blue"],
    valueFormatter: (value) => \`$\${value}\`,
  }}
  lineSeries={{
    categories: ["visitors"],
    colors: ["emerald"],
    valueFormatter: (value) => \`\${value}\`,
  }}
/>`,
    },
    {
      id: "biaxial",
      title: "Biaxial (Dual Y-Axis)",
      description: "Combo chart with separate Y-axes for different data scales.",
      code: `const data = [
  { month: "Jan", revenue: 4000, conversionRate: 2.4 },
  { month: "Feb", revenue: 3000, conversionRate: 1.3 },
  { month: "Mar", revenue: 2000, conversionRate: 4.8 },
  { month: "Apr", revenue: 2780, conversionRate: 3.9 },
  { month: "May", revenue: 1890, conversionRate: 4.2 },
  { month: "Jun", revenue: 2390, conversionRate: 3.1 },
];

<ComboChart
  data={data}
  index="month"
  enableBiaxial
  barSeries={{
    categories: ["revenue"],
    colors: ["blue"],
    valueFormatter: (value) => \`$\${value}\`,
    yAxisLabel: "Revenue ($)",
  }}
  lineSeries={{
    categories: ["conversionRate"],
    colors: ["emerald"],
    valueFormatter: (value) => \`\${value}%\`,
    yAxisLabel: "Conversion Rate (%)",
  }}
/>`,
    },
    {
      id: "stacked-bars",
      title: "Stacked Bars with Line",
      description: "Combo chart with stacked bars and line overlay.",
      code: `const data = [
  { quarter: "Q1", desktop: 2400, mobile: 1600, totalUsers: 5200 },
  { quarter: "Q2", desktop: 1398, mobile: 2200, totalUsers: 4800 },
  { quarter: "Q3", desktop: 9800, mobile: 3400, totalUsers: 15600 },
  { quarter: "Q4", desktop: 3908, mobile: 2800, totalUsers: 8200 },
];

<ComboChart
  data={data}
  index="quarter"
  barSeries={{
    categories: ["desktop", "mobile"],
    type: "stacked",
    colors: ["blue", "emerald"],
    valueFormatter: (value) => \`\${value}\`,
    yAxisLabel: "Sessions",
  }}
  lineSeries={{
    categories: ["totalUsers"],
    colors: ["red"],
    valueFormatter: (value) => \`\${value}\`,
  }}
/>`,
    },
    {
      id: "multiple-lines",
      title: "Multiple Lines with Bar",
      description: "Single bar series with multiple line series.",
      code: `const data = [
  { week: "W1", orders: 120, newUsers: 45, returningUsers: 78 },
  { week: "W2", orders: 98, newUsers: 38, returningUsers: 65 },
  { week: "W3", orders: 156, newUsers: 62, returningUsers: 94 },
  { week: "W4", orders: 134, newUsers: 54, returningUsers: 87 },
  { week: "W5", orders: 178, newUsers: 71, returningUsers: 102 },
];

<ComboChart
  data={data}
  index="week"
  barSeries={{
    categories: ["orders"],
    colors: ["blue"],
    valueFormatter: (value) => \`\${value}\`,
  }}
  lineSeries={{
    categories: ["newUsers", "returningUsers"],
    colors: ["emerald", "amber"],
    valueFormatter: (value) => \`\${value}\`,
  }}
/>`,
    },
    {
      id: "interactive",
      title: "Interactive",
      description: "Combo chart with click interactions and legend filtering.",
      code: `const [selectedCategory, setSelectedCategory] = useState(null);
const data = [
  { month: "Jan", sales: 4000, leads: 240, customers: 120 },
  { month: "Feb", sales: 3000, leads: 139, customers: 98 },
  { month: "Mar", sales: 2000, leads: 380, customers: 156 },
  { month: "Apr", sales: 2780, leads: 309, customers: 134 },
  { month: "May", sales: 1890, leads: 400, customers: 178 },
  { month: "Jun", sales: 2390, leads: 280, customers: 165 },
];

<div className="space-y-4">
  <ComboChart
    data={data}
    index="month"
    barSeries={{
      categories: ["sales"],
      colors: ["blue"],
      valueFormatter: (value) => \`$\${value}\`,
    }}
    lineSeries={{
      categories: ["leads", "customers"],
      colors: ["emerald", "amber"],
      valueFormatter: (value) => \`\${value}\`,
    }}
    onValueChange={(value) => setSelectedCategory(value)}
  />
  {selectedCategory && (
    <div className="text-sm text-zinc-600">
      Selected: {selectedCategory.categoryClicked} - {selectedCategory.eventType}
    </div>
  )}
</div>`,
    },
    {
      id: "custom-formatting",
      title: "Custom Formatting",
      description: "Combo chart with custom value formatters and labels.",
      code: `const data = [
  { product: "Product A", units: 1200, revenue: 24000 },
  { product: "Product B", units: 800, revenue: 19200 },
  { product: "Product C", units: 1500, revenue: 18000 },
  { product: "Product D", units: 950, revenue: 22800 },
  { product: "Product E", units: 1100, revenue: 26400 },
];

<ComboChart
  data={data}
  index="product"
  xAxisLabel="Product Categories"
  barSeries={{
    categories: ["units"],
    colors: ["blue"],
    valueFormatter: (value) => \`\${value.toLocaleString()} units\`,
    yAxisLabel: "Units Sold",
  }}
  lineSeries={{
    categories: ["revenue"],
    colors: ["emerald"],
    valueFormatter: (value) => \`$\${(value / 1000).toFixed(1)}K\`,
  }}
  enableBiaxial
  legendPosition="center"
/>`,
    },
  ],
};