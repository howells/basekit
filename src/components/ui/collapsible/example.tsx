"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

// Example component for preview system
export const CollapsibleExample = ({
  defaultOpen = false,
  disabled = false,
  title = "Click to expand",
  closedIcon,
  openIcon,
  ...props
}: {
  defaultOpen?: boolean;
  disabled?: boolean;
  title?: string;
  closedIcon?: React.ComponentType<{ className?: string }>;
  openIcon?: React.ComponentType<{ className?: string }>;
  [key: string]: unknown;
}) => {
  return (
    <div className="w-full max-w-md">
      <Collapsible defaultOpen={defaultOpen} disabled={disabled} {...props}>
        <CollapsibleTrigger closedIcon={closedIcon} openIcon={openIcon}>
          {title}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              This is the collapsible content that can be expanded or collapsed.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              You can put any content here, including other components, lists,
              or rich text.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
