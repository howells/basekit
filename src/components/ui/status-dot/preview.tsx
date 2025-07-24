"use client";

import type { BadgeVariant } from "@/lib/variants";
import React from "react";
import { StatusDot } from "./status-dot";

// Example component for preview system
export const StatusDotExample = ({
  variant = "default",
  label = "Ready",
  animated = false,
  size = "default",
  showAllVariants = false,
  showColorVariants = false,
  showSizes = false,
  showWithoutLabels = false,
  ...props
}: {
  variant?: BadgeVariant;
  label?: string;
  animated?: boolean;
  size?: "sm" | "default" | "lg";
  showAllVariants?: boolean;
  showColorVariants?: boolean;
  showSizes?: boolean;
  showWithoutLabels?: boolean;
  [key: string]: unknown;
}) => {
  // Show all semantic variants
  if (showAllVariants) {
    return (
      <div className="space-y-3" {...props}>
        <StatusDot variant="default" label="Default" size={size} />
        <StatusDot variant="success" label="Success" size={size} />
        <StatusDot variant="info" label="Info" size={size} />
        <StatusDot variant="warning" label="Warning" size={size} />
        <StatusDot variant="error" label="Error" size={size} />
        <StatusDot variant="neutral" label="Neutral" size={size} />
        <StatusDot variant="critical" label="Critical" size={size} />
        <StatusDot variant="positive" label="Positive" size={size} />
        <StatusDot variant="negative" label="Negative" size={size} />
      </div>
    );
  }

  // Show color variants
  if (showColorVariants) {
    return (
      <div className="space-y-3" {...props}>
        <StatusDot variant="purple" label="Purple" size={size} />
        <StatusDot variant="pink" label="Pink" size={size} />
        <StatusDot variant="orange" label="Orange" size={size} />
        <StatusDot variant="emerald" label="Emerald" size={size} />
        <StatusDot variant="sky" label="Sky" size={size} />
        <StatusDot variant="amber" label="Amber" size={size} />
        <StatusDot variant="lime" label="Lime" size={size} />
        <StatusDot variant="cyan" label="Cyan" size={size} />
      </div>
    );
  }

  // Show different sizes
  if (showSizes) {
    return (
      <div className="space-y-4" {...props}>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            With Labels
          </h4>
          <div className="flex items-center gap-6">
            <StatusDot variant="success" label="Small" size="sm" />
            <StatusDot variant="info" label="Default" size="default" />
            <StatusDot variant="error" label="Large" size="lg" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Dots Only
          </h4>
          <div className="flex items-center gap-6">
            <StatusDot variant="success" size="sm" />
            <StatusDot variant="info" size="default" />
            <StatusDot variant="error" size="lg" />
          </div>
        </div>
      </div>
    );
  }

  // Show without labels
  if (showWithoutLabels) {
    return (
      <div className="flex items-center gap-3" {...props}>
        <StatusDot variant="success" size={size} />
        <StatusDot variant="info" size={size} />
        <StatusDot variant="warning" size={size} />
        <StatusDot variant="error" size={size} />
        <StatusDot variant="neutral" size={size} />
        <StatusDot variant="purple" size={size} />
        <StatusDot variant="emerald" size={size} />
        <StatusDot variant="orange" size={size} />
      </div>
    );
  }

  // Default single status dot
  return (
    <div className="flex items-center justify-center p-8" {...props}>
      <StatusDot
        variant={variant}
        label={label}
        size={size}
        animated={animated}
      />
    </div>
  );
};
