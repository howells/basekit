"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigation-menu";

export function NavigationMenuExample() {
  return (
    <NavigationMenu className="min-w-max rounded-lg bg-gray-50 p-1 text-gray-900">
      <NavigationMenuList className="relative flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[400px] h-full p-6 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
            <ul className="grid list-none grid-cols-2 gap-3">
              <li>
                <NavigationMenuLink href="#quick-start">
                  <h3 className="m-0 mb-1 text-sm font-medium">Quick Start</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Install and assemble your first component.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#accessibility">
                  <h3 className="m-0 mb-1 text-sm font-medium">
                    Accessibility
                  </h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Learn how we build accessible components.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#releases">
                  <h3 className="m-0 mb-1 text-sm font-medium">Releases</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    See what&apos;s new in the latest versions.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#about">
                  <h3 className="m-0 mb-1 text-sm font-medium">About</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Learn more about Base UI and our mission.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[300px] h-full p-6 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
            <ul className="flex flex-col gap-3">
              <li>
                <NavigationMenuLink href="#styling">
                  <h3 className="m-0 mb-1 text-sm font-medium">Styling</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Style components with CSS, Tailwind, or CSS-in-JS.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#animation">
                  <h3 className="m-0 mb-1 text-sm font-medium">Animation</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Animate with CSS transitions or JavaScript libraries.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#composition">
                  <h3 className="m-0 mb-1 text-sm font-medium">Composition</h3>
                  <p className="m-0 text-xs leading-4 text-gray-500">
                    Compose components with your existing ones.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/mui/base-ui">
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
