import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import React from "react";
import { ComponentConfig } from "../component-configs";

export const accordionConfig: ComponentConfig = {
  id: "accordion",
  name: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  category: "ui",
  badge: "UI",

  installation: {
    npm: "npm install @radix-ui/react-accordion",
  },

  importStatement: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "A simple accordion with multiple items.",
      preview: (
        <div className="w-full max-w-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other
      components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you
      prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
    {
      id: "multiple",
      title: "Multiple",
      description: "Allow multiple items to be open at the same time.",
      preview: (
        <div className="w-full max-w-md">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
              <AccordionContent>
                Yes, when type is set to &quot;multiple&quot;, you can have
                multiple accordion items open at once.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Each accordion item can be toggled independently when using the
                multiple type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Any limitations?</AccordionTrigger>
              <AccordionContent>
                No significant limitations. It works as expected with keyboard
                navigation and screen readers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes, when type is set to "multiple", you can have multiple
      accordion items open at once.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Each accordion item can be toggled independently when using
      the multiple type.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Any limitations?</AccordionTrigger>
    <AccordionContent>
      No significant limitations. It works as expected with
      keyboard navigation and screen readers.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
    {
      id: "with-card",
      title: "With Card",
      description: "Accordion wrapped in a card for better visual separation.",
      preview: (
        <div className="w-full max-w-md">
          <Card>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Stencil UI?</AccordionTrigger>
                <AccordionContent>
                  Stencil UI is a collection of accessible and customizable
                  React components built with Base UI and Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How to get started?</AccordionTrigger>
                <AccordionContent>
                  Simply copy and paste the components you need into your
                  project. No package installation required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I customize the styling?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! All components are built with Tailwind CSS classes
                  and can be easily customized to match your design system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      ),
      code: `<Card>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Stencil UI?</AccordionTrigger>
      <AccordionContent>
        Stencil UI is a collection of accessible and customizable
        React components built with Base UI and Tailwind CSS.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How to get started?</AccordionTrigger>
      <AccordionContent>
        Simply copy and paste the components you need into your
        project. No package installation required.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Can I customize the styling?</AccordionTrigger>
      <AccordionContent>
        Absolutely! All components are built with Tailwind CSS
        classes and can be easily customized to match your design
        system.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Card>`,
    },
  ],

  api: [
    {
      name: "Accordion",
      description: "The root container for accordion items.",
      properties: [
        {
          name: "type",
          type: '"single" | "multiple"',
          description:
            "Determines whether one or multiple items can be opened at the same time.",
          required: true,
        },
        {
          name: "collapsible",
          type: "boolean",
          default: "false",
          description:
            'When type is "single", allows closing content when clicking trigger for an open item.',
        },
        {
          name: "value",
          type: "string | string[]",
          description:
            'The controlled value of the item to expand when type is "single" or the items when type is "multiple".',
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          description:
            "The value of the item to expand when initially rendered.",
        },
      ],
    },
    {
      name: "AccordionItem",
      description: "Contains all the parts of a collapsible section.",
      properties: [
        {
          name: "value",
          type: "string",
          description: "A unique value for the item.",
          required: true,
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description:
            "When true, prevents the user from interacting with the item.",
        },
      ],
    },
  ],

  accessibility: {
    pattern: {
      name: "Accordion WAI-ARIA design pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
    },
    keyboardShortcuts: [
      {
        key: "Space",
        description:
          "When focus is on an accordion trigger, activates the trigger.",
      },
      {
        key: "Enter",
        description:
          "When focus is on an accordion trigger, activates the trigger.",
      },
      {
        key: "Tab",
        description: "Moves focus to the next focusable element.",
      },
      {
        key: "Shift + Tab",
        description: "Moves focus to the previous focusable element.",
      },
      {
        key: "ArrowDown",
        description: "Moves focus to the next accordion trigger.",
      },
      {
        key: "ArrowUp",
        description: "Moves focus to the previous accordion trigger.",
      },
      {
        key: "Home",
        description:
          "When focus is on an accordion trigger, moves focus to the first accordion trigger.",
      },
      {
        key: "End",
        description:
          "When focus is on an accordion trigger, moves focus to the last accordion trigger.",
      },
    ],
  },
};
