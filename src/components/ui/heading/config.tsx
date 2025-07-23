import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultHeadingExample, DifferentLevelsExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "heading",
  name: "Heading",
  description: "A semantic heading component with consistent typography and hierarchy levels.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Heading } from "@/components/ui/heading/heading";`,
  componentId: "HeadingExample",
  props: [
    {
      name: "level",
      type: "select",
      options: ["1", "2", "3", "4", "5", "6"],
      defaultValue: "1",
      description: "The heading level (h1-h6).",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Heading Text",
      description: "The heading content.",
    },
  ],
  examples: [
    {
      id: "heading",
      title: "Default",
      description: "A semantic heading component with consistent typography and hierarchy levels.",
      code: jsxToString(<DefaultHeadingExample />),
      render: DefaultHeadingExample,
    },
    {
      id: "levels",
      title: "Different Levels",
      description: "Heading component with different hierarchy levels.",
      code: jsxToString(<DifferentLevelsExample />),
      render: DifferentLevelsExample,
    },
  ],
};