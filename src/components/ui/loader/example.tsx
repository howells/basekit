"use client";

import React from "react";
import { Loader } from "./loader";

// Example component for preview system
export const LoaderExample = ({
  size = "base",
  "aria-label": ariaLabel = "Loading",
  ...props
}: {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  "aria-label"?: string;
  [key: string]: unknown;
}) => {
  return (
    <Loader
      size={size}
      aria-label={ariaLabel}
      {...props}
    />
  );
};