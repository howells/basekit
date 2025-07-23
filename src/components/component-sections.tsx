"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { Subheading } from "./ui/subheading/subheading";
import { Text } from "./ui/text";

interface ComponentSectionsProps {
  sections: ComponentConfig["sections"];
}

export function ComponentSections({ sections }: ComponentSectionsProps) {
  if (!sections) return null;

  return (
    <>
      {sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <Subheading level={2}>{section.title}</Subheading>
          {typeof section.content === "string" ? (
            <Text>{section.content}</Text>
          ) : (
            section.content
          )}
        </div>
      ))}
    </>
  );
}
