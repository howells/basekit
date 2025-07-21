// Tremor RadioGroup [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Radio Group Variants
const radioGroupVariants = tv({
  base: [
    // base
    "grid gap-2",
  ],
  variants: {
    orientation: {
      vertical: "grid-cols-1",
      horizontal: "grid-flow-col auto-cols-max gap-4",
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    size: "md",
  },
});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof BaseRadioGroup>,
  React.ComponentPropsWithoutRef<typeof BaseRadioGroup> &
    VariantProps<typeof radioGroupVariants>
>(({ className, orientation, size, ...props }, ref) => (
  <BaseRadioGroup
    ref={ref}
    className={cx(radioGroupVariants({ orientation, size }), className)}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

// Legacy components for backward compatibility with existing radio-group.tsx usage
// These use the new Radio components from radio.tsx
import { RadioItem } from "../radio";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, ...props }, ref) => (
  <RadioItem ref={ref} className={className} {...props} />
));
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem, radioGroupVariants };