import { ComponentConfig } from "@/lib/component-config-types";
import { Text } from "./text";

export const componentConfig: ComponentConfig = {
  id: "text",
  name: "Text",
  description:
    "A flexible text component with typography variants and semantic elements.",
  category: "ui",
  importStatement: 'import { Text } from "@/components/ui/text"',
  componentId: "Text",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Text",
      description: "Simple text with various semantic elements",
      code: `<div className="space-y-2">
  <Text as="p">This is a paragraph of text.</Text>
  <Text as="span">This is inline text.</Text>
  <Text as="div">This is div text.</Text>
</div>`,
    },
  ],
};
