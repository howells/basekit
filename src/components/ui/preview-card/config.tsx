import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "preview-card",
  name: "Preview Card",
  description: "A card component that shows a preview or summary of content.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { PreviewCard } from "@/components/ui/preview-card/preview-card";`,
  componentId: "PreviewCardExample",
  props: [
    {
      name: "title",
      type: "string",
      description: "The title of the preview card",
      defaultValue: "Card Title",
    },
    {
      name: "description",
      type: "string",
      description: "The description text",
      defaultValue: "This is a preview card description.",
    },
    {
      name: "image",
      type: "string",
      description: "Image URL for the preview",
      defaultValue: "",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Preview Card",
      description: "A card component that shows a preview or summary of content.",
      code: `<PreviewCard
  title="Introduction to React"
  description="Learn the fundamentals of React including components, state, and props."
/>`,
    },
    {
      id: "with-image",
      title: "Preview Card with Image",
      description: "Preview card that includes an image",
      code: `<PreviewCard
  title="Beautiful Landscape"
  description="Explore stunning natural landscapes from around the world."
  image="/api/placeholder/400/200"
/>`,
    },
  ],
};