// Tremor Radio Card Group [v1.0.0] - Base UI

import { cx, focusInput, focusRing } from "@/lib/utils";
import React from "react";
import { type VariantProps } from "tailwind-variants";
import { Radio, RadioIndicator } from "./radio";
import { RadioGroup } from "./radio-group";

// Re-export RadioGroup as RadioCardGroup for backward compatibility
const RadioCardGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  React.ComponentPropsWithoutRef<typeof RadioGroup>
>(({ className, ...props }, ref) => (
  <RadioGroup ref={ref} className={cx("grid gap-2", className)} {...props} />
));
RadioCardGroup.displayName = "RadioCardGroup";

// RadioCardItem with proper card styling using Base UI Radio
const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof Radio>,
  React.ComponentPropsWithoutRef<typeof Radio>
>(({ className, children, ...props }, ref) => (
  <Radio
    ref={ref}
    className={cx(
      // base
      "group relative w-full rounded-md border p-4 text-left shadow-xs transition cursor-pointer focus:outline-hidden",
      // background color
      "bg-white dark:bg-gray-950",
      // border color
      "border-gray-300 dark:border-gray-800",
      // checked
      "data-[checked]:border-blue-500 dark:data-[checked]:border-blue-500",
      // disabled
      "data-[disabled]:border-gray-100 dark:data-[disabled]:border-gray-800",
      "data-[disabled]:bg-gray-50 data-[disabled]:shadow-none dark:data-[disabled]:bg-gray-900",
      "data-[disabled]:cursor-not-allowed",
      // focus
      focusInput,
      className
    )}
    {...props}
  >
    {children}
  </Radio>
));
RadioCardItem.displayName = "RadioCardItem";

// RadioCardIndicator with proper radio button styling
const RadioCardIndicator = React.forwardRef<
  React.ElementRef<typeof RadioIndicator>,
  React.ComponentPropsWithoutRef<typeof RadioIndicator>
>(({ className, ...props }, ref) => (
  <div
    className={cx(
      // base
      "relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-xs outline-hidden",
      // border color
      "border-gray-300 dark:border-gray-800",
      // background color
      "bg-white dark:bg-gray-950",
      // checked
      "group-data-[checked]:border-0 group-data-[checked]:border-transparent group-data-[checked]:bg-blue-500",
      // disabled
      "group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400",
      "dark:group-data-[disabled]:border-gray-700 dark:group-data-[disabled]:bg-gray-800",
      // focus
      focusRing,
      className
    )}
  >
    <RadioIndicator
      ref={ref}
      className={cx("flex items-center justify-center")}
      {...props}
    >
      <div
        className={cx(
          // base
          "size-1.5 shrink-0 rounded-full",
          // indicator
          "bg-white",
          // disabled
          "group-data-[disabled]:bg-gray-400 dark:group-data-[disabled]:bg-gray-500"
        )}
      />
    </RadioIndicator>
  </div>
));
RadioCardIndicator.displayName = "RadioCardIndicator";

export { RadioCardGroup, RadioCardIndicator, RadioCardItem };
