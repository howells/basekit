"use client";

import { useState } from "react";
import { Slider } from "./slider";

interface SliderExampleProps {
  showValue?: boolean;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
}

export function SliderExample({
  showValue = false,
  orientation = "horizontal",
  disabled = false,
}: SliderExampleProps) {
  const [basicValue, setBasicValue] = useState([50]);
  const [withValueValue, setWithValueValue] = useState([25]);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [stepValue, setStepValue] = useState([25]);
  const [verticalValue, setVerticalValue] = useState([40]);
  const [disabledValue] = useState([60]);

  return (
    <div className="space-y-8">
      {/* Basic slider */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Slider</h3>
        <Slider
          value={basicValue}
          onValueChange={setBasicValue}
          min={0}
          max={100}
          step={1}
          showValue={showValue}
          disabled={disabled}
          orientation={orientation}
        />
        <p className="text-sm text-zinc-600">Value: {basicValue[0]}</p>
      </div>

      {/* With value display */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Value Display</h3>
        <Slider
          value={withValueValue}
          onValueChange={setWithValueValue}
          min={0}
          max={100}
          step={1}
          showValue
          disabled={disabled}
          orientation={orientation}
        />
      </div>

      {/* Range slider */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Range Slider</h3>
        <Slider
          value={rangeValue}
          onValueChange={setRangeValue}
          min={0}
          max={100}
          step={1}
          showValue
          disabled={disabled}
          orientation={orientation}
        />
        <p className="text-sm text-zinc-600">
          Range: {rangeValue[0]} - {rangeValue[1]}
        </p>
      </div>

      {/* Custom step with formatter */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Step & Formatter</h3>
        <Slider
          value={stepValue}
          onValueChange={setStepValue}
          min={0}
          max={100}
          step={5}
          showValue
          valueFormatter={(val) => `$${val}`}
          disabled={disabled}
          orientation={orientation}
        />
        <p className="text-sm text-zinc-600">Value: ${stepValue[0]}</p>
      </div>

      {/* Vertical slider */}
      {orientation === "vertical" && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Vertical Orientation</h3>
          <div className="h-64 flex items-center">
            <Slider
              value={verticalValue}
              onValueChange={setVerticalValue}
              min={0}
              max={100}
              step={1}
              orientation="vertical"
              showValue
              disabled={disabled}
            />
          </div>
          <p className="text-sm text-zinc-600">Value: {verticalValue[0]}</p>
        </div>
      )}

      {/* Disabled slider */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled State</h3>
        <Slider
          value={disabledValue}
          min={0}
          max={100}
          step={1}
          disabled
          showValue
          orientation={orientation}
        />
        <p className="text-sm text-zinc-600">Value: {disabledValue[0]}</p>
      </div>

      {/* Min/max labels */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Min/Max Labels</h3>
        <div className="space-y-2">
          <Slider
            value={[75]}
            onValueChange={() => {}}
            min={0}
            max={100}
            step={1}
            showValue
            disabled={disabled}
            orientation={orientation}
          />
          <div className="flex justify-between text-xs text-zinc-500">
            <span>0</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
}