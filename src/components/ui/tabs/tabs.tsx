// Tremor Tabs [v1.0.0] - Base UI

import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";
import { Button } from "../button/button";

const tabsVariants = tv({
  slots: {
    root: [
      // base
      "w-full",
    ],
    list: [
      // base styles will be applied via variants
    ],
    tab: [
      // base styles will be applied via variants
    ],
    indicator: [
      // base
      "absolute transition-all duration-200 ease-out",
    ],
    panel: [
      // base
      "outline-hidden",
      // focus
      focusRing,
    ],
  },
  variants: {
    variant: {
      solid: {
        list: [
          // base - button collection style
          "flex items-center justify-start gap-2",
        ],
        tab: [
          // For solid variant, we'll use Button component instead of these styles
          // Keep minimal styles for the Base UI Tab wrapper
          "relative",
        ],
        indicator: [
          // no indicator for solid variant - the button styling handles the active state
          "hidden",
        ],
      },
      line: {
        list: [
          // base - Geist/line style with bottom border
          "relative flex items-center justify-start",
          // bottom border (divider)
          "border-b border-zinc-200 dark:border-zinc-800",
        ],
        tab: [
          // base
          "relative inline-flex h-12 items-center justify-center border-0 px-4 text-sm font-medium whitespace-nowrap transition-all",
          // text color
          "text-zinc-600 dark:text-zinc-400",
          // hover
          "hover:text-zinc-900 dark:hover:text-zinc-200",
          // selected
          "data-[selected]:text-zinc-900 dark:data-[selected]:text-zinc-50",
          // disabled
          "data-[disabled]:pointer-events-none data-[disabled]:text-zinc-400 data-[disabled]:opacity-50 dark:data-[disabled]:text-zinc-600",
          // focus styles
          "outline-none select-none",
          "focus-visible:text-zinc-900 dark:focus-visible:text-zinc-50",
        ],
        indicator: [
          // line indicator - bottom line
          "bottom-0 left-0 h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)]",
          "bg-zinc-900 dark:bg-zinc-50",
        ],
      },
    },
    hideDivider: {
      true: {},
    },
    hideBorder: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: "line",
      hideDivider: true,
      class: {
        list: "border-b-0",
      },
    },
    {
      variant: "line",
      hideBorder: true,
      class: {
        indicator: "hidden",
      },
    },
    // Note: solid variant doesn't use hideBorder since it has no indicator
  ],
  defaultVariants: {
    variant: "line",
    hideDivider: false,
    hideBorder: false,
  },
});

type TabsListVariant = "solid" | "line";

const TabsListVariantContext = React.createContext<TabsListVariant>("line");

/**
 * Root tabs component built on Base UI's Tabs primitive.
 *
 * Based on Base UI's Tabs (https://base-ui.com/react/components/tabs),
 * providing accessible tabbed interfaces for toggling between related panels
 * on the same page. Features keyboard navigation and proper focus management.
 *
 * @component
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 *
 * @see https://base-ui.com/react/components/tabs - Base UI documentation
 */
const Tabs = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof BaseTabs.Root>, "orientation">
>(({ className, ...props }, forwardedRef) => {
  const { root } = tabsVariants();
  return (
    <BaseTabs.Root
      ref={forwardedRef}
      className={cx(root(), className)}
      {...props}
    />
  );
});

Tabs.displayName = "Tabs";

/**
 * Props for the TabsList component.
 *
 * @interface TabsListProps
 * @extends React.ComponentPropsWithoutRef<typeof BaseTabs.List>
 */
interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.List> {
  /** Style variant for the tabs list */
  variant?: TabsListVariant;
  /** Hide the bottom divider line */
  hideDivider?: boolean;
  /** Hide the active tab border/indicator */
  hideBorder?: boolean;
}

