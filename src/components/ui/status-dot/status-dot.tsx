"use client";

import { cx } from "@/lib/utils";
import { componentVariants, type BadgeVariant } from "@/lib/variants";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// StatusDot variants with text colors only (no backgrounds)
const statusDotVariantsDefinition = {
  variants: {
    variant: {
      // Global semantic variants - text colors only
      default: ["text-blue-900", "dark:text-blue-400"],
      neutral: ["text-slate-900", "dark:text-slate-100"],
      success: ["text-emerald-900", "dark:text-emerald-400"],
      info: ["text-sky-900", "dark:text-sky-400"],
      warning: ["text-amber-900", "dark:text-amber-400"],
      error: ["text-red-900", "dark:text-red-400"],
      critical: ["text-rose-900", "dark:text-rose-400"],
      positive: ["text-teal-900", "dark:text-teal-400"],
      negative: ["text-rose-900", "dark:text-rose-400"],
      // Color variants - text colors only
      purple: ["text-purple-900", "dark:text-purple-400"],
      pink: ["text-pink-900", "dark:text-pink-400"],
      rose: ["text-rose-900", "dark:text-rose-400"],
      orange: ["text-orange-900", "dark:text-orange-400"],
      amber: ["text-amber-900", "dark:text-amber-400"],
      yellow: ["text-yellow-900", "dark:text-yellow-400"],
      lime: ["text-lime-900", "dark:text-lime-400"],
      green: ["text-green-900", "dark:text-green-400"],
      emerald: ["text-emerald-900", "dark:text-emerald-400"],
      teal: ["text-teal-900", "dark:text-teal-400"],
      cyan: ["text-cyan-900", "dark:text-cyan-400"],
      sky: ["text-sky-900", "dark:text-sky-400"],
      blue: ["text-blue-900", "dark:text-blue-400"],
      indigo: ["text-indigo-900", "dark:text-indigo-400"],
      violet: ["text-violet-900", "dark:text-violet-400"],
      fuchsia: ["text-fuchsia-900", "dark:text-fuchsia-400"],
    },
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
} as const;

// Status dot variants
const statusDotVariants = tv({
  base: ["inline-flex items-center gap-2", "text-sm font-medium"],
  ...statusDotVariantsDefinition,
});

// Dot indicator variants - simplified to use solid colors
const dotVariants = tv({
  base: ["relative rounded-full", "flex-shrink-0"],
  variants: {
    variant: {
      // Use solid colors for dots
      default: ["bg-blue-500", "dark:bg-blue-500"],
      neutral: ["bg-zinc-400", "dark:bg-zinc-500"],
      success: ["bg-emerald-500", "dark:bg-emerald-500"],
      info: ["bg-sky-500", "dark:bg-sky-500"],
      warning: ["bg-amber-500", "dark:bg-amber-500"],
      error: ["bg-red-500", "dark:bg-red-500"],
      critical: ["bg-rose-500", "dark:bg-rose-500"],
      positive: ["bg-teal-500", "dark:bg-teal-500"],
      negative: ["bg-rose-500", "dark:bg-rose-500"],
      // Color variants
      purple: ["bg-purple-500", "dark:bg-purple-500"],
      pink: ["bg-pink-500", "dark:bg-pink-500"],
      rose: ["bg-rose-500", "dark:bg-rose-500"],
      orange: ["bg-orange-500", "dark:bg-orange-500"],
      amber: ["bg-amber-500", "dark:bg-amber-500"],
      yellow: ["bg-yellow-500", "dark:bg-yellow-500"],
      lime: ["bg-lime-500", "dark:bg-lime-500"],
      green: ["bg-green-500", "dark:bg-green-500"],
      emerald: ["bg-emerald-500", "dark:bg-emerald-500"],
      teal: ["bg-teal-500", "dark:bg-teal-500"],
      cyan: ["bg-cyan-500", "dark:bg-cyan-500"],
      sky: ["bg-sky-500", "dark:bg-sky-500"],
      blue: ["bg-blue-500", "dark:bg-blue-500"],
      indigo: ["bg-indigo-500", "dark:bg-indigo-500"],
      violet: ["bg-violet-500", "dark:bg-violet-500"],
      fuchsia: ["bg-fuchsia-500", "dark:bg-fuchsia-500"],
    },
    size: {
      sm: "w-2 h-2",
      default: "w-2.5 h-2.5",
      lg: "w-3 h-3",
    },
    animated: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Animated variants for different statuses
    {
      variant: "info",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-sky-500 before:animate-ping before:opacity-75",
      ],
    },
    {
      variant: "warning",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-amber-500 before:animate-ping before:opacity-75",
      ],
    },
    {
      variant: "default",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:animate-ping before:opacity-75",
      ],
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    animated: false,
  },
});

interface StatusDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Omit<VariantProps<typeof statusDotVariants>, "variant"> {
  /**
   * The semantic variant to display
   */
  variant?: BadgeVariant;
  /**
   * Optional label to display next to the dot
   */
  label?: string;
  /**
   * Whether to show animation for active statuses
   */
  animated?: boolean;
  /**
   * Size of the status dot
   */
  size?: "sm" | "default" | "lg";
}

const StatusDot = React.forwardRef<HTMLSpanElement, StatusDotProps>(
  (
    {
      variant = "default",
      label,
      animated = false,
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cx(
          statusDotVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      >
        <span
          className={cx(
            dotVariants({
              variant,
              size,
              animated,
            })
          )}
          aria-hidden="true"
        />
        {label && <span>{label}</span>}
      </span>
    );
  }
);

StatusDot.displayName = "StatusDot";

export { dotVariants, StatusDot, statusDotVariants, type StatusDotProps };
