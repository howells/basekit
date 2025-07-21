import { ComponentConfig } from "@/lib/component-config-types";
import { Tag } from "./tag";

export const componentConfig: ComponentConfig = {
  id: "tag",
  name: "Tag",
  description:
    "A compact element for displaying labels, categories, or metadata.",
  category: "ui",
  importStatement: 'import { Tag } from "@/components/ui/tag"',
  componentId: "Tag",
  props: [
    {
      name: "label",
      type: "string",
      required: false,
      description: "Optional label text for the tag",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Tags",
      description: "Simple tags with different variants",
      code: `<div className="flex gap-2">
  <Tag>Default</Tag>
  <Tag variant="success">Success</Tag>
  <Tag variant="warning">Warning</Tag>
  <Tag variant="error">Error</Tag>
</div>`,
    },
    {
      id: "removable",
      title: "Removable Tags",
      description: "Tags with remove functionality",
      code: `<div className="flex gap-2">
  <Tag removable>Removable Tag</Tag>
  <Tag variant="success" removable>Success Tag</Tag>
</div>`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Tags in various sizes",
      code: `<div className="flex items-center gap-2">
  <Tag size="sm">Small</Tag>
  <Tag size="md">Medium</Tag>
  <Tag size="lg">Large</Tag>
</div>`,
    },
  ],
};
