"use client";

import React from "react";
import { Progress } from "./progress";

export function BasicProgress() {
  return (
    <div className="space-y-2">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  );
}