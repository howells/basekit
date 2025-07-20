// Tremor Accordion [v1.0.0] - Base UI

import { Accordion as BaseAccordion } from "@base-ui-components/react/accordion";
import { Plus } from "lucide-react";
import React from "react";

import { cx } from "@/lib/utils";

const Accordion = BaseAccordion.Root;

Accordion.displayName = "Accordion";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      className={cx(
        // base
        "group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm leading-none font-medium",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600",
        //focus
        "focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden focus-visible:ring-inset",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <Plus
        className={cx(
          // base
          "size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[open]:-rotate-45",
          // text color
          "text-gray-600 dark:text-gray-400"
        )}
        aria-hidden="true"
      />
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, forwardedRef) => (
  <BaseAccordion.Panel
    ref={forwardedRef}
    className={cx(
      "data-[starting-style]:animate-accordion-close data-[ending-style]:animate-accordion-close data-[open]:animate-accordion-open transform-gpu"
    )}
    {...props}
  >
    <div
      className={cx(
        // base
        "overflow-hidden pb-4 text-sm",
        // text color
        "text-gray-700 dark:text-gray-200",
        className
      )}
    >
      {children}
    </div>
  </BaseAccordion.Panel>
));

AccordionContent.displayName = "AccordionContent";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof BaseAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, forwardedRef) => (
  <BaseAccordion.Item
    ref={forwardedRef}
    className={cx(
      // base
      "overflow-hidden border-b first:mt-0",
      // border color
      "border-gray-200 dark:border-gray-800",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
