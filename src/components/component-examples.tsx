"use client";

import { ComponentConfig } from "@/lib/component-configs";
import React from "react";
import { DocExample } from "./doc-example";

interface ComponentExamplesProps {
  examples: ComponentConfig["examples"];
}

export function ComponentExamples({ examples }: ComponentExamplesProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Examples
      </h2>

      {examples.map((example) => {
        const ExampleWrapper = example.wrapper || React.Fragment;

        return (
          <DocExample
            key={example.id}
            title={example.title}
            description={example.description}
            preview={<ExampleWrapper>{example.preview}</ExampleWrapper>}
            code={example.code}
          />
        );
      })}
    </div>
  );
}
