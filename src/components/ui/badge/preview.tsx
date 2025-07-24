import type { TailwindShade } from "@/lib/variants";
import React from "react";
import { Badge } from "./badge";

// Example component for preview system
export const BadgeExample = ({
  variant = "default",
  size = "base",
  bordered,
  rounded,
  color,
  colorShade,
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
  color?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
  colorShade?:
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950";
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
      color={color}
      colorShade={
        colorShade ? (parseInt(colorShade) as TailwindShade) : undefined
      }
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
