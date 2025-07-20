// Tremor Slider [v1.0.0] - Base UI

"use client";

import { cx, focusRing } from "@/lib/utils";
import { Slider as BaseSlider } from "@base-ui-components/react/slider";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sliderVariants = tv({
  slots: {
    root: [
      // base
      "relative flex cursor-pointer touch-none select-none",
      // orientation
      "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    control: [
      // base
      "relative w-full h-full flex items-center",
      // orientation
      "data-[orientation='horizontal']:w-full",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:flex-col",
    ],
    track: [
      // base
      "relative grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800",
      // orientation
      "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
    ],
    indicator: [
      // base
      "absolute rounded-full bg-blue-500 dark:bg-blue-500",
      // orientation
      "data-[orientation='horizontal']:h-full",
      "data-[orientation='vertical']:w-full",
      // disabled
      "data-[disabled]:bg-gray-300 dark:data-[disabled]:bg-gray-700",
    ],
    thumb: [
      // base
      "block size-[17px] shrink-0 rounded-full border shadow-sm transition-all",
      // border color
      "border-gray-400 dark:border-gray-500",
      // background color
      "bg-white dark:bg-white",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:bg-gray-200 dark:data-[disabled]:border-gray-800 dark:data-[disabled]:bg-gray-600",
      // focus
      focusRing,
      "outline-offset-0",
    ],
    value: [
      // base
      "text-sm font-medium text-gray-900 dark:text-gray-50",
      // spacing
      "mb-2",
    ],
  },
});

interface SliderProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof BaseSlider.Root>,
      "children"
    >,
    VariantProps<typeof sliderVariants> {
  ariaLabelThumb?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof BaseSlider.Root>,
  SliderProps
>(
  (
    {
      className,
      ariaLabelThumb,
      showValue = false,
      valueFormatter = (value) => value.toString(),
      ...props
    },
    forwardedRef
  ) => {
    const {
      root,
      control,
      track,
      indicator,
      thumb,
      value: valueClass,
    } = sliderVariants();
    const currentValue = props.value || props.defaultValue || [0];
    const valueArray = Array.isArray(currentValue)
      ? currentValue
      : [currentValue];

    return (
      <div className="w-full">
        {showValue && (
          <BaseSlider.Value className={valueClass}>
            {(formattedValues, values) => (
              <div className="flex justify-between">
                {values.map((val, index) => (
                  <span key={index}>{valueFormatter(val)}</span>
                ))}
              </div>
            )}
          </BaseSlider.Value>
        )}
        <BaseSlider.Root
          ref={forwardedRef}
          className={cx(root(), className)}
          {...props}
        >
          <BaseSlider.Control className={control()}>
            <BaseSlider.Track className={track()}>
              <BaseSlider.Indicator className={indicator()} />
              {valueArray.map((_, index) => (
                <BaseSlider.Thumb
                  key={index}
                  className={thumb()}
                  getAriaLabel={() =>
                    ariaLabelThumb || `Slider thumb ${index + 1}`
                  }
                />
              ))}
            </BaseSlider.Track>
          </BaseSlider.Control>
        </BaseSlider.Root>
      </div>
    );
  }
);

Slider.displayName = "Slider";

// Export individual components for advanced usage
const SliderRoot = BaseSlider.Root;
const SliderValue = BaseSlider.Value;
const SliderControl = BaseSlider.Control;
const SliderTrack = BaseSlider.Track;
const SliderIndicator = BaseSlider.Indicator;
const SliderThumb = BaseSlider.Thumb;

export {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
  sliderVariants,
};
