import React from "react";
import { Toggle } from "./toggle";
import { Bold } from "lucide-react";

export function Basic() {
  return (
    <Toggle>
      <span>Toggle me</span>
    </Toggle>
  );
}

export function WithIcon() {
  return (
    <Toggle>
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}