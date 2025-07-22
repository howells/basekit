import { cx, focusRing } from "@/lib/utils";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Loader } from "../loader";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-center text-sm font-medium shadow-xs outline-hidden",
    // add transparent border to match input height
    "border border-transparent",
    // background transition with Apple easing - only animate colors and shadows, not position
    "transition-[background-color,border-color,box-shadow,color] duration-150 ease-[cubic-bezier(0,0,0.58,1)]",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      default: [
        // inset border with normal shadow using proper Tailwind classes
        "inset-ring-1 inset-ring-white/10 shadow-xs",
        "dark:inset-ring-black/20",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-zinc-900 dark:bg-zinc-50",
        // hover with enhanced inset border
        "hover:bg-zinc-800 hover:inset-ring-white/15 hover:shadow-xs",
        "dark:hover:bg-zinc-200 dark:hover:inset-ring-black/25",
        // disabled
        "disabled:bg-zinc-400 disabled:text-white disabled:inset-ring-white/5 disabled:shadow-none",
        "dark:disabled:bg-zinc-600 dark:disabled:text-zinc-300 dark:disabled:inset-ring-black/10",
      ],
      secondary: [
        // clean secondary without border, just shadow
        "shadow-xs",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-zinc-100 dark:bg-zinc-800",
        // hover with shadow only
        "hover:bg-zinc-200 hover:shadow-xs",
        "dark:hover:bg-zinc-700",
        // disabled
        "disabled:bg-zinc-50 disabled:text-zinc-400 disabled:shadow-none",
        "dark:disabled:bg-zinc-900 dark:disabled:text-zinc-600",
      ],
      destructive: [
        // inset border with normal shadow using proper Tailwind classes
        "inset-ring-1 inset-ring-white/20 shadow-xs",
        "dark:inset-ring-white/10",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-red-500 dark:bg-red-900",
        // hover with enhanced inset border
        "hover:bg-red-600 hover:inset-ring-white/25 hover:shadow-xs",
        "dark:hover:bg-red-800 dark:hover:inset-ring-white/15",
        // disabled
        "disabled:bg-red-300 disabled:text-white disabled:inset-ring-white/15 disabled:shadow-none",
        "dark:disabled:bg-red-950 dark:disabled:text-red-400 dark:disabled:inset-ring-white/5",
      ],
      outline: [
        // inset border with normal shadow using proper Tailwind classes
        "inset-ring-1 inset-ring-black/15 shadow-xs",
        "dark:inset-ring-white/15",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-white dark:bg-zinc-950",
        // hover with enhanced inset border
        "hover:bg-zinc-100 hover:inset-ring-black/20 hover:shadow-xs",
        "dark:hover:bg-zinc-800 dark:hover:inset-ring-white/20",
        // disabled
        "disabled:text-zinc-400 disabled:inset-ring-black/10 disabled:shadow-none",
        "dark:disabled:text-zinc-600 dark:disabled:inset-ring-white/10",
      ],
      ghost: [
        // base
        "shadow-none",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover with just background and shadow, no border
        "bg-transparent hover:bg-zinc-100 hover:shadow-xs",
        "dark:hover:bg-zinc-800",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
      link: [
        // base
        "shadow-none",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover color
        "bg-transparent hover:underline hover:underline-offset-3 decoration-current/25",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
      minimal: [
        // base - completely transparent, no shadows
        "shadow-none bg-transparent",
        // text color
        "text-zinc-950 dark:text-white",
        // hover - no background change, just subtle opacity
        "hover:text-zinc-700 dark:hover:text-zinc-300",
        // disabled
        "disabled:text-zinc-400 dark:disabled:text-zinc-600",
      ],
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
    size: {
      default: "py-2 px-3 text-sm has-[>svg]:px-2.5",
      sm: "py-1.5 px-2.5 text-xs has-[>svg]:px-2",
      lg: "py-2.5 px-4 text-base has-[>svg]:px-3",
      icon: "p-2.5",
      "icon-sm": "p-2",
      "icon-lg": "p-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: false,
  },
});

/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @extends useRender.ComponentProps<"button">
 * @extends VariantProps<typeof buttonVariants>
 */
interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Text to display when loading (defaults to children) */
  loadingText?: string;
  /** Icon component to display on the left side */
  leftIcon?: React.ComponentType<{ className?: string }>;
  /** Icon component to display on the right side */
  rightIcon?: React.ComponentType<{ className?: string }>;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Text alignment within the button */
  textAlign?: "left" | "center" | "right";
}

