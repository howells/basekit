import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { Basic  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "tab-navigation",
  name: "Tab Navigation",
  description: "A navigation component for switching between different views or sections.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { TabNavigation, TabNavigationLink } from "@/components/ui/tab-navigation/tab-navigation";`,
  componentId: "TabNavigationExample",
  props: [
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "tab-navigation",
      title: "Basic Tab Navigation",
      description: "A navigation component for switching between different views or sections.",
      code: jsxToString(<Basic />)}
  ]
};