import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "tooltip",
  name: "Tooltip",
  description: "Tooltip component built on Base UI with customizable positioning and styling variants.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Tooltip } from "@/components/ui/tooltip";`,
  componentId: "TooltipExample",
  props: [
    {
      name: "content",
      type: "string",
      defaultValue: "Tooltip content",
      description: "Content to display in the tooltip.",
    },
    {
      name: "side",
      type: "select",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "top",
      description: "Side where the tooltip appears relative to the trigger.",
    },
    {
      name: "align",
      type: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
      description: "Alignment of the tooltip relative to the trigger.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "inverse"],
      defaultValue: "default",
      description: "Visual variant of the tooltip.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "default", "lg"],
      defaultValue: "default",
      description: "Size variant of the tooltip.",
    },
    {
      name: "showArrow",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the tooltip arrow.",
    },
    {
      name: "delayDuration",
      type: "number",
      defaultValue: 150,
      description: "Delay in milliseconds before tooltip shows.",
    },
    {
      name: "sideOffset",
      type: "number",
      defaultValue: 10,
      description: "Distance in pixels from the trigger.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic tooltip with default styling.",
      code: `<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`,
    },
    {
      id: "positions",
      title: "Positions",
      description: "Tooltips positioned on different sides.",
      code: `<div className="flex gap-4">
  <Tooltip content="Top tooltip" side="top">
    <Button>Top</Button>
  </Tooltip>
  <Tooltip content="Right tooltip" side="right">
    <Button>Right</Button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" side="bottom">
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip content="Left tooltip" side="left">
    <Button>Left</Button>
  </Tooltip>
</div>`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different visual variants of tooltips.",
      code: `<div className="flex gap-4">
  <Tooltip content="Default tooltip" variant="default">
    <Button>Default</Button>
  </Tooltip>
  <Tooltip content="Inverse tooltip" variant="inverse">
    <Button variant="secondary">Inverse</Button>
  </Tooltip>
</div>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different size variants of tooltips.",
      code: `<div className="flex gap-4">
  <Tooltip content="Small tooltip" size="sm">
    <Button size="sm">Small</Button>
  </Tooltip>
  <Tooltip content="Default size tooltip" size="default">
    <Button>Default</Button>
  </Tooltip>
  <Tooltip content="Large tooltip with more content" size="lg">
    <Button size="lg">Large</Button>
  </Tooltip>
</div>`,
    },
    {
      id: "no-arrow",
      title: "Without Arrow",
      description: "Tooltip without the pointing arrow.",
      code: `<Tooltip content="Tooltip without arrow" showArrow={false}>
  <Button>No Arrow</Button>
</Tooltip>`,
    },
    {
      id: "rich-content",
      title: "Rich Content",
      description: "Tooltip with rich JSX content.",
      code: `<Tooltip
  content={
    <div className="space-y-1">
      <div className="font-semibold">Rich Content</div>
      <div className="text-xs opacity-90">
        This tooltip contains multiple elements
      </div>
    </div>
  }
>
  <Button>Rich Content</Button>
</Tooltip>`,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Tooltip with controlled open state.",
      code: `const [open, setOpen] = useState(false);

<div className="space-x-4">
  <Tooltip
    content="Controlled tooltip"
    open={open}
    onOpenChange={setOpen}
  >
    <Button>Controlled Tooltip</Button>
  </Tooltip>
  <Button onClick={() => setOpen(!open)}>
    Toggle: {open ? 'Open' : 'Closed'}
  </Button>
</div>`,
    },
  ],
};