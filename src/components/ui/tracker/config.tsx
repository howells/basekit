import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";
import { Tracker } from "./tracker";

export const componentConfig: ComponentConfig = {
  id: "tracker",
  name: "Tracker",
  description: "A visual progress tracker showing steps or stages in a process.",
  category: "utility" as const,

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Tracker } from "@/components/ui/tracker/tracker";`,
  componentId: "TrackerExample",
  props: [
    {
      name: "data",
      type: "string",
      defaultValue: "[]",
      description: "The tracker data array."
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "tracker",
      title: "Basic Tracker",
      description: "A visual progress tracker showing steps or stages in a process.",
      code: jsxToString(<Basic />)}
  ]
};
