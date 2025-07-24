// Tremor Toolbar [v1.0.0] - Base UI

"use client";

import { cx, focusRing } from "@/lib/utils";
import { Toolbar as BaseToolbar } from "@base-ui-components/react/toolbar";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const toolbarVariants = tv({
  slots: {
    root: [
      // base
      "flex items-center gap-px rounded-md border p-0.5",
      // colors
      "border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800",
    ],
    button: [
      // base
      "flex items-center justify-center rounded-sm font-medium select-none transition-all duration-100 ease-in-out",
      // colors
      "text-zinc-600 dark:text-zinc-400",
      // hover
      "hover:bg-zinc-100 dark:hover:bg-zinc-700",
      // active
      "active:bg-zinc-200 dark:active:bg-zinc-600",
      // highlighted (keyboard navigation)
      "data-[highlighted]:bg-zinc-100 dark:data-[highlighted]:bg-zinc-700",
      // pressed (for toggle buttons)
      "data-[pressed]:bg-zinc-100 data-[pressed]:text-zinc-900 dark:data-[pressed]:bg-zinc-700 dark:data-[pressed]:text-zinc-100",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      // focus
      focusRing,
      "focus-visible:bg-none focus-visible:-outline-offset-1",
    ],
    link: [
      // base
      "flex items-center justify-center rounded-sm font-medium select-none transition-all duration-100 ease-in-out no-underline",
      // colors
      "text-zinc-500 dark:text-zinc-400",
      // hover
      "hover:text-blue-600 dark:hover:text-blue-400",
      // highlighted
      "data-[highlighted]:text-blue-600 dark:data-[highlighted]:text-blue-400",
      // focus
      focusRing,
      "focus-visible:-outline-offset-2",
    ],
    input: [
      // base
      "flex items-center justify-center rounded-sm font-medium transition-all duration-100 ease-in-out",
      // colors
      "text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-950",
      // border
      "border border-zinc-200 dark:border-zinc-600",
      // hover
      "hover:border-zinc-400 dark:hover:border-zinc-500",
      // highlighted
      "data-[highlighted]:border-blue-500 dark:data-[highlighted]:border-blue-400",
      // focus
      "focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-400/20",
      // disabled
      "disabled:opacity-50 disabled:cursor-not-allowed",
    ],
    group: [
      // base
      "flex items-center gap-1",
    ],
    separator: [
      // base
      "mx-1 h-4 w-px",
      // colors
      "bg-zinc-300 dark:bg-zinc-600",
    ],
  },
  variants: {
    variant: {
      default: {
        root: "border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800",
      },
      outline: {
        root: "border-zinc-200 bg-transparent dark:border-zinc-600",
      },
      ghost: {
        root: "border-transparent bg-transparent",
      },
    },
    size: {
      sm: {
        root: "gap-0.5 p-0.5",
        button: "h-6 min-w-6 px-1.5 text-xs",
        link: "h-6 px-1.5 text-xs",
        input: "h-6 px-1.5 text-xs",
      },
      default: {
        root: "gap-px p-0.5",
        button: "h-8 min-w-8 px-3 text-sm",
        link: "h-8 px-3 text-sm",
        input: "h-8 px-3 text-sm",
      },
      lg: {
        root: "gap-1 p-1",
        button: "h-10 min-w-10 px-4 text-base",
        link: "h-10 px-4 text-base",
        input: "h-10 px-4 text-base",
      },
    },
    orientation: {
      horizontal: {
        root: "flex-row",
        separator: "h-4 w-px",
      },
      vertical: {
        root: "flex-col",
        separator: "h-px w-4",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
  },
});

interface ToolbarProps
  extends React.ComponentPropsWithoutRef<typeof BaseToolbar.Root>,
    VariantProps<typeof toolbarVariants> {}

const Toolbar = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Root>,
  ToolbarProps
>(({ className, variant, size, orientation, ...props }, ref) => {
  const { root } = toolbarVariants({ variant, size, orientation });

  return (
    <BaseToolbar.Root
      ref={ref}
      orientation={orientation}
      className={cx(root(), className)}
      {...props}
    />
  );
});

Toolbar.displayName = "Toolbar";

interface ToolbarButtonProps
  extends React.ComponentPropsWithoutRef<typeof BaseToolbar.Button>,
    VariantProps<typeof toolbarVariants> {}

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Button>,
  ToolbarButtonProps
>(({ className, variant, size, ...props }, ref) => {
  const { button } = toolbarVariants({ variant, size });

  return (
    <BaseToolbar.Button
      ref={ref}
      className={cx(button(), className)}
      {...props}
    />
  );
});

ToolbarButton.displayName = "ToolbarButton";

interface ToolbarLinkProps
  extends React.ComponentPropsWithoutRef<typeof BaseToolbar.Link>,
    VariantProps<typeof toolbarVariants> {}

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Link>,
  ToolbarLinkProps
>(({ className, variant, size, ...props }, ref) => {
  const { link } = toolbarVariants({ variant, size });

  return (
    <BaseToolbar.Link ref={ref} className={cx(link(), className)} {...props} />
  );
});

ToolbarLink.displayName = "ToolbarLink";

interface ToolbarInputProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof BaseToolbar.Input>,
      "size"
    >,
    VariantProps<typeof toolbarVariants> {}

const ToolbarInput = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Input>,
  ToolbarInputProps
>(({ className, variant, size, ...props }, ref) => {
  const { input } = toolbarVariants({ variant, size });

  return (
    <BaseToolbar.Input
      ref={ref}
      className={cx(input(), className)}
      {...props}
    />
  );
});

ToolbarInput.displayName = "ToolbarInput";

interface ToolbarGroupProps
  extends React.ComponentPropsWithoutRef<typeof BaseToolbar.Group>,
    VariantProps<typeof toolbarVariants> {}

const ToolbarGroup = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Group>,
  ToolbarGroupProps
>(({ className, variant, size, ...props }, ref) => {
  const { group } = toolbarVariants({ variant, size });

  return (
    <BaseToolbar.Group
      ref={ref}
      className={cx(group(), className)}
      {...props}
    />
  );
});

ToolbarGroup.displayName = "ToolbarGroup";

interface ToolbarSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof BaseToolbar.Separator>,
    VariantProps<typeof toolbarVariants> {}

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof BaseToolbar.Separator>,
  ToolbarSeparatorProps
>(({ className, variant, size, orientation, ...props }, ref) => {
  const { separator } = toolbarVariants({ variant, size, orientation });

  return (
    <BaseToolbar.Separator
      ref={ref}
      orientation={orientation}
      className={cx(separator(), className)}
      {...props}
    />
  );
});

ToolbarSeparator.displayName = "ToolbarSeparator";

// Export individual components for advanced usage
const ToolbarRoot = BaseToolbar.Root;

export {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  toolbarVariants,
};

export type {
  ToolbarButtonProps,
  ToolbarGroupProps,
  ToolbarInputProps,
  ToolbarLinkProps,
  ToolbarProps,
  ToolbarSeparatorProps,
};
