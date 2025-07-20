// Tremor Select [v1.0.0] - Base UI

import { cx, focusInput, hasErrorInput } from "@/lib/utils";
import { Select as BaseSelect } from "@base-ui-components/react/select";
import { Check, ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import * as React from "react";

const Select = BaseSelect.Root;
Select.displayName = "Select";

const SelectGroup = BaseSelect.Group;
SelectGroup.displayName = "SelectGroup";

const SelectValue = BaseSelect.Value;
SelectValue.displayName = "SelectValue";

const selectTriggerStyles = [
  cx(
    // base
    "group/trigger flex w-full select-none items-center justify-between gap-2 truncate rounded-md border px-3 py-2 shadow-xs outline-hidden transition sm:text-sm",
    // border color
    "border-zinc-300 dark:border-zinc-800",
    // text color
    "text-zinc-900 dark:text-zinc-50",
    // placeholder
    "data-[placeholder]:text-zinc-500 dark:data-[placeholder]:text-zinc-500",
    // background color
    "bg-white dark:bg-zinc-950",
    // hover
    "hover:bg-zinc-50 dark:hover:bg-zinc-950/50",
    // disabled
    "data-[disabled]:bg-zinc-100 data-[disabled]:text-zinc-400",
    "dark:data-[disabled]:border-zinc-700 dark:data-[disabled]:bg-zinc-800 dark:data-[disabled]:text-zinc-500",
    focusInput
    // invalid (optional)
    // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ),
];

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger> & {
    hasError?: boolean;
  }
>(({ className, hasError, children, ...props }, ref) => {
  return (
    <BaseSelect.Trigger
      ref={ref}
      className={cx(
        selectTriggerStyles,
        hasError ? hasErrorInput : "",
        className
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
      <BaseSelect.Icon>
        <ChevronsUpDown
          className={cx(
            // base
            "size-4 shrink-0",
            // text color
            "text-zinc-400 dark:text-zinc-600",
            // disabled
            "group-data-[disabled]/trigger:text-zinc-300 dark:group-data-[disabled]/trigger:text-zinc-600"
          )}
          aria-hidden="true"
        />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof BaseSelect.ScrollUpArrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollUpArrow>
>(({ className, ...props }, ref) => (
  <BaseSelect.ScrollUpArrow
    ref={ref}
    className={cx(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="size-3 shrink-0" aria-hidden="true" />
  </BaseSelect.ScrollUpArrow>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof BaseSelect.ScrollDownArrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>
>(({ className, ...props }, ref) => (
  <BaseSelect.ScrollDownArrow
    ref={ref}
    className={cx(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="size-3 shrink-0" aria-hidden="true" />
  </BaseSelect.ScrollDownArrow>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

const SelectBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseSelect.Backdrop
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
SelectBackdrop.displayName = "SelectBackdrop";

const SelectPortal = BaseSelect.Portal;

const SelectPositioner = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Positioner>
>(({ sideOffset = 8, collisionPadding = 10, ...props }, ref) => (
  <BaseSelect.Positioner
    ref={ref}
    sideOffset={sideOffset}
    collisionPadding={collisionPadding}
    {...props}
  />
));
SelectPositioner.displayName = "SelectPositioner";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Popup> & {
    sideOffset?: number;
    collisionPadding?: number;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
  }
>(
  (
    {
      className,
      children,
      sideOffset = 8,
      collisionPadding = 10,
      side = "bottom",
      align = "start",
      ...props
    },
    ref
  ) => (
    <SelectPortal>
      <SelectPositioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
      >
        <SelectScrollUpButton />
        <BaseSelect.Popup
          ref={ref}
          className={cx(
            // base
            "relative z-50 overflow-hidden rounded-md border shadow-xl shadow-black/[2.5%]",
            // widths
            "min-w-[var(--anchor-width)] max-w-[95vw]",
            // heights
            "max-h-[var(--available-height)]",
            // background color
            "bg-white dark:bg-zinc-950",
            // text color
            "text-zinc-900 dark:text-zinc-50",
            // border color
            "border-zinc-200 dark:border-zinc-800",
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
          {...props}
        >
          <div className="p-1">{children}</div>
        </BaseSelect.Popup>
        <SelectScrollDownButton />
      </SelectPositioner>
    </SelectPortal>
  )
);
SelectContent.displayName = "SelectContent";

const SelectGroupLabel = React.forwardRef<
  React.ElementRef<typeof BaseSelect.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => (
  <BaseSelect.GroupLabel
    ref={ref}
    className={cx(
      // base
      "px-3 py-2 text-xs font-medium tracking-wide",
      // text color
      "text-zinc-500 dark:text-zinc-500",
      className
    )}
    {...props}
  />
));
SelectGroupLabel.displayName = "SelectGroupLabel";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Item>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <BaseSelect.Item
      ref={ref}
      className={cx(
        // base
        "grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 rounded-sm px-3 py-2 outline-hidden transition-colors data-[selected]:font-semibold sm:text-sm",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-zinc-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-zinc-600",
        // focus/highlight
        "data-[highlighted]:bg-zinc-100 dark:data-[highlighted]:bg-zinc-900",
        // hover
        "hover:bg-zinc-100 dark:hover:bg-zinc-900",
        className
      )}
      {...props}
    >
      <BaseSelect.ItemText className="flex-1 truncate">
        {children}
      </BaseSelect.ItemText>
      <BaseSelect.ItemIndicator>
        <Check
          className="size-5 shrink-0 text-zinc-800 dark:text-zinc-200"
          aria-hidden="true"
        />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
});
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(({ className, ...props }, ref) => (
  <BaseSelect.Separator
    ref={ref}
    className={cx(
      // base
      "-mx-1 my-1 h-px",
      // background color
      "bg-zinc-300 dark:bg-zinc-700",
      className
    )}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

const SelectArrow = React.forwardRef<
  React.ElementRef<typeof BaseSelect.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Arrow>
>(({ className, ...props }, ref) => (
  <BaseSelect.Arrow
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
        className="fill-zinc-200 dark:fill-zinc-700"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-zinc-300 dark:fill-zinc-600"
      />
    </svg>
  </BaseSelect.Arrow>
));
SelectArrow.displayName = "SelectArrow";

export {
  Select,
  SelectArrow,
  SelectBackdrop,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPortal,
  SelectPositioner,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
