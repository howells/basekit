import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "stack",
  name: "Stack",
  description:
    "A flexible layout component that displays elements vertically or horizontally with consistent spacing using a 4px grid scale. Supports responsive breakpoint-specific values.",
  category: "ui" as const,
  badge: "Layout",
  importStatement: `import { Stack, VStack, HStack } from "@/components/ui/stack";`,
  componentId: "StackExample",
  props: [
    {
      name: "direction",
      type: "select",
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
      description:
        "The direction of the stack layout. Can be responsive object: { sm: 'vertical', lg: 'horizontal' }",
    },
    {
      name: "gap",
      type: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "8",
        "10",
        "12",
        "16",
        "20",
        "24",
      ],
      defaultValue: "4",
      description:
        "Gap between items using 4px grid scale. Can be responsive object: { sm: 2, md: 4, lg: 6 }",
    },
    {
      name: "padding",
      type: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "8",
        "10",
        "12",
        "16",
        "20",
        "24",
      ],
      description:
        "Padding around the stack using 4px grid scale. Can be responsive object.",
    },
    {
      name: "align",
      type: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "How to align items along the cross axis.",
    },
    {
      name: "justify",
      type: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
      description: "How to distribute items along the main axis.",
    },
    {
      name: "wrap",
      type: "boolean",
      defaultValue: false,
      description: "Whether items should wrap to new lines.",
    },
    {
      name: "as",
      type: "string",
      defaultValue: "div",
      description: "The HTML element to render (div, section, article, etc.).",
    },
    {
      name: "showResponsive",
      type: "boolean",
      defaultValue: false,
      description:
        "Show responsive example with breakpoint-specific direction and gap values.",
    },
  ],
  examples: [
    {
      id: "vertical",
      title: "Vertical Stack",
      description: "Basic vertical stack with default gap.",
      code: `<Stack direction="vertical" gap={4}>
  <div className="p-4 bg-blue-100 rounded">Item 1</div>
  <div className="p-4 bg-green-100 rounded">Item 2</div>
  <div className="p-4 bg-red-100 rounded">Item 3</div>
</Stack>`,
    },
    {
      id: "horizontal",
      title: "Horizontal Stack",
      description: "Horizontal stack with custom gap.",
      code: `<Stack direction="horizontal" gap={6}>
  <div className="p-4 bg-blue-100 rounded">Item 1</div>
  <div className="p-4 bg-green-100 rounded">Item 2</div>
  <div className="p-4 bg-red-100 rounded">Item 3</div>
</Stack>`,
    },
    {
      id: "responsive-direction",
      title: "Responsive Direction",
      description:
        "Stack that changes direction at different breakpoints (like Vercel's example).",
      code: `<Stack
  direction={{ sm: "vertical", lg: "horizontal" }}
  gap={{ sm: 2, md: 4, lg: 6 }}
>
  <div className="p-4 bg-blue-100 rounded flex-1">
    Mobile: Stacked vertically with gap-2
  </div>
  <div className="p-4 bg-green-100 rounded flex-1">
    Desktop: Side by side with gap-6
  </div>
  <div className="p-4 bg-red-100 rounded flex-1">
    Responsive behavior!
  </div>
</Stack>`,
    },
    {
      id: "responsive-gap",
      title: "Responsive Gap",
      description: "Different gaps at different screen sizes.",
      code: `<Stack
  direction="vertical"
  gap={{ sm: 1, md: 3, lg: 6, xl: 10 }}
>
  <div className="p-3 bg-purple-100 rounded">
    Gap increases with screen size
  </div>
  <div className="p-3 bg-purple-100 rounded">
    sm: gap-1 (4px)
  </div>
  <div className="p-3 bg-purple-100 rounded">
    md: gap-3 (12px)
  </div>
  <div className="p-3 bg-purple-100 rounded">
    lg: gap-6 (24px)
  </div>
  <div className="p-3 bg-purple-100 rounded">
    xl: gap-10 (40px)
  </div>
</Stack>`,
    },
    {
      id: "helper-components",
      title: "Helper Components",
      description: "Using VStack and HStack helper components.",
      code: `<div className="space-y-6">
  <VStack gap={3}>
    <div className="p-3 bg-purple-100 rounded">VStack Item 1</div>
    <div className="p-3 bg-purple-100 rounded">VStack Item 2</div>
  </VStack>

  <HStack gap={3}>
    <div className="p-3 bg-orange-100 rounded">HStack Item 1</div>
    <div className="p-3 bg-orange-100 rounded">HStack Item 2</div>
  </HStack>
</div>`,
    },
    {
      id: "alignment",
      title: "Alignment Options",
      description: "Different alignment and justification options.",
      code: `<div className="space-y-6">
  <Stack direction="horizontal" gap={4} align="center" justify="center" className="h-20 bg-gray-50">
    <div className="p-2 bg-blue-100 rounded">Centered</div>
    <div className="p-2 bg-green-100 rounded">Items</div>
  </Stack>

  <Stack direction="horizontal" gap={4} align="center" justify="between" className="h-20 bg-gray-50">
    <div className="p-2 bg-blue-100 rounded">Space</div>
    <div className="p-2 bg-green-100 rounded">Between</div>
  </Stack>
</div>`,
    },
    {
      id: "with-padding",
      title: "With Responsive Padding",
      description: "Stack with responsive padding around the container.",
      code: `<Stack
  direction="vertical"
  gap={3}
  padding={{ sm: 3, md: 6, lg: 8 }}
  className="bg-gray-100 rounded"
>
  <div className="p-3 bg-white rounded shadow">Item 1</div>
  <div className="p-3 bg-white rounded shadow">Item 2</div>
  <div className="p-3 bg-white rounded shadow">Item 3</div>
</Stack>`,
    },
    {
      id: "wrapping",
      title: "Wrapping Stack",
      description: "Horizontal stack that wraps items to new lines.",
      code: `<Stack direction="horizontal" gap={3} wrap className="max-w-md">
  <div className="p-3 bg-blue-100 rounded">Tag 1</div>
  <div className="p-3 bg-green-100 rounded">Tag 2</div>
  <div className="p-3 bg-red-100 rounded">Tag 3</div>
  <div className="p-3 bg-yellow-100 rounded">Tag 4</div>
  <div className="p-3 bg-purple-100 rounded">Tag 5</div>
  <div className="p-3 bg-pink-100 rounded">Tag 6</div>
</Stack>`,
    },
    {
      id: "complex-responsive",
      title: "Complex Responsive Layout",
      description:
        "Advanced responsive layout with multiple breakpoint changes.",
      code: `<Stack
  direction={{ sm: "vertical", md: "horizontal", lg: "vertical", xl: "horizontal" }}
  gap={{ sm: 2, md: 4, lg: 6, xl: 8 }}
  padding={{ sm: 4, lg: 8 }}
  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
>
  <div className="p-4 bg-white rounded shadow flex-1">
    <h3 className="font-semibold mb-2">Responsive Card 1</h3>
    <p className="text-sm text-gray-600">
      This layout adapts at multiple breakpoints
    </p>
  </div>
  <div className="p-4 bg-white rounded shadow flex-1">
    <h3 className="font-semibold mb-2">Responsive Card 2</h3>
    <p className="text-sm text-gray-600">
      Try resizing to see the changes
    </p>
  </div>
  <div className="p-4 bg-white rounded shadow flex-1">
    <h3 className="font-semibold mb-2">Responsive Card 3</h3>
    <p className="text-sm text-gray-600">
      sm: vertical, md: horizontal, lg: vertical, xl: horizontal
    </p>
  </div>
</Stack>`,
    },
  ],
};
