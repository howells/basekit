"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

// Example component for preview system
export const SelectExample = ({
  placeholder = "Select an option...",
  disabled = false,
  hasError = false,
  defaultValue,
  ...props
}: {
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  defaultValue?: string;
  [key: string]: unknown;
}) => {
  return (
    <div className="w-full max-w-xs">
      <Select disabled={disabled} defaultValue={defaultValue} {...props}>
        <SelectTrigger hasError={hasError}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="elderberry">Elderberry</SelectItem>
          <SelectItem value="fig">Fig</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
