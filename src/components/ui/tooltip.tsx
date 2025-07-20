// Tremor Tooltip [v1.0.0] - Base UI

"use client";

import { cx } from "@/lib/utils";
import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipVariants = tv({
  slots: {
    popup: [
      // base
      "max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-md z-50",
      // text color
      "text-gray-50 dark:text-gray-900",
      // background color
      "bg-gray-900 dark:bg-gray-50",
      // transitions
      "will-change-[transform,opacity] transition-all duration-150",
      // animations
      "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
      "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
      "data-[side=top]:data-[starting-style]:translate-y-1",
      "data-[side=bottom]:data-[starting-style]:-translate-y-1",
      "data-[side=left]:data-[starting-style]:translate-x-1",
      "data-[side=right]:data-[starting-style]:-translate-x-1",
    ],
    arrow: [
      // base
      "fill-gray-900 dark:fill-gray-50",
    ],
  },
  variants: {
    variant: {
      default: {
        popup: "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900",
        arrow: "fill-gray-900 dark:fill-gray-50",
      },
      inverse: {
        popup: "bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50",
        arrow: "fill-gray-50 dark:fill-gray-900",
      },
    },
    size: {
      sm: {
        popup: "px-2 py-1 text-xs",
      },
      default: {
        popup: "px-2.5 py-1.5 text-sm",
      },
      lg: {
        popup: "px-3 py-2 text-base",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TooltipProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof BaseTooltip.Root>,
      "children"
    >,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactElement;
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  showArrow?: boolean;
  delayDuration?: number;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof BaseTooltip.Popup>,
  TooltipProps
>(
  (
    {
      children,
      className,
      content,
      delayDuration = 150,
      defaultOpen,
      open,
      onClick,
      onOpenChange,
      showArrow = true,
      side = "top",
      sideOffset = 10,
      align = "center",
      alignOffset = 0,
      variant,
      size,
      ...props
    },
    forwardedRef
  ) => {
    const { popup, arrow } = tooltipVariants({ variant, size });

    return (
      <BaseTooltip.Provider delayDuration={delayDuration}>
        <BaseTooltip.Root
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          {...props}
        >
          <BaseTooltip.Trigger onClick={onClick} asChild>
            {children}
          </BaseTooltip.Trigger>
          <BaseTooltip.Portal>
            <BaseTooltip.Positioner
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
            >
              <BaseTooltip.Popup
                ref={forwardedRef}
                className={cx(popup(), className)}
              >
                {content}
                {showArrow && (
                  <BaseTooltip.Arrow className={arrow()}>
                    <ArrowSvg />
                  </BaseTooltip.Arrow>
                )}
              </BaseTooltip.Popup>
            </BaseTooltip.Positioner>
          </BaseTooltip.Portal>
        </BaseTooltip.Root>
      </BaseTooltip.Provider>
    );
  }
);

Tooltip.displayName = "Tooltip";

// Arrow SVG component for consistent styling
function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" {...props}>
      <path
        d="M5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3166 7.09763 10.6834 7.09763 10.2929 6.70711L6 2.41421L1.70711 6.70711C1.31658 7.09763 0.683417 7.09763 0.292893 6.70711C-0.0976311 6.31658 -0.0976311 5.68342 0.292893 5.29289L5.29289 0.292893Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Additional exports for more flexibility
const TooltipProvider = BaseTooltip.Provider;
const TooltipRoot = BaseTooltip.Root;
const TooltipTrigger = BaseTooltip.Trigger;
const TooltipPortal = BaseTooltip.Portal;
const TooltipPositioner = BaseTooltip.Positioner;
const TooltipPopup = BaseTooltip.Popup;
const TooltipArrow = BaseTooltip.Arrow;

export {
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  type TooltipProps,
};
