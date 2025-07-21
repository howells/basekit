// Tremor CodeBlock [v1.0.0] - Base UI

"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { cx } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
  theme?: "light" | "dark" | "auto";
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ children, language = "tsx", className, theme = "auto" }, ref) => {
    const [copied, setCopied] = useState(false);
    
    // Determine theme
    const isDark = React.useMemo(() => {
      if (theme === "light") return false;
      if (theme === "dark") return true;
      // Auto detection based on system preference or CSS
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    }, [theme]);

    // Listen for system theme changes only when theme is "auto"
    const [systemIsDark, setSystemIsDark] = React.useState(() => {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    });

    React.useEffect(() => {
      if (typeof window === "undefined") return;
      
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Use system theme only when theme is "auto"
    const effectiveIsDark = theme === "auto" ? systemIsDark : isDark;

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
        <SyntaxHighlighter
          language={language}
          style={effectiveIsDark ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }}
          codeTagProps={{
            style: {
              fontSize: "0.875rem",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
            },
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export { type CodeBlockProps };