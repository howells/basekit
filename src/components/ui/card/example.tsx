"use client";

import React from "react";
import { Card } from "./card";

// Example component for preview system
export const CardExample = ({
  padding = 6,
  children = "This is a card component with some example content. It provides a clean container with subtle styling and shadow.",
  className,
  ...props
}: {
  padding?: number;
  children?: string;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <Card
      padding={
        padding as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24
      }
      className={className}
      {...props}
    >
      {children}
    </Card>
  );
};
