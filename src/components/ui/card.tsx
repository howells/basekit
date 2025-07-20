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

// PropExplorer configuration
export const cardPropConfig = {
  componentName: "Card",
  displayName: "Card",
  description: "A flexible container component with subtle styling and shadow.",

  props: [
    {
      name: "children",
      type: "React.ReactNode",
      description: "The content to display inside the card.",
    },
  ],
};

export { Card, type CardProps };
