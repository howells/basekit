// Navigation Menu Component [v1.0.0]

import { cx } from "@/lib/utils";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui-components/react/navigation-menu";
import * as React from "react";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Root>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Root
    ref={ref}
    className={cx(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
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

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Item>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Item ref={ref} className={className} {...props} />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Trigger
    ref={ref}
    className={cx(
      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors",
      "hover:bg-gray-100 hover:text-gray-900",
      "focus:bg-gray-100 focus:text-gray-900 focus:outline-none",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[popup-open]:bg-gray-100/50",
      "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[popup-open]:bg-gray-800/50",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuIcon className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[popup-open]:rotate-180" />
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
      "left-0 top-0 w-full data-[starting-style]:animate-in data-[ending-style]:animate-out data-[starting-style]:fade-in data-[ending-style]:fade-out data-[starting-style]:slide-in-from-left-52 data-[ending-style]:slide-out-to-left-52 md:absolute md:w-auto",
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
      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors",
      "hover:bg-gray-100 hover:text-gray-900",
      "focus:bg-gray-100 focus:text-gray-900 focus:outline-none",
      "disabled:pointer-events-none disabled:opacity-50",
      "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      className
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Portal>
    <BaseNavigationMenu.Positioner
      ref={ref}
      className={cx("absolute left-0 top-full flex justify-center", className)}
      sideOffset={10}
      collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
      {...props}
    >
      <BaseNavigationMenu.Popup className="relative mt-1.5 h-[var(--popup-height)] w-full overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-lg data-[starting-style]:animate-in data-[ending-style]:animate-out data-[ending-style]:zoom-out-95 data-[starting-style]:zoom-in-90 md:w-[var(--popup-width)] dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
        <NavigationMenuArrow />
        <BaseNavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
      </BaseNavigationMenu.Popup>
    </BaseNavigationMenu.Positioner>
  </BaseNavigationMenu.Portal>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out data-[open]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md dark:bg-gray-800" />
  </div>
));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

const NavigationMenuIcon = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Icon>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Icon>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Icon
    ref={ref}
    className={cx("transition-transform duration-200", className)}
    {...props}
  >
    <ChevronDownIcon />
  </BaseNavigationMenu.Icon>
));
NavigationMenuIcon.displayName = "NavigationMenuIcon";

const NavigationMenuArrow = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Arrow>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Arrow
    ref={ref}
    className={cx(
      "flex transition-all duration-200 ease-out",
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
      "data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
      "data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
      className
    )}
    {...props}
  >
    <ArrowSvg />
  </BaseNavigationMenu.Arrow>
));
NavigationMenuArrow.displayName = "NavigationMenuArrow";

// Helper components
function ChevronDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path
        d="M1 3.5L5 7.5L9 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-white dark:fill-gray-950"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-gray-800"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-gray-300 dark:fill-gray-700"
      />
    </svg>
  );
}

export {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
