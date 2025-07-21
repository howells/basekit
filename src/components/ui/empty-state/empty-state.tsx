import { cx } from "@/lib/utils";
import React from "react";
import { Button } from "../button/button";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Text } from "../text";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The main heading/title of the empty state
   */
  title: string;
  /**
   * Optional description text below the title
   */
  description?: string;
  /**
   * Optional icon to display above the title
   */
  icon?: React.ComponentType<{ className?: string }>;
  /**
   * Primary action button
   */
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
  };
  /**
   * Secondary action (usually a link)
   */
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  /**
   * Visual variant of the empty state
   */
  variant?: "default" | "minimal";
  /**
   * Size variant
   */
  size?: "sm" | "default" | "lg";
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon: Icon,
      primaryAction,
      secondaryAction,
      variant = "default",
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          // Base styles
          "flex flex-col items-center justify-center text-center",
          // Spacing based on size
          size === "sm" && "gap-3 py-8 px-6",
          size === "default" && "gap-4 py-12 px-8",
          size === "lg" && "gap-6 py-16 px-12",
          // Max width
          "max-w-md mx-auto",
          className
        )}
        {...props}
      >
        {/* Icon */}
        {Icon && (
          <div
            className={cx(
              "flex items-center justify-center rounded-full",
              // Background styling based on variant
              variant === "default" &&
                "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400",
              variant === "minimal" && "text-zinc-500 dark:text-zinc-500",
              // Size
              size === "sm" && "size-12",
              size === "default" && "size-16",
              size === "lg" && "size-20"
            )}
          >
            <Icon
              className={cx(
                size === "sm" && "size-5",
                size === "default" && "size-6",
                size === "lg" && "size-8"
              )}
            />
          </div>
        )}

        {/* Title */}
        <div className="space-y-2">
          {size === "lg" ? (
            <Heading level={2}>{title}</Heading>
          ) : (
            <Subheading>{title}</Subheading>
          )}

          {/* Description */}
          {description && <Text>{description}</Text>}
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div
            className={cx(
              "flex flex-col items-center",
              size === "sm" && "gap-2 mt-2",
              size === "default" && "gap-3 mt-4",
              size === "lg" && "gap-4 mt-6",
              // Stack on mobile, inline on larger screens if both actions exist
              primaryAction && secondaryAction && "sm:flex-row sm:gap-3"
            )}
          >
            {/* Primary Action */}
            {primaryAction && (
              <Button
                variant="default"
                size={size === "sm" ? "sm" : "default"}
                disabled={primaryAction.disabled}
                onClick={primaryAction.onClick}
                render={
                  primaryAction.href ? (
                    <a href={primaryAction.href} />
                  ) : undefined
                }
              >
                {primaryAction.label}
              </Button>
            )}

            {/* Secondary Action */}
            {secondaryAction && (
              <Button
                variant="ghost"
                size={size === "sm" ? "sm" : "default"}
                onClick={secondaryAction.onClick}
                render={
                  secondaryAction.href ? (
                    <a href={secondaryAction.href} />
                  ) : undefined
                }
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";

export { EmptyState, type EmptyStateProps };
