"use client";

import React from "react";
import { Calendar } from "./calendar";

// Example component for preview system
export const CalendarExample = ({
  mode = "single",
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation = false,
  weekStartsOn = 1,
  selected,
  defaultSelected,
  ...props
}: {
  mode?: "single" | "range";
  numberOfMonths?: number;
  enableYearNavigation?: boolean;
  disableNavigation?: boolean;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  selected?: Date | { from?: Date; to?: Date };
  defaultSelected?: Date | { from?: Date; to?: Date };
  [key: string]: unknown;
}) => {
  // Handle different mode types for the prop explorer
  const calendarProps = {
    mode,
    numberOfMonths,
    enableYearNavigation,
    disableNavigation,
    weekStartsOn,
    ...props,
  };

  // Add mode-specific props
  if (mode === "single") {
    return (
      <Calendar {...calendarProps} mode="single" selected={selected as Date} />
    );
  } else if (mode === "range") {
    return (
      <Calendar
        {...calendarProps}
        mode="range"
        selected={
          selected && typeof selected === 'object' && 'from' in selected
            ? { from: (selected as any).from, to: (selected as any).to }
            : undefined
        }
      />
    );
  }

  // Default case
  return <Calendar {...calendarProps} />;
};
