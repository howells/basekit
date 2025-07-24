import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";
import { Text } from "./text";

export const componentConfig: ComponentConfig = {
  id: "text",
  name: "Text",
  description: "A flexible text component with typography variants and semantic elements.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Text } from "@/components/ui/text/text";`,
  componentId: "TextExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: "This is a text component",
      description: "The text content."
    },
    {
      name: "variant",
      type: "select",
      options: ["body", "caption", "overline"],
      defaultValue: "body",
      description: "The typography variant."
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "base", "lg"],
      defaultValue: "base",
      description: "The text size."
    },
    {
      name: "weight",
      type: "select",
      options: ["normal", "medium", "semibold", "bold"],
      defaultValue: "normal",
      description: "The font weight."
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "text",
      title: "Basic Text",
      description: "A flexible text component with typography variants and semantic elements.",
      code: jsxToString(<Basic />)}
  ]
};
