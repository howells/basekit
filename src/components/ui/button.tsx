// Tremor Button [v1.0.0] - Base UI

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { Loader2 } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center text-sm font-medium shadow-xs transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        "border-transparent",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-blue-500 dark:bg-blue-500",
        // hover color
        "hover:bg-blue-600 dark:hover:bg-blue-600",
        // disabled
        "disabled:bg-blue-300 disabled:text-white",
        "dark:disabled:bg-blue-800 dark:disabled:text-blue-400",
      ],
      secondary: [
        // border
        "border-zinc-300 dark:border-zinc-800",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-white dark:bg-zinc-950",
        //hover color
        "hover:bg-zinc-50 dark:hover:bg-zinc-900/60",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
      light: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-zinc-200 dark:bg-zinc-900",
        // hover color
        "hover:bg-zinc-300/70 dark:hover:bg-zinc-800/80",
        // disabled
        "disabled:bg-zinc-100 disabled:text-zinc-400",
        "dark:disabled:bg-zinc-800 dark:disabled:text-zinc-600",
      ],
      ghost: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover color
        "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
        // disabled
        "disabled:text-zinc-400",
        "dark:disabled:text-zinc-600",
      ],
      destructive: [
        // text color
        "text-white",
        // border
        "border-transparent",
        // background color
        "bg-red-600 dark:bg-red-700",
        // hover color
        "hover:bg-red-700 dark:hover:bg-red-600",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
        "dark:disabled:bg-red-950 dark:disabled:text-red-400",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
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
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const defaultProps: useRender.ElementProps<"button"> = {
      className: cx(buttonVariants({ variant }), className),
      disabled: disabled || isLoading,
      type: "button",
      children: isLoading ? (
        <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
          <Loader2
            className="size-4 shrink-0 animate-spin"
            aria-hidden="true"
          />
          <span className="sr-only">
            {loadingText ? loadingText : "Loading"}
          </span>
          {loadingText ? loadingText : children}
        </span>
      ) : (
        children
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

// Component configuration for documentation
export const componentConfig = {
  id: "button",
  name: "Button",
  description:
    "A clickable button component with multiple variants and states.",
  category: "ui" as const,

  importStatement: `import { Button } from "@/components/ui/button";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Primary button with default styling.",
      preview: <Button>Click me</Button>,
      code: `<Button>Click me</Button>`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different button variants for various use cases.",
      preview: (
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="light">Light</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      ),
      code: `<div className="flex gap-2">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="light">Light</Button>
  <Button variant="ghost">Ghost</Button>
</div>`,
    },
    {
      id: "loading",
      title: "Loading State",
      description: "Button with loading indicator.",
      preview: <Button isLoading>Loading...</Button>,
      code: `<Button isLoading>Loading...</Button>`,
    },
  ],

  api: [
    {
      name: "Button",
      description: "The main button component.",
      properties: [
        {
          name: "variant",
          type: '"primary" | "secondary" | "light" | "ghost"',
          default: '"primary"',
          description: "The visual style variant of the button.",
        },
        {
          name: "isLoading",
          type: "boolean",
          default: "false",
          description: "Shows loading spinner and disables the button.",
        },
        {
          name: "loadingText",
          type: "string",
          description: "Text to show when loading.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disables the button.",
        },
      ],
    },
  ],

  accessibility: {
    keyboardShortcuts: [
      {
        key: "Space",
        description: "Activates the button.",
      },
      {
        key: "Enter",
        description: "Activates the button.",
      },
    ],
  },
};

export { Button, buttonVariants, type ButtonProps };
