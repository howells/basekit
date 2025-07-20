"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { Text } from "./ui/text";

interface ComponentAccessibilityProps {
  accessibility: ComponentConfig["accessibility"];
}

export function ComponentAccessibility({
  accessibility,
}: ComponentAccessibilityProps) {
  if (!accessibility) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Accessibility
      </h2>
      <div className="space-y-3">
        {accessibility.pattern && (
          <Text>
            Adheres to the{" "}
            <a
              href={accessibility.pattern.url}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {accessibility.pattern.name}
            </a>
            .
          </Text>
        )}

        {accessibility.keyboardShortcuts &&
          accessibility.keyboardShortcuts.length > 0 && (
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
              {accessibility.keyboardShortcuts.map((shortcut) => (
                <li key={shortcut.key}>
                  <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                    {shortcut.key}
                  </kbd>{" "}
                  - {shortcut.description}
                </li>
              ))}
            </ul>
          )}

        {accessibility.notes &&
          accessibility.notes.map((note, index) => (
            <Text
              key={index}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              {note}
            </Text>
          ))}
      </div>
    </div>
  );
}
