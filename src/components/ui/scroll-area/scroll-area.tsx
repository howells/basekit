// Scroll Area Component [v1.0.0]

import { cx } from "@/lib/utils";
import { ScrollArea as BaseScrollArea } from "@base-ui-components/react/scroll-area";
import * as React from "react";

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  orientation?: "vertical" | "horizontal" | "both";
  scrollbarClassName?: string;
  thumbClassName?: string;
  viewportClassName?: string;
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      children,
      orientation = "vertical",
      scrollbarClassName,
      thumbClassName,
      viewportClassName,
      ...props
    },
    ref
  ) => (
    <BaseScrollArea.Root
      ref={ref}
      className={cx("relative overflow-hidden", className)}
      {...props}
    >
      <BaseScrollArea.Viewport
        className={cx("h-full w-full rounded-[inherit]", viewportClassName)}
      >
        <BaseScrollArea.Content>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      {(orientation === "vertical" || orientation === "both") && (
        <BaseScrollArea.Scrollbar
          orientation="vertical"
          className={cx(
            "flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-[1px] transition-colors",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800",
            scrollbarClassName
          )}
        >
          <BaseScrollArea.Thumb
            className={cx(
              "relative flex-1 rounded-full bg-zinc-300 dark:bg-zinc-600",
              "hover:bg-zinc-400 dark:hover:bg-zinc-500",
              thumbClassName
            )}
          />
        </BaseScrollArea.Scrollbar>
      )}
      {(orientation === "horizontal" || orientation === "both") && (
        <BaseScrollArea.Scrollbar
          orientation="horizontal"
          className={cx(
            "flex h-2.5 w-full touch-none select-none border-t border-t-transparent p-[1px] transition-colors",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800",
            scrollbarClassName
          )}
        >
          <BaseScrollArea.Thumb
            className={cx(
              "relative rounded-full bg-zinc-300 dark:bg-zinc-600",
              "hover:bg-zinc-400 dark:hover:bg-zinc-500",
              thumbClassName
            )}
          />
        </BaseScrollArea.Scrollbar>
      )}
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  )
);

ScrollArea.displayName = "ScrollArea";

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof BaseScrollArea.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <BaseScrollArea.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cx(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 w-full border-t border-t-transparent p-[1px]",
      "hover:bg-zinc-100 dark:hover:bg-zinc-800",
      className
    )}
    {...props}
  >
    <BaseScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500" />
  </BaseScrollArea.Scrollbar>
));

ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
