import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample, WithEllipsisExample, CustomSeparatorExample, SingleLevelExample, DeepNavigationExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "breadcrumbs",
  name: "Breadcrumbs",
  description: "A navigation component that shows the current page's location within a navigational hierarchy.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from "@/components/ui/breadcrumbs";`,
  componentId: "BreadcrumbsExample",
  props: [
    {
      name: "showEllipsis",
      type: "boolean",
      defaultValue: false,
      description: "Whether to show ellipsis for collapsed items.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic breadcrumb navigation.",
      code: jsxToString(<DefaultExample />),
      render: DefaultExample,
    },
    {
      id: "with-ellipsis",
      title: "With Ellipsis",
      description: "Breadcrumbs with collapsed items.",
      code: jsxToString(<WithEllipsisExample />),
      render: WithEllipsisExample,
    },
    {
      id: "custom-separator",
      title: "Custom Separator",
      description: "Breadcrumbs with custom separator.",
      code: jsxToString(<CustomSeparatorExample />),
      render: CustomSeparatorExample,
    },
    {
      id: "single-level",
      title: "Single Level",
      description: "Breadcrumbs with just current page.",
      code: jsxToString(<SingleLevelExample />),
      render: SingleLevelExample,
    },
    {
      id: "deep-navigation",
      title: "Deep Navigation",
      description: "Breadcrumbs showing deep navigation hierarchy.",
      code: jsxToString(<DeepNavigationExample />),
      render: DeepNavigationExample,
    },
  ],
};