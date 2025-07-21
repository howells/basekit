// CopyButton Component [v1.0.0]

"use client";

import { Check, Copy, LucideIcon } from "lucide-react";
import React, { useState } from "react";

import { cx } from "@/lib/utils";
import { Button } from "../button/button";

interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  copyLabel?: string;
  copiedLabel?: string;
  copyIcon?: LucideIcon;
  copiedIcon?: LucideIcon;
  className?: string;
}

export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      text,
      copyLabel = "Copy",
      copiedLabel = "Copied",
      copyIcon: CopyIcon = Copy,
      copiedIcon: CopiedIcon = Check,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        leftIcon={copied ? CopiedIcon : CopyIcon}
        className={className}
        {...props}
      >
        {copied ? copiedLabel : copyLabel}
      </Button>
    );
  }
);

CopyButton.displayName = "CopyButton";

export { type CopyButtonProps };
