"use client";

import { Toggle } from "./toggle";
import { useState } from "react";

export function Example({ 
  variant = "default",
  size = "default",
  ...props 
}: { 
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  [key: string]: any;
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Toggle 
          variant={variant} 
          size={size}
          pressed={isPressed}
          onPressedChange={setIsPressed}
          {...props}
        >
          {isPressed ? "On" : "Off"}
        </Toggle>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          Status: {isPressed ? "Pressed" : "Not pressed"}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Different States</h3>
        <div className="flex items-center gap-2">
          <Toggle variant={variant} size={size}>Unpressed</Toggle>
          <Toggle variant={variant} size={size} pressed>Pressed</Toggle>
          <Toggle variant={variant} size={size} disabled>Disabled</Toggle>
        </div>
      </div>
    </div>
  );
}