"use client";

import { ComponentConfig } from "@/lib/component-configs";
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
    </>
  );
}
