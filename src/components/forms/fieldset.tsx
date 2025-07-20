// Fieldset Component [v1.0.0] - Tremor Style

import { cx } from "@/lib/utils";
import { Fieldset as BaseFieldset } from "@base-ui-components/react/fieldset";
import * as React from "react";

const Fieldset = React.forwardRef<
  React.ElementRef<typeof BaseFieldset.Root>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Root>
>(({ className, ...props }, ref) => (
  <BaseFieldset.Root
    ref={ref}
    className={cx(
      // base
      "flex flex-col gap-4 border-0 p-0",
      // spacing
      "m-0",
      className
    )}
    {...props}
  />
));
Fieldset.displayName = "Fieldset";

const FieldsetLegend = React.forwardRef<
  React.ElementRef<typeof BaseFieldset.Legend>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Legend>
>(({ className, ...props }, ref) => (
  <BaseFieldset.Legend
    ref={ref}
    className={cx(
      // base
      "text-lg font-medium leading-6",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // border
      "border-b border-zinc-200 dark:border-zinc-800",
      // spacing
      "pb-3",
      // disabled
      "data-disabled:text-zinc-400 dark:data-disabled:text-zinc-600",
      className
    )}
    {...props}
  />
));
FieldsetLegend.displayName = "FieldsetLegend";

export { Fieldset, FieldsetLegend };
