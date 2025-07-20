"use client";

import { DocExample } from "@/components/doc-example";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const AccordionPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Heading level={1}>Accordion</Heading>
          <Badge variant="neutral">UI</Badge>
        </div>
        <Text>
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </Text>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Installation
        </h2>
        <CodeBlock language="bash">
          npm install @radix-ui/react-accordion
        </CodeBlock>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Usage
        </h2>
        <CodeBlock>
          {`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";`}
        </CodeBlock>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Examples
        </h2>

        {/* Default Example */}
        <DocExample
          title="Default"
          description="A simple accordion with multiple items."
          preview={
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
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={`<Accordion type="single" collapsible>
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
</Accordion>`}
        />

        {/* Multiple Open Example */}
        <DocExample
          title="Multiple"
          description="Allow multiple items to be open at the same time."
          preview={
            <div className="w-full max-w-md">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can I open multiple items?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, when type is set to &quot;multiple&quot;, you can have
                    multiple accordion items open at once.
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
              </Accordion>
            </div>
          }
          code={`<Accordion type="multiple">
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
</Accordion>`}
        />

        {/* With Card Example */}
        <DocExample
          title="With Card"
          description="Accordion wrapped in a card for better visual separation."
          preview={
            <div className="w-full max-w-md">
              <Card>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Stencil UI?</AccordionTrigger>
                    <AccordionContent>
                      Stencil UI is a collection of accessible and customizable
                      React components built with Radix UI and Tailwind CSS.
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
                      Absolutely! All components are built with Tailwind CSS
                      classes and can be easily customized to match your design
                      system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          }
          code={`<Card>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Stencil UI?</AccordionTrigger>
      <AccordionContent>
        Stencil UI is a collection of accessible and customizable
        React components built with Radix UI and Tailwind CSS.
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
</Card>`}
        />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          API Reference
        </h2>

        {/* Accordion Root */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Accordion
          </h3>
          <Text>The root container for accordion items.</Text>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Default
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    type
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    &quot;single&quot; | &quot;multiple&quot;
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">-</td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    Determines whether one or multiple items can be opened at
                    the same time.
                  </td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    collapsible
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    boolean
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    false
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    When type is &quot;single&quot;, allows closing content when
                    clicking trigger for an open item.
                  </td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    value
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    string | string[]
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">-</td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    The controlled value of the item to expand when type is
                    &quot;single&quot; or the items when type is
                    &quot;multiple&quot;.
                  </td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    defaultValue
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    string | string[]
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">-</td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    The value of the item to expand when initially rendered.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Accordion Item */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            AccordionItem
          </h3>
          <Text>Contains all the parts of a collapsible section.</Text>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Default
                  </th>
                  <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    value
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    string
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">-</td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    A unique value for the item.
                  </td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-900">
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    disabled
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    boolean
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    false
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    When true, prevents the user from interacting with the item.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Accessibility
        </h2>
        <div className="space-y-3">
          <Text>
            Adheres to the{" "}
            <a
              href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accordion WAI-ARIA design pattern
            </a>
            .
          </Text>
          <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                Space
              </kbd>{" "}
              - When focus is on an accordion trigger, activates the trigger.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                Enter
              </kbd>{" "}
              - When focus is on an accordion trigger, activates the trigger.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                Tab
              </kbd>{" "}
              - Moves focus to the next focusable element.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                Shift + Tab
              </kbd>{" "}
              - Moves focus to the previous focusable element.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                ArrowDown
              </kbd>{" "}
              - Moves focus to the next accordion trigger.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                ArrowUp
              </kbd>{" "}
              - Moves focus to the previous accordion trigger.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                Home
              </kbd>{" "}
              - When focus is on an accordion trigger, moves focus to the first
              accordion trigger.
            </li>
            <li>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 rounded dark:bg-zinc-800">
                End
              </kbd>{" "}
              - When focus is on an accordion trigger, moves focus to the last
              accordion trigger.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
