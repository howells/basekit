// Callout Component [v1.0.0] - Pure Implementation

import { cx } from "@/lib/utils";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Subheading } from "../subheading";
import { Text } from "../text";

/**
 * Style variants for callout components.
 *
 * Defines color schemes for different types of callouts including
 * informational, success, error, warning, and neutral variants.
 */
const calloutVariants = tv({
  base: "flex flex-col overflow-hidden rounded-md p-4 text-sm",
  variants: {
    /** Visual style variant */
    variant: {
      /** Default informational style (blue) */
      default: [
        // text color
        "text-blue-900 dark:text-blue-400",
        // background color
        "bg-blue-50 dark:bg-blue-950/70",
      ],
      /** Success state style (green) */
      success: [
        // text color
        "text-emerald-900 dark:text-emerald-500",
        // background color
        "bg-emerald-50 dark:bg-emerald-950/70",
      ],
      /** Error state style (red) */
      error: [
        // text color
        "text-red-900 dark:text-red-500",
        // background color
        "bg-red-50 dark:bg-red-950/70",
      ],
      /** Warning state style (yellow) */
      warning: [
        // text color
        "text-yellow-900 dark:text-yellow-500",
        // background color
        "bg-yellow-50 dark:bg-yellow-950/70",
      ],
      /** Neutral informational style (gray) */
      neutral: [
        // text color
        "text-zinc-900 dark:text-zinc-400",
        // background color
        "bg-zinc-100 dark:bg-zinc-800/70",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * Props for the Callout component.
 *
 * Configuration for callout notifications with optional title,
 * icon, and variant styling.
 *
 * @interface CalloutProps
 * @extends React.ComponentPropsWithoutRef<"div">
 * @extends VariantProps<typeof calloutVariants>
 */
interface CalloutProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof calloutVariants> {
  /** Optional title text for the callout */
  title?: string;
  /** Optional icon component to display */
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * A styled callout component for important messages and notifications.
 *
 * Provides prominent display of information, warnings, errors, or success messages
 * with optional titles, icons, and semantic color variants. Perfect for alerts,
 * tips, notices, and status communications.
 *
 * @param variant - Visual style variant (default, success, error, warning, neutral)
 * @param title - Optional title text
 * @param icon - Optional icon component
 * @param children - Main content of the callout
 *
 * @component
 * @example
 * ```tsx
 * // Basic informational callout
 * <Callout>
 *   This is an important piece of information.
 * </Callout>
 *
 * // Success callout with title and icon
 * <Callout variant="success" title="Success!" icon={CheckCircle}>
 *   Your changes have been saved successfully.
 * </Callout>
 *
 * // Error callout
 * <Callout variant="error" title="Error" icon={AlertCircle}>
 *   Something went wrong. Please try again.
 * </Callout>
 *
 * // Warning callout
 * <Callout variant="warning" title="Warning" icon={AlertTriangle}>
 *   This action cannot be undone.
 * </Callout>
 *
 * // Neutral callout with custom content
 * <Callout variant="neutral" title="Pro Tip">
 *   <p>You can use keyboard shortcuts to navigate faster:</p>
 *   <ul className="mt-2 list-disc list-inside">
 *     <li>Ctrl+K to open command palette</li>
 *     <li>Ctrl+/ to toggle sidebar</li>
 *   </ul>
 * </Callout>
 *
 * // Simple callout without title
 * <Callout variant="default" icon={Info}>
 *   Check out our new feature documentation for more details.
 * </Callout>
 * ```
 */
const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    { title, icon: Icon, className, variant, children, ...props }: CalloutProps,
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx(calloutVariants({ variant }), className)}
        {...props}
      >
        <div className={cx("flex items-start gap-3")}>
          {Icon && (
            <Icon className={cx("size-4 shrink-0 mt-1")} aria-hidden="true" />
          )}
          <div className={cx("flex-1")}>
            {title && <Subheading level={3}>{title}</Subheading>}
            {children && (
              <Text className={cx(title ? "mt-2 max-w-prose" : "")}>
                {children}
              </Text>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Callout.displayName = "Callout";

export { Callout, calloutVariants, type CalloutProps };
