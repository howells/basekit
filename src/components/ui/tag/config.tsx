import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "tag",
  name: "Tag",
  description:
    "A label or keyword used to categorize or describe content with optional dismiss functionality.",
  category: "feedback" as const,
  icon: "Tag",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Tag } from "@/components/ui/tag/tag";`,
  componentId: "TagExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "The main text content of the tag",
      defaultValue: "",
    },
    {
      name: "label",
      type: "string",
      description: "Optional label text (e.g., 'Department', 'Location')",
      defaultValue: "",
    },
    {
      name: "count",
      type: "string",
      description: "Optional count or secondary text",
      defaultValue: "",
    },
    {
      name: "dismissible",
      type: "boolean",
      description: "Whether the tag can be dismissed",
      defaultValue: false,
    },
    {
      name: "avatar",
      type: "object",
      description: "Avatar configuration for user tags",
      defaultValue: "",
    },
  ],
  examples: [
    {
      id: "Basic",
      title: "Basic Tags",
      description: "Simple tags with different values",
      code: `<div className="flex gap-2">
  <Tag value="Design" />
  <Tag value="Development" />
  <Tag value="Marketing" />
</div>`,
    },
    {
      id: "WithLabels",
      title: "Tags with Labels",
      description: "Tags with descriptive labels",
      code: `<div className="flex gap-2">
  <Tag label="Department" value="Engineering" />
  <Tag label="Location" value="San Francisco" />
  <Tag label="Team" value="Frontend" />
</div>`,
    },
    {
      id: "WithCounts",
      title: "Tags with Counts",
      description: "Tags displaying counts or additional info",
      code: `<div className="flex gap-2">
  <Tag value="Issues" count={12} />
  <Tag value="Pull Requests" count="3 open" />
  <Tag value="Contributors" count={45} />
</div>`,
    },
    {
      id: "Dismissible",
      title: "Dismissible Tags",
      description: "Tags that can be removed",
      code: `<div className="flex gap-2">
  <Tag
    value="React"
    dismissible
    onDismiss={() => console.log('Dismissed React')}
  />
  <Tag
    value="TypeScript"
    dismissible
    onDismiss={() => console.log('Dismissed TypeScript')}
  />
  <Tag
    value="Next.js"
    dismissible
    onDismiss={() => console.log('Dismissed Next.js')}
  />
</div>`,
    },
    {
      id: "WithAvatars",
      title: "Tags with Avatars",
      description: "User tags with avatar images or initials",
      code: `<div className="flex gap-2">
  <Tag value="John Doe" avatar={{ initials: "JD" }} />
  <Tag
    value="Jane Smith"
    avatar={{ initials: "JS" }}
    dismissible
    onDismiss={() => console.log('Dismissed Jane Smith')}
  />
  <Tag value="Alex Johnson" avatar={{ initials: "AJ" }} count="Admin" />
</div>`,
    },
    {
      id: "Complex",
      title: "Complex Tags",
      description: "Tags combining multiple features",
      code: `<div className="flex gap-2">
  <Tag
    label="Assignee"
    value="Sarah Wilson"
    avatar={{ initials: "SW" }}
    dismissible
    onDismiss={() => console.log('Dismissed assignee')}
  />
  <Tag
    label="Priority"
    value="High"
    count="3 days left"
    dismissible
    onDismiss={() => console.log('Dismissed priority tag')}
  />
</div>`,
    },
    {
      id: "Interactive",
      title: "Interactive Tags",
      description: "Stateful example with real dismiss functionality",
      code: `const [tags, setTags] = React.useState([
  { id: 1, label: "Skill", value: "React" },
  { id: 2, label: "Skill", value: "TypeScript" },
  { id: 3, label: "Team", value: "Frontend" },
  { id: 4, value: "Available", count: "Now" },
]);

const removeTag = (id) => {
  setTags(tags.filter(tag => tag.id !== id));
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
          dismissAriaLabel={\`Remove \${tag.value} tag\`}
        />
      ))}
    </div>
    {tags.length === 0 && (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        All tags removed! Refresh to reset.
      </p>
    )}
  </div>
);`,
    },
  ],
};
