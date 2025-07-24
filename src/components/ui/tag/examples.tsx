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

export function Removable() {
  return (
    <div className="flex gap-2">
      <Tag
        value="React"
        removable
        onRemove={() => console.log("Removed React")}
      />
      <Tag
        value="TypeScript"
        removable
        onRemove={() => console.log("Removed TypeScript")}
      />
      <Tag
        value="Next.js"
        removable
        onRemove={() => console.log("Removed Next.js")}
      />
    </div>
  );
}

export function WithAvatars() {
  return (
    <div className="flex gap-2">
      <Tag value="John Doe" avatar={{ initials: "DH" }} />
      <Tag value="Jane Smith" avatar={{ initials: "JS" }} removable />
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
        removable
        onRemove={() => console.log("Removed assignee")}
      />
      <Tag label="Priority" value="High" count="3 days left" removable />
    </div>
  );
}
