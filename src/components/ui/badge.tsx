// Tremor Badge [v1.0.0]

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import {
  createPropExplorerConfig,
  createPropMetadata,
} from "@/lib/prop-explorer";
import { cx } from "@/lib/utils";

// Define variants structure once - single source of truth
const badgeVariantsDefinition = {
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
    iconPosition: {
      left: "[&>svg]:order-first",
      right: "[&>svg]:order-last",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    iconPosition: "left",
  },
} as const;

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md font-medium ring-1 ring-inset"
  ),
  ...badgeVariantsDefinition,
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
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      render = <span />,
      variant,
      size,
      iconPosition,
      icon: Icon,
      children,
      ...otherProps
    }: BadgeProps,
    forwardedRef
  ) => {
    const iconSizeClass = getIconSize(size);

    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(badgeVariants({ variant, size, iconPosition })),
      children: (
        <>
          {Icon && <Icon className={cx(iconSizeClass, "shrink-0")} />}
          {children}
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

// Generate Prop Explorer Configuration - TRUE single source of truth!
const badgePropConfig = createPropExplorerConfig(
  "Badge",
  "A label used to show a status or category.",
  badgeVariantsDefinition,
  [
    createPropMetadata("icon", "React.ComponentType<{ className?: string }>", {
      description: "Icon component to display alongside the text",
    }),
    createPropMetadata("children", "React.ReactNode", {
      description: "The content to display inside the badge",
    }),
  ]
);

export { Badge, badgePropConfig, badgeVariants, type BadgeProps };
