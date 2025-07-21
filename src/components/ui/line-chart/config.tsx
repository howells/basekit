import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "line-chart",
  name: "Line Chart",
  description: "A line chart for displaying trends and changes over time with multiple data series support.",
  category: "charts" as const,
  badge: "Chart",
  importStatement: `import { LineChart } from "@/components/ui/line-chart";`,
  componentId: "LineChartExample",
  props: [
    {
      name: "showXAxis",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the X-axis.",
    },
    {
      name: "showYAxis",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the Y-axis.",
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
      name: "connectNulls",
      type: "boolean",
      defaultValue: false,
      description: "Whether to connect null values with lines.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic line chart showing trends over time.",
      code: `const data = [
  { month: "Jan", sales: 2400, revenue: 4000 },
  { month: "Feb", sales: 1398, revenue: 3000 },
  { month: "Mar", sales: 9800, revenue: 2000 },
  { month: "Apr", sales: 3908, revenue: 2780 },
  { month: "May", sales: 4800, revenue: 1890 },
  { month: "Jun", sales: 3800, revenue: 2390 },
];

<LineChart
  data={data}
  index="month"
  categories={["sales", "revenue"]}
  colors={["blue", "emerald"]}
  valueFormatter={(value) => \`$\${value}\`}
/>`,
    },
    {
      id: "multiple-lines",
      title: "Multiple Lines",
      description: "Line chart with multiple data series and custom colors.",
      code: `const data = [
  { day: "Mon", users: 120, sessions: 180, pageviews: 450 },
  { day: "Tue", users: 98, sessions: 145, pageviews: 380 },
  { day: "Wed", users: 156, sessions: 220, pageviews: 520 },
  { day: "Thu", users: 134, sessions: 195, pageviews: 480 },
  { day: "Fri", users: 178, sessions: 240, pageviews: 580 },
  { day: "Sat", users: 165, sessions: 210, pageviews: 495 },
  { day: "Sun", users: 142, sessions: 175, pageviews: 420 },
];

<LineChart
  data={data}
  index="day"
  categories={["users", "sessions", "pageviews"]}
  colors={["blue", "emerald", "amber"]}
  valueFormatter={(value) => \`\${value}\`}
  yAxisWidth={60}
/>`,
    },
    {
      id: "with-null-values",
      title: "With Null Values",
      description: "Line chart handling missing data points.",
      code: `const data = [
  { quarter: "Q1", profit: 4000, loss: 2400 },
  { quarter: "Q2", profit: null, loss: 1800 },
  { quarter: "Q3", profit: 2800, loss: null },
  { quarter: "Q4", profit: 3200, loss: 2100 },
];

<LineChart
  data={data}
  index="quarter"
  categories={["profit", "loss"]}
  colors={["emerald", "red"]}
  connectNulls={false}
  valueFormatter={(value) => \`$\${value}\`}
/>`,
    },
    {
      id: "interactive",
      title: "Interactive",
      description: "Line chart with click interactions and legend filtering.",
      code: `const [activeCategory, setActiveCategory] = useState(null);
const data = [
  { month: "Jan", mobile: 1200, desktop: 1800, tablet: 600 },
  { month: "Feb", mobile: 1100, desktop: 1650, tablet: 580 },
  { month: "Mar", mobile: 1350, desktop: 1920, tablet: 720 },
  { month: "Apr", mobile: 1280, desktop: 1780, tablet: 680 },
  { month: "May", mobile: 1420, desktop: 2100, tablet: 760 },
  { month: "Jun", mobile: 1380, desktop: 1950, tablet: 720 },
];

<div className="space-y-4">
  <LineChart
    data={data}
    index="month"
    categories={["mobile", "desktop", "tablet"]}
    colors={["blue", "emerald", "amber"]}
    valueFormatter={(value) => \`\${value} visits\`}
    onValueChange={(value) => setActiveCategory(value)}
  />
  {activeCategory && (
    <div className="text-sm text-zinc-600">
      Selected: {activeCategory.categoryClicked} - {activeCategory.eventType}
    </div>
  )}
</div>`,
    },
    {
      id: "custom-formatting",
      title: "Custom Formatting",
      description: "Line chart with custom value formatters and axis labels.",
      code: `const data = [
  { week: "Week 1", temperature: 22.5, humidity: 65.2 },
  { week: "Week 2", temperature: 25.1, humidity: 58.7 },
  { week: "Week 3", temperature: 23.8, humidity: 72.1 },
  { week: "Week 4", temperature: 27.2, humidity: 61.4 },
];

<LineChart
  data={data}
  index="week"
  categories={["temperature", "humidity"]}
  colors={["red", "blue"]}
  valueFormatter={(value) => \`\${value.toFixed(1)}\`}
  xAxisLabel="Time Period"
  yAxisLabel="Measurements"
/>`,
    },
    {
      id: "minimal",
      title: "Minimal",
      description: "Clean line chart without axes or legend.",
      code: `const data = [
  { x: "A", y: 10 },
  { x: "B", y: 25 },
  { x: "C", y: 15 },
  { x: "D", y: 30 },
  { x: "E", y: 20 },
];

<LineChart
  data={data}
  index="x"
  categories={["y"]}
  colors={["blue"]}
  showXAxis={false}
  showYAxis={false}
  showLegend={false}
  showGridLines={false}
  className="h-24"
/>`,
    },
  ],
};