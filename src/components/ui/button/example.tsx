import React from "react";
import { Button } from "./button";

// Example component for preview system
export const ButtonExample = ({
  variant = "default",
  size = "default",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  textAlign = "center",
  leftIcon,
  rightIcon,
  loadingText,
  children = "Button",
  ...props
}: {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "icon";
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  textAlign?: "left" | "center" | "right";
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  loadingText?: string;
  children?: string;
  [key: string]: unknown;
}) => {
  // The component preview system already converts icon strings to components
  // so we can pass them directly to the Button
  return (
    <Button
      variant={variant}
      size={size}
      isLoading={isLoading}
      disabled={disabled}
      fullWidth={fullWidth}
      textAlign={textAlign}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
};
