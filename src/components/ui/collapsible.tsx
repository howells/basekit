// Collapsible Component [v1.0.0] - Tremor Style

import { cx, focusRing } from "@/lib/utils";
import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import * as React from "react";

const Collapsible = BaseCollapsible.Root;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof BaseCollapsible.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseCollapsible.Trigger
    ref={ref}
    className={cx(
      // base
      "group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
      // text color
      "text-gray-900 dark:text-gray-50",
      // background color
      "bg-gray-50 hover:bg-gray-100 active:bg-gray-100",
      "dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-700",
      // disabled
      "data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "data-disabled:bg-gray-50 data-disabled:text-gray-400",
      "dark:data-disabled:bg-gray-800 dark:data-disabled:text-gray-600",
      // focus
      focusRing,
      className
    )}
    {...props}
  >
    {children}
    <ChevronIcon
      className={cx(
        "size-4 shrink-0 transition-transform duration-200 ease-out",
        "text-gray-400 dark:text-gray-500",
        "group-data-[panel-open]:rotate-90"
      )}
    />
  </BaseCollapsible.Trigger>
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof BaseCollapsible.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseCollapsible.Panel
    ref={ref}
    className={cx(
      "overflow-hidden transition-all duration-200 ease-out",
      "data-[starting-style]:h-0 data-[ending-style]:h-0",
      "h-[var(--collapsible-panel-height)]"
    )}
    {...props}
  >
    <div
      className={cx(
        // base
        "pt-2 text-sm",
        // text color
        "text-gray-700 dark:text-gray-300",
        className
      )}
    >
      {children}
    </div>
  </BaseCollapsible.Panel>
));
CollapsibleContent.displayName = "CollapsibleContent";

function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ChevronIcon, Collapsible, CollapsibleContent, CollapsibleTrigger };
