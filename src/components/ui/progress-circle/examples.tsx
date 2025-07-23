"use client";

import React from "react";
import { ProgressCircle } from "./progress-circle";

export function BasicProgressCircle() {
  return <ProgressCircle value={75} />;
}

export function SmallProgressCircle() {
  return <ProgressCircle value={60} size="sm" />;
}

export function LargeProgressCircle() {
  return <ProgressCircle value={85} size="lg" />;
}

export function ProgressCircleWithLabel() {
  return <ProgressCircle value={90} showValue />;
}

export function IndeterminateProgressCircle() {
  return <ProgressCircle value={null} />;
}