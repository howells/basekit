// Tremor Badge [v1.0.0]

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { config } from "@/lib/config";
import { cx, iconUtils, type ComponentWithIconsProps } from "@/lib/utils";

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
    bordered: {
      true: "ring-1 ring-inset",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    bordered: true,
  },
} as const;

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-md font-medium"
  ),
  ...badgeVariantsDefinition,
});

// Map badge sizes to icon sizes
const badgeToIconSizeMap = {
  sm: "xs",
  base: "sm",
  lg: "base",
} as const;

/**
 * Props for the Badge component.
 *
 * @interface BadgeProps
 * @extends useRender.ComponentProps<"span">
 * @extends VariantProps<typeof badgeVariants>
 * @extends ComponentWithIconsProps
 */
interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants>,
    ComponentWithIconsProps {}

/**
 * A small status or label component built with Base UI's useRender pattern.
 *
 * Based on Base UI's useRender hook for flexible rendering, providing status indicators,
 * labels, and tags with multiple color variants and sizes. Supports left and right icons
 * for enhanced visual context.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 *
 * // With variants
 * <Badge variant="success">Completed</Badge>
 * <Badge variant="error">Failed</Badge>
 *
 * // With icons
 * <Badge leftIcon={CheckIcon} variant="success">Verified</Badge>
 * <Badge rightIcon={ArrowRightIcon}>Continue</Badge>
 *
 * // Different sizes
 * <Badge size="sm">Small</Badge>
 * <Badge size="lg">Large</Badge>
 *
 * // With or without border
 * <Badge bordered={false}>No Border</Badge>
 * <Badge bordered={true}>With Border</Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      render = <span />,
      variant,
      size = "base",
      bordered,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      iconStrokeWidth = config.getIconStrokeWidth(),
      children,
      ...otherProps
    }: BadgeProps,
    forwardedRef
  ) => {
    const hasChildren = children != null && children !== "";
    const hasLeftIcon = LeftIcon != null;
    const hasRightIcon = RightIcon != null;

    // Get appropriate icon size for badge size
    const iconSize = badgeToIconSizeMap[size];
    const iconSizeClass = iconUtils.getIconSize(iconSize);
    const iconClassName = `${iconSizeClass} shrink-0`;

    const renderBadgeContent = () => {
      return (
        <>
          {hasLeftIcon && (
            <LeftIcon className={iconClassName} strokeWidth={iconStrokeWidth} />
          )}
          {hasChildren && children}
          {hasRightIcon && (
            <RightIcon
              className={iconClassName}
              strokeWidth={iconStrokeWidth}
            />
          )}
        </>
      );
    };

    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(badgeVariants({ variant, size, bordered })),
      children: renderBadgeContent(),
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

export { Badge, badgeVariants, type BadgeProps };
