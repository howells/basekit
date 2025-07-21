import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "heading",
  name: "Heading",
  description: "A semantic heading component with consistent typography and hierarchy levels.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Heading } from "@/components/ui/heading";`,
  componentId: "HeadingExample",
  props: [
    {
      name: "level",
      type: "select",
      options: ["1", "2", "3", "4", "5", "6"],
      defaultValue: "1",
      description: "The heading level (h1-h6).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic heading component.",
      code: `<Heading level="1">Page Title</Heading>`,
    },
    {
      id: "levels",
      title: "Different Levels",
      description: "Heading component with different hierarchy levels.",
      code: `<div className="space-y-4">
  <Heading level="1">Heading 1</Heading>
  <Heading level="2">Heading 2</Heading>
  <Heading level="3">Heading 3</Heading>
</div>`,
    },
  ],
};