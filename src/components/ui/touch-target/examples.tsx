import React from "react";
import { TouchTarget } from "./touch-target";

export function Basic() {
  return (
    <TouchTarget>
      <button className="text-sm">Small Button</button>
    </TouchTarget>
  );
}