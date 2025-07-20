// Tremor Switch [v1.0.0] - Base UI

import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusRing } from "@/lib/utils";

const switchVariants = tv({
  slots: {
    root: [
      // base
      "group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 shadow-inner outline-hidden ring-1 ring-inset transition-all",
      "bg-gray-200 dark:bg-gray-950",
      // ring color
      "ring-black/5 dark:ring-gray-800",
      // checked
      "data-[checked]:bg-blue-500 dark:data-[checked]:bg-blue-500",
      // disabled
      "data-[disabled]:cursor-default",
      // disabled checked
      "data-[disabled]:data-[checked]:bg-blue-200",
      "data-[disabled]:data-[checked]:ring-gray-300",
      // disabled checked dark
      "dark:data-[disabled]:data-[checked]:ring-gray-900",
      "dark:data-[disabled]:data-[checked]:bg-blue-900",
      // disabled unchecked
      "data-[disabled]:data-[unchecked]:ring-gray-300",
      "data-[disabled]:data-[unchecked]:bg-gray-100",
      // disabled unchecked dark
      "dark:data-[disabled]:data-[unchecked]:ring-gray-700",
      "dark:data-[disabled]:data-[unchecked]:bg-gray-800",
      focusRing,
    ],
    thumb: [
      // base
      "pointer-events-none relative inline-block transform appearance-none rounded-full border-none shadow-lg outline-hidden transition-all duration-150 ease-in-out focus:border-none focus:outline-hidden focus:outline-transparent",
      // background color
      "bg-white dark:bg-gray-50",
      // disabled
      "group-data-[disabled]:shadow-none",
      "group-data-[disabled]:bg-gray-50 dark:group-data-[disabled]:bg-gray-500",
    ],
  },
  variants: {
    size: {
      default: {
        root: "h-5 w-9",
        thumb:
          "h-4 w-4 data-[checked]:translate-x-4 data-[unchecked]:translate-x-0",
      },
      small: {
        root: "h-4 w-7",
        thumb:
          "h-3 w-3 data-[checked]:translate-x-3 data-[unchecked]:translate-x-0",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>,
      "children"
    >,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof BaseSwitch.Root>,
  SwitchProps
>(({ className, size, ...props }: SwitchProps, forwardedRef) => {
  const { root, thumb } = switchVariants({ size });
  return (
    <BaseSwitch.Root
      ref={forwardedRef}
      className={cx(root(), className)}
      {...props}
    >
      <BaseSwitch.Thumb className={cx(thumb())} />
    </BaseSwitch.Root>
  );
});

Switch.displayName = "Switch";

// Export individual components for advanced usage
const SwitchRoot = BaseSwitch.Root;
const SwitchThumb = BaseSwitch.Thumb;

export { Switch, SwitchRoot, SwitchThumb, switchVariants };
