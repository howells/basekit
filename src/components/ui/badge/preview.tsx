import React from "react";
import { Badge } from "./badge";

// Example component for preview system
export const BadgeExample = ({
  variant = "default",
  size = "base",
  bordered,
  rounded,
  status,
  statusAnimated,
  leftIcon,
  rightIcon,
  children = "Badge",
  onDismiss: showDismiss,
  dismissIcon,
  ...props
}: {
  variant?: "default" | "neutral" | "success" | "error" | "warning";
  size?: "sm" | "base" | "lg";
  bordered?: boolean;
  rounded?: boolean;
  status?:
    | "default"
    | "queued"
    | "building"
    | "ready"
    | "error"
    | "canceled"
    | "warning"
    | "pending";
  statusAnimated?: boolean;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  children?: string;
  onDismiss?: boolean;
  dismissIcon?: React.ComponentType<{ className?: string }>;
  [key: string]: unknown;
}) => {
  // Convert boolean to actual dismiss handler for preview
  const handleDismiss = showDismiss
    ? () => console.log("Badge dismissed")
    : undefined;

  return (
    <Badge
      variant={variant}
      size={size}
      bordered={bordered}
      rounded={rounded}
      status={status}
      statusAnimated={statusAnimated}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onDismiss={handleDismiss}
      dismissIcon={dismissIcon}
      {...props}
    >
      {children}
    </Badge>
  );
};
