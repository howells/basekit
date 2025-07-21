import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "loader",
  name: "Loader",
  description: "A spinning loader indicator with configurable size.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Loader } from "@/components/ui/loader";`,
  componentId: "LoaderExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["xs", "sm", "base", "lg", "xl"],
      defaultValue: "base",
      description: "The size of the loader spinner.",
    },
    {
      name: "aria-label",
      type: "string",
      defaultValue: "Loading",
      description: "Accessible label for screen readers.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic loader with default size.",
      code: `<Loader aria-label="Loading" />`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Loader in different sizes.",
      code: `<div className="flex items-center gap-4">
  <Loader size="xs" aria-label="Loading" />
  <Loader size="sm" aria-label="Loading" />
  <Loader size="base" aria-label="Loading" />
  <Loader size="lg" aria-label="Loading" />
  <Loader size="xl" aria-label="Loading" />
</div>`,
    },
    {
      id: "with-text",
      title: "With Text",
      description: "Loader with accompanying text.",
      code: `<div className="flex items-center gap-2">
  <Loader size="sm" aria-label="Loading content" />
  <span className="text-sm text-zinc-600">Loading...</span>
</div>`,
    },
  ],
};