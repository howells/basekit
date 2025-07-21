// Tremor Tabs [v1.0.0] - Base UI

import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";

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
      // background
      "bg-white shadow-sm dark:bg-zinc-950",
      // border radius
      "rounded-sm",
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
          // base
          "inline-flex items-center justify-center rounded-md p-1",
          // background color
          "bg-zinc-100 dark:bg-zinc-900",
          // position for indicator
          "relative",
        ],
        tab: [
          // base
          "relative inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium whitespace-nowrap transition-all",
          // text color
          "text-zinc-500 dark:text-zinc-400",
          // hover
          "hover:text-zinc-700 dark:hover:text-zinc-200",
          // selected
          "data-[selected]:text-zinc-900 dark:data-[selected]:text-zinc-50",
          // disabled
          "data-[disabled]:pointer-events-none data-[disabled]:text-zinc-400 data-[disabled]:opacity-50 dark:data-[disabled]:text-zinc-600",
          // focus
          focusRing,
        ],
        indicator: [
          // solid indicator inherits base styles
        ],
      },
      line: {
        list: [
          // base
          "flex items-center justify-start border-b",
          // border color
          "border-zinc-200 dark:border-zinc-800",
          // position for indicator
          "relative",
        ],
        tab: [
          // base
          "relative -mb-px items-center justify-center px-3 pb-2 text-sm font-medium whitespace-nowrap transition-all",
          // text color
          "text-zinc-500 dark:text-zinc-500",
          // hover
          "hover:text-zinc-700 dark:hover:text-zinc-400",
          // selected
          "data-[selected]:text-blue-500 dark:data-[selected]:text-blue-500",
          // disabled
          "data-[disabled]:pointer-events-none data-[disabled]:text-zinc-300 dark:data-[disabled]:text-zinc-700",
          // focus
          focusRing,
        ],
        indicator: [
          // line indicator
          "bottom-0 left-0 h-0.5 bg-blue-500 dark:bg-blue-500",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

type TabsListVariant = "solid" | "line";

const TabsListVariantContext = React.createContext<TabsListVariant>("solid");

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

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.List>,
    VariantProps<typeof tabsVariants> {
  variant?: TabsListVariant;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof BaseTabs.List>,
  TabsListProps
>(({ className, variant = "solid", children, ...props }, forwardedRef) => {
  const { list } = tabsVariants({ variant });

  return (
    <BaseTabs.List
      ref={forwardedRef}
      className={cx(list(), className)}
      {...props}
    >
      <TabsListVariantContext.Provider value={variant}>
        {children}
        <BaseTabs.Indicator
          className={cx(tabsVariants({ variant }).indicator())}
          style={{
            transform: `translateX(var(--active-tab-left)) translateY(var(--active-tab-top))`,
            width: "var(--active-tab-width)",
            height: "var(--active-tab-height)",
          }}
        />
      </TabsListVariantContext.Provider>
    </BaseTabs.List>
  );
});

TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof BaseTabs.Tab>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext);
  const { tab } = tabsVariants({ variant });

  return (
    <BaseTabs.Tab
      ref={forwardedRef}
      className={cx(tab(), className)}
      {...props}
    >
      {children}
    </BaseTabs.Tab>
  );
});

TabsTrigger.displayName = "TabsTrigger";

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
