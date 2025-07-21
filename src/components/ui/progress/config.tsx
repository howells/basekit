import { ComponentConfig } from "@/lib/component-config-types";
import { Progress } from "./progress";

export const componentConfig: ComponentConfig = {
  id: "progress",
  name: "Progress",
  description: "A progress bar component showing completion status.",
  category: "ui",
  importStatement: 'import { Progress } from "@/components/ui/progress"',
  componentId: "Progress",
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
      title: "Basic Progress",
      description: "Simple progress bars with different values",
      code: `<div className="space-y-2">
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`,
    },
  ],
};
