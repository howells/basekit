import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "meter",
  name: "Meter",
  description: "A meter component built on Base UI for displaying progress or measurements with customizable styling and value formatting.",
  category: "feedback" as const,
  icon: "Gauge",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Meter } from "@/components/ui/meter/meter";`,
  componentId: "MeterExample",
  props: [
    {
      name: "value",
      type: "number",
      description: "The current value of the meter",
      defaultValue: 50
    },
    {
      name: "min",
      type: "number",
      description: "The minimum value of the meter",
      defaultValue: 0
    },
    {
      name: "max",
      type: "number",
      description: "The maximum value of the meter",
      defaultValue: 100
    },
    {
      name: "label",
      type: "string",
      description: "Label for the meter",
      defaultValue: "Progress"
    },
    {
      name: "showValue",
      type: "boolean",
      description: "Whether to show the value text",
      defaultValue: true
    },
    {
      name: "variant",
      type: "select",
      description: "Visual variant of the meter",
      options: ["default", "success", "warning", "danger"],
      defaultValue: "default"
    },
    {
      name: "animate",
      type: "boolean",
      description: "Whether to animate the meter",
      defaultValue: true
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "A meter component built on Base UI for displaying progress or measurements with customizable styling and value formatting.",
      code: `<Meter value={50} />`
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Meter with a descriptive label.",
      code: `<Meter value={75} label="Storage Used" />`
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different color variants for different states.",
      code: `<div className="space-y-4">
  <Meter value={90} variant="danger" label="CPU Usage" />
  <Meter value={65} variant="warning" label="Memory" />
  <Meter value={30} variant="success" label="Disk Space" />
</div>`
    },
    {
      id: "custom-range",
      title: "Custom Range",
      description: "Meter with custom min and max values.",
      code: `<Meter value={250} min={0} max={500} label="Score" />`
    },
    {
      id: "no-animation",
      title: "Without Animation",
      description: "Meter without animation for static displays.",
      code: `<Meter value={60} animate={false} />`
    },
    {
      id: "value-only",
      title: "Value Only",
      description: "Meter without label, showing only the value.",
      code: `<Meter value={80} label="" />`
    },
  ]
};