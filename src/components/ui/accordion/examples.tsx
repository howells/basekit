import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

// Default accordion
export const DefaultExample = () => (
  <Accordion>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is StencilUI?</AccordionTrigger>
      <AccordionContent>
        StencilUI is a modern React component library that combines the best
        design patterns and developer experience from leading UI libraries
        while building on a solid, accessible foundation.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do I install it?</AccordionTrigger>
      <AccordionContent>
        You can install StencilUI components using npm or pnpm. Each component
        is built on Base UI primitives for excellent accessibility and
        performance.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// Multiple open accordion
export const MultipleOpenExample = () => (
  <Accordion openMultiple>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is StencilUI?</AccordionTrigger>
      <AccordionContent>
        StencilUI is a modern React component library that combines the best
        design patterns and developer experience from leading UI libraries
        while building on a solid, accessible foundation.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do I install it?</AccordionTrigger>
      <AccordionContent>
        You can install StencilUI components using npm or pnpm. Each component
        is built on Base UI primitives for excellent accessibility and
        performance.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);