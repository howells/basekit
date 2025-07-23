import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "scroll-area",
  name: "Scroll Area",
  description: "Augments native scroll functionality for custom, cross-browser styling.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { ScrollArea } from "@/components/ui/scroll-area/scroll-area";`,
  componentId: "ScrollAreaExample",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes",
      defaultValue: "",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Scroll Area",
      description: "A scrollable container with custom scrollbar",
      code: `<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`,
    },
    {
      id: "horizontal",
      title: "Horizontal Scroll",
      description: "A horizontally scrollable area",
      code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <figure key={i} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={\`/api/placeholder/300/400\`}
            alt={\`Photo \${i + 1}\`}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <figcaption className="pt-2 text-xs text-gray-600">
          Photo {i + 1}
        </figcaption>
      </figure>
    ))}
  </div>
</ScrollArea>`,
    },
  ],
};