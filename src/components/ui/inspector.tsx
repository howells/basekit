// Inspector Component [v1.0.0] - Similar to Sidebar

import { cx } from "@/lib/utils";
import React from "react";

export function Inspector({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"aside">) {
  return (
    <aside
      className={cx(
        // Base layout
        "flex h-full w-80 flex-shrink-0 flex-col",
        // Border and background
        "border-l border-zinc-200 bg-zinc-50/50",
        "dark:border-zinc-800 dark:bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
}

export function InspectorHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout
        "flex flex-shrink-0 items-center justify-between px-6 py-4",
        // Border
        "border-b border-zinc-200 dark:border-zinc-800",
        className
      )}
      {...props}
    />
  );
}

export function InspectorBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout - scrollable content area
        "flex-1 overflow-y-auto px-6 py-4",
        className
      )}
      {...props}
    />
  );
}

export function InspectorSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout
        "space-y-6",
        className
      )}
      {...props}
    />
  );
}

export function InspectorGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        // Base layout for form groups
        "space-y-2",
        className
      )}
      {...props}
    />
  );
}
