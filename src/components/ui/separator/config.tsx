import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "separator",
  name: "Separator",
  description: "Visually or semantically separates content.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Separator } from "@/components/ui/separator/separator";`,
  componentId: "SeparatorExample",
  props: [
    {
      name: "orientation",
      type: "select",
      description: "The orientation of the separator",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Horizontal Separator",
      description: "A horizontal line to separate content",
      code: `<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Patternmode</h4>
    <p className="text-sm text-gray-600">
      An open-source component library built with React and Tailwind CSS.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`,
    },
    {
      id: "vertical",
      title: "Vertical Separator",
      description: "A vertical line to separate inline content",
      code: `<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`,
    },
    {
      id: "with-text",
      title: "Separator with Text",
      description: "A separator with text in the middle",
      code: `<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <Separator />
  </div>
  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-white px-2 text-gray-600">Or continue with</span>
  </div>
</div>`,
    },
  ],
};
