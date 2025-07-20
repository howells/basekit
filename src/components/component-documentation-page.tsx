"use client";

import { ComponentConfig } from "@/lib/component-configs";
import React from "react";
import { ApiReference } from "./api-reference";
import { DocExample } from "./doc-example";
import { PropExplorer } from "./prop-explorer";
import { Badge } from "./ui/badge";
import { CodeBlock } from "./ui/code-block";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

interface ComponentDocumentationPageProps {
  config: ComponentConfig;
}

export function ComponentDocumentationPage({
  config,
}: ComponentDocumentationPageProps) {
  return (
    <div className="">
      {/* Header */}
      <div className="space-y-2 px-8 py-8 border-b">
        <div className="flex items-center gap-3">
          <Heading level={1}>{config.name}</Heading>
          {config.badge && <Badge variant="neutral">{config.badge}</Badge>}
        </div>
        <Text>{config.description}</Text>
      </div>

      {/* Installation */}
      {config.installation && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Installation
          </h2>
          {config.installation.npm && (
            <CodeBlock language="bash">{config.installation.npm}</CodeBlock>
          )}
          {config.installation.dependencies &&
            config.installation.dependencies.length > 0 && (
              <div className="space-y-2">
                <Text className="text-sm text-zinc-600 dark:text-zinc-400">
                  Additional dependencies:
                </Text>
                {config.installation.dependencies.map((dep, index) => (
                  <CodeBlock key={index} language="bash">
                    {dep}
                  </CodeBlock>
                ))}
              </div>
            )}
        </div>
      )}

      {/* Examples or Prop Explorer */}
      {config.propExplorer ? (
        <div className="space-y-6">
          <PropExplorer
            config={config.propExplorer}
            componentId={config.componentId}
          />
        </div>
      ) : (
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Examples
          </h2>

          {config.examples.map((example) => {
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
      )}

      {/* API Reference */}
      {config.api && config.api.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            API Reference
          </h2>
          {config.api.map((component) => (
            <ApiReference
              key={component.name}
              title={component.name}
              description={component.description}
              props={component.properties.map((prop) => ({
                name: prop.name,
                type: prop.type,
                default: prop.default,
                description: prop.description,
              }))}
            />
          ))}
        </div>
      )}

      {/* Custom Sections */}
      {config.sections &&
        config.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {section.title}
            </h2>
            {typeof section.content === "string" ? (
              <Text>{section.content}</Text>
            ) : (
              section.content
            )}
          </div>
        ))}

      {/* Accessibility */}
      {config.accessibility && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Accessibility
          </h2>
          <div className="space-y-3">
            {config.accessibility.pattern && (
              <Text>
                Adheres to the{" "}
                <a
                  href={config.accessibility.pattern.url}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {config.accessibility.pattern.name}
                </a>
                .
              </Text>
            )}

            {config.accessibility.keyboardShortcuts &&
              config.accessibility.keyboardShortcuts.length > 0 && (
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {config.accessibility.keyboardShortcuts.map((shortcut) => (
                    <li key={shortcut.key}>
                      <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                        {shortcut.key}
                      </kbd>{" "}
                      - {shortcut.description}
                    </li>
                  ))}
                </ul>
              )}

            {config.accessibility.notes &&
              config.accessibility.notes.map((note, index) => (
                <Text
                  key={index}
                  className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {note}
                </Text>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
