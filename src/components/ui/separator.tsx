// Tremor Separator [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { Separator as BaseSeparator } from "@base-ui-components/react/separator";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const separatorVariants = tv({
  base: [
    // base
    "shrink-0 border-none",
    // background color
    "bg-gray-300 dark:bg-gray-700",
  ],
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
    variant: {
      default: "bg-gray-300 dark:bg-gray-700",
      subtle: "bg-gray-200 dark:bg-gray-800",
      strong: "bg-gray-400 dark:bg-gray-600",
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

const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseSeparator> &
    VariantProps<typeof separatorVariants>
>(({ className, orientation = "horizontal", variant, size, ...props }, ref) => (
  <BaseSeparator
    ref={ref}
    orientation={orientation}
    className={cx(separatorVariants({ orientation, variant, size }), className)}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator, separatorVariants };
