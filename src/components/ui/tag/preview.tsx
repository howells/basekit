"use client";

import React from "react";
import { Tag } from "./tag";

// Example component for preview system
export const TagExample = ({
  label,
  value = "Design",
  count,
  countClassName,
  dismissible = false,
  onDismiss,
  avatar,
  dismissAriaLabel = "Remove tag",
  showBasicTags = false,
  showWithLabels = false,
  showWithCounts = false,
  showDismissible = false,
  showWithAvatars = false,
  showComplex = false,
  ...props
}: {
  label?: string;
  value?: string;
  count?: string | number;
  countClassName?: string;
  dismissible?: boolean;
  onDismiss?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  avatar?: {
    src?: string;
    alt?: string;
    initials?: string;
  };
  dismissAriaLabel?: string;
  showBasicTags?: boolean;
  showWithLabels?: boolean;
  showWithCounts?: boolean;
  showDismissible?: boolean;
  showWithAvatars?: boolean;
  showComplex?: boolean;
  [key: string]: unknown;
}) => {
  // Show basic tags
  if (showBasicTags) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag value="Design" />
        <Tag value="Development" />
        <Tag value="Marketing" />
        <Tag value="Research" />
      </div>
    );
  }

  // Show tags with labels
  if (showWithLabels) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag label="Department" value="Engineering" />
        <Tag label="Location" value="San Francisco" />
        <Tag label="Team" value="Frontend" />
        <Tag label="Role" value="Senior" />
      </div>
    );
  }

  // Show tags with counts
  if (showWithCounts) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag value="Issues" count={12} />
        <Tag value="Pull Requests" count="3 open" />
        <Tag value="Contributors" count={45} />
        <Tag value="Stars" count="1.2k" />
      </div>
    );
  }

  // Show dismissible tags
  if (showDismissible) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag
          value="React"
          dismissible
          onDismiss={() => console.log("Dismissed React")}
        />
        <Tag
          value="TypeScript"
          dismissible
          onDismiss={() => console.log("Dismissed TypeScript")}
        />
        <Tag
          value="Next.js"
          dismissible
          onDismiss={() => console.log("Dismissed Next.js")}
        />
      </div>
    );
  }

  // Show tags with avatars
  if (showWithAvatars) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag value="John Doe" avatar={{ initials: "JD" }} />
        <Tag
          value="Jane Smith"
          avatar={{ initials: "JS" }}
          dismissible
          onDismiss={() => console.log("Dismissed Jane Smith")}
        />
        <Tag value="Alex Johnson" avatar={{ initials: "AJ" }} count="Admin" />
      </div>
    );
  }

  // Show complex tags
  if (showComplex) {
    return (
      <div className="flex flex-wrap gap-2" {...props}>
        <Tag
          label="Assignee"
          value="Sarah Wilson"
          avatar={{ initials: "SW" }}
          dismissible
          onDismiss={() => console.log("Dismissed assignee")}
        />
        <Tag
          label="Priority"
          value="High"
          count="3 days left"
          dismissible
          onDismiss={() => console.log("Dismissed priority tag")}
        />
      </div>
    );
  }

  // Default single tag
  return (
    <div className="flex items-center justify-center p-8" {...props}>
      <Tag
        label={label}
        value={value}
        count={count}
        countClassName={countClassName}
        dismissible={dismissible}
        onDismiss={onDismiss}
        avatar={avatar}
        dismissAriaLabel={dismissAriaLabel}
      />
    </div>
  );
};
