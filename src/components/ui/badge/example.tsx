import React from "react";
import { Badge } from "./badge";

// Example component for preview system
export const BadgeExample = ({
  variant = "default",
  size = "base",
  leftIcon,
  rightIcon,
  children = "Badge",
  ...props
}: {
  variant?: "default" | "neutral" | "success" | "error" | "warning";
  size?: "sm" | "base" | "lg";
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  children?: string;
  [key: string]: unknown;
}) => {
  // The component preview system already converts icon strings to components
  // so we can pass them directly to the Badge
  return (
    <Badge
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    >
      {children}
    </Badge>
  );
};
