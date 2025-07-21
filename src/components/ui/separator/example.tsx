"use client";

import React from "react";
import { Separator } from "./separator";

// Example component for preview system
export const SeparatorExample = ({
  orientation = "horizontal",
  variant = "default",
  size = "md",
  ...props
}: {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "subtle" | "strong";
  size?: "sm" | "md" | "lg";
  [key: string]: unknown;
}) => {
  if (orientation === "vertical") {
    // For vertical separator, wrap in a container for better visibility
    return (
      <div className="flex items-center space-x-4 h-8">
        <span className="text-sm text-zinc-600">Left</span>
        <Separator
          orientation={orientation}
          variant={variant}
          size={size}
          {...props}
        />
        <span className="text-sm text-zinc-600">Right</span>
      </div>
    );
  }

  // For horizontal separator, wrap with content for context
  return (
    <div className="space-y-4 w-full">
      <div className="text-sm text-zinc-600">Content above</div>
      <Separator
        orientation={orientation}
        variant={variant}
        size={size}
        {...props}
      />
      <div className="text-sm text-zinc-600">Content below</div>
    </div>
  );
};