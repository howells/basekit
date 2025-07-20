// Tremor Label [v0.0.2] - Base UI

import { Field } from "@base-ui-components/react/field";
import React from "react";

import { cx } from "@/lib/utils";

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof Field.Label> {
  disabled?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof Field.Label>,
  LabelProps
>(({ className, disabled, ...props }, forwardedRef) => (
  <Field.Label
    ref={forwardedRef}
    className={cx(
      // base
      "text-sm leading-none",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      {
        "text-gray-400 dark:text-gray-600": disabled,
      },
      className
    )}
    aria-disabled={disabled}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
