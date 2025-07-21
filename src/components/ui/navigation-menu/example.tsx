"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#home">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <NavigationMenuLink href="#ui" className="block">
                <div className="text-sm font-medium leading-none">UI Components</div>
                <p className="line-clamp-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400 mt-1">
                  Comprehensive collection of accessible React components.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#templates" className="block">
                <div className="text-sm font-medium leading-none">Templates</div>
                <p className="line-clamp-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400 mt-1">
                  Ready-to-use page templates and layouts.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#themes" className="block">
                <div className="text-sm font-medium leading-none">Themes</div>
                <p className="line-clamp-2 text-sm leading-snug text-zinc-600 dark:text-zinc-400 mt-1">
                  Customizable color schemes and design tokens.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[300px]">
              <NavigationMenuLink href="#docs">
                <div className="text-sm font-medium">Documentation</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  API reference and guides
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#examples">
                <div className="text-sm font-medium">Examples</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Code examples and demos
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#about">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}