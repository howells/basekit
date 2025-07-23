import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "status-dot",
  name: "Status Dot",
  description: "A small dot indicator to show status or state.",
  category: "ui" as const,
  badge: "UI",
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
      options: ["default", "success", "warning", "error", "info"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "select",
      description: "Size of the status dot",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    {
      name: "pulse",
      type: "boolean",
      description: "Whether the dot should pulse",
      defaultValue: false,
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
  <div className="flex items-center gap-2">
    <StatusDot variant="success" />
    <span className="text-sm">Online</span>
  </div>
  <div className="flex items-center gap-2">
    <StatusDot variant="warning" />
    <span className="text-sm">Away</span>
  </div>
  <div className="flex items-center gap-2">
    <StatusDot variant="error" />
    <span className="text-sm">Busy</span>
  </div>
  <div className="flex items-center gap-2">
    <StatusDot variant="default" />
    <span className="text-sm">Offline</span>
  </div>
</div>`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Status dots in various sizes",
      code: `<div className="flex items-center gap-4">
  <StatusDot size="sm" variant="success" />
  <StatusDot size="md" variant="success" />
  <StatusDot size="lg" variant="success" />
</div>`,
    },
    {
      id: "pulsing",
      title: "Pulsing Status Dots",
      description: "Animated status indicators",
      code: `<div className="flex items-center gap-4">
  <div className="flex items-center gap-2">
    <StatusDot variant="success" pulse />
    <span className="text-sm">Live</span>
  </div>
  <div className="flex items-center gap-2">
    <StatusDot variant="error" pulse />
    <span className="text-sm">Recording</span>
  </div>
</div>`,
    },
  ],
};