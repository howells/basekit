import React from "react";
import { Tag } from "./tag";

export function Basic() {
  return (
    <div className="flex gap-2">
      <Tag value="Design" />
      <Tag value="Development" />
      <Tag value="Marketing" />
    </div>
  );
}

export function WithLabels() {
  return (
    <div className="flex gap-2">
      <Tag label="Department" value="Engineering" />
      <Tag label="Location" value="San Francisco" />
      <Tag label="Team" value="Frontend" />
    </div>
  );
}

export function WithCounts() {
  return (
    <div className="flex gap-2">
      <Tag value="Issues" count={12} />
      <Tag value="Pull Requests" count="3 open" />
      <Tag value="Contributors" count={45} />
    </div>
  );
}

export function Dismissible() {
  return (
    <div className="flex gap-2">
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

export function WithAvatars() {
  return (
    <div className="flex gap-2">
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

export function Complex() {
  return (
    <div className="flex gap-2">
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

// Interactive example with state management
export function Interactive() {
  const [tags, setTags] = React.useState([
    { id: 1, label: "Skill", value: "React" },
    { id: 2, label: "Skill", value: "TypeScript" },
    { id: 3, label: "Team", value: "Frontend" },
    { id: 4, value: "Available", count: "Now" },
  ]);

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.label}
            value={tag.value}
            count={tag.count}
            dismissible
            onDismiss={() => removeTag(tag.id)}
            dismissAriaLabel={`Remove ${tag.value} tag`}
          />
        ))}
      </div>
      {tags.length === 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          All tags removed! Refresh to reset.
        </p>
      )}
    </div>
  );
}
