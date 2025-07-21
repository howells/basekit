// Card Component [v1.0.0] - Pure Implementation

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
        "relative w-full rounded-lg p-6 text-left text-sm shadow-xs",
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
