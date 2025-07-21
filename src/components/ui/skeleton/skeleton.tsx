import { cx } from "@/lib/utils";
import type React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
