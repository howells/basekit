import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "label",
  name: "Label",
  description: "A label component for form inputs and interactive elements with proper accessibility support.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Label } from "@/components/ui/label";`,
  componentId: "LabelExample",
  props: [
    {
      name: "required",
      type: "boolean",
      defaultValue: false,
      description: "Whether the associated field is required.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic label for form fields.",
      code: `<Label htmlFor="email">Email Address</Label>`,
    },
    {
      id: "required",
      title: "Required Field",
      description: "Label indicating a required field.",
      code: `<Label htmlFor="name" required>Full Name</Label>`,
    },
  ],
};