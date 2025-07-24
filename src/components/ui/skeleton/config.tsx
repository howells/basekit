import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "skeleton",
  name: "Skeleton",
  description: "Use to show a placeholder while content is loading.",
  category: "feedback" as const,
  icon: "Loader",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Skeleton } from "@/components/ui/skeleton/skeleton";`,
  componentId: "SkeletonExample",
  props: [
  ],
  examples: [
    {
      id: "default",
      title: "Basic Skeleton",
      description: "A simple skeleton loader",
      code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`
    },
    {
      id: "card",
      title: "Card Skeleton",
      description: "Skeleton for a card component",
      code: `<div className="rounded-lg border p-4">
  <div className="flex items-center space-x-4">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-3 w-[100px]" />
    </div>
  </div>
  <div className="mt-4 space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
</div>`
    },
    {
      id: "list",
      title: "List Skeleton",
      description: "Skeleton for a list of items",
      code: `<div className="space-y-4">
  {[...Array(3)].map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-md" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ))}
</div>`
    },
  ]
};