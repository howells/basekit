// Tremor Badge [v1.0.0]

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import {
  PropExplorerConfig,
  createPropConfigFromVariants,
  createPropMetadata,
  createVariantOption,
  createVariantPropMetadata,
} from "@/lib/prop-explorer";
import { cx } from "@/lib/utils";

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md font-medium ring-1 ring-inset"
  ),
  variants: {
    variant: {
      default: [
        "bg-blue-50 text-blue-900 ring-blue-500/30",
        "dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
      ],
      neutral: [
        "bg-zinc-50 text-zinc-900 ring-zinc-500/30",
        "dark:bg-zinc-400/10 dark:text-zinc-400 dark:ring-zinc-400/20",
      ],
      success: [
        "bg-emerald-50 text-emerald-900 ring-emerald-600/30",
        "dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
      ],
      error: [
        "bg-red-50 text-red-900 ring-red-600/20",
        "dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
      ],
      warning: [
        "bg-yellow-50 text-yellow-900 ring-yellow-600/30",
        "dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
      ],
    },
    size: {
      sm: "px-1.5 py-0.5 text-xs",
      base: "px-2 py-1 text-xs",
      lg: "px-2.5 py-1.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

// Helper function to get icon size based on badge size
const getIconSize = (size: "sm" | "base" | "lg" = "base") => {
  switch (size) {
    case "sm":
      return "size-2.5";
    case "base":
      return "size-3";
    case "lg":
      return "size-3.5";
    default:
      return "size-3";
  }
};

interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      render = <span />,
      variant,
      size,
      icon: Icon,
      iconPosition = "left",
      children,
      ...otherProps
    }: BadgeProps,
    forwardedRef
  ) => {
    const iconSizeClass = getIconSize(size);

    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(badgeVariants({ variant, size })),
      children: (
        <>
          {Icon && iconPosition === "left" && (
            <Icon className={cx(iconSizeClass, "shrink-0")} />
          )}
          {children}
          {Icon && iconPosition === "right" && (
            <Icon className={cx(iconSizeClass, "shrink-0")} />
          )}
        </>
      ),
    };

    const element = useRender({
      render,
      ref: forwardedRef,
      props: mergeProps<"span">(defaultProps, otherProps),
    });

    return element;
  }
);

Badge.displayName = "Badge";

// Prop Explorer Configuration
const badgePropConfig: PropExplorerConfig = createPropConfigFromVariants(
  "Badge",
  "Badge",
  "A label used to show a status or category.",
  badgeVariants,
  [
    createPropMetadata("children", "React.ReactNode"),
    createPropMetadata("icon", "React.ComponentType"),
    createPropMetadata("iconPosition", '"left" | "right"', {
      examples: ["left", "right"],
    }),
  ]
);

export { Badge, badgePropConfig, badgeVariants, type BadgeProps };
