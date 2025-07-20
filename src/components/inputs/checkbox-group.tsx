// Checkbox Group Component [v1.0.0]

import { cx } from "@/lib/utils";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react/checkbox-group";
import * as React from "react";
import { Checkbox } from "./checkbox";

interface CheckboxGroupProps
  extends React.ComponentPropsWithoutRef<typeof BaseCheckboxGroup> {
  label?: string;
  labelId?: string;
  className?: string;
  children?: React.ReactNode;
}

const CheckboxGroup = React.forwardRef<
  React.ElementRef<typeof BaseCheckboxGroup>,
  CheckboxGroupProps
>(({ className, label, labelId, children, ...props }, ref) => (
  <BaseCheckboxGroup
    ref={ref}
    aria-labelledby={labelId}
    className={cx(
      "flex flex-col items-start gap-2 text-gray-900 dark:text-gray-50",
      className
    )}
    {...props}
  >
    {label && (
      <div
        className="font-medium text-sm text-gray-900 dark:text-gray-50"
        id={labelId}
      >
        {label}
      </div>
    )}
    {children}
  </BaseCheckboxGroup>
));
CheckboxGroup.displayName = "CheckboxGroup";

interface CheckboxGroupItemProps {
  value: string;
  name?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const CheckboxGroupItem = React.forwardRef<
  HTMLLabelElement,
  CheckboxGroupItemProps
>(({ value, name, children, disabled, className, ...props }, ref) => (
  <label
    ref={ref}
    className={cx(
      "flex items-center gap-2 cursor-pointer",
      disabled && "cursor-not-allowed opacity-50",
      className
    )}
    {...props}
  >
    <Checkbox
      name={name}
      value={value}
      disabled={disabled}
      className="size-4"
    />
    <span className="text-sm font-medium select-none">{children}</span>
  </label>
));
CheckboxGroupItem.displayName = "CheckboxGroupItem";

export {
  CheckboxGroup,
  CheckboxGroupItem,
  type CheckboxGroupItemProps,
  type CheckboxGroupProps,
};
