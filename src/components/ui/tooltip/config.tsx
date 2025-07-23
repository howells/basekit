import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Default, Positions, Variants, Sizes, NoArrow, RichContent, Controlled,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "tooltip",
  name: "Tooltip",
  description: "Tooltip component built on Base UI with customizable positioning and styling variants.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip/tooltip";`,
  componentId: "TooltipExample",
  props: [
    {
      name: "content",
      type: "string",
      defaultValue: "Tooltip content",
      description: "The tooltip content.",
    },
    {
      name: "side",
      type: "select",
      options: ["top", "right", "bottom", "left"],
      defaultValue: "top",
      description: "The preferred side of the trigger to place the tooltip.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "dark", "light"],
      defaultValue: "default",
      description: "The visual style variant.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "default"],
      defaultValue: "default",
      description: "The size of the tooltip.",
    },
    {
      name: "showArrow",
      type: "boolean",
      defaultValue: true,
      description: "Show the tooltip arrow.",
    },
    {
      name: "delayDuration",
      type: "number",
      defaultValue: 500,
      description: "The delay in milliseconds before showing the tooltip.",
    },
  ],
  examples: [
    {
      id: "tooltip",
      title: "Default",
      description: "Tooltip component built on Base UI with customizable positioning and styling variants.",
      code: jsxToString(<Default />),
      render: Default,
    },
    {
      id: "positions",
      title: "Positions",
      description: "Tooltips positioned on different sides.",
      code: jsxToString(<Positions />),
      render: Positions,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different visual variants of tooltips.",
      code: jsxToString(<Variants />),
      render: Variants,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different size variants of tooltips.",
      code: jsxToString(<Sizes />),
      render: Sizes,
    },
    {
      id: "no-arrow",
      title: "Without Arrow",
      description: "Tooltip without the pointing arrow.",
      code: jsxToString(<NoArrow />),
      render: NoArrow,
    },
    {
      id: "rich-content",
      title: "Rich Content",
      description: "Tooltip with rich JSX content.",
      code: jsxToString(<RichContent />),
      render: RichContent,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Tooltip with controlled open state.",
      code: `const Controlled = () => {
  const [open, setOpen] = useState(false);

  return (
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
    </div>
  );
};`,
      render: Controlled,
    },
  ],
};