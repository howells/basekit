import { type ComponentConfig } from "@/lib/component-config-types";

export const kbdConfig: ComponentConfig = {
  name: "Kbd",
  id: "kbd",
  description: "Display keyboard shortcuts in a consistent, styled format",
  category: "text" as const,
  icon: "Keyboard",

  componentId: "kbd",
  importStatement: 'import { Kbd } from "@/components/ui/kbd/kbd";',
  examples: [],
  props: [
    {
      name: "keys",
      type: "string[]",
      description: "Array of keys to display for complex combinations",
      required: false
    },
    {
      name: "platform",
      type: '"mac" | "pc" | "auto"',
      description: "Platform for modifier key display",
      required: false,
      defaultValue: "auto"
    },
    {
      name: "size",
      type: '"xs" | "sm" | "base" | "lg"',
      description: "Size variant of the keyboard shortcut",
      required: false,
      defaultValue: "sm",
      options: ["xs", "sm", "base", "lg"]
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Key text to display for simple shortcuts",
      required: false
    },
  ]
};
