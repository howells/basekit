// Configuration data - no React imports or JSX
import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import {
  BorderedExample,
  DefaultExample,
  SizesExample,
  VariantsExample,
  WithIconsExample
} from "./examples";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "badge",
  name: "Badge",
  description: "A label used to show a status or category.",
  category: "feedback" as const,

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Badge } from "@/components/ui/badge";`,
  componentId: "BadgeExample",

  // Props that users can experiment with
  props: [
    {
      name: "variant",
      type: "select",
      description: "The visual style variant of the badge.",
      defaultValue: "default",
      options: ["default", "neutral", "success", "error", "warning"]
    },
    {
      name: "size",
      type: "select",
      description: "The size of the badge.",
      defaultValue: "base",
      options: ["sm", "base", "lg"]
    },
    {
      name: "bordered",
      type: "boolean",
      description: "Whether to display a border around the badge.",
      defaultValue: true
    },
    {
      name: "leftIcon",
      type: "icon",
      description: "Icon component to display on the left side."
    },
    {
      name: "rightIcon",
      type: "icon",
      description: "Icon component to display on the right side."
    },
    {
      name: "children",
      type: "string",
      description: "The content to display inside the badge.",
      defaultValue: "Badge"
    }
  ],

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic badge with default styling.",
      code: jsxToString(<DefaultExample />)},
    {
      id: "with-icons",
      title: "With Icons",
      description: "Badge with left and right icons.",
      code: jsxToString(<WithIconsExample />)},
    {
      id: "variants",
      title: "Variants",
      description: "Different badge variants for various states.",
      code: jsxToString(<VariantsExample />)},
    {
      id: "sizes",
      title: "Sizes",
      description: "Different badge sizes.",
      code: jsxToString(<SizesExample />)},
    {
      id: "bordered",
      title: "Bordered",
      description: "Badge with and without borders.",
      code: jsxToString(<BorderedExample />)}
  ]
};
