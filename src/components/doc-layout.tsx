// Documentation Layout Component

import { cx } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";
import { CodeBlock } from "./ui/code-block";

interface DocLayoutProps {
  title: string;
  description: string;
  badge?: string;
  installCommand?: string;
  importCode?: string;
  children: React.ReactNode;
  className?: string;
}

export const DocLayout = React.forwardRef<HTMLDivElement, DocLayoutProps>(
  (
    {
      title,
      description,
      badge = "UI",
      installCommand,
      importCode,
      children,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx("max-w-4xl mx-auto p-6 space-y-8", className)}
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {title}
            </h1>
            <Badge variant="neutral">{badge}</Badge>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        {/* Installation */}
        {installCommand && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Installation
            </h2>
            <CodeBlock language="bash">{installCommand}</CodeBlock>
          </div>
        )}

        {/* Usage */}
        {importCode && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Usage
            </h2>
            <CodeBlock>{importCode}</CodeBlock>
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    );
  }
);

DocLayout.displayName = "DocLayout";
