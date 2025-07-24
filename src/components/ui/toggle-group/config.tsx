import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Single, Multiple  } from "./examples";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export const componentConfig: ComponentConfig = {
  id: "toggle-group",
  name: "Toggle Group",
  description: "A group of toggle buttons where one or more can be selected.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group/toggle-group";`,
  componentId: "ToggleGroupExample",
  props: [
    {
      name: "type",
      type: "select",
      options: ["single", "multiple"],
      defaultValue: "single",
      description: "Selection mode - single or multiple."
    },
    {
      name: "defaultValue",
      type: "string",
      description: "The default selected value(s)."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Disable all toggle items."
    }
  ],
  examples: [
    {
      id: "toggle-group",
      title: "Single Selection",
      description: "A group of toggle buttons where one or more can be selected.",
      code: jsxToString(<Single />)},
    {
      id: "multiple",
      title: "Multiple Selection",
      description: "Toggle group with multiple selection",
      code: jsxToString(<Multiple />)}
  ]
};
