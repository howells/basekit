"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { CodeBlock } from "./ui/code-block";
import { Text } from "./ui/text";

interface ComponentInstallationProps {
  installation: ComponentConfig["installation"];
}

export function ComponentInstallation({
  installation,
}: ComponentInstallationProps) {
  if (!installation) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Installation
      </h2>
      {installation.npm && (
        <CodeBlock language="bash">{installation.npm}</CodeBlock>
      )}
      {installation.dependencies && installation.dependencies.length > 0 && (
        <div className="space-y-2">
          <Text className="text-sm text-zinc-600 dark:text-zinc-400">
            Additional dependencies:
          </Text>
          {installation.dependencies.map((dep, index) => (
            <CodeBlock key={index} language="bash">
              {dep}
            </CodeBlock>
          ))}
        </div>
      )}
    </div>
  );
}
