// Configuration data - no React imports or JSX
import type { ComponentConfig } from "@/lib/component-config-types";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "accordion",
  name: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each control a panel of content.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";`,
  componentId: "AccordionExample",

  // Props that users can experiment with
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
      id: "default",
      title: "Default",
      description: "Basic accordion with default settings.",
      code: `<Accordion>
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
</Accordion>`,
    },
    {
      id: "multiple-open",
      title: "Multiple Open",
      description: "Accordion allowing multiple items to be open.",
      code: `<Accordion openMultiple>
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
</Accordion>`,
    },
  ],
};
