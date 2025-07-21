// Divider Component [v1.0.0] - Pure Implementation

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx } from "@/lib/utils";

const dividerVariants = tv({
  base: [
    // base
    "mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm",
    // text color
    "text-zinc-500 dark:text-zinc-500",
  ],
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col h-full w-auto mx-0 my-0",
    },
    spacing: {
      sm: "my-4",
      md: "my-6", 
      lg: "my-8",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    spacing: "md",
  },
});

const dividerLineVariants = tv({
  base: [
    // background color
    "bg-zinc-200 dark:bg-zinc-800",
  ],
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "w-[1px] h-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface DividerProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof dividerVariants> {
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, orientation = "horizontal", spacing, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cx(dividerVariants({ orientation, spacing }), className)}
      {...props}
    >
      {children ? (
        <>
          <div className={cx(dividerLineVariants({ orientation }))} />
          <div className="whitespace-nowrap text-inherit">{children}</div>
          <div className={cx(dividerLineVariants({ orientation }))} />
        </>
      ) : (
        <div className={cx(dividerLineVariants({ orientation }))} />
      )}
    </div>
  )
);

Divider.displayName = "Divider";

export { Divider, dividerVariants, type DividerProps };