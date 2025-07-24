"use client";

import { cx } from "@/lib/utils";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Status dot variants
const statusDotVariants = tv({
  base: ["inline-flex items-center gap-2", "text-sm font-medium"],
  variants: {
    status: {
      default: "text-zinc-600 dark:text-zinc-400",
      queued: "text-yellow-600 dark:text-yellow-400",
      building: "text-blue-600 dark:text-blue-400",
      ready: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      canceled: "text-zinc-600 dark:text-zinc-400",
      warning: "text-orange-600 dark:text-orange-400",
      pending: "text-purple-600 dark:text-purple-400",
    },
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    status: "default",
    size: "default",
  },
});

// Dot indicator variants
const dotVariants = tv({
  base: ["relative rounded-full", "flex-shrink-0"],
  variants: {
    status: {
      default: "bg-zinc-400 dark:bg-zinc-500",
      queued: "bg-yellow-400 dark:bg-yellow-500",
      building: "bg-blue-400 dark:bg-blue-500",
      ready: "bg-green-400 dark:bg-green-500",
      error: "bg-red-400 dark:bg-red-500",
      canceled: "bg-zinc-400 dark:bg-zinc-500",
      warning: "bg-orange-400 dark:bg-orange-500",
      pending: "bg-purple-400 dark:bg-purple-500",
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
      status: "building",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-blue-400 before:animate-ping before:opacity-75",
        "dark:before:bg-blue-500",
      ],
    },
    {
      status: "queued",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-yellow-400 before:animate-ping before:opacity-75",
        "dark:before:bg-yellow-500",
      ],
    },
    {
      status: "pending",
      animated: true,
      class: [
        "animate-pulse",
        "before:absolute before:inset-0 before:rounded-full before:bg-purple-400 before:animate-ping before:opacity-75",
        "dark:before:bg-purple-500",
      ],
    },
  ],
  defaultVariants: {
    status: "default",
    size: "default",
    animated: false,
  },
});

type StatusType =
  | "default"
  | "queued"
  | "building"
  | "ready"
  | "error"
  | "canceled"
  | "warning"
  | "pending";

interface StatusDotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Omit<VariantProps<typeof statusDotVariants>, "status"> {
  /**
   * The status to display
   */
  status?: StatusType;
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
      status = "default",
      label,
      animated = false,
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    // Determine if this status should be animated by default
    const shouldAnimate =
      animated ||
      status === "building" ||
      status === "queued" ||
      status === "pending";

    return (
      <span
        ref={ref}
        className={cx(
          statusDotVariants({
            status,
            size,
          }),
          className
        )}
        {...props}
      >
        <span
          className={dotVariants({
            status,
            size,
            animated: shouldAnimate,
          })}
          aria-hidden="true"
        />
        {label && <span>{label}</span>}
      </span>
    );
  }
);

StatusDot.displayName = "StatusDot";

// Helper components for common status types
const StatusQueued = React.forwardRef<
  HTMLSpanElement,
  Omit<StatusDotProps, "status">
>(({ label = "Queued", ...props }, ref) => (
  <StatusDot ref={ref} status="queued" label={label} {...props} />
));
StatusQueued.displayName = "StatusQueued";

const StatusBuilding = React.forwardRef<
  HTMLSpanElement,
  Omit<StatusDotProps, "status">
>(({ label = "Building", ...props }, ref) => (
  <StatusDot ref={ref} status="building" label={label} {...props} />
));
StatusBuilding.displayName = "StatusBuilding";

const StatusReady = React.forwardRef<
  HTMLSpanElement,
  Omit<StatusDotProps, "status">
>(({ label = "Ready", ...props }, ref) => (
  <StatusDot ref={ref} status="ready" label={label} {...props} />
));
StatusReady.displayName = "StatusReady";

const StatusError = React.forwardRef<
  HTMLSpanElement,
  Omit<StatusDotProps, "status">
>(({ label = "Error", ...props }, ref) => (
  <StatusDot ref={ref} status="error" label={label} {...props} />
));
StatusError.displayName = "StatusError";

const StatusCanceled = React.forwardRef<
  HTMLSpanElement,
  Omit<StatusDotProps, "status">
>(({ label = "Canceled", ...props }, ref) => (
  <StatusDot ref={ref} status="canceled" label={label} {...props} />
));
StatusCanceled.displayName = "StatusCanceled";

export {
  dotVariants,
  StatusBuilding,
  StatusCanceled,
  StatusDot,
  statusDotVariants,
  StatusError,
  StatusQueued,
  StatusReady,
  type StatusDotProps,
  type StatusType,
};
