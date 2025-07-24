import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { BasicNavigationMenuExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "navigation-menu",
  name: "Navigation Menu",
  description: "A navigation menu component with dropdown support and smooth animations.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu/navigation-menu";`,
  componentId: "NavigationMenuExample",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "navigation-menu",
      title: "Basic Navigation Menu",
      description: "A navigation menu component with dropdown support and smooth animations.",
      code: jsxToString(<BasicNavigationMenuExample />)}
  ]
};