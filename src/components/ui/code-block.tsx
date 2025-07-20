// Tremor CodeBlock [v1.0.0] - Base UI

"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

import { cx } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ children, language = "tsx", className }, ref) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    return (
      <div
        ref={ref}
        className={cx(
          "relative rounded-lg border border-zinc-200 dark:border-zinc-800",
          className
        )}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {language}
          </span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          >
            {copied ? (
              <>
                <Check className="size-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="size-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="overflow-x-auto p-4">
          <code className="text-sm text-zinc-900 dark:text-zinc-100">
            {children}
          </code>
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
