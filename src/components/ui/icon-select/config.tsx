import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultIconSelectExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "icon-select",
  name: "Icon Select",
  description: "A select component specifically designed for choosing icons with visual preview.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { IconSelect } from "@/components/ui/icon-select/icon-select";`,
  componentId: "IconSelectExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Select an icon",
      description: "Placeholder text when no icon is selected.",
    },
    {
      name: "value",
      type: "string",
      description: "The selected icon name.",
    },
    {
      name: "onChange",
      type: "function",
      description: "Callback when icon selection changes.",
    },
  ],
  examples: [
    {
      id: "icon-select",
      title: "Default",
      description: "A select component specifically designed for choosing icons with visual preview.",
      code: jsxToString(<DefaultIconSelectExample />),
      render: DefaultIconSelectExample,
    },
  ],
};