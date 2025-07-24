import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator
} from "./toolbar";

export const componentConfig: ComponentConfig = {
  id: "toolbar",
  name: "Toolbar",
  description: "A container for grouping a set of controls or actions.",
  category: "navigation" as const,
  icon: "Wrench",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator
} from "@/components/ui/toolbar/toolbar";`,
  componentId: "ToolbarExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The orientation of the toolbar."
    },
  ],
  examples: [
    {
      id: "toolbar",
      title: "Basic Toolbar",
      description: "A container for grouping a set of controls or actions.",
      code: jsxToString(<Basic />)}
  ]
};
