import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "card",
  name: "Card",
  description:
    "A flexible container component with subtle styling and shadow for grouping related content.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Card } from "@/components/ui/card";`,
  componentId: "CardExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue:
        "This is a card component with some example content. It provides a clean container with subtle styling and shadow.",
      description: "The content to display inside the card.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic card with default styling.",
      code: `<Card>
  <p>This is a simple card with some content.</p>
</Card>`,
    },
    {
      id: "with-title",
      title: "With Title",
      description: "Card with a title and content.",
      code: `<Card>
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p>This card includes a title and descriptive content below it.</p>
</Card>`,
    },
    {
      id: "compact",
      title: "Compact",
      description: "Card with reduced padding.",
      code: `<Card className="p-4">
  <p>This is a more compact card with less padding.</p>
</Card>`,
    },
    {
      id: "custom-styling",
      title: "Custom Styling",
      description: "Card with custom background and border.",
      code: `<Card className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
  <p>This card has custom styling with a blue theme.</p>
</Card>`,
    },
  ],
};
