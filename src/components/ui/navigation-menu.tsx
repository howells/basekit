// Tremor NavigationMenu [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui-components/react/navigation-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Root>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Root
    ref={ref}
    className={cx(
      // base
      "relative z-10 flex max-w-max flex-1 items-center justify-center rounded-lg border p-1",
      // background color
      "bg-gray-50 dark:bg-gray-900",
      // border color
      "border-gray-200 dark:border-gray-800",
      // text color
      "text-gray-900 dark:text-gray-50",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </BaseNavigationMenu.Root>
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.List>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.List>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.List
    ref={ref}
    className={cx(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = BaseNavigationMenu.Item;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Trigger
    ref={ref}
    className={cx(
      // base
      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
      // text color
      "text-gray-900 dark:text-gray-50",
      // background color
      "bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
      // focus
      "focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-800",
      // active/open
      "data-[popup-open]:bg-gray-100 dark:data-[popup-open]:bg-gray-800",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <BaseNavigationMenu.Icon className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[popup-open]:rotate-180">
      <ChevronDown className="h-4 w-4" />
    </BaseNavigationMenu.Icon>
  </BaseNavigationMenu.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Content
    ref={ref}
    className={cx(
      // base
      "left-0 top-0 w-full p-6",
      // animations
      "data-[starting-style]:animate-in data-[ending-style]:animate-out",
      "data-[starting-style]:fade-in data-[ending-style]:fade-out",
      "data-[starting-style]:zoom-in-95 data-[ending-style]:zoom-out-95",
      "data-[starting-style]:slide-in-from-left-1 data-[ending-style]:slide-out-to-left-1",
      // responsive
      "md:absolute md:w-auto",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Link>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Link>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Link
    ref={ref}
    className={cx(
      // base
      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
      // text color
      "text-gray-900 dark:text-gray-50",
      // background color
      "bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
      // focus
      "focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-800",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

// Portal component for rendering outside the DOM tree
const NavigationMenuPortal = BaseNavigationMenu.Portal;

// Backdrop component for overlay behind the menu
const NavigationMenuBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Backdrop
    ref={ref}
    className={cx(
      // base
      "fixed inset-0 z-40",
      // background
      "bg-black/20 dark:bg-black/40",
      // animations
      "data-[starting-style]:animate-in data-[ending-style]:animate-out",
      "data-[starting-style]:fade-in data-[ending-style]:fade-out",
      className
    )}
    {...props}
  />
));
NavigationMenuBackdrop.displayName = "NavigationMenuBackdrop";

// Positioner component for positioning the popup
const NavigationMenuPositioner = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner>
>(
  (
    {
      className,
      sideOffset = 10,
      collisionPadding = { top: 5, bottom: 5, left: 20, right: 20 },
      ...props
    },
    ref
  ) => (
    <BaseNavigationMenu.Positioner
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      className={cx("absolute left-0 top-full flex justify-center", className)}
      {...props}
    />
  )
);
NavigationMenuPositioner.displayName = "NavigationMenuPositioner";

// Popup component for the menu content container
const NavigationMenuPopup = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Popup>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Popup
    ref={ref}
    className={cx(
      // base
      "origin-top-center relative mt-1.5 h-[var(--popup-height)] w-full overflow-hidden rounded-md border shadow-lg",
      // background color
      "bg-white dark:bg-gray-950",
      // border color
      "border-gray-200 dark:border-gray-800",
      // text color
      "text-gray-900 dark:text-gray-50",
      // animations
      "data-[starting-style]:animate-in data-[ending-style]:animate-out",
      "data-[starting-style]:zoom-in-90 data-[ending-style]:zoom-out-95",
      "data-[starting-style]:fade-in data-[ending-style]:fade-out",
      // responsive
      "md:w-[var(--popup-width)]",
      className
    )}
    {...props}
  />
));
NavigationMenuPopup.displayName = "NavigationMenuPopup";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
  <NavigationMenuPortal>
    <NavigationMenuPositioner>
      <NavigationMenuPopup>
        <NavigationMenuArrow />
        <BaseNavigationMenu.Viewport
          ref={ref}
          className={cx("relative h-full w-full overflow-hidden", className)}
          {...props}
        />
      </NavigationMenuPopup>
    </NavigationMenuPositioner>
  </NavigationMenuPortal>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";

const NavigationMenuArrow = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Arrow>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Arrow
    ref={ref}
    className={cx(
      // base
      "flex transition-all duration-200 ease-out",
      // positioning based on side
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
      "data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
      "data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
      className
    )}
    {...props}
  >
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-white dark:fill-gray-950"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  </BaseNavigationMenu.Arrow>
));
NavigationMenuArrow.displayName = "NavigationMenuArrow";

// Alias for backward compatibility
const NavigationMenuIndicator = NavigationMenuArrow;

export {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuBackdrop,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
