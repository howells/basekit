// NumberField Component [v1.0.0] - Tremor Style

import { cx, focusRing } from "@/lib/utils";
import { NumberField as BaseNumberField } from "@base-ui-components/react/number-field";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

interface NumberFieldProps
  extends React.ComponentPropsWithoutRef<typeof BaseNumberField.Root> {
  label?: string;
  placeholder?: string;
  showScrubArea?: boolean;
  showSteppers?: boolean;
  fullWidth?: boolean;
  className?: string;
  inputClassName?: string;
}

const NumberField = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Root>,
  NumberFieldProps
>(
  (
    {
      label,
      placeholder,
      showScrubArea = true,
      showSteppers = true,
      fullWidth = false,
      className,
      inputClassName,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const fieldId = id || generatedId;

    return (
      <BaseNumberField.Root
        ref={ref}
        id={fieldId}
        className={cx("flex flex-col items-start gap-1", className)}
        {...props}
      >
        {label && (
          <NumberFieldLabel htmlFor={fieldId} showScrubArea={showScrubArea}>
            {label}
          </NumberFieldLabel>
        )}

        {showSteppers ? (
          <NumberFieldGroup className={fullWidth ? "w-full" : undefined}>
            <NumberFieldDecrement />
            <NumberFieldInput
              placeholder={placeholder}
              className={cx(fullWidth ? "flex-1" : undefined, inputClassName)}
            />
            <NumberFieldIncrement />
          </NumberFieldGroup>
        ) : (
          <NumberFieldInput
            placeholder={placeholder}
            className={cx(
              "rounded-md",
              fullWidth ? "w-full" : undefined,
              inputClassName
            )}
          />
        )}
      </BaseNumberField.Root>
    );
  }
);
NumberField.displayName = "NumberField";

const NumberFieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    showScrubArea?: boolean;
  }
>(({ className, children, showScrubArea = true, ...props }, ref) => (
  <>
    {showScrubArea ? (
      <BaseNumberField.ScrubArea className="cursor-ew-resize">
        <label
          ref={ref}
          className={cx(
            // base
            "cursor-ew-resize text-sm font-medium leading-6",
            // text color
            "text-zinc-900 dark:text-zinc-50",
            className
          )}
          {...props}
        >
          {children}
        </label>
        <NumberFieldScrubCursor />
      </BaseNumberField.ScrubArea>
    ) : (
      <label
        ref={ref}
        className={cx(
          // base
          "text-sm font-medium leading-6",
          // text color
          "text-zinc-900 dark:text-zinc-50",
          className
        )}
        {...props}
      >
        {children}
      </label>
    )}
  </>
));
NumberFieldLabel.displayName = "NumberFieldLabel";

const NumberFieldScrubCursor = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.ScrubAreaCursor>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubAreaCursor>
>(({ className, ...props }, ref) => (
  <BaseNumberField.ScrubAreaCursor
    ref={ref}
    className={cx("drop-shadow-[0_1px_1px_#0008] filter", className)}
    {...props}
  >
    <CursorGrowIcon />
  </BaseNumberField.ScrubAreaCursor>
));
NumberFieldScrubCursor.displayName = "NumberFieldScrubCursor";

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
      // base
      "py-2 w-24 border text-center text-sm tabular-nums transition-colors",
      // border color
      "border-zinc-300 dark:border-zinc-700",
      // background color
      "bg-white dark:bg-zinc-950",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // placeholder color
      "placeholder-zinc-400 dark:placeholder-zinc-500",
      // focus
      focusRing,
      // disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      // group context (when used with steppers)
      "group-[]:border-t group-[]:border-b group-[]:rounded-none group-[]:focus:z-10",
      className
    )}
    {...props}
  />
));
NumberFieldInput.displayName = "NumberFieldInput";

const NumberFieldIncrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Increment>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Increment
    ref={ref}
    className={cx(
      // base
      "flex py-2 w-10 items-center justify-center rounded-tr-md rounded-br-md border border-l-0 bg-clip-padding text-sm font-medium transition-colors",
      // border color
      "border-zinc-300 dark:border-zinc-700",
      // background color
      "bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-700",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // focus
      focusRing,
      // disabled
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-50 dark:disabled:hover:bg-zinc-800",
      className
    )}
    {...props}
  >
    {children || <Plus className="h-4 w-4" />}
  </BaseNumberField.Increment>
));
NumberFieldIncrement.displayName = "NumberFieldIncrement";

const NumberFieldDecrement = React.forwardRef<
  React.ElementRef<typeof BaseNumberField.Decrement>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(({ className, children, ...props }, ref) => (
  <BaseNumberField.Decrement
    ref={ref}
    className={cx(
      // base
      "flex py-2 w-10 items-center justify-center rounded-tl-md rounded-bl-md border border-r-0 bg-clip-padding text-sm font-medium transition-colors",
      // border color
      "border-zinc-300 dark:border-zinc-700",
      // background color
      "bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-700",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // focus
      focusRing,
      // disabled
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-50 dark:disabled:hover:bg-zinc-800",
      className
    )}
    {...props}
  >
    {children || <Minus className="h-4 w-4" />}
  </BaseNumberField.Decrement>
));
NumberFieldDecrement.displayName = "NumberFieldDecrement";

// Icon components
function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldLabel,
  NumberFieldScrubCursor,
  type NumberFieldProps,
};
