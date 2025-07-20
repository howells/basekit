import { cx } from "@/lib/utils";
import type React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "animate-pulse rounded-md bg-gray-100 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
