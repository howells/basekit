import { ComponentConfig } from "@/lib/component-config-types";
import { Tag } from "./tag";

export const componentConfig: ComponentConfig = {
  id: "tag",
  name: "Tag",
  description:
    "A compact element for displaying labels, categories, or metadata with optional avatar, count, and remove functionality.",
  category: "ui",
  importStatement: 'import { Tag } from "@/components/ui/tag"',
  componentId: "TagExample",
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "The main text content of the tag",
      defaultValue: "Value",
    },
    {
      name: "label",
      type: "string",
      required: false,
      description:
        "Optional label text displayed before the value (e.g., 'Department', 'Location')",
      defaultValue: "Label",
    },
    {
      name: "count",
      type: "string",
      required: false,
      description: "Optional count or secondary text displayed after the value",
      defaultValue: "",
    },
    {
      name: "countClassName",
      type: "string",
      required: false,
      description: "Custom CSS classes for the count element",
      defaultValue: "",
    },
    {
      name: "removable",
      type: "boolean",
      required: false,
      description: "Whether the tag can be removed with a close button",
      defaultValue: true,
    },
    {
      name: "avatarSrc",
      type: "select",
      required: false,
      description: "Avatar image source URL",
      defaultValue: "",
      options: [
        "",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      ],
    },
    {
      name: "avatarAlt",
      type: "string",
      required: false,
      description: "Avatar image alt text",
      defaultValue: "Avatar",
    },
    {
      name: "avatarInitials",
      type: "string",
      required: false,
      description: "Avatar initials to display when no image is provided",
      defaultValue: "JD",
    },
    {
      name: "removeAriaLabel",
      type: "string",
      required: false,
      description: "Aria label for the remove button (defaults to 'Remove')",
      defaultValue: "Remove",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Tags",
      description: "Simple tags with just values",
      code: `<div className="flex gap-2">
  <Tag value="Design" />
  <Tag value="Development" />
  <Tag value="Marketing" />
</div>`,
    },
    {
      id: "with-labels",
      title: "Tags with Labels",
      description: "Tags with label and value pairs",
      code: `<div className="flex gap-2">
  <Tag label="Department" value="Engineering" />
  <Tag label="Location" value="San Francisco" />
  <Tag label="Team" value="Frontend" />
</div>`,
    },
    {
      id: "with-counts",
      title: "Tags with Counts",
      description: "Tags displaying counts or additional information",
      code: `<div className="flex gap-2">
  <Tag value="Issues" count={12} />
  <Tag value="Pull Requests" count="3 open" />
  <Tag value="Contributors" count={45} />
</div>`,
    },
    {
      id: "removable",
      title: "Removable Tags",
      description: "Tags that can be removed with a close button",
      code: `<div className="flex gap-2">
  <Tag value="React" removable onRemove={() => console.log('Removed React')} />
  <Tag value="TypeScript" removable onRemove={() => console.log('Removed TypeScript')} />
  <Tag value="Next.js" removable onRemove={() => console.log('Removed Next.js')} />
</div>`,
    },
    {
      id: "with-avatars",
      title: "Tags with Avatars",
      description: "User tags with avatar images or initials",
      code: `<div className="flex gap-2">
  <Tag value="John Doe" avatar={{ initials: "JD" }} />
  <Tag value="Jane Smith" avatar={{ initials: "JS" }} removable />
  <Tag value="Alex Johnson" avatar={{ initials: "AJ" }} count="Admin" />
</div>`,
    },
    {
      id: "complex",
      title: "Complex Tags",
      description: "Tags combining multiple features",
      code: `<div className="flex gap-2">
  <Tag
    label="Assignee"
    value="Sarah Wilson"
    avatar={{ initials: "SW" }}
    removable
    onRemove={() => console.log('Removed assignee')}
  />
  <Tag
    label="Priority"
    value="High"
    count="3 days left"
    removable
  />
</div>`,
    },
  ],
};
