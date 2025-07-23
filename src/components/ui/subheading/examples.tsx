import React from "react";
import { Subheading } from "./subheading";

export function Default() {
  return <Subheading level={2}>Section Title</Subheading>;
}

export function Levels() {
  return (
    <div className="space-y-4">
      <Subheading level={2}>Subheading 2</Subheading>
      <Subheading level={3}>Subheading 3</Subheading>
      <Subheading level={4}>Subheading 4</Subheading>
    </div>
  );
}