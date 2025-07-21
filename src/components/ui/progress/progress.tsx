// Tremor Progress [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { Progress as BaseProgress } from "@base-ui-components/react/progress";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  defaultValueFormatter,
  progressAnimationClasses,
  progressLabelVariants,
  progressValueVariants,
  sharedProgressVariants,
  type ProgressVariant,
} from "../progress-utils";

const progressVariants = tv({
  slots: {
    root: "flex w-full items-center",
    track: "relative flex h-2 w-full items-center rounded-full",
    indicator: "h-full flex-col rounded-full",
    label: [progressLabelVariants.base, "ml-2 whitespace-nowrap"],
    value: [progressValueVariants.base, "ml-2 whitespace-nowrap"],
  },
  variants: {
    variant: {
      default: {
        track: `bg-${sharedProgressVariants.default.lightBg} dark:bg-${sharedProgressVariants.default.darkBg}`,
        indicator: `bg-${sharedProgressVariants.default.light} dark:bg-${sharedProgressVariants.default.dark}`,
      },
      neutral: {
        track: `bg-${sharedProgressVariants.neutral.lightBg} dark:bg-${sharedProgressVariants.neutral.darkBg}`,
        indicator: `bg-${sharedProgressVariants.neutral.light} dark:bg-${sharedProgressVariants.neutral.dark}`,
      },
      warning: {
        track: `bg-${sharedProgressVariants.warning.lightBg} dark:bg-${sharedProgressVariants.warning.darkBg}`,
        indicator: `bg-${sharedProgressVariants.warning.light} dark:bg-${sharedProgressVariants.warning.dark}`,
      },
      error: {
        track: `bg-${sharedProgressVariants.error.lightBg} dark:bg-${sharedProgressVariants.error.darkBg}`,
        indicator: `bg-${sharedProgressVariants.error.light} dark:bg-${sharedProgressVariants.error.dark}`,
      },
      success: {
        track: `bg-${sharedProgressVariants.success.lightBg} dark:bg-${sharedProgressVariants.success.darkBg}`,
        indicator: `bg-${sharedProgressVariants.success.light} dark:bg-${sharedProgressVariants.success.dark}`,
      },
    },
    showAnimation: {
      true: {
        indicator: progressAnimationClasses.enabled,
      },
      false: {
        indicator: progressAnimationClasses.disabled,
      },
    },
  },
  defaultVariants: {
    variant: "default",
    showAnimation: true,
  },
});

const Progress = BaseProgress.Root;
Progress.displayName = "Progress";

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Track>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Track> &
    VariantProps<typeof progressVariants>
>(({ className, variant, showAnimation, ...props }, ref) => {
  const { track } = progressVariants({ variant, showAnimation });
  return (
    <BaseProgress.Track
      ref={ref}
      className={cx(track(), className)}
      {...props}
    />
  );
});
ProgressTrack.displayName = "ProgressTrack";

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Indicator> &
    VariantProps<typeof progressVariants>
>(({ className, variant, showAnimation, ...props }, ref) => {
  const { indicator } = progressVariants({ variant, showAnimation });
  return (
    <BaseProgress.Indicator
      ref={ref}
      className={cx(indicator(), className)}
      {...props}
    />
  );
});
ProgressIndicator.displayName = "ProgressIndicator";

const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Label>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Label> &
    VariantProps<typeof progressVariants>
>(({ className, variant, showAnimation, ...props }, ref) => {
  const { label } = progressVariants({ variant, showAnimation });
  return (
    <BaseProgress.Label
      ref={ref}
      className={cx(label(), className)}
      {...props}
    />
  );
});
ProgressLabel.displayName = "ProgressLabel";

const ProgressValue = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Value>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Value> &
    VariantProps<typeof progressVariants>
>(({ className, variant, showAnimation, ...props }, ref) => {
  const { value } = progressVariants({ variant, showAnimation });
  return (
    <BaseProgress.Value
      ref={ref}
      className={cx(value(), className)}
      {...props}
    />
  );
});
ProgressValue.displayName = "ProgressValue";

// Composite component for easy usage (backward compatibility)
interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<typeof BaseProgress.Root>,
    VariantProps<typeof progressVariants> {
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number | null, max: number) => string;
}

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof BaseProgress.Root>,
  ProgressBarProps
>(
  (
    {
      value = 0,
      max = 100,
      label,
      showValue = false,
      valueFormatter,
      showAnimation = true,
      variant = "default",
      className,
      ...props
    },
    ref
  ) => {
    const { root } = progressVariants({ variant, showAnimation });
    const formatValue = valueFormatter || defaultValueFormatter;

    return (
      <Progress
        ref={ref}
        value={value}
        max={max}
        className={cx(root(), className)}
        {...props}
      >
        {label && (
          <ProgressLabel variant={variant} showAnimation={showAnimation}>
            {label}
          </ProgressLabel>
        )}
        <ProgressTrack variant={variant} showAnimation={showAnimation}>
          <ProgressIndicator variant={variant} showAnimation={showAnimation} />
        </ProgressTrack>
        {showValue && (
          <ProgressValue variant={variant} showAnimation={showAnimation}>
            {(formattedValue, val) => formatValue(val, max)}
          </ProgressValue>
        )}
      </Progress>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export {
  Progress,
  ProgressBar,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue, // Composite component for backward compatibility
  progressVariants,
  type ProgressBarProps,
};
