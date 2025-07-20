// Tremor Card [v1.0.0] - Base UI

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";

import { cx } from "@/lib/utils";

type CardProps = useRender.ComponentProps<"div">;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ render = <div />, className, ...props }, forwardedRef) => {
    const defaultProps: useRender.ElementProps<"div"> = {
      className: cx(
        // base
        "relative w-full rounded-lg border p-6 text-left shadow-xs",
        // background color
        "bg-white dark:bg-[#090E1A]",
        // border color
        "border-zinc-200 dark:border-zinc-900",
        className
      ),
    };

    const element = useRender({
      render,
      ref: forwardedRef,
      props: mergeProps<"div">(defaultProps, props),
    });

    return element;
  }
);

Card.displayName = "Card";

// Component configuration for documentation
export const componentConfig = {
  id: "card",
  name: "Card",
  description: "A flexible container component with subtle styling and shadow.",
  category: "ui" as const,

  importStatement: `import { Card } from "@/components/ui/card";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic card with content.",
      preview: (
        <Card className="p-6 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            This is a simple card component with some content inside.
          </p>
        </Card>
      ),
      code: `<Card className="p-6 max-w-sm">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-zinc-600 dark:text-zinc-400">
    This is a simple card component with some content inside.
  </p>
</Card>`,
    },
    {
      id: "interactive",
      title: "Interactive",
      description: "Card with hover effects and interaction.",
      preview: (
        <Card className="p-6 max-w-sm cursor-pointer hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Hover over this card to see the effect.
          </p>
        </Card>
      ),
      code: `<Card className="p-6 max-w-sm cursor-pointer hover:shadow-md transition-shadow">
  <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
  <p className="text-zinc-600 dark:text-zinc-400">
    Hover over this card to see the effect.
  </p>
</Card>`,
    },
  ],

  api: [
    {
      name: "Card",
      description: "The main card container component.",
      properties: [
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes to apply to the card.",
        },
        {
          name: "children",
          type: "React.ReactNode",
          description: "The content to display inside the card.",
          required: true,
        },
      ],
    },
  ],
};

export { Card, type CardProps };
