"use client";

import React from "react";
import { Separator } from "./separator";

export function DefaultSeparator() {
  return (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  );
}

export function VerticalSeparator() {
  return (
    <div className="flex h-8 items-center space-x-4">
      <span>Left content</span>
      <Separator orientation="vertical" />
      <span>Right content</span>
    </div>
  );
}

export function SeparatorVariants() {
  return (
    <div className="space-y-4">
      <div>Content</div>
      <Separator variant="subtle" />
      <div>Content</div>
      <Separator variant="default" />
      <div>Content</div>
      <Separator variant="strong" />
      <div>Content</div>
    </div>
  );
}

export function SeparatorSizes() {
  return (
    <div className="space-y-4">
      <div>Content</div>
      <Separator size="sm" />
      <div>Content</div>
      <Separator size="md" />
      <div>Content</div>
      <Separator size="lg" />
      <div>Content</div>
    </div>
  );
}