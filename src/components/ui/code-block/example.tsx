"use client";

import React from "react";
import { CodeBlock } from "./code-block";

// Example component for preview system
export const CodeBlockExample = ({
  children = `const greeting = "Hello, World!";\nconsole.log(greeting);`,
  language = "tsx",
  theme = "auto",
  ...props
}: {
  children?: string;
  language?: string;
  theme?: "light" | "dark" | "auto";
  [key: string]: unknown;
}) => {
  return (
    <CodeBlock
      language={language}
      theme={theme}
      {...props}
    >
      {children}
    </CodeBlock>
  );
};