// Tremor Button [v1.0.0] - Base UI

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";
import { Loader } from "./loader";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md border text-center text-sm font-medium shadow-xs transition-all duration-100 ease-in-out",
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
        "bg-transparent hover:underline",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
    iconPosition: {
      left: "",
      right: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    iconPosition: "left",
  },
});

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ComponentType<{ className?: string }>;
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
      iconPosition,
      icon: Icon,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const hasChildren = children != null && children !== "";
    const hasIcon = Icon != null;

    const defaultProps: useRender.ElementProps<"button"> = {
      className: cx(buttonVariants({ variant, size, iconPosition }), className),
      disabled: disabled || isLoading,
      type: "button",
      children: isLoading ? (
        <span
          className={cx(
            "pointer-events-none flex shrink-0 items-center justify-center",
            hasChildren && "gap-1.5",
            iconPosition === "right" && "flex-row-reverse"
          )}
        >
          <Loader
            size="sm"
            aria-label={loadingText ? loadingText : "Loading"}
          />
          {(loadingText || hasChildren) &&
            (loadingText ? loadingText : children)}
        </span>
      ) : (
        <span
          className={cx(
            "flex items-center",
            hasChildren && hasIcon && "gap-1.5",
            iconPosition === "right" && "flex-row-reverse"
          )}
        >
          {hasIcon && <Icon className="size-4 shrink-0" />}
          {hasChildren && children}
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
export const buttonPropConfig = {
  componentName: "Button",
  displayName: "Button",
  description:
    "A clickable button component with multiple variants and states.",

  variants: [
    {
      name: "variant",
      options: [
        { value: "default", label: "Default" },
        { value: "secondary", label: "Secondary" },
        { value: "destructive", label: "Destructive" },
        { value: "outline", label: "Outline" },
        { value: "ghost", label: "Ghost" },
        { value: "link", label: "Link" },
      ],
      defaultOption: "default",
      description: "The visual style variant of the button.",
    },
    {
      name: "size",
      options: [
        { value: "sm", label: "Small" },
        { value: "default", label: "Default" },
        { value: "lg", label: "Large" },
        { value: "icon", label: "Icon Only" },
      ],
      defaultOption: "default",
      description: "The size of the button.",
    },
    {
      name: "isLoading",
      options: [
        { value: "false", label: "Not Loading" },
        { value: "true", label: "Loading" },
      ],
      defaultOption: "false",
      description: "Shows loading spinner and disables the button.",
    },
    {
      name: "disabled",
      options: [
        { value: "false", label: "Enabled" },
        { value: "true", label: "Disabled" },
      ],
      defaultOption: "false",
      description: "Disables the button interaction.",
    },
    {
      name: "iconPosition",
      options: [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
      ],
      defaultOption: "left",
      description: "Position of the icon relative to the text.",
    },
  ],

  props: [
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to display inside the button.",
    },
    {
      name: "loadingText",
      type: "string",
      description:
        "Text to show when loading (defaults to button children if not provided).",
    },
    {
      name: "icon",
      type: "React.ComponentType<{ className?: string }>",
      description: "Icon component to display alongside the text.",
    },
  ],
};

export { Button, buttonVariants, type ButtonProps };
