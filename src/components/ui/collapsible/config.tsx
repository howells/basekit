import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "collapsible",
  name: "Collapsible",
  description:
    "A collapsible component built on Base UI for expandable content sections with smooth animations.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";`,
  componentId: "CollapsibleExample",
  props: [
    {
      name: "defaultOpen",
      type: "boolean",
      defaultValue: false,
      description: "Whether the collapsible is open by default.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the collapsible is disabled.",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Click to expand",
      description: "The title text for the trigger.",
    },
    {
      name: "closedIcon",
      type: "icon",
      description: "Icon to display when the collapsible is closed.",
    },
    {
      name: "openIcon",
      type: "icon",
      description: "Icon to display when the collapsible is open.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic collapsible with trigger and content.",
      code: `<Collapsible>
  <CollapsibleTrigger>What is StencilUI?</CollapsibleTrigger>
  <CollapsibleContent>
    StencilUI is a modern React component library built on Base UI primitives with Tremor-inspired styling.
  </CollapsibleContent>
</Collapsible>`,
    },
    {
      id: "default-open",
      title: "Default Open",
      description: "Collapsible that is open by default.",
      code: `<Collapsible defaultOpen>
  <CollapsibleTrigger>System Requirements</CollapsibleTrigger>
  <CollapsibleContent>
    <ul className="space-y-1 ml-4">
      <li>• React 18 or higher</li>
      <li>• Node.js 16 or higher</li>
      <li>• TypeScript 4.9 or higher</li>
    </ul>
  </CollapsibleContent>
</Collapsible>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled collapsible that cannot be interacted with.",
      code: `<Collapsible disabled>
  <CollapsibleTrigger>Coming Soon</CollapsibleTrigger>
  <CollapsibleContent>
    This feature is currently under development.
  </CollapsibleContent>
</Collapsible>`,
    },
    {
      id: "nested-content",
      title: "Rich Content",
      description: "Collapsible with complex nested content.",
      code: `<Collapsible>
  <CollapsibleTrigger>Installation Guide</CollapsibleTrigger>
  <CollapsibleContent>
    <div className="space-y-3">
      <p>Install StencilUI in your project:</p>
      <code className="block bg-zinc-100 dark:bg-zinc-800 p-2 rounded text-sm">
        pnpm add stencilui
      </code>
      <p>Then import components as needed:</p>
      <code className="block bg-zinc-100 dark:bg-zinc-800 p-2 rounded text-sm">
        import {"{"}Button{"}"}  from "stencilui"
      </code>
    </div>
  </CollapsibleContent>
</Collapsible>`,
    },
  ],
};
