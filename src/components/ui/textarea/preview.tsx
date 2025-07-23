"use client";

import React from "react";
import { Textarea } from "./textarea";

// Example component for preview system
export const TextareaExample = ({
  placeholder = "Enter your text here...",
  rows = 3,
  disabled = false,
  hasError = false,
  resize = "vertical",
  ...props
}: {
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  hasError?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  [key: string]: unknown;
}) => {
  // Map resize prop to className
  const resizeClass = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y",
  }[resize];

  return (
    <div className="w-full max-w-md">
      <Textarea
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        hasError={hasError}
        className={resizeClass}
        {...props}
      />
    </div>
  );
};