// Tremor ToggleGroup [v1.0.0] - Base UI

"use client";

import { cx, focusRing } from "@/lib/utils";
import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react/toggle-group";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const toggleGroupVariants = tv({
  slots: {
    root: [
      // base
      "flex gap-px rounded-md border p-0.5",
      // colors
      "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
    ],
    item: [
      // base
      "flex size-8 items-center justify-center rounded-sm text-sm font-medium select-none transition-all duration-100 ease-in-out",
      // colors
      "text-gray-600 dark:text-gray-400",
      // hover
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      // active
      "active:bg-gray-200 dark:active:bg-gray-600",
      // pressed
      "data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900 dark:data-[pressed]:bg-gray-700 dark:data-[pressed]:text-gray-100",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50",
      // focus
      focusRing,
      "focus-visible:bg-none focus-visible:-outline-offset-1",
    ],
  },
  variants: {
    variant: {
      default: {
        root: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
        item: "",
      },
      outline: {
        root: "border-gray-300 bg-transparent dark:border-gray-600",
        item: "border border-transparent data-[pressed]:border-blue-500 dark:data-[pressed]:border-blue-400",
      },
      ghost: {
        root: "border-transparent bg-transparent",
        item: "hover:bg-gray-100 dark:hover:bg-gray-800",
      },
    },
    size: {
      sm: {
        root: "gap-0.5 p-0.5",
        item: "size-6 text-xs rounded-sm",
      },
      default: {
        root: "gap-px p-0.5",
        item: "size-8 text-sm rounded-sm",
      },
      lg: {
        root: "gap-1 p-1",
        item: "size-10 text-base rounded-md",
      },
    },
    orientation: {
      horizontal: {
        root: "flex-row",
      },
      vertical: {
        root: "flex-col",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
  },
});

interface ToggleGroupProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof BaseToggleGroup>,
      "children"
    >,
    VariantProps<typeof toggleGroupVariants> {
  children: React.ReactNode;
}

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof BaseToggleGroup>,
  ToggleGroupProps
>(({ className, variant, size, orientation, children, ...props }, ref) => {
  const { root } = toggleGroupVariants({ variant, size, orientation });

  return (
    <BaseToggleGroup ref={ref} className={cx(root(), className)} {...props}>
      {children}
    </BaseToggleGroup>
  );
});

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof BaseToggle>,
    VariantProps<typeof toggleGroupVariants> {
  value: string;
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof BaseToggle>,
  ToggleGroupItemProps
>(({ className, variant, size, children, ...props }, ref) => {
  const { item } = toggleGroupVariants({ variant, size });

  return (
    <BaseToggle ref={ref} className={cx(item(), className)} {...props}>
      {children}
    </BaseToggle>
  );
});

ToggleGroupItem.displayName = "ToggleGroupItem";

// Export the components
export { ToggleGroup, ToggleGroupItem, toggleGroupVariants };

export type { ToggleGroupItemProps, ToggleGroupProps };
