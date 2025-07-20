// Tremor Context Menu [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { ContextMenu as BaseContextMenu } from "@base-ui-components/react/context-menu";
import { Check, ChevronRight, Circle, CircleDot } from "lucide-react";
import * as React from "react";

const ContextMenu = BaseContextMenu.Root;
ContextMenu.displayName = "ContextMenu";

const ContextMenuTrigger = BaseContextMenu.Trigger;
ContextMenuTrigger.displayName = "ContextMenuTrigger";

const ContextMenuGroup = BaseContextMenu.Group;
ContextMenuGroup.displayName = "ContextMenuGroup";

const ContextMenuSubmenu = BaseContextMenu.SubmenuRoot;
ContextMenuSubmenu.displayName = "ContextMenuSubmenu";

const ContextMenuRadioGroup = BaseContextMenu.RadioGroup;
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";

const ContextMenuSubmenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.SubmenuTrigger>
>(({ className, children, ...props }, forwardedRef) => (
  <BaseContextMenu.SubmenuTrigger
    ref={forwardedRef}
    className={cx(
      // base
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:hover:bg-none dark:data-disabled:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 data-[popup-open]:bg-gray-100 dark:focus-visible:bg-gray-900 dark:data-[popup-open]:bg-gray-900",
      // hover
      "data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-900",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
  </BaseContextMenu.SubmenuTrigger>
));
ContextMenuSubmenuTrigger.displayName = "ContextMenuSubmenuTrigger";

const ContextMenuSubmenuContent = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.Portal>
    <BaseContextMenu.Positioner sideOffset={8} collisionPadding={8}>
      <BaseContextMenu.Popup
        ref={forwardedRef}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "min-w-32",
          // heights
          "max-h-[var(--context-menu-available-height)]",
          // background color
          "bg-white dark:bg-gray-950",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-200 dark:border-gray-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[starting-style]:animate-hide",
          "data-[ending-style]:animate-hide",
          "data-[side=bottom]:animate-slide-down-and-fade data-[side=left]:animate-slide-left-and-fade data-[side=right]:animate-slide-right-and-fade data-[side=top]:animate-slide-up-and-fade",
          className
        )}
        {...props}
      />
    </BaseContextMenu.Positioner>
  </BaseContextMenu.Portal>
));
ContextMenuSubmenuContent.displayName = "ContextMenuSubmenuContent";

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup> & {
    sideOffset?: number;
    collisionPadding?: number;
    align?: "start" | "center" | "end";
  }
>(
  (
    {
      className,
      sideOffset = 8,
      collisionPadding = 8,
      align = "center",
      ...props
    },
    forwardedRef
  ) => (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
      >
        <BaseContextMenu.Popup
          ref={forwardedRef}
          className={cx(
            // base - reusing Menu styling for consistency
            "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
            // widths
            "min-w-48",
            // heights
            "max-h-[var(--context-menu-available-height)]",
            // background color
            "bg-white dark:bg-gray-950",
            // text color
            "text-gray-900 dark:text-gray-50",
            // border color
            "border-gray-200 dark:border-gray-800",
            // transition
            "will-change-[transform,opacity]",
            "data-[starting-style]:animate-hide",
            "data-[ending-style]:animate-hide",
            "data-[side=bottom]:animate-slide-down-and-fade data-[side=left]:animate-slide-left-and-fade data-[side=right]:animate-slide-right-and-fade data-[side=top]:animate-slide-up-and-fade",
            className
          )}
          {...props}
        />
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  )
);
ContextMenuContent.displayName = "ContextMenuContent";

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Item> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => (
  <BaseContextMenu.Item
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "group/ContextMenuItem relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-1 outline-hidden transition-colors sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:hover:bg-none dark:data-disabled:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 dark:focus-visible:bg-gray-900",
      // hover
      "data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-900",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  >
    {children}
    {hint && (
      <span
        className={cx("ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600")}
      >
        {hint}
      </span>
    )}
    {shortcut && (
      <span
        className={cx("ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600")}
      >
        {shortcut}
      </span>
    )}
  </BaseContextMenu.Item>
));
ContextMenuItem.displayName = "ContextMenuItem";

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.CheckboxItem> & {
    shortcut?: string;
    hint?: string;
  }
>(
  (
    { className, hint, shortcut, children, checked, ...props },
    forwardedRef
  ) => (
    <BaseContextMenu.CheckboxItem
      ref={forwardedRef}
      className={cx(
        // base - matching Menu component styling exactly
        "relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pl-8 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:hover:bg-none dark:data-disabled:text-gray-600",
        // focus
        "focus-visible:bg-gray-100 dark:focus-visible:bg-gray-900",
        // hover
        "data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-900",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseContextMenu.CheckboxItemIndicator>
          <Check
            aria-hidden="true"
            className="size-full shrink-0 text-gray-800 dark:text-gray-200"
          />
        </BaseContextMenu.CheckboxItemIndicator>
      </span>
      {children}
      {hint && (
        <span
          className={cx(
            "ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"
          )}
        >
          {hint}
        </span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"
          )}
        >
          {shortcut}
        </span>
      )}
    </BaseContextMenu.CheckboxItem>
  )
);
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.RadioItem> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => (
  <BaseContextMenu.RadioItem
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "group/ContextMenuRadioItem relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pl-8 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-gray-400 data-disabled:hover:bg-none dark:data-disabled:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 dark:focus-visible:bg-gray-900",
      // hover
      "data-highlighted:bg-gray-100 dark:data-highlighted:bg-gray-900",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <BaseContextMenu.RadioItemIndicator>
        <CircleDot
          aria-hidden="true"
          className="size-full shrink-0 text-blue-500 dark:text-blue-500"
        />
      </BaseContextMenu.RadioItemIndicator>
      <span className="data-checked:hidden">
        <Circle
          aria-hidden="true"
          className="size-full shrink-0 text-gray-300 dark:text-gray-700"
        />
      </span>
    </span>
    {children}
    {hint && (
      <span
        className={cx(
          "ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"
        )}
      >
        {hint}
      </span>
    )}
    {shortcut && (
      <span
        className={cx(
          "ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"
        )}
      >
        {shortcut}
      </span>
    )}
  </BaseContextMenu.RadioItem>
));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.GroupLabel>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.GroupLabel
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "px-2 py-2 text-xs font-medium tracking-wide",
      // text color
      "text-gray-500 dark:text-gray-500",
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = "ContextMenuLabel";

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Separator>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.Separator
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "-mx-1 my-1 h-px border-t border-gray-200 dark:border-gray-800",
      className
    )}
    {...props}
  />
));
ContextMenuSeparator.displayName = "ContextMenuSeparator";

const ContextMenuIconWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cx(
        // text color - matching Menu component styling exactly
        "text-gray-600 dark:text-gray-400",
        // disabled
        "group-data-disabled/ContextMenuItem:text-gray-400 dark:group-data-disabled/ContextMenuItem:text-gray-700",
        className
      )}
      {...props}
    />
  );
};
ContextMenuIconWrapper.displayName = "ContextMenuIconWrapper";

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuIconWrapper,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuContent,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
};
