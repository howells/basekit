"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

export function DefaultSelect({
  size,
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      <SelectTrigger size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="date">Date</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectWithGroups({
  size,
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      <SelectTrigger size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Primary Colors</SelectGroupLabel>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="blue">Blue</SelectItem>
          <SelectItem value="yellow">Yellow</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Secondary Colors</SelectGroupLabel>
          <SelectItem value="green">Green</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="purple">Purple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function DisabledSelect({
  size,
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select disabled {...props}>
      <SelectTrigger size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectErrorState({
  size,
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      <SelectTrigger hasError size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectWithDefaultValue({
  size,
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select defaultValue="medium" {...props}>
      <SelectTrigger size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="small">Small</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="large">Large</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SmallSizeExample({
  size = "sm",
  ...props
}: { size?: "default" | "sm" } & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      <SelectTrigger size={size} className="w-[150px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}

// Export with the expected naming convention
export const DefaultExample = DefaultSelect;
export const WithGroupsExample = SelectWithGroups;
export const FormSelectExample = DisabledSelect; // Using DisabledSelect as a placeholder for form example

// Main component for the component explorer
export const SelectExample = DefaultSelect;
