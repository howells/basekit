"use client";

import { ScrollArea } from "./scroll-area";

export function Example({ 
  orientation = "vertical",
  ...props 
}: { 
  orientation?: "vertical" | "horizontal" | "both";
  [key: string]: any;
}) {
  return (
    <ScrollArea 
      orientation={orientation} 
      className="h-48 w-full max-w-md border border-zinc-200 dark:border-zinc-800 rounded-md"
      {...props}
    >
      <div className="p-4">
        {orientation === "horizontal" ? (
          <div className="flex gap-4 min-w-max">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-none w-32 h-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg flex items-center justify-center text-sm font-medium border border-blue-200 dark:border-blue-800"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
        ) : orientation === "both" ? (
          <div className="min-w-max">
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg flex items-center justify-center text-xs font-medium border border-green-200 dark:border-green-800"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {Array.from({ length: 25 }).map((_, i) => (
              <div 
                key={i} 
                className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border border-purple-200 dark:border-purple-800"
              >
                <div className="font-medium text-sm mb-1">List Item {i + 1}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  This is scrollable content with a longer description to demonstrate the scroll behavior.
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}