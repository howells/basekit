import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { BasicProgress,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "progress",
  name: "Progress",
  description: "A progress bar component showing completion status.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Progress } from "@/components/ui/progress/progress";`,
  componentId: "ProgressExample",
  props: [
    {
      name: "value",
      type: "number",
      defaultValue: 50,
      description: "The progress value (0-100).",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "success", "warning", "error"],
      defaultValue: "default",
      description: "The visual style variant.",
    },
    {
      name: "showAnimation",
      type: "boolean",
      defaultValue: true,
      description: "Show animation on progress change.",
    },
    {
      name: "showValue",
      type: "boolean",
      defaultValue: false,
      description: "Show the progress value as text.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes.",
    },
  ],
  examples: [
    {
      id: "progress",
      title: "Basic Progress",
      description: "A progress bar component showing completion status.",
      code: jsxToString(<BasicProgress />),
      render: BasicProgress,
    },
  ],
};