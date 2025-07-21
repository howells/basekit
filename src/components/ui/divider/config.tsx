import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "divider",
  name: "Divider",
  description: "A divider component that visually separates content with optional text label.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Divider } from "@/components/ui/divider";`,
  componentId: "DividerExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The orientation of the divider.",
    },
    {
      name: "spacing",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "The spacing around the divider.",
    },
    {
      name: "children",
      type: "string",
      description: "Optional text label to display in the center of the divider.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic horizontal divider.",
      code: `<Divider />`,
    },
    {
      id: "with-text",
      title: "With Text",
      description: "Divider with text label in the center.",
      code: `<Divider>or</Divider>`,
    },
    {
      id: "vertical",
      title: "Vertical",
      description: "Vertical divider for separating inline content.",
      code: `<div className="flex items-center h-8">
  <span>Left content</span>
  <Divider orientation="vertical" />
  <span>Right content</span>
</div>`,
    },
    {
      id: "spacing",
      title: "Spacing",
      description: "Different spacing options.",
      code: `<div>
  <div>Content</div>
  <Divider spacing="sm">Small spacing</Divider>
  <div>Content</div>
  <Divider spacing="md">Medium spacing</Divider>
  <div>Content</div>
  <Divider spacing="lg">Large spacing</Divider>
  <div>Content</div>
</div>`,
    },
  ],
};