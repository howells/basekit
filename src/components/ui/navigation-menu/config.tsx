import { ComponentConfig } from "@/lib/component-config-types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./navigation-menu";

export const componentConfig: ComponentConfig = {
  id: "navigation-menu",
  name: "NavigationMenu",
  description:
    "A navigation menu component with dropdown support and smooth animations.",
  category: "ui",
  importStatement:
    'import { NavigationMenu } from "@/components/ui/navigation-menu"',
  componentId: "NavigationMenu",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Navigation Menu",
      description: "A simple navigation menu with dropdowns",
      code: `<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="#product1">Product 1</NavigationMenuLink>
      <NavigationMenuLink href="#product2">Product 2</NavigationMenuLink>
      <NavigationMenuLink href="#product3">Product 3</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="#service1">Service 1</NavigationMenuLink>
      <NavigationMenuLink href="#service2">Service 2</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenu>`,
    },
  ],
};
