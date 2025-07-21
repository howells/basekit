"use client";

import React from "react";
import { Card } from "./card";

// Example component for preview system
export const CardExample = ({
  children = "This is a card component with some example content. It provides a clean container with subtle styling and shadow.",
  className,
  ...props
}: {
  children?: string;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <Card className={className} {...props}>
      {children}
    </Card>
  );
};
