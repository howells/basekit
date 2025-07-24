import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import {
  AnimatedExample,
  ColorsExample,
  DefaultExample,
  SizesExample,
  WithLabelsExample,
} from "./examples";

export const componentConfig: ComponentConfig = {
  id: "status-dot",
  name: "Status Dot",
  description: "A small dot indicator to show status or state.",
  category: "feedback" as const,
  icon: "Circle",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { StatusDot } from "@/components/ui/status-dot/status-dot";`,
  componentId: "StatusDotExample",
  props: [
    {
      name: "variant",
      type: "select",
      description: "Status variant",
      options: [
        "default",
        "neutral",
        "success",
        "info",
        "warning",
        "error",
        "critical",
        "positive",
        "negative",
        "purple",
        "pink",
        "rose",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "fuchsia",
      ],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "select",
      description: "Size of the status dot",
      options: ["sm", "default", "lg"],
      defaultValue: "default",
    },
    {
      name: "animated",
      type: "boolean",
      description: "Whether the dot should animate",
      defaultValue: false,
    },
    {
      name: "label",
      type: "string",
      description: "Optional text label to display next to the dot",
      defaultValue: "",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Status Dots",
      description: "Status dots in different variants",
      code: jsxToString(<DefaultExample />),
    },
    {
      id: "with-labels",
      title: "Status Dots with Labels",
      description: "Status indicators with text labels",
      code: jsxToString(<WithLabelsExample />),
    },
    {
      id: "colors",
      title: "Color Variants",
      description: "Status dots in various colors",
      code: jsxToString(<ColorsExample />),
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Status dots in various sizes",
      code: jsxToString(<SizesExample />),
    },
    {
      id: "animated",
      title: "Animated Status Dots",
      description: "Animated status indicators",
      code: jsxToString(<AnimatedExample />),
    },
  ],
};
