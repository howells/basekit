// Tremor Toggle [v1.0.0] - Base UI

"use client";

import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";

const toggleVariants = tv({
  base: [
    // base
    "group inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md border px-2 text-sm font-medium shadow-xs transition-all duration-100 ease-in-out",
    // border
    "border-gray-300 dark:border-gray-800",
    // text color
    "text-gray-700 dark:text-gray-300",
    // background color
    "bg-white dark:bg-gray-950",
    // hover color
    "hover:bg-gray-50 dark:hover:bg-gray-900/60",
    // disabled
    "disabled:pointer-events-none disabled:text-gray-400 dark:disabled:text-gray-600",
    // pressed state
    "data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900 dark:data-[pressed]:bg-gray-800 dark:data-[pressed]:text-gray-50",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      default: "",
      outline: [
        "border-2",
        "data-[pressed]:border-blue-500 dark:data-[pressed]:border-blue-400",
      ],
      ghost: [
        "border-transparent",
        "hover:border-gray-200 dark:hover:border-gray-700",
      ],
    },
    size: {
      sm: "h-8 min-w-8 px-1.5 text-xs",
      default: "h-9 min-w-9 px-2 text-sm",
      lg: "h-10 min-w-10 px-3 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof BaseToggle>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<
  React.ElementRef<typeof BaseToggle>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <BaseToggle
    ref={ref}
    className={cx(toggleVariants({ variant, size }), className)}
    {...props}
  />
));

Toggle.displayName = "Toggle";

// Export individual components for advanced usage
const ToggleRoot = BaseToggle;

export { Toggle, ToggleRoot, toggleVariants };

export type { ToggleProps };
