// Number Field Component [v1.0.0]

import { cx } from "@/lib/utils";
import { NumberField as BaseNumberField } from "@base-ui-components/react/number-field";
import { ArrowLeftRight, Minus, Plus } from "lucide-react";
import * as React from "react";

interface NumberFieldProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof BaseNumberField.Root>,
    "id"
  > {
  label?: string;
  placeholder?: string;
  showScrubArea?: boolean;
  showButtons?: boolean;
  inputClassName?: string;
  buttonClassName?: string;
  groupClassName?: string;
}

const NumberField = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Root>,
  NumberFieldProps
>(
  (
    {
      className,
      label,
      placeholder,
      showScrubArea = false,
      showButtons = true,
      inputClassName,
      buttonClassName,
      groupClassName,
      children,
      ...props
    },
    ref
  ) => {
    const id = React.useId();

    return (
      <BaseNumberField.Root
        ref={ref}
        id={id}
        className={cx("flex flex-col items-start gap-2", className)}
        {...props}
      >
        {(label || showScrubArea) && (
          <NumberFieldScrubArea showScrubArea={showScrubArea}>
            {label && <NumberFieldLabel htmlFor={id}>{label}</NumberFieldLabel>}
          </NumberFieldScrubArea>
        )}

        <NumberFieldGroup className={groupClassName}>
          {showButtons && <NumberFieldDecrement className={buttonClassName} />}
          <NumberFieldInput
            className={inputClassName}
            placeholder={placeholder}
          />
          {showButtons && <NumberFieldIncrement className={buttonClassName} />}
        </NumberFieldGroup>

        {children}
      </BaseNumberField.Root>
    );
  }
);
NumberField.displayName = "NumberField";

const NumberFieldGroup = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Group>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Group>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Group
    ref={ref}
    className={cx("flex", className)}
    {...props}
  />
));
NumberFieldGroup.displayName = "NumberFieldGroup";

const NumberFieldInput = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Input>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Input>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Input
    ref={ref}
    className={cx(
      "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm",
      "placeholder:text-zinc-500",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-blue-400",
      className
    )}
    {...props}
  />
));
NumberFieldInput.displayName = "NumberFieldInput";

const NumberFieldDecrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Decrement>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Decrement
    ref={ref}
    className={cx(
      "inline-flex h-10 w-10 items-center justify-center rounded-l-md border border-r-0 border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors",
      "hover:bg-zinc-100 active:bg-zinc-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-800",
      className
    )}
    {...props}
  >
    <Minus className="h-4 w-4" />
  </BaseNumberField.Decrement>
));
NumberFieldDecrement.displayName = "NumberFieldDecrement";

const NumberFieldIncrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Increment>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(({ className, ...props }, ref) => (
  <BaseNumberField.Increment
    ref={ref}
    className={cx(
      "inline-flex h-10 w-10 items-center justify-center rounded-r-md border border-l-0 border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors",
      "hover:bg-zinc-100 active:bg-zinc-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-800",
      className
    )}
    {...props}
  >
    <Plus className="h-4 w-4" />
  </BaseNumberField.Increment>
));
NumberFieldIncrement.displayName = "NumberFieldIncrement";

const NumberFieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cx(
      "text-sm font-medium leading-none text-zinc-900 dark:text-zinc-50",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
NumberFieldLabel.displayName = "NumberFieldLabel";

const NumberFieldScrubArea = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.ScrubArea>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubArea> & {
    showScrubArea?: boolean;
  }
>(({ className, showScrubArea = false, children, ...props }, ref) => {
  if (!showScrubArea) {
    return <div className={className}>{children}</div>;
  }

  return (
    <BaseNumberField.ScrubArea
      ref={ref}
      className={cx("cursor-ew-resize", className)}
      {...props}
    >
      {children}
      <NumberFieldScrubAreaCursor />
    </BaseNumberField.ScrubArea>
  );
});
NumberFieldScrubArea.displayName = "NumberFieldScrubArea";

const NumberFieldScrubAreaCursor = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.ScrubAreaCursor>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubAreaCursor>
>(({ className, ...props }, ref) => (
  <BaseNumberField.ScrubAreaCursor
    ref={ref}
    className={cx("drop-shadow-[0_1px_1px_#0008] filter", className)}
    {...props}
  >
    <ArrowLeftRight className="h-4 w-4 text-zinc-900 dark:text-zinc-50" />
  </BaseNumberField.ScrubAreaCursor>
));
NumberFieldScrubAreaCursor.displayName = "NumberFieldScrubAreaCursor";

export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldLabel,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
};
