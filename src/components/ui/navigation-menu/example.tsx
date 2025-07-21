"use client";

import { Grid } from "../grid";
import { Subheading } from "../heading";
import { VStack } from "../stack";
import { Text } from "../text";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuItemLink,
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
          <NavigationMenuContent className="w-[400px]">
            <Grid
              columns={2}
              gap={3}
              showColumnGuides={false}
              showRowGuides={false}
              minHeight="none"
            >
              <NavigationMenuLink href="#quick-start">
                <VStack gap={1}>
                  <Subheading>Quick Start</Subheading>
                  <Text size="xs">
                    Install and assemble your first component.
                  </Text>
                </VStack>
              </NavigationMenuLink>
              <NavigationMenuLink href="#accessibility">
                <VStack gap={1}>
                  <Subheading>Accessibility</Subheading>
                  <Text size="xs">
                    Learn how we build accessible components.
                  </Text>
                </VStack>
              </NavigationMenuLink>
              <NavigationMenuLink href="#releases">
                <VStack gap={1}>
                  <Subheading>Releases</Subheading>
                  <Text size="xs">
                    See what&apos;s new in the latest versions.
                  </Text>
                </VStack>
              </NavigationMenuLink>
              <NavigationMenuLink href="#about">
                <VStack gap={1}>
                  <Subheading>About</Subheading>
                  <Text size="xs">
                    Learn more about Base UI and our mission.
                  </Text>
                </VStack>
              </NavigationMenuLink>
            </Grid>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[300px]">
            <VStack gap={3}>
              <NavigationMenuLink href="#styling">
                <VStack gap={1}>
                  <Subheading>Styling</Subheading>
                  <Text size="xs">
                    Style components with CSS, Tailwind, or CSS-in-JS.
                  </Text>
                </VStack>
              </NavigationMenuLink>
              <NavigationMenuLink href="#animation">
                <VStack gap={1}>
                  <Subheading>Animation</Subheading>
                  <Text size="xs">
                    Animate with CSS transitions or JavaScript libraries.
                  </Text>
                </VStack>
              </NavigationMenuLink>
              <NavigationMenuLink href="#composition">
                <VStack gap={1}>
                  <Subheading>Composition</Subheading>
                  <Text size="xs">
                    Compose components with your existing ones.
                  </Text>
                </VStack>
              </NavigationMenuLink>
            </VStack>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuItemLink href="https://github.com/mui/base-ui">
            GitHub
          </NavigationMenuItemLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
