// Configuration data - no React imports or JSX
import type { ComponentConfig } from "@/lib/component-config-types";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "badge",
  name: "Badge",
  description: "A label used to show a status or category.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Badge } from "@/components/ui/badge";`,
  componentId: "BadgeExample",

  // Props that users can experiment with
  props: [
    {
      name: "variant",
      type: "select",
      description: "The visual style variant of the badge.",
      defaultValue: "default",
      options: ["default", "neutral", "success", "error", "warning"],
    },
    {
      name: "size",
      type: "select",
      description: "The size of the badge.",
      defaultValue: "base",
      options: ["sm", "base", "lg"],
    },
    {
      name: "leftIcon",
      type: "icon",
      description: "Icon component to display on the left side.",
    },
    {
      name: "rightIcon",
      type: "icon",
      description: "Icon component to display on the right side.",
    },
    {
      name: "children",
      type: "string",
      description: "The content to display inside the badge.",
      defaultValue: "Badge",
    },
  ],

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic badge with default styling.",
      code: `<Badge>Badge</Badge>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Badge with left and right icons.",
      code: `<Badge leftIcon={CheckIcon} rightIcon={ArrowIcon} variant="success">
  Success
</Badge>`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different badge variants for various states.",
      code: `<div className="flex gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="error">Error</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="neutral">Neutral</Badge>
</div>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different badge sizes.",
      code: `<div className="flex items-center gap-2">
  <Badge size="sm">Small</Badge>
  <Badge size="base">Base</Badge>
  <Badge size="lg">Large</Badge>
</div>`,
    },
  ],
};
