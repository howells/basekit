import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "progress-circle",
  name: "Progress Circle",
  description: "A circular progress indicator showing completion percentage.",
  category: "ui" as const,
  icon: "Loader",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { ProgressCircle } from "@/components/ui/progress-circle/progress-circle";`,
  componentId: "ProgressCircleExample",
  props: [
    {
      name: "value",
      type: "number",
      description: "The progress value (0-100)",
      defaultValue: 50
    },
    {
      name: "size",
      type: "select",
      description: "Size of the progress circle",
      options: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "showLabel",
      type: "boolean",
      description: "Whether to show the percentage label",
      defaultValue: false
    },
    {
      name: "indeterminate",
      type: "boolean",
      description: "Whether the progress is indeterminate",
      defaultValue: false
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Progress Circle",
      description: "A circular progress indicator showing completion percentage.",
      code: `<ProgressCircle value={75} />`
    },
    {
      id: "small",
      title: "Small Progress Circle",
      description: "A smaller circular progress indicator",
      code: `<ProgressCircle value={60} size="sm" />`
    },
    {
      id: "large",
      title: "Large Progress Circle",
      description: "A larger circular progress indicator",
      code: `<ProgressCircle value={90} size="lg" />`
    },
    {
      id: "with-label",
      title: "Progress Circle with Label",
      description: "Circular progress with text label",
      code: `<ProgressCircle value={45} showLabel />`
    },
    {
      id: "indeterminate",
      title: "Indeterminate Progress Circle",
      description: "Circular progress in loading state",
      code: `<ProgressCircle indeterminate />`
    },
  ]
};