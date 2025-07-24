import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultLabelExample, RequiredFieldExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "label",
  name: "Label",
  description: "A label component for form inputs and interactive elements with proper accessibility support.",
  category: "forms" as const,
  badge: "Forms",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Label } from "@/components/ui/label/label";`,
  componentId: "LabelExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: "Label text",
      description: "The label content."
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: false,
      description: "Show required indicator."
    },
    {
      name: "htmlFor",
      type: "string",
      description: "Associates the label with a form control."
    }
  ],
  examples: [
    {
      id: "label",
      title: "Default",
      description: "A label component for form inputs and interactive elements with proper accessibility support.",
      code: jsxToString(<DefaultLabelExample />)},
    {
      id: "required",
      title: "Required Field",
      description: "Label indicating a required field.",
      code: jsxToString(<RequiredFieldExample />)}
  ]
};