import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "icon-select",
  name: "Icon Select",
  description: "A select component specifically designed for choosing icons with visual preview.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { IconSelect } from "@/components/ui/icon-select";`,
  componentId: "IconSelectExample",
  props: [
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the icon select is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic icon select component.",
      code: `<IconSelect onValueChange={(icon) => console.log(icon)} />`,
    },
  ],
};