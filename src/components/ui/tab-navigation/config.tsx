import { ComponentConfig } from "@/lib/component-config-types";
import { TabNavigation, TabNavigationLink } from "./tab-navigation";

export const componentConfig: ComponentConfig = {
  id: "tab-navigation",
  name: "TabNavigation",
  description:
    "A navigation component for switching between different views or sections.",
  category: "ui",
  importStatement:
    'import { TabNavigation } from "@/components/ui/tab-navigation"',
  componentId: "TabNavigation",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Tab Navigation",
      description: "Simple tab navigation with links",
      code: `<TabNavigation>
  <TabNavigationLink href="#home" current>Home</TabNavigationLink>
  <TabNavigationLink href="#about">About</TabNavigationLink>
  <TabNavigationLink href="#contact">Contact</TabNavigationLink>
</TabNavigation>`,
    },
  ],
};
