"use client";

import React from "react";
import { StatusDot } from "./status-dot";

// Example component for preview system
export const StatusDotExample = ({
  status = "ready",
  label = "Ready",
  animated = false,
  size = "default",
  showAllStatuses = false,
  showSizes = false,
  showWithoutLabels = false,
  ...props
}: {
  status?:
    | "default"
    | "queued"
    | "building"
    | "ready"
    | "error"
    | "canceled"
    | "warning"
    | "pending";
  label?: string;
  animated?: boolean;
  size?: "sm" | "default" | "lg";
  showAllStatuses?: boolean;
  showSizes?: boolean;
  showWithoutLabels?: boolean;
  [key: string]: unknown;
}) => {
  // Show all status types
  if (showAllStatuses) {
    return (
      <div className="space-y-3" {...props}>
        <StatusDot status="ready" label="Ready" size={size} />
        <StatusDot status="building" label="Building" size={size} />
        <StatusDot status="queued" label="Queued" size={size} />
        <StatusDot status="pending" label="Pending" size={size} />
        <StatusDot status="warning" label="Warning" size={size} />
        <StatusDot status="error" label="Error" size={size} />
        <StatusDot status="canceled" label="Canceled" size={size} />
        <StatusDot status="default" label="Default" size={size} />
      </div>
    );
  }

  // Show different sizes
  if (showSizes) {
    return (
      <div className="space-y-4" {...props}>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            With Labels
          </h4>
          <div className="flex items-center gap-6">
            <StatusDot status="ready" label="Small" size="sm" />
            <StatusDot status="building" label="Default" size="default" />
            <StatusDot status="error" label="Large" size="lg" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Dots Only
          </h4>
          <div className="flex items-center gap-6">
            <StatusDot status="ready" size="sm" />
            <StatusDot status="building" size="default" />
            <StatusDot status="error" size="lg" />
          </div>
        </div>
      </div>
    );
  }

  // Show without labels
  if (showWithoutLabels) {
    return (
      <div className="flex items-center gap-3" {...props}>
        <StatusDot status="ready" size={size} />
        <StatusDot status="building" size={size} />
        <StatusDot status="queued" size={size} />
        <StatusDot status="pending" size={size} />
        <StatusDot status="warning" size={size} />
        <StatusDot status="error" size={size} />
        <StatusDot status="canceled" size={size} />
        <StatusDot status="default" size={size} />
      </div>
    );
  }

  // Default single status dot
  return (
    <div className="flex items-center justify-center p-8" {...props}>
      <StatusDot
        status={status}
        label={label}
        size={size}
        animated={animated}
      />
    </div>
  );
};
