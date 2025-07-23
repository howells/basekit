"use client";

import React, { useState } from "react";
import { Tooltip } from "./tooltip";
import { Button } from "../button";

export function Default() {
  return (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}

export function Positions() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  );
}

export function Variants() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Default tooltip" variant="default">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip content="Inverse tooltip" variant="inverse">
        <Button variant="secondary">Inverse</Button>
      </Tooltip>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Small tooltip" size="sm">
        <Button size="sm">Small</Button>
      </Tooltip>
      <Tooltip content="Default size tooltip" size="default">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip content="Large tooltip with more content" size="lg">
        <Button size="lg">Large</Button>
      </Tooltip>
    </div>
  );
}

export function NoArrow() {
  return (
    <Tooltip content="Tooltip without arrow" showArrow={false}>
      <Button>No Arrow</Button>
    </Tooltip>
  );
}

export function RichContent() {
  return (
    <Tooltip
      content={
        <div className="space-y-1">
          <div className="font-semibold">Rich Content</div>
          <div className="text-xs opacity-90">
            This tooltip contains multiple elements
          </div>
        </div>
      }
    >
      <Button>Rich Content</Button>
    </Tooltip>
  );
}

export function Controlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-x-4">
      <Tooltip
        content="Controlled tooltip"
        open={open}
        onOpenChange={setOpen}
      >
        <Button>Controlled Tooltip</Button>
      </Tooltip>
      <Button onClick={() => setOpen(!open)}>
        Toggle: {open ? 'Open' : 'Closed'}
      </Button>
    </div>
  );
}