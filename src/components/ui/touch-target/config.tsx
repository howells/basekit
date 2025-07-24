import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";
import { TouchTarget } from "./touch-target";

export const componentConfig: ComponentConfig = {
  id: "touch-target",
  name: "Touch Target",
  description: "A component that ensures touch targets meet accessibility guidelines for minimum size.",
  category: "utility" as const,
  icon: "Hand",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { TouchTarget } from "@/components/ui/touch-target/touch-target";`,
  componentId: "TouchTargetExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: "Interactive element",
      description: "The content to wrap with touch target."
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "touch-target",
      title: "Basic Touch Target",
      description: "A component that ensures touch targets meet accessibility guidelines for minimum size.",
      code: jsxToString(<Basic />)}
  ]
};
