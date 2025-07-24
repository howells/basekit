import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "dismiss-button",
  name: "Dismiss Button",
  description: "A reusable dismiss/remove button with consistent styling.",
  category: "inputs" as const,
  icon: "X",

  installation: {
    npm: "lucide-react",
  },
  importStatement: `import { DismissButton } from "@/components/ui/dismiss-button/dismiss-button";`,
  componentId: "DismissButtonExample",
  props: [
    {
      name: "size",
      type: "select",
      description: "Size of the dismiss button",
      options: ["sm", "base", "lg"],
      defaultValue: "base",
    },
    {
      name: "onClick",
      type: "function",
      description: "Callback when the dismiss button is clicked",
      defaultValue: "() => {}",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Dismiss Button",
      description: "Simple dismiss button with default styling",
      code: `<DismissButton onClick={() => console.log('Dismissed!')} />`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Dismiss buttons in various sizes",
      code: `<div className="flex items-center gap-4">
  <DismissButton size="sm" onClick={() => {}} />
  <DismissButton size="base" onClick={() => {}} />
  <DismissButton size="lg" onClick={() => {}} />
</div>`,
    },
    {
      id: "positioned",
      title: "Positioned in Context",
      description: "Dismiss buttons with negative margins for tight spacing",
      code: `<div className="flex items-center gap-2">
  <span className="px-2 py-1 bg-zinc-100 rounded text-sm">
    Item with dismiss
  </span>
  <DismissButton
    className="-ml-1"
    onClick={() => {}}
  />
</div>`,
    },
  ],
};
