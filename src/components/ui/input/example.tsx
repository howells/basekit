import React from "react";
import { Input } from "./input";

export const InputExample = ({
  size = "base",
  type = "text",
  placeholder = "Enter text...",
  disabled = false,
  hasError = false,
  required = false,
  enableStepper = true,
  ...props
}: {
  size?: "sm" | "base" | "lg";
  type?:
    | "text"
    | "email"
    | "password"
    | "search"
    | "number"
    | "tel"
    | "url"
    | "file";
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  required?: boolean;
  enableStepper?: boolean;
} & React.ComponentProps<typeof Input>) => {
  return (
    <div className="w-full max-w-md">
      <Input
        size={size}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
        required={required}
        enableStepper={enableStepper}
        {...props}
      />
    </div>
  );
};
