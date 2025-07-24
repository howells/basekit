import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "stack",
  name: "Stack",
  description:
    "A layout component that arranges its children vertically or horizontally with consistent spacing.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Stack } from "@/components/ui/stack/stack";`,
  componentId: "StackExample",
  props: [
    {
      name: "direction",
      type: "select",
      description: "Stack direction",
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
    },
    {
      name: "spacing",
      type: "select",
      description: "Spacing between items",
      options: ["xs", "sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    {
      name: "align",
      type: "select",
      description: "Alignment of items",
      options: ["start", "center", "end", "stretch"],
      defaultValue: "stretch",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Vertical Stack",
      description: "Items stacked vertically with spacing",
      code: `<Stack>
  <div className="rounded-lg bg-zinc-100 p-4">Item 1</div>
  <div className="rounded-lg bg-zinc-100 p-4">Item 2</div>
  <div className="rounded-lg bg-zinc-100 p-4">Item 3</div>
</Stack>`,
    },
    {
      id: "horizontal",
      title: "Horizontal Stack",
      description: "Items arranged horizontally",
      code: `<Stack direction="horizontal">
  <Button>Button 1</Button>
  <Button variant="outline">Button 2</Button>
  <Button variant="ghost">Button 3</Button>
</Stack>`,
    },
    {
      id: "custom-spacing",
      title: "Custom Spacing",
      description: "Stack with different spacing options",
      code: `<div className="space-y-8">
  <Stack spacing="xs">
    <div className="rounded bg-blue-100 p-2">Extra Small Spacing</div>
    <div className="rounded bg-blue-100 p-2">Extra Small Spacing</div>
  </Stack>
  <Stack spacing="lg">
    <div className="rounded bg-green-100 p-2">Large Spacing</div>
    <div className="rounded bg-green-100 p-2">Large Spacing</div>
  </Stack>
</div>`,
    },
    {
      id: "alignment",
      title: "Different Alignments",
      description: "Stack with various alignment options",
      code: `<Stack align="center" className="h-32 bg-zinc-50">
  <div className="rounded bg-purple-100 px-4 py-2">Centered Item 1</div>
  <div className="rounded bg-purple-100 px-6 py-2">Centered Item 2</div>
  <div className="rounded bg-purple-100 px-12 py-2">Centered Item 3</div>
</Stack>`,
    },
  ],
};
