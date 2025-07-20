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
        "text-zinc-900 dark:text-zinc-50",
        // disabled
        "data-[disabled]:cursor-default data-[disabled]:text-zinc-400 dark:data-[disabled]:text-zinc-600",
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
          "text-zinc-600 dark:text-zinc-400"
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
        "text-zinc-700 dark:text-zinc-200",
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
      "border-zinc-200 dark:border-zinc-800",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

// Component configuration for documentation
export const accordionConfig = {
  id: "accordion",
  name: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "npm install @base-ui-components/react",
  },
  importStatement: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";`,
  componentId: "Accordion",
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic accordion with multiple items.",
      preview: (
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is StencilUI?</AccordionTrigger>
            <AccordionContent>
              StencilUI is a modern React component library that combines the
              best design patterns and developer experience from leading UI
              libraries while building on a solid, accessible foundation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I install it?</AccordionTrigger>
            <AccordionContent>
              You can install StencilUI components using npm or pnpm. Each
              component is built on Base UI primitives for excellent
              accessibility and performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What makes it different?</AccordionTrigger>
            <AccordionContent>
              StencilUI curates and adapts the best components from shadcn/ui,
              Radix UI, Tailwind UI, and other excellent libraries, porting them
              to Base UI primitives with Tremor-inspired styling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
      code: `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is StencilUI?</AccordionTrigger>
    <AccordionContent>
      StencilUI is a modern React component library that combines the best design patterns and developer experience from leading UI libraries while building on a solid, accessible foundation.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I install it?</AccordionTrigger>
    <AccordionContent>
      You can install StencilUI components using npm or pnpm. Each component is built on Base UI primitives for excellent accessibility and performance.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>What makes it different?</AccordionTrigger>
    <AccordionContent>
      StencilUI curates and adapts the best components from shadcn/ui, Radix UI, Tailwind UI, and other excellent libraries, porting them to Base UI primitives with Tremor-inspired styling.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
  ],
};
