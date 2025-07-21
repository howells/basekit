"use client";

import { Tag } from "./tag";

export function Example({
  label,
  value = "Example Tag",
  variant = "default",
  size = "md",
  removable = false,
  ...props
}: {
  label?: string;
  value?: string;
  variant?: "default" | "neutral" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  [key: string]: any;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag value={value} removable={removable} {...props}>
        {label}
      </Tag>
    </div>
  );
}
