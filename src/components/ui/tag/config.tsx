import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import {
  BasicExample,
  ComplexExample,
  DismissibleExample,
  InteractiveExample,
  WithAvatarsExample,
  WithCountsExample,
  WithLabelsExample,
} from "./examples";

export const componentConfig: ComponentConfig = {
  id: "tag",
  name: "Tag",
  description:
    "A label or keyword used to categorize or describe content with optional dismiss functionality.",
  category: "feedback" as const,
  icon: "Tag",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Tag } from "@/components/ui/tag/tag";`,
  componentId: "TagExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "The main text content of the tag",
      defaultValue: "Design",
    },
    {
      name: "label",
      type: "string",
      description: "Optional label text (e.g., 'Department', 'Location')",
      defaultValue: "",
    },
    {
      name: "count",
      type: "string",
      description: "Optional count or secondary text",
      defaultValue: "",
    },
    {
      name: "dismissible",
      type: "boolean",
      description: "Whether the tag can be dismissed",
      defaultValue: false,
    },
    {
      name: "dismissAriaLabel",
      type: "string",
      description: "Aria label for the dismiss button",
      defaultValue: "Remove tag",
    },
    {
      name: "avatar",
      type: "object",
      description:
        "Avatar configuration for user tags (object with src, alt, initials)",
      defaultValue: "",
    },
    {
      name: "showBasicTags",
      type: "boolean",
      description: "Show multiple basic tags example",
      defaultValue: false,
    },
    {
      name: "showWithLabels",
      type: "boolean",
      description: "Show tags with labels example",
      defaultValue: false,
    },
    {
      name: "showWithCounts",
      type: "boolean",
      description: "Show tags with counts example",
      defaultValue: false,
    },
    {
      name: "showDismissible",
      type: "boolean",
      description: "Show dismissible tags example",
      defaultValue: false,
    },
    {
      name: "showWithAvatars",
      type: "boolean",
      description: "Show tags with avatars example",
      defaultValue: false,
    },
    {
      name: "showComplex",
      type: "boolean",
      description: "Show complex tags example",
      defaultValue: false,
    },
  ],
  examples: [
    {
      id: "Basic",
      title: "Basic Tags",
      description: "Simple tags with different values",
      code: jsxToString(<BasicExample />),
    },
    {
      id: "WithLabels",
      title: "Tags with Labels",
      description: "Tags with descriptive labels",
      code: jsxToString(<WithLabelsExample />),
    },
    {
      id: "WithCounts",
      title: "Tags with Counts",
      description: "Tags displaying counts or additional info",
      code: jsxToString(<WithCountsExample />),
    },
    {
      id: "Dismissible",
      title: "Dismissible Tags",
      description: "Tags that can be removed",
      code: jsxToString(<DismissibleExample />),
    },
    {
      id: "WithAvatars",
      title: "Tags with Avatars",
      description: "User tags with avatar images or initials",
      code: jsxToString(<WithAvatarsExample />),
    },
    {
      id: "Complex",
      title: "Complex Tags",
      description: "Tags combining multiple features",
      code: jsxToString(<ComplexExample />),
    },
    {
      id: "Interactive",
      title: "Interactive Tags",
      description: "Stateful example with real dismiss functionality",
      code: jsxToString(<InteractiveExample />),
    },
  ],
};
