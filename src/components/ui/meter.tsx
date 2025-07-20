// Tremor Meter [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { Meter as BaseMeter } from "@base-ui-components/react/meter";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const meterVariants = tv({
  slots: {
    track: "",
    indicator: "",
  },
  variants: {
    variant: {
      default: {
        track: "bg-blue-200 dark:bg-blue-500/30",
        indicator: "bg-blue-500 dark:bg-blue-500",
      },
      neutral: {
        track: "bg-zinc-200 dark:bg-zinc-500/40",
        indicator: "bg-zinc-500 dark:bg-zinc-500",
      },
      warning: {
        track: "bg-yellow-200 dark:bg-yellow-500/30",
        indicator: "bg-yellow-500 dark:bg-yellow-500",
      },
      error: {
        track: "bg-red-200 dark:bg-red-500/30",
        indicator: "bg-red-500 dark:bg-red-500",
      },
      success: {
        track: "bg-emerald-200 dark:bg-emerald-500/30",
        indicator: "bg-emerald-500 dark:bg-emerald-500",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface MeterProps
  extends React.ComponentPropsWithoutRef<typeof BaseMeter.Root>,
    VariantProps<typeof meterVariants> {
  value: number;
  min?: number;
  max?: number;
  showAnimation?: boolean;
  showValue?: boolean;
  label?: string;
  formatValue?: (value: number, min: number, max: number) => string;
}

const Meter = React.forwardRef<
  React.ElementRef<typeof BaseMeter.Root>,
  MeterProps
>(
  (
    {
      value,
      min = 0,
      max = 100,
      showAnimation = true,
      showValue = true,
      label,
      formatValue,
      variant,
      className,
      ...props
    },
    ref
  ) => {
    const { track, indicator } = meterVariants({ variant });

    const defaultFormatValue = (
      val: number,
      minVal: number,
      maxVal: number
    ) => {
      const percentage = Math.round(((val - minVal) / (maxVal - minVal)) * 100);
      return `${percentage}%`;
    };

    const formattedValue = formatValue
      ? formatValue(value, min, max)
      : defaultFormatValue(value, min, max);

    return (
      <BaseMeter.Root
        ref={ref}
        value={value}
        min={min}
        max={max}
        className={cx("flex w-full items-center gap-3", className)}
        {...props}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {(label || showValue) && (
            <div className="flex items-center justify-between">
              {label && (
                <BaseMeter.Label
                  className={cx(
                    // base
                    "text-sm font-medium leading-6",
                    // text color
                    "text-zinc-900 dark:text-zinc-50"
                  )}
                >
                  {label}
                </BaseMeter.Label>
              )}
              {showValue && (
                <BaseMeter.Value
                  className={cx(
                    // base
                    "text-sm font-medium leading-6 tabular-nums",
                    // text color
                    "text-zinc-900 dark:text-zinc-50"
                  )}
                >
                  {formattedValue}
                </BaseMeter.Value>
              )}
            </div>
          )}

          <BaseMeter.Track
            className={cx(
              // base
              "relative h-2 w-full overflow-hidden rounded-full",
              // background
              track(),
              // border
              "shadow-[inset_0_0_0_1px] shadow-zinc-200/50 dark:shadow-zinc-800/50"
            )}
          >
            <BaseMeter.Indicator
              className={cx(
                // base
                "h-full rounded-full",
                // background
                indicator(),
                // animation
                showAnimation && "transition-all duration-500 ease-out"
              )}
            />
          </BaseMeter.Track>
        </div>
      </BaseMeter.Root>
    );
  }
);
Meter.displayName = "Meter";

export { Meter, meterVariants, type MeterProps };
