// Tremor Radio [v1.0.0] - Base UI

import { cx, focusRing } from "@/lib/utils";
import { Radio as BaseRadio } from "@base-ui-components/react/radio";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Radio Item Variants
const radioVariants = tv({
  slots: {
    root: [
      // base
      "group relative flex items-center justify-center appearance-none outline-hidden",
      // focus
      focusRing,
    ],
    indicator: [
      // base
      "flex items-center justify-center",
    ],
    circle: [
      // base
      "flex shrink-0 items-center justify-center rounded-full border shadow-xs",
      // border color
      "border-zinc-300 dark:border-zinc-800",
      // background color
      "bg-white dark:bg-zinc-950",
    ],
    dot: [
      // base
      "shrink-0 rounded-full",
      // indicator color
      "bg-white",
    ],
  },
  variants: {
    size: {
      sm: {
        root: "size-4",
        circle: "size-4",
        dot: "size-1",
      },
      md: {
        root: "size-4",
        circle: "size-4",
        dot: "size-1.5",
      },
      lg: {
        root: "size-5",
        circle: "size-5",
        dot: "size-2",
      },
    },
    variant: {
      default: {
        circle: [
          // checked
          "group-data-[checked]:border-0 group-data-[checked]:border-transparent group-data-[checked]:bg-blue-500",
          // disabled
          "group-data-[disabled]:border-zinc-300 group-data-[disabled]:bg-zinc-100 group-data-[disabled]:text-zinc-400",
          "dark:group-data-[disabled]:border-zinc-700 dark:group-data-[disabled]:bg-zinc-800",
        ],
        dot: [
          // disabled
          "group-data-[disabled]:bg-zinc-400 dark:group-data-[disabled]:bg-zinc-500",
        ],
      },
      card: {
        circle: [
          // checked
          "group-data-[checked]:border-0 group-data-[checked]:border-transparent group-data-[checked]:bg-blue-500",
          // disabled
          "group-data-[disabled]:border-zinc-300 group-data-[disabled]:bg-zinc-100 group-data-[disabled]:text-zinc-400",
          "dark:group-data-[disabled]:border-zinc-700 dark:group-data-[disabled]:bg-zinc-800",
        ],
        dot: [
          // disabled
          "group-data-[disabled]:bg-zinc-400 dark:group-data-[disabled]:bg-zinc-500",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

// Radio Label Variants
const radioLabelVariants = tv({
  base: [
    // base
    "flex items-center gap-2 cursor-pointer",
    // text
    "text-sm font-medium text-zinc-900 dark:text-zinc-50",
    // disabled
    "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:text-zinc-400 dark:has-[[data-disabled]]:text-zinc-600",
  ],
  variants: {
    size: {
      sm: "gap-1.5 text-xs",
      md: "gap-2 text-sm",
      lg: "gap-2.5 text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// Radio Card Variants
const radioCardVariants = tv({
  base: [
    // base
    "group relative w-full rounded-md border p-4 text-left shadow-xs transition cursor-pointer",
    // background color
    "bg-white dark:bg-zinc-950",
    // border color
    "border-zinc-300 dark:border-zinc-800",
    // checked
    "data-[checked]:border-blue-500 dark:data-[checked]:border-blue-500",
    // disabled
    "data-[disabled]:border-zinc-100 dark:data-[disabled]:border-zinc-800",
    "data-[disabled]:bg-zinc-50 data-[disabled]:shadow-none dark:data-[disabled]:bg-zinc-900",
    "data-[disabled]:cursor-not-allowed",
    // focus
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
  ],
  variants: {
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// Base Radio Components
const Radio = BaseRadio.Root;
Radio.displayName = "Radio";

const RadioIndicator = React.forwardRef<
  React.ElementRef<typeof BaseRadio.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseRadio.Indicator>
>(({ className, ...props }, ref) => (
  <BaseRadio.Indicator
    ref={ref}
    className={cx("flex items-center justify-center", className)}
    {...props}
  />
));
RadioIndicator.displayName = "RadioIndicator";

// Styled Radio Components
const RadioItem = React.forwardRef<
  React.ElementRef<typeof BaseRadio.Root>,
  React.ComponentPropsWithoutRef<typeof BaseRadio.Root> &
    VariantProps<typeof radioVariants>
>(({ className, size, variant, ...props }, ref) => {
  const { root, circle, indicator, dot } = radioVariants({ size, variant });

  return (
    <BaseRadio.Root ref={ref} className={cx(root(), className)} {...props}>
      <div className={circle()}>
        <BaseRadio.Indicator className={indicator()}>
          <div className={dot()} />
        </BaseRadio.Indicator>
      </div>
    </BaseRadio.Root>
  );
});
RadioItem.displayName = "RadioItem";

const RadioLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label"> &
    VariantProps<typeof radioLabelVariants>
>(({ className, size, children, ...props }, ref) => (
  <label
    ref={ref}
    className={cx(radioLabelVariants({ size }), className)}
    {...props}
  >
    {children}
  </label>
));
RadioLabel.displayName = "RadioLabel";

const RadioCard = React.forwardRef<
  React.ElementRef<typeof BaseRadio.Root>,
  React.ComponentPropsWithoutRef<typeof BaseRadio.Root> &
    VariantProps<typeof radioCardVariants> & {
      children?: React.ReactNode;
      indicator?: React.ReactNode;
      showIndicator?: boolean;
    }
>(
  (
    { className, size, children, indicator, showIndicator = true, ...props },
    ref
  ) => (
    <BaseRadio.Root
      ref={ref}
      className={cx(radioCardVariants({ size }), className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">{children}</div>
        {showIndicator && (
          <div className="flex-shrink-0">
            {indicator || (
              <RadioItem size="md" variant="card" value={props.value} />
            )}
          </div>
        )}
      </div>
    </BaseRadio.Root>
  )
);
RadioCard.displayName = "RadioCard";

// Composite Components for easy usage
interface RadioOptionProps {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  size?: VariantProps<typeof radioVariants>["size"];
}

const RadioOption = React.forwardRef<
  React.ElementRef<typeof BaseRadio.Root>,
  RadioOptionProps
>(({ value, label, description, disabled, size = "md", ...props }, ref) => (
  <RadioLabel size={size}>
    <RadioItem
      ref={ref}
      value={value}
      disabled={disabled}
      size={size}
      {...props}
    />
    <div className="flex flex-col">
      <span>{label}</span>
      {description && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {description}
        </span>
      )}
    </div>
  </RadioLabel>
));
RadioOption.displayName = "RadioOption";

interface RadioCardOptionProps {
  value: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  size?: VariantProps<typeof radioCardVariants>["size"];
  showIndicator?: boolean;
}

const RadioCardOption = React.forwardRef<
  React.ElementRef<typeof BaseRadio.Root>,
  RadioCardOptionProps
>(
  (
    {
      value,
      title,
      description,
      disabled,
      size = "md",
      showIndicator = true,
      ...props
    },
    ref
  ) => (
    <RadioCard
      ref={ref}
      value={value}
      disabled={disabled}
      size={size}
      showIndicator={showIndicator}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          {title}
        </div>
        {description && (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </div>
        )}
      </div>
    </RadioCard>
  )
);
RadioCardOption.displayName = "RadioCardOption";

export {
  Radio,
  RadioCard,
  RadioCardOption,
  radioCardVariants,
  RadioIndicator,
  RadioItem,
  RadioLabel,
  radioLabelVariants,
  RadioOption,
  radioVariants,
};
