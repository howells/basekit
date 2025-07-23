"use client";

import React from "react";
import { ScrollArea } from "./scroll-area";

export function VerticalScrollArea() {
  return (
    <ScrollArea className="h-48 w-full">
      <div className="p-4">
        <p>Content that overflows vertically...</p>
      </div>
    </ScrollArea>
  );
}

export function HorizontalScrollArea() {
  return (
    <ScrollArea orientation="horizontal" className="w-48">
      <div className="flex space-x-4 p-4">
        <div className="min-w-32">Item 1</div>
        <div className="min-w-32">Item 2</div>
        <div className="min-w-32">Item 3</div>
      </div>
    </ScrollArea>
  );
}

export function BothDirectionsScrollArea() {
  return (
    <ScrollArea orientation="both" className="h-48 w-48">
      <div className="min-h-96 min-w-96 p-4">
        <p>Content that overflows in both directions...</p>
      </div>
    </ScrollArea>
  );
}