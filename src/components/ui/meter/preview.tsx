"use client";

import React from "react";
import { Meter } from "./meter";

// Example component for preview system
export const MeterExample = ({
  value = 65,
  min = 0,
  max = 100,
  variant = "default",
  showAnimation = true,
  showValue = true,
  label,
  ...props
}: {
  value?: number;
  min?: number;
  max?: number;
  variant?: "default" | "neutral" | "warning" | "error" | "success";
  showAnimation?: boolean;
  showValue?: boolean;
  label?: string;
  [key: string]: unknown;
}) => {
  return (
    <Meter
      value={value}
      min={min}
      max={max}
      variant={variant}
      showAnimation={showAnimation}
      showValue={showValue}
      label={label}
      {...props}
    />
  );
};