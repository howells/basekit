import React from "react";
import { Label } from "@/components/ui/label";

export function DefaultLabelExample() {
  return <Label htmlFor="email">Email Address</Label>;
}

export function RequiredFieldExample() {
  return (
    <Label htmlFor="name">
      Full Name <span className="text-red-500">*</span>
    </Label>
  );
}