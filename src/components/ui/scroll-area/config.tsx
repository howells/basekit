import { ComponentConfig } from "@/lib/component-config-types";
import { ScrollArea } from "./scroll-area";

export const componentConfig: ComponentConfig = {
  id: "scroll-area",
  name: "ScrollArea",
  description: "A custom scrollable area with styled scrollbars.",
  category: "ui",
  importStatement: 'import { ScrollArea } from "@/components/ui/scroll-area"',
  componentId: "ScrollArea",
  props: [
    {
      name: "orientation",
      type: '"vertical" | "horizontal" | "both"',
      defaultValue: "vertical",
      description: "The orientation of the scrollable area",
    },
  ],
  examples: [
    {
      id: "vertical",
      title: "Vertical Scroll Area",
      description: "A vertically scrollable area",
      code: `<ScrollArea className="h-48 w-full">
  <div className="p-4">
    <p>Content that overflows vertically...</p>
  </div>
</ScrollArea>`,
    },
    {
      id: "horizontal",
      title: "Horizontal Scroll Area",
      description: "A horizontally scrollable area",
      code: `<ScrollArea orientation="horizontal" className="w-48">
  <div className="flex space-x-4 p-4">
    <div className="min-w-32">Item 1</div>
    <div className="min-w-32">Item 2</div>
    <div className="min-w-32">Item 3</div>
  </div>
</ScrollArea>`,
    },
    {
      id: "both",
      title: "Both Directions",
      description: "A scrollable area in both directions",
      code: `<ScrollArea orientation="both" className="h-48 w-48">
  <div className="p-4 min-w-96 min-h-96">
    <p>Content that overflows in both directions...</p>
  </div>
</ScrollArea>`,
    },
  ],
};
