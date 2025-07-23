import React from "react";
import { Meter } from "@/components/ui/meter";

export function DefaultMeterExample() {
  return <Meter value={65} />;
}

export function WithLabelExample() {
  return <Meter value={75} label="Progress" />;
}

export function VariantsExample() {
  return (
    <div className="space-y-4">
      <Meter value={65} variant="default" label="Default" />
      <Meter value={45} variant="neutral" label="Neutral" />
      <Meter value={85} variant="success" label="Success" />
      <Meter value={90} variant="warning" label="Warning" />
      <Meter value={95} variant="error" label="Error" />
    </div>
  );
}

export function CustomRangeExample() {
  return <Meter value={750} min={0} max={1000} label="Storage Used (MB)" />;
}

export function NoAnimationExample() {
  return <Meter value={40} showAnimation={false} label="Static Progress" />;
}

export function ValueOnlyExample() {
  return <Meter value={80} showValue={true} />;
}