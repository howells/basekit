import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "spark-chart",
  name: "Spark Chart", 
  description: "A compact line chart for displaying trends and patterns in small spaces, perfect for dashboard widgets.",
  category: "charts" as const,
  badge: "Chart",
  importStatement: `import { SparkChart } from "@/components/ui/spark-chart";`,
  componentId: "SparkChartExample",
  props: [
    {
      name: "type",
      type: "select",
      options: ["line", "bar"],
      defaultValue: "line",
      description: "The type of spark chart to display.",
    },
    {
      name: "showTooltip",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show tooltips on hover.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic spark line chart showing a trend.",
      code: `const data = [
  { day: 1, value: 10 },
  { day: 2, value: 25 },
  { day: 3, value: 15 },
  { day: 4, value: 30 },
  { day: 5, value: 20 },
  { day: 6, value: 35 },
  { day: 7, value: 28 },
];

<SparkChart
  data={data}
  index="day"
  categories={["value"]}
  colors={["blue"]}
/>`,
    },
    {
      id: "bar-variant",
      title: "Bar Variant",
      description: "Spark chart displayed as bars instead of lines.",
      code: `const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 350 },
  { month: "May", sales: 700 },
];

<SparkChart
  data={data}
  index="month"
  categories={["sales"]}
  colors={["emerald"]}
  type="bar"
/>`,
    },
    {
      id: "different-colors",
      title: "Different Colors",
      description: "Spark charts with various color themes.",
      code: `const data = [
  { x: 1, y: 20 },
  { x: 2, y: 35 },
  { x: 3, y: 25 },
  { x: 4, y: 40 },
  { x: 5, y: 30 },
];

<div className="flex gap-4">
  <SparkChart
    data={data}
    index="x"
    categories={["y"]}
    colors={["red"]}
    className="h-12 w-20"
  />
  <SparkChart
    data={data}
    index="x"
    categories={["y"]}
    colors={["emerald"]}
    className="h-12 w-20"
  />
  <SparkChart
    data={data}
    index="x"
    categories={["y"]}
    colors={["amber"]}
    className="h-12 w-20"
  />
</div>`,
    },
  ],
};