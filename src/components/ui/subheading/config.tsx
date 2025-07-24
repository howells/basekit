import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "subheading",
  name: "Subheading",
  description:
    "A styled subheading component for section titles and content organization.",
  category: "text" as const,
  icon: "Heading2",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Subheading } from "@/components/ui/subheading/subheading";`,
  componentId: "SubheadingExample",
  props: [
    {
      name: "level",
      type: "select",
      description: "Heading level",
      options: ["1", "2", "3", "4", "5", "6"],
      defaultValue: "3"
    },
    {
      name: "children",
      type: "textarea",
      description: "Subheading text",
      defaultValue: "Section Title"
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Subheading",
      description: "A simple subheading component",
      code: `<Subheading>Getting Started</Subheading>`
    },
    {
      id: "levels",
      title: "Different Levels",
      description: "Subheadings at different hierarchy levels",
      code: `<div className="space-y-4">
  <Subheading level={1}>Level 1 Subheading</Subheading>
  <Subheading level={2}>Level 2 Subheading</Subheading>
  <Subheading level={3}>Level 3 Subheading</Subheading>
  <Subheading level={4}>Level 4 Subheading</Subheading>
</div>`
    },
    {
      id: "with-content",
      title: "Subheading with Content",
      description: "Subheading used to organize content sections",
      code: `<div className="space-y-4">
  <Subheading>Introduction</Subheading>
  <p className="text-zinc-600">
    This is the introduction paragraph that follows the subheading.
    It provides context and information about the section.
  </p>

  <Subheading>Key Features</Subheading>
  <ul className="list-disc pl-5 space-y-1 text-zinc-600">
    <li>Feature one description</li>
    <li>Feature two description</li>
    <li>Feature three description</li>
  </ul>
</div>`
    },
  ]
};
