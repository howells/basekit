import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import {
  Default,
  EmptyState,
  InCard,
  Interactive,
  WithIcons,
} from "./examples";

export const componentConfig: ComponentConfig = {
  id: "stacked-list",
  name: "Stacked List",
  description:
    "A list component that displays items in a vertically stacked layout with dividers and structured content.",
  category: "data" as const,
  icon: "List",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { StackedList } from "@/components/ui/stacked-list/stacked-list";`,
  componentId: "StackedListExample",
  props: [
    {
      name: "showDividers",
      type: "boolean",
      description: "Whether to show dividers between items",
      defaultValue: true,
    },
    {
      name: "gap",
      type: "select",
      description: "Gap between items",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "8",
        "10",
        "12",
        "16",
        "20",
        "24",
      ],
      defaultValue: "0",
    },
    {
      name: "padding",
      type: "select",
      description: "Padding for each item",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "8",
        "10",
        "12",
        "16",
        "20",
        "24",
      ],
      defaultValue: "4",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Stacked List",
      description:
        "A list with team members showing avatars, names, and actions",
      code: jsxToString(<Default />),
    },
    {
      id: "in-card",
      title: "In Card Container",
      description: "Stacked list inside a card with recent activity",
      code: jsxToString(<InCard />),
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "List items with icons and status badges",
      code: jsxToString(<WithIcons />),
    },
    {
      id: "interactive",
      title: "Interactive Items",
      description: "Clickable list items with different interaction patterns",
      code: jsxToString(<Interactive />),
    },
    {
      id: "empty-state",
      title: "Empty State",
      description: "List with empty state when no items are present",
      code: jsxToString(<EmptyState />),
    },
  ],
};
