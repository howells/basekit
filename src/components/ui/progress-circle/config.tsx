import { ComponentConfig } from "@/lib/component-config-types";
import { ProgressCircle } from "./progress-circle";

export const componentConfig: ComponentConfig = {
  id: "progress-circle",
  name: "ProgressCircle",
  description: "A circular progress indicator showing completion percentage.",
  category: "ui",
  importStatement:
    'import { ProgressCircle } from "@/components/ui/progress-circle"',
  componentId: "ProgressCircle",
  props: [
    {
      name: "value",
      type: "number",
      defaultValue: 50,
      description: "The progress value as a percentage (0-100)",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Progress Circle",
      description: "A simple circular progress indicator",
      code: `<ProgressCircle value={75} />`,
    },
    {
      id: "small",
      title: "Small Progress Circle",
      description: "A smaller circular progress indicator",
      code: `<ProgressCircle value={60} size="sm" />`,
    },
    {
      id: "large",
      title: "Large Progress Circle",
      description: "A larger circular progress indicator",
      code: `<ProgressCircle value={85} size="lg" />`,
    },
    {
      id: "with-label",
      title: "Progress Circle with Label",
      description: "Circular progress with text label",
      code: `<ProgressCircle value={90} showValue />`,
    },
    {
      id: "indeterminate",
      title: "Indeterminate Progress Circle",
      description: "Circular progress in loading state",
      code: `<ProgressCircle value={null} />`,
    },
  ],
};
