"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Example({
  type = "single",
  variant = "default",
  size = "default",
  ...props
}: {
  type?: "single" | "multiple";
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  [key: string]: any;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Text Alignment</h3>
        <ToggleGroup
          variant={variant}
          size={size}
          defaultValue={["left"]}
          {...props}
        >
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
          <ToggleGroupItem value="justify">Justify</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {type === "multiple" && (
        <div>
          <h3 className="text-sm font-medium mb-2">Text Formatting</h3>
          <ToggleGroup variant={variant} size={size} defaultValue={["bold"]}>
            <ToggleGroupItem value="bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline">U</ToggleGroupItem>
            <ToggleGroupItem value="strikethrough">S</ToggleGroupItem>
          </ToggleGroup>
        </div>
      )}
    </div>
  );
}
