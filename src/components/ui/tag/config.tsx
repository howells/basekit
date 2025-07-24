import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "tag",
  name: "Tag",
  description: "A label or keyword used to categorize or describe content.",
  category: "feedback" as const,
  icon: "Tag",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Tag } from "@/components/ui/tag/tag";`,
  componentId: "TagExample",
  props: [
    {
      name: "variant",
      type: "select",
      description: "Tag variant",
      options: ["default", "primary", "secondary", "success", "warning", "error"],
      defaultValue: "default"
    },
    {
      name: "size",
      type: "select",
      description: "Tag size",
      options: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "removable",
      type: "boolean",
      description: "Whether the tag can be removed",
      defaultValue: false
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Tags",
      description: "Simple tags in different variants",
      code: `<div className="flex flex-wrap gap-2">
  <Tag>Default</Tag>
  <Tag variant="primary">Primary</Tag>
  <Tag variant="secondary">Secondary</Tag>
  <Tag variant="success">Success</Tag>
  <Tag variant="warning">Warning</Tag>
  <Tag variant="error">Error</Tag>
</div>`
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Tags in various sizes",
      code: `<div className="flex items-center gap-2">
  <Tag size="sm">Small</Tag>
  <Tag size="md">Medium</Tag>
  <Tag size="lg">Large</Tag>
</div>`
    },
    {
      id: "removable",
      title: "Removable Tags",
      description: "Tags with remove functionality",
      code: `<div className="flex flex-wrap gap-2">
  <Tag removable onRemove={() => console.log('Tag removed')}>
    JavaScript
  </Tag>
  <Tag removable variant="primary">
    React
  </Tag>
  <Tag removable variant="secondary">
    TypeScript
  </Tag>
</div>`
    },
    {
      id: "with-icons",
      title: "Tags with Icons",
      description: "Tags containing icons",
      code: `<div className="flex flex-wrap gap-2">
  <Tag>
    <Hash className="mr-1 h-3 w-3" />
    trending
  </Tag>
  <Tag variant="primary">
    <Star className="mr-1 h-3 w-3" />
    featured
  </Tag>
  <Tag variant="success">
    <Check className="mr-1 h-3 w-3" />
    verified
  </Tag>
</div>`
    },
    {
      id: "category-tags",
      title: "Category Tags",
      description: "Tags used for categorization",
      code: `<div className="space-y-4">
  <div>
    <h4 className="mb-2 text-sm font-medium">Article Tags</h4>
    <div className="flex flex-wrap gap-2">
      <Tag variant="secondary">Technology</Tag>
      <Tag variant="secondary">Web Development</Tag>
      <Tag variant="secondary">Tutorial</Tag>
      <Tag variant="secondary">Best Practices</Tag>
    </div>
  </div>
  <div>
    <h4 className="mb-2 text-sm font-medium">Skills</h4>
    <div className="flex flex-wrap gap-2">
      <Tag>React</Tag>
      <Tag>Node.js</Tag>
      <Tag>GraphQL</Tag>
      <Tag>Docker</Tag>
      <Tag>AWS</Tag>
    </div>
  </div>
</div>`
    },
  ]
};