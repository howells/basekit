import { ComponentConfig } from "@/lib/component-config-types";
import { Toggle } from "./toggle";

export const componentConfig: ComponentConfig = {
  id: "toggle",
  name: "Toggle",
  description: "A two-state button that can be either on or off.",
  category: "ui",
  importStatement: 'import { Toggle } from "@/components/ui/toggle"',
  componentId: "Toggle",
  props: [
    {
      name: "pressed",
      type: "boolean",
      defaultValue: false,
      description: "The pressed state of the toggle",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Toggle",
      description: "A simple toggle button",
      code: `<Toggle>
  <span>Toggle me</span>
</Toggle>`,
    },
    {
      id: "with-icon",
      title: "Toggle with Icon",
      description: "A toggle button with an icon",
      code: `<Toggle>
  <Icon name="bold" />
</Toggle>`,
    },
  ],
};
