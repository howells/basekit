"use client";

import { cx } from "@/lib/utils";
import { componentVariants, type BadgeVariant } from "@/lib/variants";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Create StatusDot variant system using badge variants
const statusDotVariantsDefinition = {
  variants: {
    variant: {
      // Global semantic variants
      default: componentVariants.badge.default,
      neutral: componentVariants.badge.neutral,
      success: componentVariants.badge.success,
      info: componentVariants.badge.info,
      warning: componentVariants.badge.warning,
      error: componentVariants.badge.error,
      critical: componentVariants.badge.critical,
      positive: componentVariants.badge.positive,
      negative: componentVariants.badge.negative,
      // Color variants
      purple: componentVariants.badge.purple,
      pink: componentVariants.badge.pink,
      rose: componentVariants.badge.rose,
      orange: componentVariants.badge.orange,
      amber: componentVariants.badge.amber,
      yellow: componentVariants.badge.yellow,
      lime: componentVariants.badge.lime,
      green: componentVariants.badge.green,
      emerald: componentVariants.badge.emerald,
      teal: componentVariants.badge.teal,
      cyan: componentVariants.badge.cyan,
      sky: componentVariants.badge.sky,
      blue: componentVariants.badge.blue,
      indigo: componentVariants.badge.indigo,
      violet: componentVariants.badge.violet,
      fuchsia: componentVariants.badge.fuchsia,
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
