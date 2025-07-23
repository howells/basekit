"use client";

import { CodeBlock } from "@/components/ui/code-block/code-block";
import { Divider } from "@/components/ui/divider/divider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { getComponentConfig } from "@/lib/component-registry";
import React from "react";
import { ComponentExampleRenderer } from "./component-example-renderer";
import { Subheading } from "./ui/subheading/subheading";
import { Text } from "./ui/text";

interface ComponentExamplesProps {
  componentId: string;
}

export function ComponentExamples({ componentId }: ComponentExamplesProps) {
  const config = getComponentConfig(componentId);

  if (!config) {
    return (
      <div className="text-red-500 p-4">
        No configuration found for component: {componentId}
      </div>
    );
  }

  if (!config.examples || config.examples.length === 0) {
    return (
      <div className="text-gray-500 p-4">
        No examples available for {config.name}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {config.examples.map((example, index) => (
        <React.Fragment key={example.id}>
          {index > 0 && <Divider />}
          <div className="space-y-4">
            <div>
              <Subheading level={3}>{example.title}</Subheading>
              <Text>{example.description}</Text>
            </div>
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex justify-center">
                  <ComponentExampleRenderer
                    componentId={componentId}
                    exampleId={example.id}
                  />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <CodeBlock language="tsx">{example.code}</CodeBlock>
              </TabsContent>
            </Tabs>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
