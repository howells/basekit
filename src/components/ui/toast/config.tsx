import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "toast",
  name: "Toast",
  description: "A toast notification component for displaying brief messages to users.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Toast, Toaster, toast } from "@/components/ui/toast/toast";`,
  componentId: "ToastExample",
  props: [
    {
      name: "title",
      type: "string",
      defaultValue: "Notification",
      description: "The toast title."
    },
    {
      name: "description",
      type: "string",
      description: "The toast message content."
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "success", "error", "warning"],
      defaultValue: "default",
      description: "The visual style variant."
    },
    {
      name: "duration",
      type: "number",
      defaultValue: 5000,
      description: "How long to show the toast (in milliseconds)."
    }
  ],
  examples: [
    {
      id: "toast",
      title: "Basic Toast",
      description: "A toast notification component for displaying brief messages to users.",
      code: jsxToString(<Basic />)}
  ]
};