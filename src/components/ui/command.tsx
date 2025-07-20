// Tremor Command [v1.0.0] - CMDK

"use client";

import { cx, focusRing } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const commandVariants = tv({
  slots: {
    root: [
      // base
      "flex h-full w-full flex-col overflow-hidden rounded-md",
      // background
      "bg-white dark:bg-gray-950",
      // border
      "border border-gray-200 dark:border-gray-800",
      // text
      "text-gray-950 dark:text-gray-50",
    ],
    input: [
      // base
      "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
      // padding
      "px-3",
      // focus
      focusRing,
    ],
    list: [
      // base
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      // scrollbar styling
      "scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-600",
    ],
    empty: [
      // base
      "py-6 text-center text-sm",
      // text color
      "text-gray-500 dark:text-gray-400",
    ],
    group: [
      // base
      "overflow-hidden p-1",
      // text
      "text-gray-950 dark:text-gray-50",
    ],
    groupHeading: [
      // base
      "px-2 py-1.5 text-xs font-medium",
      // text color
      "text-gray-500 dark:text-gray-400",
    ],
    item: [
      // base
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      // hover/focus
      "hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800",
      // disabled
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      // selected
      "data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800",
    ],
    shortcut: [
      // base
      "ml-auto text-xs tracking-widest",
      // text color
      "text-gray-500 dark:text-gray-400",
    ],
    separator: [
      // base
      "-mx-1 h-px",
      // background
      "bg-gray-200 dark:bg-gray-800",
    ],
    dialog: [
      // base
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    ],
    dialogContent: [
      // base
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      // background
      "bg-white dark:bg-gray-950",
      // border
      "border-gray-200 dark:border-gray-800",
    ],
  },
  variants: {
    size: {
      default: {
        root: "h-auto",
        input: "h-11 text-sm",
        item: "px-2 py-1.5 text-sm",
      },
      sm: {
        root: "h-auto",
        input: "h-9 text-sm",
        item: "px-2 py-1 text-sm",
      },
      lg: {
        root: "h-auto",
        input: "h-12 text-base",
        item: "px-3 py-2 text-base",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type CommandVariants = VariantProps<typeof commandVariants>;

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & CommandVariants
>(({ className, size, ...props }, ref) => {
  const { root } = commandVariants({ size });
  return (
    <CommandPrimitive ref={ref} className={cx(root(), className)} {...props} />
  );
});
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Dialog>) => {
  const { dialog, dialogContent } = commandVariants();
  return (
    <CommandPrimitive.Dialog {...props}>
      <div className={dialog()}>
        <div className={dialogContent()}>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            {children}
          </Command>
        </div>
      </div>
    </CommandPrimitive.Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const { input } = commandVariants();
  return (
    <div
      className="flex items-center border-b border-gray-200 px-3 dark:border-gray-800"
      cmdk-input-wrapper=""
    >
      <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
      <CommandPrimitive.Input
        ref={ref}
        className={cx(input(), className)}
        {...props}
      />
    </div>
  );
});

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => {
  const { list } = commandVariants();
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cx(list(), className)}
      {...props}
    />
  );
});

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => {
  const { empty } = commandVariants();
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className={cx(empty(), className)}
      {...props}
    />
  );
});

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => {
  const { group } = commandVariants();
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cx(group(), className)}
      {...props}
    />
  );
});

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { separator } = commandVariants();
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cx(separator(), className)}
      {...props}
    />
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { item } = commandVariants();
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cx(item(), className)}
      {...props}
    />
  );
});

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { shortcut } = commandVariants();
  return <span className={cx(shortcut(), className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

const CommandLoading = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Loading>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>(({ className, ...props }, ref) => {
  const { empty } = commandVariants();
  return (
    <CommandPrimitive.Loading
      ref={ref}
      className={cx(empty(), className)}
      {...props}
    />
  );
});

CommandLoading.displayName = CommandPrimitive.Loading.displayName;

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
};
