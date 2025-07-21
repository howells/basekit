import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "skeleton",
  name: "Skeleton",
  description: "A skeleton loader component to indicate loading content with a pulsing animation.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Skeleton } from "@/components/ui/skeleton/skeleton";`,
  componentId: "SkeletonExample",
  props: [],
  examples: [
    {
      id: "text-skeleton",
      title: "Text Skeleton",
      description: "Skeleton loaders for text content with varying widths.",
      code: `<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-4/5" />
  <Skeleton className="h-4 w-3/4" />
</div>`,
    },
    {
      id: "card-skeleton",
      title: "Card Skeleton",
      description: "Skeleton loader for card-like content with image and text.",
      code: `<div className="space-y-4">
  <Skeleton className="h-32 w-full rounded-lg" />
  <div className="space-y-2">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
  </div>
  <div className="flex gap-2">
    <Skeleton className="h-8 w-16 rounded" />
    <Skeleton className="h-8 w-20 rounded" />
  </div>
</div>`,
    },
    {
      id: "avatar-skeleton",
      title: "Avatar Skeleton",
      description: "Skeleton loader for user profile with avatar and text.",
      code: `<div className="flex items-center gap-3">
  <Skeleton className="h-10 w-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-24" />
  </div>
</div>`,
    },
  ],
};