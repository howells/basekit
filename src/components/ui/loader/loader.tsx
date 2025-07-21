// Loader Component [v1.0.0] - Pure Implementation

import { Loader2 } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx } from "@/lib/utils";

const loaderVariants = tv({
  base: [
    // base
    "animate-spin",
    // text color - inherit from parent
    "text-current",
  ],
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      base: "size-4",
      lg: "size-6",
      xl: "size-8",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface LoaderProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof loaderVariants> {
  "aria-label"?: string;
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, className, "aria-label": ariaLabel, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("inline-flex items-center justify-center", className)}
        {...props}
      >
        <Loader2 className={cx(loaderVariants({ size }))} aria-hidden="true" />
        {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
      </div>
    );
  }
);

Loader.displayName = "Loader";

export { Loader, loaderVariants, type LoaderProps };