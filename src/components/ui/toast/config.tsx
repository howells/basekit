import { ComponentConfig } from "@/lib/component-config-types";
import { Toast } from "./toast";

export const componentConfig: ComponentConfig = {
  id: "toast",
  name: "Toast",
  description:
    "A toast notification component for displaying brief messages to users.",
  category: "ui",
  importStatement: 'import { Toast } from "@/components/ui/toast"',
  componentId: "Toast",
  props: [
    {
      name: "variant",
      type: '"default" | "destructive"',
      defaultValue: "default",
      description: "The visual variant of the toast",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Toast",
      description: "A simple toast notification",
      code: `<Toast.Provider>
  <Toast>
    <div className="flex items-center gap-2">
      <div className="text-sm font-medium">Success!</div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Your changes have been saved.
      </div>
    </div>
  </Toast>
  <Toast.Viewport />
</Toast.Provider>`,
    },
  ],
};