/**
 * A versatile button component built with Base UI's useRender pattern.
 *
 * Based on Base UI's useRender hook for flexible rendering, providing multiple variants,
 * sizes, and states. Supports icons, loading states, and full-width layouts with
 * sophisticated animation and focus management.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 *
 * // With variants and sizes
 * <Button variant="destructive">Delete</Button>
 * <Button variant="outline" size="sm">Small</Button>
 *
 * // With icons and loading
 * <Button leftIcon={PlusIcon}>Add Item</Button>
 * <Button isLoading loadingText="Saving...">Save</Button>
 *
 * // Icon-only buttons
 * <Button size="icon" leftIcon={SearchIcon} />
 *
 * // Full-width with alignment
 * <Button fullWidth textAlign="left">Left Aligned</Button>
 *
 * // As different elements
 * <Button render={<Link href="/page" />}>Navigation</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      render = <button />,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      size,
      rounded,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      fullWidth,
      textAlign,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const hasChildren = children != null && children !== "";
    const isIconOnly =
      size === "icon" || size === "icon-sm" || size === "icon-lg";
    const hasLeftIcon = LeftIcon != null || (isIconOnly && LeftIcon == null);
    const effectiveLeftIcon =
      LeftIcon || (isIconOnly && LeftIcon == null ? MoreHorizontal : null);
    const hasRightIcon =
      RightIcon != null &&
      size !== "icon" &&
      size !== "icon-sm" &&
      size !== "icon-lg";
    const shouldShowChildren =
      hasChildren &&
      size !== "icon" &&
      size !== "icon-sm" &&
      size !== "icon-lg";
    const isIconButton =
      size === "icon" || size === "icon-sm" || size === "icon-lg";

    // Check if children is a complex element (custom layout)
    const hasCustomLayout = React.isValidElement(children);

    // Icon size based on button size
    const iconSize =
      size === "sm" || size === "icon-sm"
        ? "size-3.5"
        : size === "lg" || size === "icon-lg"
        ? "size-5"
        : "size-4";
    const iconClassName = `${iconSize} shrink-0`;

    // When loading, Loader replaces leftIcon, and we show loadingText or original children
    const effectiveChildren = isLoading && loadingText ? loadingText : children;
    const effectiveShouldShowChildren = shouldShowChildren;

    const renderButtonContent = () => {
      // If children is a custom React element AND we don't have icon props, render it directly
      if (hasCustomLayout && !hasLeftIcon && !hasRightIcon && !isLoading) {
        return children;
      }

      // For icon buttons, wrap any text children in sr-only span
      const iconButtonChildren = isIconButton && hasChildren && (
        <span className="sr-only">{effectiveChildren}</span>
      );

      // Determine layout class
      const layoutClassName = cx(
        "flex items-center w-full transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]",
        // For icon-only buttons, center everything
        size === "icon" || size === "icon-sm"
          ? "justify-center"
          : // Full width with centered text and left elements uses space-between
          fullWidth && textAlign === "center" && (hasLeftIcon || isLoading)
          ? "justify-between"
          : "justify-start gap-2"
      );

      // Normal width: simple gap layout
      if (!fullWidth) {
        // Simple case: no icons or loading state
        if (!hasLeftIcon && !hasRightIcon && !isLoading) {
          // For icon buttons, return sr-only wrapped children
          if (isIconButton && hasChildren) {
            return iconButtonChildren;
          }
          return effectiveShouldShowChildren ? effectiveChildren : null;
        }

        return (
          <span className={layoutClassName}>
            {/* Left icon container with CSS transitions */}
            {(isLoading || hasLeftIcon) && (
              <span
                className={cx(
                  "flex items-center relative transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]"
                )}
              >
                <div
                  className={`relative ${iconSize} flex items-center justify-center`}
                >
                  {/* Loader */}
                  <div
                    className={cx(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-150 ease-[cubic-bezier(0,0,0.58,1)]",
                      isLoading
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    )}
                  >
                    <Loader
                      size={
                        size === "sm" || size === "icon-sm"
                          ? "xs"
                          : size === "lg" || size === "icon-lg"
                          ? "base"
                          : "sm"
                      }
                      aria-label={loadingText || "Loading"}
                    />
                  </div>
                  {/* Left Icon */}
                  {hasLeftIcon && (
                    <div
                      className={cx(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-150 ease-[cubic-bezier(0,0,0.58,1)]",
                        !isLoading
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      )}
                    >
                      {effectiveLeftIcon &&
                        React.createElement(effectiveLeftIcon, {
                          className: iconClassName,
                        })}
                    </div>
                  )}
                </div>
              </span>
            )}

            {isIconButton && hasChildren
              ? iconButtonChildren
              : effectiveShouldShowChildren && effectiveChildren}

            {/* Right icon with CSS transitions */}
            {hasRightIcon && (
              <span className="flex items-center">
                {RightIcon &&
                  React.createElement(RightIcon, { className: iconClassName })}
              </span>
            )}
          </span>
        );
      }

      // Full width with center alignment: spread layout
      if (textAlign === "center") {
        return (
          <span className={layoutClassName}>
            {/* Left spacer/icon */}
            {(isLoading || hasLeftIcon) && (
              <span className="flex items-center relative transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]">
                <div
                  className={`relative ${iconSize} flex items-center justify-center`}
                >
                  <div
                    className={cx(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                      isLoading ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Loader
                      size={
                        size === "sm" || size === "icon-sm"
                          ? "xs"
                          : size === "lg" || size === "icon-lg"
                          ? "base"
                          : "sm"
                      }
                      aria-label={loadingText || "Loading"}
                    />
                  </div>
                  {hasLeftIcon && (
                    <div
                      className={cx(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                        !isLoading ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {effectiveLeftIcon &&
                        React.createElement(effectiveLeftIcon, {
                          className: iconClassName,
                        })}
                    </div>
                  )}
                </div>
              </span>
            )}

            <div className="flex-1 text-center">
              {isIconButton && hasChildren
                ? iconButtonChildren
                : effectiveShouldShowChildren && effectiveChildren}
            </div>

            {/* Right icon */}
            <span className="flex items-center">
              {RightIcon &&
                React.createElement(RightIcon, { className: iconClassName })}
            </span>
          </span>
        );
      }

      // Full width with left/right alignment and right icon: single flex container
      if (hasRightIcon) {
        return (
          <span className="flex items-center gap-2 w-full transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]">
            {/* Left icon container */}
            {(isLoading || hasLeftIcon) && (
              <span className="flex items-center relative transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]">
                <div
                  className={`relative ${iconSize} flex items-center justify-center`}
                >
                  <div
                    className={cx(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                      isLoading ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Loader
                      size={size === "sm" ? "xs" : "sm"}
                      aria-label={loadingText || "Loading"}
                    />
                  </div>
                  {hasLeftIcon && (
                    <div
                      className={cx(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                        !isLoading ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {effectiveLeftIcon &&
                        React.createElement(effectiveLeftIcon, {
                          className: iconClassName,
                        })}
                    </div>
                  )}
                </div>
              </span>
            )}

            {/* Text content */}
            {isIconButton && hasChildren
              ? iconButtonChildren
              : effectiveShouldShowChildren && effectiveChildren}

            {/* Right icon with ml-auto to push to right */}
            <span className={`flex items-center ${fullWidth ? "ml-auto" : ""}`}>
              {RightIcon &&
                React.createElement(RightIcon, { className: iconClassName })}
            </span>
          </span>
        );
      }

      // Full width with left/right alignment without right icon: normal flow
      return (
        <span className={layoutClassName}>
          {/* Left icon container */}
          {(isLoading || hasLeftIcon) && (
            <span className="flex items-center relative transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)]">
              <div
                className={`relative ${iconSize} flex items-center justify-center`}
              >
                <div
                  className={cx(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                    isLoading ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Loader
                    size={size === "sm" ? "xs" : "sm"}
                    aria-label={loadingText || "Loading"}
                  />
                </div>
                {hasLeftIcon && (
                  <div
                    className={cx(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
                      !isLoading ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {effectiveLeftIcon &&
                      React.createElement(effectiveLeftIcon, {
                        className: iconClassName,
                      })}
                  </div>
                )}
              </div>
            </span>
          )}
          {isIconButton && hasChildren
            ? iconButtonChildren
            : effectiveShouldShowChildren && effectiveChildren}
        </span>
      );
    };

    const defaultProps: useRender.ElementProps<"button"> = {
      className: cx(
        buttonVariants({ variant, size, rounded }),
        fullWidth && "w-full max-w-[95vw]",
        // Only apply text alignment classes when not using fullWidth center (which has its own layout)
        !(fullWidth && textAlign === "center") &&
          textAlign === "left" &&
          "text-left",
        !(fullWidth && textAlign === "center") &&
          textAlign === "center" &&
          "text-center",
        !(fullWidth && textAlign === "center") &&
          textAlign === "right" &&
          "text-right",
        !(fullWidth && textAlign === "center") && !textAlign && "text-center", // default to center
        className
      ),
      disabled: disabled || isLoading,
      type: "button",
      children: renderButtonContent(),
    };

    const element = useRender({
      render,
      ref: forwardedRef,
      props: mergeProps<"button">(defaultProps, props),
    });

    return element;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
