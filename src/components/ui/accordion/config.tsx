import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

// Example component for preview system
export const AccordionExample = ({
  orientation = "vertical",
  openMultiple = false,
  ...props
}: {
  orientation?: string;
  openMultiple?: boolean;
  [key: string]: unknown;
}) => {
  return (
    <Accordion
      orientation={orientation as "vertical" | "horizontal"}
      openMultiple={openMultiple}
      {...props}
    >
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
      <AccordionItem value="item-3">
        <AccordionTrigger>What makes it different?</AccordionTrigger>
        <AccordionContent>
          StencilUI combines the best patterns from shadcn/ui, Radix UI,
          Tailwind UI, and Tremor, all built on modern Base UI primitives with
          professional styling.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

// PropExplorer configuration for the accordion
export const accordionPropConfig = {
  componentName: "Accordion",
  displayName: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  variants: [],
  props: [
    {
      name: "orientation",
      type: "select",
      description: "The orientation of the accordion.",
      defaultValue: "vertical",
      options: ["vertical", "horizontal"],
    },
    {
      name: "openMultiple",
      type: "boolean",
      description:
        "If true, multiple accordion items can be open at the same time.",
      defaultValue: false,
    },
  ],
  examples: [
    {
      name: "FAQ Example",
      description: "A typical FAQ-style accordion with multiple sections.",
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
      StencilUI combines the best patterns from shadcn/ui, Radix UI, Tailwind UI, and Tremor, all built on modern Base UI primitives with professional styling.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
  ],
};

// Component configuration for documentation
export const componentConfig = {
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
} from "@/components/ui/accordion/accordion";`,
  componentId: "AccordionExample",
  propExplorer: accordionPropConfig,
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic accordion with multiple items.",
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
