import React from "react";
import { CopyButton } from "./copy-button";

// Example component for preview system
export const CopyButtonExample = ({
  text = "Hello, World!",
  copyLabel = "Copy",
  copiedLabel = "Copied",
  disabled = false,
  ...props
}: {
  text?: string;
  copyLabel?: string;
  copiedLabel?: string;
  disabled?: boolean;
  [key: string]: unknown;
}) => {
  return (
    <CopyButton
      text={text}
      copyLabel={copyLabel}
      copiedLabel={copiedLabel}
      disabled={disabled}
      {...props}
    />
  );
};
