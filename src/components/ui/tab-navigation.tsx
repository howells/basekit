// Tremor TabNavigation [v1.0.0] - Base UI

import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import React from "react";

import { cx, focusRing } from "@/lib/utils";

const TabNavigation = React.forwardRef<
  React.ElementRef<typeof NavigationMenu.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>,
    "orientation" | "defaultValue"
  >
>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Root ref={forwardedRef} {...props}>
    <NavigationMenu.List
      className={cx(
        // base
        "flex items-center justify-start whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // border color
        "border-gray-200 dark:border-gray-800",
        className
      )}
    >
      {children}
    </NavigationMenu.List>
  </NavigationMenu.Root>
));

TabNavigation.displayName = "TabNavigation";

const TabNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenu.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenu.Link> & {
    disabled?: boolean;
  }
>(({ disabled, className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Item className="flex" aria-disabled={disabled}>
    <NavigationMenu.Link
      aria-disabled={disabled}
      className={cx(
        "group relative flex shrink-0 select-none items-center justify-center",
        disabled ? "pointer-events-none" : ""
      )}
      ref={forwardedRef}
      {...props}
    >
      <span
        className={cx(
          // base
          "-mb-px flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-3 pb-2 text-sm font-medium transition-all",
          // text color
          "text-gray-500 dark:text-gray-500",
          // hover
          "group-hover:text-gray-700 dark:group-hover:text-gray-400",
          // border hover
          "group-hover:border-gray-300 dark:group-hover:border-gray-400",
          // selected
          "group-data-active:border-blue-500 group-data-active:text-blue-500",
          "dark:group-data-active:border-blue-500 dark:group-data-active:text-blue-500",
          // disabled
          disabled
            ? "pointer-events-none text-gray-300 dark:text-gray-700"
            : "",
          focusRing,
          className
        )}
      >
        {children}
      </span>
    </NavigationMenu.Link>
  </NavigationMenu.Item>
));

TabNavigationLink.displayName = "TabNavigationLink";

export { TabNavigation, TabNavigationLink };
