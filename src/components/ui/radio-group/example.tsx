"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RadioOption } from "../radio";
import { RadioGroup, RadioGroupItem } from "./radio-group";

interface RadioGroupExampleProps {
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export function RadioGroupExample({
  orientation = "vertical",
  size = "md",
  disabled = false,
}: RadioGroupExampleProps) {
  const [basicValue, setBasicValue] = useState("option2");
  const [planValue, setPlanValue] = useState("basic");
  const [horizontalValue, setHorizontalValue] = useState("medium");
  const [controlledValue, setControlledValue] = useState("option2");
  const [customValue, setCustomValue] = useState("custom1");
  const [disabledValue, setDisabledValue] = useState("available1");

  return (
    <div className="space-y-8">
      {/* Basic radio group */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Radio Group</h3>
        <RadioGroup
          value={basicValue}
          onValueChange={(value) => setBasicValue(value as string)}
          orientation={orientation}
          size={size}
          disabled={disabled}
        >
          <RadioOption value="option1" label="Option 1" size={size} />
          <RadioOption value="option2" label="Option 2" size={size} />
          <RadioOption value="option3" label="Option 3" size={size} />
        </RadioGroup>
        <p className="text-sm text-zinc-600">Selected: {basicValue}</p>
      </div>

      {/* With descriptions */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Descriptions</h3>
        <RadioGroup
          value={planValue}
          onValueChange={(value) => setPlanValue(value as string)}
        >
          <RadioOption
            value="basic"
            label="Basic Plan"
            description="Perfect for individuals and small projects"
          />
          <RadioOption
            value="pro"
            label="Pro Plan"
            description="Best for growing teams and businesses"
          />
          <RadioOption
            value="enterprise"
            label="Enterprise Plan"
            description="Advanced features for large organizations"
          />
        </RadioGroup>
      </div>

      {/* Horizontal layout */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Horizontal Layout</h3>
        <RadioGroup
          value={horizontalValue}
          onValueChange={(value) => setHorizontalValue(value as string)}
          orientation="horizontal"
        >
          <RadioOption value="small" label="Small" />
          <RadioOption value="medium" label="Medium" />
          <RadioOption value="large" label="Large" />
        </RadioGroup>
      </div>

      {/* Size variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Size Variants</h3>

        <div className="space-y-1">
          <h4 className="text-xs font-medium text-zinc-500">Small</h4>
          <RadioGroup value="option1" onValueChange={() => {}} size="sm">
            <RadioOption value="option1" label="Option 1" size="sm" />
            <RadioOption value="option2" label="Option 2" size="sm" />
          </RadioGroup>
        </div>

        <div className="space-y-1">
          <h4 className="text-xs font-medium text-zinc-500">Medium</h4>
          <RadioGroup value="option1" onValueChange={() => {}} size="md">
            <RadioOption value="option1" label="Option 1" size="md" />
            <RadioOption value="option2" label="Option 2" size="md" />
          </RadioGroup>
        </div>

        <div className="space-y-1">
          <h4 className="text-xs font-medium text-zinc-500">Large</h4>
          <RadioGroup value="option1" onValueChange={() => {}} size="lg">
            <RadioOption value="option1" label="Option 1" size="lg" />
            <RadioOption value="option2" label="Option 2" size="lg" />
          </RadioGroup>
        </div>
      </div>

      {/* Controlled example */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Controlled State</h3>
        <div className="space-y-3">
          <div className="text-sm text-zinc-600">
            Selected: <strong>{controlledValue}</strong>
          </div>

          <RadioGroup
            value={controlledValue}
            onValueChange={(value) => setControlledValue(value as string)}
          >
            <RadioOption value="option1" label="Option 1" />
            <RadioOption value="option2" label="Option 2" />
            <RadioOption value="option3" label="Option 3" />
          </RadioGroup>

          <div className="flex gap-2">
            <Button
              onClick={() => setControlledValue("option1")}
              size="sm"
              variant="outline"
            >
              Select Option 1
            </Button>
            <Button
              onClick={() => setControlledValue("option3")}
              size="sm"
              variant="outline"
            >
              Select Option 3
            </Button>
          </div>
        </div>
      </div>

      {/* With disabled options */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Disabled Options</h3>
        <RadioGroup
          value={disabledValue}
          onValueChange={(value) => setDisabledValue(value as string)}
        >
          <RadioOption value="available1" label="Available Option 1" />
          <RadioOption value="available2" label="Available Option 2" />
          <RadioOption
            value="disabled"
            label="Disabled Option"
            description="This option is not selectable"
            disabled
          />
          <RadioOption value="available3" label="Available Option 3" />
        </RadioGroup>
      </div>

      {/* Custom structure */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Structure</h3>
        <RadioGroup
          value={customValue}
          onValueChange={(value) => setCustomValue(value as string)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom1" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Custom Item 1</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                With custom layout structure
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom2" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Custom Item 2</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Full control over component structure
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom3" disabled />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-400">
                Custom Item 3
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                This item is disabled
              </span>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
