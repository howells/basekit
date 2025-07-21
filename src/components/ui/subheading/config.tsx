import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "subheading",
  name: "Subheading",
  description:
    "A semantic subheading component with consistent typography and hierarchy levels.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Subheading } from "@/components/ui/subheading";`,
  componentId: "SubheadingExample",
  props: [
    {
      name: "level",
      type: "select",
      options: ["1", "2", "3", "4", "5", "6"],
      defaultValue: "2",
      description: "The heading level (h1-h6).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic subheading component.",
      code: `<Subheading level="2">Section Title</Subheading>`,
    },
    {
      id: "levels",
      title: "Different Levels",
      description: "Subheading component with different hierarchy levels.",
      code: `<div className="space-y-4">
  <Subheading level="2">Subheading 2</Subheading>
  <Subheading level="3">Subheading 3</Subheading>
  <Subheading level="4">Subheading 4</Subheading>
</div>`,
    },
  ],
};
