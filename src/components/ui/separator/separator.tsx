// Separator Component [v1.0.0] - Base UI Implementation

import { cx } from "@/lib/utils";
import { Separator as BaseSeparator } from "@base-ui-components/react/separator";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const separatorVariants = tv({
  base: [
    // base
    "shrink-0 border-none",
    // background color
    "bg-zinc-300 dark:bg-zinc-700",
  ],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
    variant: {
      default: "bg-zinc-300 dark:bg-zinc-700",
      subtle: "bg-zinc-200 dark:bg-zinc-800",
      strong: "bg-zinc-400 dark:bg-zinc-600",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    // Horizontal sizes
    {
      orientation: "horizontal",
      size: "sm",
      class: "h-px",
    },
    {
      orientation: "horizontal",
      size: "md",
      class: "h-px",
    },
    {
      orientation: "horizontal",
      size: "lg",
      class: "h-0.5",
    },
    // Vertical sizes
    {
      orientation: "vertical",
      size: "sm",
      class: "w-px",
    },
    {
      orientation: "vertical",
      size: "md",
      class: "w-px",
    },
    {
      orientation: "vertical",
      size: "lg",
      class: "w-0.5",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    size: "md",
  },
});

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof BaseSeparator>,
    VariantProps<typeof separatorVariants> {
}

const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  SeparatorProps
>(({ className, orientation = "horizontal", variant, size, ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    orientation={orientation}
    className={cx(separatorVariants({ orientation, variant, size }), className)}
    {...props}
  />
));

Separator.displayName = "Separator";

export { Separator, separatorVariants, type SeparatorProps };