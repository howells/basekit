import { ComponentConfig } from "@/lib/component-config-types";
import { Tracker } from "./tracker";

export const componentConfig: ComponentConfig = {
  id: "tracker",
  name: "Tracker",
  description:
    "A visual progress tracker showing steps or stages in a process.",
  category: "ui",
  importStatement: 'import { Tracker } from "@/components/ui/tracker"',
  componentId: "Tracker",
  props: [
    {
      name: "data",
      type: "array",
      defaultValue: [],
      description: "Array of tracker data items",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Tracker",
      description: "A simple progress tracker",
      code: `<Tracker data={[
  { label: "Step 1", status: "completed" },
  { label: "Step 2", status: "current" },
  { label: "Step 3", status: "pending" }
]} />`,
    },
  ],
};
