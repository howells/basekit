// Tremor Badge [v1.0.0]

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { X } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { config } from "@/lib/config";
import { cx, iconUtils, type ComponentWithIconsProps } from "@/lib/utils";
import { componentVariants, type BadgeVariant } from "@/lib/variants";
import { StatusDot } from "../status-dot/status-dot";

// Define variants structure using centralized system
const badgeVariantsDefinition = {
  variants: {
    variant: {
      ...componentVariants.badge,
    },
    size: {
      sm: "px-1.5 py-0.5 text-xs font-medium",
      base: "px-2 py-1 text-xs font-medium",
      lg: "px-2.5 py-1.5 text-sm font-medium",
    },
    bordered: {
      true: "ring-1 ring-inset",
      false: "",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    bordered: false,
    rounded: false,
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

// Map badge sizes to dismiss button icon sizes (slightly smaller)
const badgeToDismissIconSizeMap = {
  sm: "xs",
  base: "xs",
  lg: "sm",
} as const;

/**
 * Badge component props.
 * @extends useRender.ComponentProps<"span">
 * @extends VariantProps<typeof badgeVariants>
 * @extends ComponentWithIconsProps
 */
interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants>,
    ComponentWithIconsProps {
  /**
   * Whether to show a border around the badge.
   * @default false
   */
  bordered?: boolean;
  /**
   * Whether to use full border radius for a pill shape.
   * @default false
   */
  rounded?: boolean;
  /**
   * Whether to show a status dot instead of icons.
   * @default false
   */
  statusDot?: boolean;
  /**
   * Whether to animate the status dot for active statuses.
   * @default false
   */
  statusAnimated?: boolean;
  /**
   * Callback function called when the dismiss button is clicked.
   * When provided, a dismiss button (X) will be shown.
   */
  onDismiss?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Custom icon component for the dismiss button.
   * @default X icon from lucide-react
   */
  dismissIcon?: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
}

/**
 * A small status or label component built with Base UI's useRender pattern.
 *
 * Based on Base UI's useRender hook for flexible rendering, providing status indicators,
 * labels, and tags with multiple color variants and sizes. Supports left and right icons
 * for enhanced visual context, and an optional dismiss button for removable badges.
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
 * <Badge bordered>Bordered</Badge>
 *
 * // Rounded (pill-shaped)
 * <Badge rounded>Pill Badge</Badge>
 * <Badge rounded variant="success">Success Pill</Badge>
 *
 * // With status dot (overrides icons)
 * <Badge statusDot>Ready</Badge>
 * <Badge statusDot statusAnimated>Building</Badge>
 * <Badge statusDot variant="error">Error Status</Badge>
 *
 * // Color variants
 * <Badge variant="purple">Purple Badge</Badge>
 * <Badge variant="emerald">Emerald Badge</Badge>
 * <Badge variant="pink" rounded>Pink Pill</Badge>
 *
 * // With dismiss button
 * <Badge onDismiss={() => handleRemove()}>Removable</Badge>
 * <Badge onDismiss={handleRemove} dismissIcon={TrashIcon}>Custom Dismiss</Badge>
 *
 * // Combination with icons and dismiss
 * <Badge
 *   leftIcon={UserIcon}
 *   onDismiss={handleRemoveUser}
 *   variant="neutral"
 * >
 *   John Doe
 * </Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      render = <span />,
      variant,
      size = "base",
      bordered,
      rounded,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      iconStrokeWidth = config.getIconStrokeWidth(),
      children,
      onDismiss,
      dismissIcon: DismissIcon = X,
      statusDot,
      statusAnimated = false,
      className,
      ...otherProps
    }: BadgeProps,
    forwardedRef
  ) => {
    const hasChildren = children != null && children !== "";
    const hasLeftIcon = LeftIcon != null;
    const hasRightIcon = RightIcon != null;
    const hasDismissButton = onDismiss != null;

    // Get appropriate icon size for badge size
    const iconSize = badgeToIconSizeMap[size];
    const iconSizeClass = iconUtils.getIconSize(iconSize);
    const iconClassName = `${iconSizeClass} shrink-0`;

    // Get appropriate icon size for dismiss button
    const dismissIconSize = badgeToDismissIconSizeMap[size];
    const dismissIconSizeClass = iconUtils.getIconSize(dismissIconSize);
    const dismissIconClassName = `${dismissIconSizeClass} shrink-0`;

    // Use default variant when statusDot is true (unless custom color or variant provided)
    const effectiveVariant = variant;

    const renderBadgeContent = () => {
      const hasLeftIcon = LeftIcon && !statusDot; // StatusDot overrides left icon
      const hasRightIcon = RightIcon && !statusDot; // StatusDot overrides right icon
      const hasDismissButton = Boolean(onDismiss);
      const hasStatusDot = Boolean(statusDot);

      // Status dot size mapping to match badge sizes
      const statusDotSize =
        size === "sm" ? "sm" : size === "lg" ? "lg" : "default";

      // Use statusAnimated prop directly since statusDot is just boolean
      const shouldAnimate = statusAnimated;

      return (
        <>
          {hasStatusDot && (
            <StatusDot
              variant={effectiveVariant}
              size={statusDotSize}
              animated={shouldAnimate}
            />
          )}
          {hasLeftIcon && (
            <LeftIcon className={iconClassName} strokeWidth={iconStrokeWidth} />
          )}
          {children}
          {hasRightIcon && (
            <RightIcon
              className={iconClassName}
              strokeWidth={iconStrokeWidth}
            />
          )}
          {hasDismissButton && (
            <button
              onClick={onDismiss}
              className={cx(
                "ml-1 -mr-1 p-0.5 rounded-full transition-colors",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current"
              )}
              aria-label="Remove"
              type="button"
            >
              <DismissIcon
                className={dismissIconClassName}
                strokeWidth={iconStrokeWidth}
              />
            </button>
          )}
        </>
      );
    };

    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(
        badgeVariants({ variant: effectiveVariant, size, bordered, rounded }),
        className
      ),
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
