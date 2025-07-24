import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample, WithFormatterExample, InteractiveExample, WithLinksExample, AnimatedExample, AscendingExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "bar-list",
  name: "BarList",
  description: "A horizontal bar chart component for displaying comparative data with optional interactivity.",
  category: "charts" as const,

  installation: {
    npm: "@base-ui-components/react"
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
        { name: "Paris", value: 100 }
      ],
      description: "Array of data objects with name and value properties."
    },
    {
      name: "valueFormatter",
      type: "function",
      description: "Optional function to format the displayed values."
    },
    {
      name: "showAnimation",
      type: "boolean",
      defaultValue: false,
      description: "Whether to show animation when bars appear."
    },
    {
      name: "sortOrder",
      type: "select",
      options: ["ascending", "descending", "none"],
      defaultValue: "descending",
      description: "How to sort the bars by their values."
    },
    {
      name: "onValueChange",
      type: "function",
      description: "Callback function when a bar is clicked (makes bars interactive)."
    }
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic bar list with default settings.",
      code: jsxToString(<DefaultExample />)},
    {
      id: "with-formatter",
      title: "With Value Formatter",
      description: "Bar list with custom value formatting.",
      code: jsxToString(<WithFormatterExample />)},
    {
      id: "interactive",
      title: "Interactive",
      description: "Clickable bars with hover effects.",
      code: jsxToString(<InteractiveExample />)},
    {
      id: "with-links",
      title: "With Links",
      description: "Bar list items with external links.",
      code: jsxToString(<WithLinksExample />)},
    {
      id: "animated",
      title: "Animated",
      description: "Bar list with smooth animations.",
      code: jsxToString(<AnimatedExample />)},
    {
      id: "ascending",
      title: "Ascending Order",
      description: "Bars sorted in ascending order by value.",
      code: jsxToString(<AscendingExample />)}
  ]
};