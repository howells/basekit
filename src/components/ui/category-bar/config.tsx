import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "category-bar",
  name: "CategoryBar",
  description:
    "A category bar chart component for displaying segmented data with optional labels and markers.",
  category: "charts" as const,
  badge: "Chart",
  importStatement: `import { CategoryBar } from "@/components/ui/category-bar";`,
  componentId: "CategoryBarExample",
  props: [
    {
      name: "values",
      type: "array",
      defaultValue: [40, 30, 20, 10],
      description: "Array of numeric values for each category segment.",
      required: true,
    },
    {
      name: "showLabels",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show numeric labels above the bar.",
    },
    {
      name: "showMarker",
      type: "boolean",
      defaultValue: false,
      description: "Whether to show a marker indicator on the bar.",
    },
    {
      name: "markerValue",
      type: "number",
      defaultValue: 50,
      min: 0,
      max: 100,
      description: "The value position for the marker (when enabled).",
    },
    {
      name: "markerTooltip",
      type: "string",
      defaultValue: "Target: 50",
      description: "Tooltip text for the marker.",
    },
    {
      name: "showMarkerAnimation",
      type: "boolean",
      defaultValue: true,
      description: "Whether to animate marker position changes.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic category bar with labels.",
      code: `<CategoryBar values={[40, 30, 20, 10]} />`,
    },
    {
      id: "with-marker",
      title: "With Marker",
      description: "Category bar with a target marker.",
      code: `<CategoryBar
  values={[40, 30, 20, 10]}
  marker={{
    value: 50,
    tooltip: "Target: 50",
    showAnimation: true
  }}
/>`,
    },
    {
      id: "no-labels",
      title: "No Labels",
      description: "Category bar without numeric labels.",
      code: `<CategoryBar values={[25, 35, 25, 15]} showLabels={false} />`,
    },
    {
      id: "uneven-distribution",
      title: "Uneven Distribution",
      description: "Category bar with varying segment sizes.",
      code: `<CategoryBar values={[60, 15, 15, 10]} />`,
    },
    {
      id: "many-categories",
      title: "Many Categories",
      description: "Category bar with multiple small segments.",
      code: `<CategoryBar values={[20, 18, 16, 14, 12, 10, 8, 2]} />`,
    },
  ],
};
