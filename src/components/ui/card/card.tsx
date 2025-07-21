// Card Component [v1.0.0] - Pure Implementation

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";

import { cx } from "@/lib/utils";

interface CardProps extends useRender.ComponentProps<"div"> {
  /**
   * Padding for the card (Tailwind scale).
   * @default 6
   */
  padding?:
    | 0
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ render = <div />, padding = 6, className, ...props }, forwardedRef) => {
    const defaultProps: useRender.ElementProps<"div"> = {
      className: cx(
        // base
        "relative w-full rounded-lg text-left text-sm shadow-xs",
        // padding
        padding === 0 && "p-0",
        padding === 0.5 && "p-0.5",
        padding === 1 && "p-1",
        padding === 1.5 && "p-1.5",
        padding === 2 && "p-2",
        padding === 2.5 && "p-2.5",
        padding === 3 && "p-3",
        padding === 3.5 && "p-3.5",
        padding === 4 && "p-4",
        padding === 5 && "p-5",
        padding === 6 && "p-6",
        padding === 7 && "p-7",
        padding === 8 && "p-8",
        padding === 9 && "p-9",
        padding === 10 && "p-10",
        padding === 11 && "p-11",
        padding === 12 && "p-12",
        // inset ring border (similar to button)
        "inset-ring-1 inset-ring-black/10",
        "dark:inset-ring-white/10",
        // background color
        "bg-white dark:bg-[#090E1A]",
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

export { Card, type CardProps };
