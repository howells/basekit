import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "meter",
  name: "Meter",
  description: "A meter component built on Base UI for displaying progress or measurements with customizable styling and value formatting.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Meter } from "@/components/ui/meter";`,
  componentId: "MeterExample",
  props: [
    {
      name: "value",
      type: "number",
      defaultValue: 65,
      description: "The current value of the meter.",
      required: true,
    },
    {
      name: "min",
      type: "number",
      defaultValue: 0,
      description: "The minimum value of the meter.",
    },
    {
      name: "max",
      type: "number",
      defaultValue: 100,
      description: "The maximum value of the meter.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "neutral", "warning", "error", "success"],
      defaultValue: "default",
      description: "The visual style variant of the meter.",
    },
    {
      name: "showAnimation",
      type: "boolean",
      defaultValue: true,
      description: "Whether to animate the meter indicator.",
    },
    {
      name: "showValue",
      type: "boolean", 
      defaultValue: true,
      description: "Whether to display the value.",
    },
    {
      name: "label",
      type: "string",
      description: "Optional label for the meter.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic meter with default styling.",
      code: `<Meter value={65} />`,
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Meter with a descriptive label.",
      code: `<Meter value={75} label="Progress" />`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different color variants for different states.",
      code: `<div className="space-y-4">
  <Meter value={65} variant="default" label="Default" />
  <Meter value={45} variant="neutral" label="Neutral" />
  <Meter value={85} variant="success" label="Success" />
  <Meter value={90} variant="warning" label="Warning" />
  <Meter value={95} variant="error" label="Error" />
</div>`,
    },
    {
      id: "custom-range",
      title: "Custom Range",
      description: "Meter with custom min and max values.",
      code: `<Meter value={750} min={0} max={1000} label="Storage Used (MB)" />`,
    },
    {
      id: "no-animation",
      title: "Without Animation",
      description: "Meter without animation for static displays.",
      code: `<Meter value={40} showAnimation={false} label="Static Progress" />`,
    },
    {
      id: "value-only",
      title: "Value Only",
      description: "Meter without label, showing only the value.",
      code: `<Meter value={80} showValue={true} />`,
    },
  ],
};