import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "status-dot",
  name: "Status Dot",
  description: "A small dot indicator to show status or state.",
  category: "feedback" as const,
  icon: "Circle",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { StatusDot } from "@/components/ui/status-dot/status-dot";`,
  componentId: "StatusDotExample",
  props: [
    {
      name: "variant",
      type: "select",
      description: "Status variant",
      options: [
        "default",
        "neutral",
        "success",
        "info",
        "warning",
        "error",
        "critical",
        "positive",
        "negative",
        "purple",
        "pink",
        "rose",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "fuchsia",
      ],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "select",
      description: "Size of the status dot",
      options: ["sm", "default", "lg"],
      defaultValue: "default",
    },
    {
      name: "animated",
      type: "boolean",
      description: "Whether the dot should animate",
      defaultValue: false,
    },
    {
      name: "label",
      type: "string",
      description: "Optional text label to display next to the dot",
      defaultValue: "",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Status Dots",
      description: "Status dots in different variants",
      code: `<div className="flex items-center gap-4">
  <StatusDot variant="default" />
  <StatusDot variant="success" />
  <StatusDot variant="warning" />
  <StatusDot variant="error" />
  <StatusDot variant="info" />
</div>`,
    },
    {
      id: "with-labels",
      title: "Status Dots with Labels",
      description: "Status indicators with text labels",
      code: `<div className="space-y-2">
  <StatusDot variant="success" label="Online" />
  <StatusDot variant="warning" label="Away" />
  <StatusDot variant="error" label="Busy" />
  <StatusDot variant="neutral" label="Offline" />
</div>`,
    },
    {
      id: "colors",
      title: "Color Variants",
      description: "Status dots in various colors",
      code: `<div className="flex items-center gap-4">
  <StatusDot variant="purple" />
  <StatusDot variant="pink" />
  <StatusDot variant="orange" />
  <StatusDot variant="emerald" />
  <StatusDot variant="sky" />
</div>`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Status dots in various sizes",
      code: `<div className="flex items-center gap-4">
  <StatusDot size="sm" variant="success" />
  <StatusDot size="default" variant="success" />
  <StatusDot size="lg" variant="success" />
</div>`,
    },
    {
      id: "animated",
      title: "Animated Status Dots",
      description: "Animated status indicators",
      code: `<div className="flex items-center gap-4">
  <StatusDot variant="success" label="Live" animated />
  <StatusDot variant="error" label="Recording" animated />
  <StatusDot variant="info" label="Processing" animated />
</div>`,
    },
  ],
};
