import { cx } from "@/lib/utils";
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
  prefixText,
  prefixIcon,
  suffixText,
  suffixIcon,
  prefixStyling = true,
  suffixStyling = true,
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
  prefixText?: string;
  prefixIcon?: React.ComponentType<{ className?: string }>;
  suffixText?: string;
  suffixIcon?: React.ComponentType<{ className?: string }>;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
} & React.ComponentProps<typeof Input>) => {
  // Icon size based on input size (like Button component)
  const iconSize = {
    "size-3.5": size === "sm",
    "size-4": size === "base",
    "size-5": size === "lg",
  };
  const iconClassName = cx("shrink-0", iconSize);

  // Determine what to render for prefix - can be text, icon, or both
  const resolvedPrefix =
    prefixText && prefixIcon ? (
      <div className="flex items-center gap-1">
        {React.createElement(prefixIcon, { className: iconClassName })}
        <span>{prefixText}</span>
      </div>
    ) : prefixIcon ? (
      React.createElement(prefixIcon, { className: iconClassName })
    ) : (
      prefixText || undefined
    );

  // Determine what to render for suffix - can be text, icon, or both
  const resolvedSuffix =
    suffixText && suffixIcon ? (
      <div className="flex items-center gap-1">
        <span>{suffixText}</span>
        {React.createElement(suffixIcon, { className: iconClassName })}
      </div>
    ) : suffixIcon ? (
      React.createElement(suffixIcon, { className: iconClassName })
    ) : (
      suffixText || undefined
    );

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
        prefix={resolvedPrefix}
        suffix={resolvedSuffix}
        prefixStyling={prefixStyling}
        suffixStyling={suffixStyling}
        {...props}
      />
    </div>
  );
};
