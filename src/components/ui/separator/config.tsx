import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "separator",
  name: "Separator",
  description: "A separator component built on Base UI for accessible content separation with orientation and styling variants.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Separator } from "@/components/ui/separator";`,
  componentId: "SeparatorExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The orientation of the separator.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "subtle", "strong"],
      defaultValue: "default",
      description: "The visual style variant of the separator.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "The thickness of the separator.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic horizontal separator.",
      code: `<div className="space-y-4">
  <div>Content above</div>
  <Separator />
  <div>Content below</div>
</div>`,
    },
    {
      id: "vertical",
      title: "Vertical",
      description: "Vertical separator for inline content.",
      code: `<div className="flex items-center space-x-4 h-8">
  <span>Left content</span>
  <Separator orientation="vertical" />
  <span>Right content</span>
</div>`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different visual styles.",
      code: `<div className="space-y-4">
  <div>Content</div>
  <Separator variant="subtle" />
  <div>Content</div>
  <Separator variant="default" />
  <div>Content</div>
  <Separator variant="strong" />
  <div>Content</div>
</div>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different separator thicknesses.",
      code: `<div className="space-y-4">
  <div>Content</div>
  <Separator size="sm" />
  <div>Content</div>
  <Separator size="md" />
  <div>Content</div>
  <Separator size="lg" />
  <div>Content</div>
</div>`,
    },
  ],
};