// Tremor Popover [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { Popover as BasePopover } from "@base-ui-components/react/popover";
import React from "react";

const Popover = BasePopover.Root;
Popover.displayName = "Popover";

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof BasePopover.Trigger>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Trigger>
>(({ className, ...props }, ref) => (
  <BasePopover.Trigger
    ref={ref}
    className={cx(
      // base
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
      // focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
PopoverTrigger.displayName = "PopoverTrigger";

const PopoverPortal = BasePopover.Portal;

const PopoverBackdrop = React.forwardRef<
  React.ElementRef<typeof BasePopover.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Backdrop>
>(({ className, ...props }, ref) => (
  <BasePopover.Backdrop
    ref={ref}
    className={cx(
      // base
      "fixed inset-0 z-40",
      // background
      "bg-black/20 dark:bg-black/40",
      // animations
      "data-[starting-style]:animate-in data-[ending-style]:animate-out",
      "data-[starting-style]:fade-in data-[ending-style]:fade-out",
      className
    )}
    {...props}
  />
));
PopoverBackdrop.displayName = "PopoverBackdrop";

const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof BasePopover.Positioner>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Positioner>
>(({ sideOffset = 10, collisionPadding = 5, ...props }, ref) => (
  <BasePopover.Positioner
    ref={ref}
    sideOffset={sideOffset}
    collisionPadding={collisionPadding}
    {...props}
  />
));
PopoverPositioner.displayName = "PopoverPositioner";

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof BasePopover.Popup>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup> & {
    sideOffset?: number;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    collisionPadding?: number;
  }
>(
  (
    {
      className,
      sideOffset = 10,
      side = "bottom",
      align = "center",
      collisionPadding = 5,
      ...props
    },
    ref
  ) => {
    return (
      <PopoverPortal>
        <PopoverPositioner
          side={side}
          align={align}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
        >
          <BasePopover.Popup
            ref={ref}
            className={cx(
              // base
              "z-50 min-w-60 max-w-sm overflow-hidden rounded-md border p-2.5 text-sm shadow-md",
              // border color
              "border-zinc-200 dark:border-zinc-800",
              // text color
              "text-zinc-900 dark:text-zinc-50",
              // background color
              "bg-white dark:bg-zinc-950",
              // animations
              "data-[starting-style]:animate-in data-[ending-style]:animate-out",
              "data-[starting-style]:fade-in data-[ending-style]:fade-out",
              "data-[starting-style]:zoom-in-95 data-[ending-style]:zoom-out-95",
              "data-[side=bottom]:data-[starting-style]:slide-in-from-top-2 data-[side=bottom]:data-[ending-style]:slide-out-to-top-2",
              "data-[side=left]:data-[starting-style]:slide-in-from-right-2 data-[side=left]:data-[ending-style]:slide-out-to-right-2",
              "data-[side=right]:data-[starting-style]:slide-in-from-left-2 data-[side=right]:data-[ending-style]:slide-out-to-left-2",
              "data-[side=top]:data-[starting-style]:slide-in-from-bottom-2 data-[side=top]:data-[ending-style]:slide-out-to-bottom-2",
              className
            )}
            onWheel={(event) => {
              event.stopPropagation();
              const isScrollingDown = event.deltaY > 0;
              if (isScrollingDown) {
                event.currentTarget.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "ArrowDown" })
                );
              } else {
                event.currentTarget.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "ArrowUp" })
                );
              }
            }}
            {...props}
          />
        </PopoverPositioner>
      </PopoverPortal>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof BasePopover.Arrow>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>
>(({ className, ...props }, ref) => (
  <BasePopover.Arrow
    ref={ref}
    className={cx(
      // base
      "flex transition-all duration-200 ease-out",
      // positioning based on side
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
      "data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
      "data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
      className
    )}
    {...props}
  >
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-white dark:fill-zinc-950"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-zinc-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-zinc-300"
      />
    </svg>
  </BasePopover.Arrow>
));
PopoverArrow.displayName = "PopoverArrow";

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof BasePopover.Title>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Title>
>(({ className, ...props }, ref) => (
  <BasePopover.Title
    ref={ref}
    className={cx(
      // base
      "text-lg font-semibold leading-6",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // spacing
      "mb-2",
      className
    )}
    {...props}
  />
));
PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof BasePopover.Description>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Description>
>(({ className, ...props }, ref) => (
  <BasePopover.Description
    ref={ref}
    className={cx(
      // base
      "text-sm leading-6",
      // text color
      "text-zinc-600 dark:text-zinc-400",
      className
    )}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof BasePopover.Close>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(({ className, ...props }, ref) => (
  <BasePopover.Close
    ref={ref}
    className={cx(
      // base
      "inline-flex h-6 w-6 items-center justify-center rounded-sm text-sm font-medium transition-colors",
      // text color
      "text-zinc-500 dark:text-zinc-400",
      // hover
      "hover:text-zinc-900 dark:hover:text-zinc-50",
      // focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      // disabled
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
PopoverClose.displayName = "PopoverClose";

// Legacy alias for backward compatibility
const PopoverAnchor = PopoverTrigger;

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBackdrop,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
};
