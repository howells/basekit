"use client";

import { Text } from "./text";

export function Example() {
  return (
    <div className="space-y-4 max-w-prose">
      <Text>
        This is a regular paragraph of text that demonstrates the default styling of the Text component. 
        It provides consistent typography that works well with the design system.
      </Text>
      
      <Text className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
        This is a larger, emphasized piece of text that could be used for subheadings or important content.
      </Text>
      
      <Text className="text-sm text-zinc-600 dark:text-zinc-400">
        This is smaller, muted text that could be used for captions, helper text, or secondary information.
        It has reduced visual weight to create hierarchy.
      </Text>
      
      <Text className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
        This is monospace text styled like inline code.
      </Text>
    </div>
  );
}