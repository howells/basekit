import { ComponentConfig } from "@/lib/component-config-types";
import { TouchTarget } from "./touch-target";

export const componentConfig: ComponentConfig = {
  id: "touch-target",
  name: "TouchTarget",
  description:
    "A component that ensures touch targets meet accessibility guidelines for minimum size.",
  category: "ui",
  importStatement: 'import { TouchTarget } from "@/components/ui/touch-target"',
  componentId: "TouchTarget",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Touch Target",
      description: "A simple touch target wrapper",
      code: `<TouchTarget>
  <button className="text-sm">Small Button</button>
</TouchTarget>`,
    },
  ],
};
