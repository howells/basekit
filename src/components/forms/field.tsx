// Field Component [v1.0.0] - Tremor Style

import { cx } from "@/lib/utils";
import { Field as BaseField } from "@base-ui-components/react/field";
import * as React from "react";

const Field = BaseField.Root;

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof BaseField.Label>,
  React.ComponentPropsWithoutRef<typeof BaseField.Label>
>(({ className, ...props }, ref) => (
  <BaseField.Label
    ref={ref}
    className={cx(
      // base
      "block text-sm font-medium leading-6",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // disabled
      "data-disabled:text-zinc-400 dark:data-disabled:text-zinc-600",
      className
    )}
    {...props}
  />
));
FieldLabel.displayName = "FieldLabel";

const FieldControl = React.forwardRef<
  React.ElementRef<typeof BaseField.Control>,
  React.ComponentPropsWithoutRef<typeof BaseField.Control>
>(({ className, ...props }, ref) => (
  <BaseField.Control
    ref={ref}
    className={cx(
      // base
      "block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-hidden transition sm:text-sm",
      // border color
      "border-zinc-300 dark:border-zinc-800",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // placeholder color
      "placeholder-zinc-400 dark:placeholder-zinc-500",
      // background color
      "bg-white dark:bg-zinc-950",
      // disabled
      "data-disabled:border-zinc-300 data-disabled:bg-zinc-100 data-disabled:text-zinc-400",
      "dark:data-disabled:border-zinc-700 dark:data-disabled:bg-zinc-800 dark:data-disabled:text-zinc-500",
      // focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950",
      // invalid
      "data-invalid:ring-2 data-invalid:ring-red-200 data-invalid:border-red-500 dark:data-invalid:ring-red-400/20",
      className
    )}
    {...props}
  />
));
FieldControl.displayName = "FieldControl";

const FieldDescription = React.forwardRef<
  React.ElementRef<typeof BaseField.Description>,
  React.ComponentPropsWithoutRef<typeof BaseField.Description>
>(({ className, ...props }, ref) => (
  <BaseField.Description
    ref={ref}
    className={cx(
      // base
      "text-sm leading-6",
      // text color
      "text-zinc-600 dark:text-zinc-400",
      // disabled
      "data-disabled:text-zinc-400 dark:data-disabled:text-zinc-600",
      className
    )}
    {...props}
  />
));
FieldDescription.displayName = "FieldDescription";

const FieldError = React.forwardRef<
  React.ElementRef<typeof BaseField.Error>,
  React.ComponentPropsWithoutRef<typeof BaseField.Error>
>(({ className, ...props }, ref) => (
  <BaseField.Error
    ref={ref}
    className={cx(
      // base
      "text-sm leading-6",
      // text color
      "text-red-600 dark:text-red-400",
      // disabled
      "data-disabled:text-zinc-400 dark:data-disabled:text-zinc-600",
      className
    )}
    {...props}
  />
));
FieldError.displayName = "FieldError";

const FieldValidity = BaseField.Validity;

export {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldValidity,
};
