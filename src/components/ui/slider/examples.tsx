"use client";

import React, { useState } from "react";
import { Slider } from "./slider";

export function Default() {
  const [value, setValue] = useState([50]);

  return (
    <Slider
      value={value}
      onValueChange={(value) => setValue(value as number[])}
      min={0}
      max={100}
      step={1}
    />
  );
}

export function WithValue() {
  const [value, setValue] = useState([25]);

  return (
    <Slider
      value={value}
      onValueChange={(value) => setValue(value as number[])}
      min={0}
      max={100}
      step={1}
      showValue
    />
  );
}

export function RangeSlider() {
  const [range, setRange] = useState([20, 80]);

  return (
    <Slider
      value={range}
      onValueChange={(value) => setRange(value as number[])}
      min={0}
      max={100}
      step={1}
      showValue
    />
  );
}

export function CustomStep() {
  const [value, setValue] = useState([25]);

  return (
    <Slider
      value={value}
      onValueChange={(value) => setValue(value as number[])}
      min={0}
      max={100}
      step={5}
      showValue
      valueFormatter={(val) => `$${val}`}
    />
  );
}

export function Vertical() {
  const [value, setValue] = useState([40]);

  return (
    <div className="h-64 flex items-center">
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={0}
        max={100}
        step={1}
        orientation="vertical"
        showValue
      />
    </div>
  );
}

export function Disabled() {
  const [value] = useState([60]);

  return (
    <Slider
      value={value}
      min={0}
      max={100}
      step={1}
      disabled
      showValue
    />
  );
}