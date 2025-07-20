// Tremor ProgressCircle [v1.0.0] - Enhanced

import { cx } from "@/lib/utils";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import {
  clampValue,
  defaultValueFormatter,
  getProgressPercentage,
  progressAnimationClasses,
  progressLabelVariants,
  progressValueVariants,
  sharedProgressVariants,
  type ProgressVariant,
} from "./progress-utils";

const progressCircleVariants = tv({
  slots: {
    root: "relative",
    svg: "-rotate-90 transform",
    track: "transition-colors ease-linear",
    indicator: "transition-colors ease-linear",
    content: "absolute inset-0 flex items-center justify-center",
    label: progressLabelVariants.base,
    value: progressValueVariants.base,
  },
  variants: {
    variant: {
      default: {
        track: `stroke-${sharedProgressVariants.default.lightBg} dark:stroke-${sharedProgressVariants.default.darkBg}`,
        indicator: `stroke-${sharedProgressVariants.default.light} dark:stroke-${sharedProgressVariants.default.dark}`,
      },
      neutral: {
        track: `stroke-${sharedProgressVariants.neutral.lightBg} dark:stroke-${sharedProgressVariants.neutral.darkBg}`,
        indicator: `stroke-${sharedProgressVariants.neutral.light} dark:stroke-${sharedProgressVariants.neutral.dark}`,
      },
      warning: {
        track: `stroke-${sharedProgressVariants.warning.lightBg} dark:stroke-${sharedProgressVariants.warning.darkBg}`,
        indicator: `stroke-${sharedProgressVariants.warning.light} dark:stroke-${sharedProgressVariants.warning.dark}`,
      },
      error: {
        track: `stroke-${sharedProgressVariants.error.lightBg} dark:stroke-${sharedProgressVariants.error.darkBg}`,
        indicator: `stroke-${sharedProgressVariants.error.light} dark:stroke-${sharedProgressVariants.error.dark}`,
      },
      success: {
        track: `stroke-${sharedProgressVariants.success.lightBg} dark:stroke-${sharedProgressVariants.success.darkBg}`,
        indicator: `stroke-${sharedProgressVariants.success.light} dark:stroke-${sharedProgressVariants.success.dark}`,
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
    size: {
      xs: { root: "w-8 h-8" },
      sm: { root: "w-12 h-12" },
      md: { root: "w-16 h-16" },
      lg: { root: "w-20 h-20" },
      xl: { root: "w-24 h-24" },
    },
  },
  defaultVariants: {
    variant: "default",
    showAnimation: true,
    size: "md",
  },
});

interface ProgressCircleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "value">,
    VariantProps<typeof progressCircleVariants> {
  value?: number | null;
  max?: number;
  radius?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
  // Enhanced props matching Progress component
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number | null, max: number) => string;
  // Accessibility props
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (
    {
      value = 0,
      max = 100,
      radius = 32,
      strokeWidth = 6,
      showAnimation = true,
      variant = "default",
      size,
      className,
      children,
      label,
      showValue = false,
      valueFormatter,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const safeValue = value !== null ? clampValue(value, 0, max) : null;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const percentage = getProgressPercentage(safeValue, max);
    const offset = circumference - (percentage / 100) * circumference;

    const formatValue = valueFormatter || defaultValueFormatter;
    const {
      root,
      svg,
      track,
      indicator,
      content,
      label: labelClass,
      value: valueClass,
    } = progressCircleVariants({ variant, showAnimation, size });

    // Determine effective size from size variant or radius
    const effectiveSize = size ? undefined : radius * 2;

    return (
      <div
        ref={ref}
        className={cx(root(), className)}
        role="progressbar"
        aria-label={ariaLabel || label || "Progress circle"}
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-describedby={ariaDescribedBy}
        data-max={max}
        data-value={safeValue}
        data-percentage={Math.round(percentage)}
        style={
          effectiveSize
            ? { width: effectiveSize, height: effectiveSize }
            : undefined
        }
        {...props}
      >
        <svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className={cx(svg(), "w-full h-full")}
        >
          {/* Background track */}
          <circle
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            className={track()}
          />
          {/* Progress indicator */}
          {safeValue !== null && safeValue >= 0 && (
            <circle
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              fill="transparent"
              strokeLinecap="round"
              className={indicator()}
            />
          )}
        </svg>

        {/* Content area */}
        <div className={content()}>
          {children || (
            <div className="flex flex-col items-center justify-center text-center">
              {showValue && (
                <span className={valueClass()}>
                  {formatValue(safeValue, max)}
                </span>
              )}
              {label && !showValue && (
                <span className={labelClass()}>{label}</span>
              )}
              {label && showValue && (
                <span className={cx(labelClass(), "text-xs mt-1")}>
                  {label}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle, progressCircleVariants, type ProgressCircleProps };
