// Tremor Button [v1.0.0] - Base UI

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { createProp, createPropConfig } from "@/lib/prop-explorer";
import { cx, focusRing } from "@/lib/utils";
import { Loader } from "./loader";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md border text-center text-sm font-medium shadow-xs transition-all duration-100 ease-in-out outline-hidden",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      default: [
        // border
        "border-transparent",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-zinc-900 dark:bg-zinc-50",
        // hover color
        "hover:bg-zinc-800 dark:hover:bg-zinc-200",
        // disabled
        "disabled:bg-zinc-400 disabled:text-white",
        "dark:disabled:bg-zinc-600 dark:disabled:text-zinc-300",
      ],
      secondary: [
        // border
        "border-zinc-200 dark:border-zinc-800",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-zinc-100 dark:bg-zinc-800",
        // hover color
        "hover:bg-zinc-200 dark:hover:bg-zinc-700",
        // disabled
        "disabled:bg-zinc-50 disabled:text-zinc-400",
        "dark:disabled:bg-zinc-900 dark:disabled:text-zinc-600",
      ],
      destructive: [
        // border
        "border-transparent",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-red-500 dark:bg-red-900",
        // hover color
        "hover:bg-red-600 dark:hover:bg-red-800",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
        "dark:disabled:bg-red-950 dark:disabled:text-red-400",
      ],
      outline: [
        // border
        "border-zinc-200 dark:border-zinc-800",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-white dark:bg-zinc-950",
        // hover color
        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
        // disabled
        "disabled:border-zinc-200 disabled:text-zinc-400",
        "dark:disabled:border-zinc-800 dark:disabled:text-zinc-600",
      ],
      ghost: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover color
        "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
      link: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover color
        "bg-transparent hover:underline hover:underline-offset-3 decoration-current/25",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
    },
    size: {
      default: "h-9 px-3 py-2 has-[>svg]:px-2.5",
      sm: "h-8 rounded-md gap-1.5 px-2.5 has-[>svg]:px-2",
      lg: "h-10 rounded-md px-4 has-[>svg]:px-3",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  fullWidth?: boolean;
  textAlign?: "left" | "center" | "right";
}

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
    const hasLeftIcon = LeftIcon != null;
    const hasRightIcon = RightIcon != null;
    // For icon-only buttons, don't show text children
    const shouldShowChildren = hasChildren && size !== "icon";

    // Check if children is a complex element (custom layout)
    const hasCustomLayout = React.isValidElement(children);

    // When loading, Loader replaces leftIcon, and we show loadingText or original children
    const effectiveChildren = isLoading && loadingText ? loadingText : children;
    const effectiveShouldShowChildren = shouldShowChildren;

    const defaultProps: useRender.ElementProps<"button"> = {
      className: cx(
        buttonVariants({ variant, size }),
        fullWidth && "w-full max-w-[95vw]",
        textAlign === "left" && "text-left",
        textAlign === "center" && "text-center",
        textAlign === "right" && "text-right",
        !textAlign && "text-center", // default to center
        className
      ),
      disabled: disabled || isLoading,
      type: "button",
      children: hasCustomLayout ? (
        // If children is a custom React element, render it directly
        children
      ) : (
        <span
          className={cx(
            "flex items-center w-full",
            // Full width always uses space-between when there are edge elements
            fullWidth &&
              (hasRightIcon ||
                (textAlign === "center" && (hasLeftIcon || isLoading)))
              ? "justify-between"
              : "gap-1.5"
          )}
        >
          {fullWidth ? (
            // Full width: handle all alignment cases
            textAlign === "center" ? (
              // Center alignment: spread layout
              <>
                <div className="flex items-center">
                  {isLoading ? (
                    <Loader size="sm" aria-label={loadingText || "Loading"} />
                  ) : (
                    hasLeftIcon && <LeftIcon className="size-4 shrink-0" />
                  )}
                </div>
                <div className="flex-1 text-center">
                  {effectiveShouldShowChildren && effectiveChildren}
                </div>
                <div className="flex items-center">
                  {hasRightIcon && <RightIcon className="size-4 shrink-0" />}
                </div>
              </>
            ) : hasRightIcon ? (
              // Left/right alignment with right icon: left group + right icon
              <>
                <div className="flex items-center gap-1.5">
                  {isLoading ? (
                    <Loader size="sm" aria-label={loadingText || "Loading"} />
                  ) : (
                    hasLeftIcon && <LeftIcon className="size-4 shrink-0" />
                  )}
                  {effectiveShouldShowChildren && effectiveChildren}
                </div>
                <RightIcon className="size-4 shrink-0" />
              </>
            ) : (
              // Left/right alignment without right icon: normal flow
              <>
                {isLoading ? (
                  <Loader size="sm" aria-label={loadingText || "Loading"} />
                ) : (
                  hasLeftIcon && <LeftIcon className="size-4 shrink-0" />
                )}
                {effectiveShouldShowChildren && effectiveChildren}
              </>
            )
          ) : (
            // Normal width: simple gap layout
            <>
              {isLoading ? (
                <Loader size="sm" aria-label={loadingText || "Loading"} />
              ) : (
                hasLeftIcon && <LeftIcon className="size-4 shrink-0" />
              )}
              {effectiveShouldShowChildren && effectiveChildren}
              {hasRightIcon && <RightIcon className="size-4 shrink-0" />}
            </>
          )}
        </span>
      ),
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

// PropExplorer configuration
export const buttonPropConfig = createPropConfig(
  "Button",
  "Button",
  "A clickable button component with multiple variants and states.",
  buttonVariants,
  [
    createProp.string(
      "children",
      "The content to display inside the button.",
      "Button"
    ),
    createProp.boolean(
      "isLoading",
      "Shows loading spinner and disables the button.",
      false
    ),
    createProp.boolean("disabled", "Disables the button interaction.", false),
    createProp.boolean(
      "fullWidth",
      "Makes the button take the full width of its container.",
      false
    ),
    createProp.select(
      "textAlign",
      "Text alignment within the button.",
      ["left", "center", "right"],
      "center"
    ),
    createProp.icon("leftIcon", "Icon to display on the left side."),
    createProp.icon("rightIcon", "Icon to display on the right side."),
    createProp.string("loadingText", "Text to show when loading (optional)."),
  ]
);

export { Button, buttonVariants, type ButtonProps };
