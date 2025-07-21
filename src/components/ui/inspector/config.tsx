import { ComponentConfig } from "@/lib/component-config-types";
import { Inspector } from "./inspector";

export const componentConfig: ComponentConfig = {
  id: "inspector",
  name: "Inspector",
  description:
    "A component for inspecting and debugging component properties and state.",
  category: "ui",
  importStatement: 'import { Inspector } from "@/components/ui/inspector"',
  componentId: "Inspector",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Inspector",
      description: "A simple inspector for debugging",
      code: `<Inspector data={{ name: "John", age: 30 }} />`,
    },
    {
      id: "nested",
      title: "Nested Data Inspector",
      description: "Inspector with nested object data",
      code: `<Inspector data={{
  user: { name: "John", age: 30 },
  settings: { theme: "dark", notifications: true }
}} />`,
    },
  ],
};
