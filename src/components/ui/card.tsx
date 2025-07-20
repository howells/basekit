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
        "border-gray-200 dark:border-gray-900",
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
