import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import {
  Basic,
  ColorInheritanceExample,
  SemanticElementsExample,
  SizesExample
} from "./examples";
import { Text } from "./text";

export const componentConfig: ComponentConfig = {
  id: "text",
  name: "Text",
  description:
    "A flexible text component with typography variants and semantic elements that inherits color from its parent.",
  category: "text" as const,
  icon: "Type",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Text, Strong, Code, TextLink } from "@/components/ui/text/text";`,
  componentId: "TextExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: "This is a text component that inherits its color",
      description: "The text content to display."
    },
    {
      name: "size",
      type: "select",
      defaultValue: "sm",
      description: "The text size variant.",
      options: [
        { value: "2xs", label: "2xs (9px)" },
        { value: "xs", label: "xs (11px)" },
        { value: "sm", label: "sm (13px)" },
        { value: "base", label: "base (16px)" },
        { value: "lg", label: "lg (18px)" },
        { value: "xl", label: "xl (20px)" },
      ]
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes for custom styling."
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic",
      description: "Basic text examples",
      code: jsxToString(<Basic />)
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different text size variants",
      code: jsxToString(<SizesExample />)
    },
    {
      id: "semantic-elements",
      title: "Semantic Elements",
      description: "Text with Strong, Code, and TextLink elements",
      code: jsxToString(<SemanticElementsExample />)
    },
    {
      id: "color-inheritance",
      title: "Color Inheritance",
      description: "Text inheriting colors from parent containers",
      code: jsxToString(<ColorInheritanceExample />)
    },
  ]
};