/**
 * Container for tab triggers with visual indicator.
 *
 * Based on Base UI's Tabs.List, providing a styled container for tab buttons
 * with animated indicator that follows the active tab. Supports multiple variants
 * including Geist-style tabs with bottom divider and indicator.
 *
 * @param variant - Style variant (solid, geist, or line)
 * @param hideDivider - Hide the bottom divider line (Geist variant only)
 * @param hideBorder - Hide the active tab indicator
 *
 * @example
 * ```tsx
 * <TabsList variant="geist" hideDivider={false}>
 *   <TabsTrigger value="overview">Overview</TabsTrigger>
 *   <TabsTrigger value="details">Details</TabsTrigger>
 * </TabsList>
 * ```
 *
 * @see https://base-ui.com/react/components/tabs - Base UI documentation
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof BaseTabs.List>,
  TabsListProps
>(
  (
    {
      className,
      variant = "line",
      hideDivider = false,
      hideBorder = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const { list } = tabsVariants({ variant, hideDivider, hideBorder });

    return (
      <BaseTabs.List
        ref={forwardedRef}
        className={cx(list(), className)}
        {...props}
      >
        <TabsListVariantContext.Provider value={variant}>
          {children}
          <BaseTabs.Indicator
            className={cx(
              tabsVariants({ variant, hideDivider, hideBorder }).indicator()
            )}
          />
        </TabsListVariantContext.Provider>
      </BaseTabs.List>
    );
  }
);

TabsList.displayName = "TabsList";

/**
 * Individual tab trigger button for switching between panels.
 *
 * Based on Base UI's Tabs.Tab, providing clickable tab buttons with proper
 * keyboard navigation and accessibility. Automatically inherits styling variant
 * from parent TabsList and supports disabled states. For solid variant, uses
 * actual Button components for perfect consistency.
 *
 * @example
 * ```tsx
 * <TabsTrigger value="settings">Settings</TabsTrigger>
 * <TabsTrigger value="profile" disabled>Profile</TabsTrigger>
 * ```
 *
 * @see https://base-ui.com/react/components/tabs - Base UI documentation
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Tab>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext);

  // For solid variant, use Button component with render prop to get selected state
  if (variant === "solid") {
    return (
      <BaseTabs.Tab
        ref={forwardedRef}
        {...props}
        render={(tabProps, state) => (
          <Button
            {...tabProps}
            variant={state.selected ? "default" : "secondary"}
            size="sm"
            className={cx("data-[disabled]:pointer-events-none", className)}
          >
            {children}
          </Button>
        )}
      />
    );
  }

  // For line variant, use regular styling
  return (
    <BaseTabs.Tab
      ref={forwardedRef}
      className={cx(tabsVariants().tab({ variant }), className)}
      {...props}
    >
      {children}
    </BaseTabs.Tab>
  );
});

TabsTrigger.displayName = "TabsTrigger";

/**
 * Content panel that displays when its corresponding tab is active.
 *
 * Based on Base UI's Tabs.Panel, providing accessible content containers
 * that show/hide based on the active tab selection. Features proper focus
 * management and screen reader support.
 *
 * @example
 * ```tsx
 * <TabsContent value="general">
 *   <h2>General Settings</h2>
 *   <p>Configure your general preferences here.</p>
 * </TabsContent>
 * ```
 *
 * @see https://base-ui.com/react/components/tabs - Base UI documentation
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, forwardedRef) => {
  const { panel } = tabsVariants();

  return (
    <BaseTabs.Panel
      ref={forwardedRef}
      className={cx(panel(), className)}
      {...props}
    />
  );
});

TabsContent.displayName = "TabsContent";

// Export individual components for advanced usage
const TabsRoot = BaseTabs.Root;
const TabsTabsList = BaseTabs.List;
const TabsTab = BaseTabs.Tab;
const TabsIndicator = BaseTabs.Indicator;
const TabsPanel = BaseTabs.Panel;

export {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
  TabsTabsList,
  TabsTrigger,
  tabsVariants,
};
