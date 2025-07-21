import { ComponentConfig } from "@/lib/component-config-types";
import { PreviewCard } from "./preview-card";

export const componentConfig: ComponentConfig = {
  id: "preview-card",
  name: "PreviewCard",
  description: "A card component that shows a preview or summary of content.",
  category: "ui",
  importStatement: 'import { PreviewCard } from "@/components/ui/preview-card"',
  componentId: "PreviewCard",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Preview Card",
      description: "A simple preview card with content",
      code: `<PreviewCard>
  <div className="p-4">
    <h3 className="font-semibold">Preview Title</h3>
    <p className="text-sm text-gray-600">
      This is a preview of some content that might be shown in a card format.
    </p>
  </div>
</PreviewCard>`,
    },
    {
      id: "with-image",
      title: "Preview Card with Image",
      description: "Preview card that includes an image",
      code: `<PreviewCard>
  <img src="/placeholder.jpg" alt="Preview" className="w-full h-32 object-cover" />
  <div className="p-4">
    <h3 className="font-semibold">Card with Image</h3>
    <p className="text-sm text-gray-600">
      A preview card that includes an image at the top.
    </p>
  </div>
</PreviewCard>`,
    },
  ],
};
