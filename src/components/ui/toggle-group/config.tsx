import { ComponentConfig } from "@/lib/component-config-types";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export const componentConfig: ComponentConfig = {
  id: "toggle-group",
  name: "ToggleGroup",
  description: "A group of toggle buttons where one or more can be selected.",
  category: "ui",
  importStatement: 'import { ToggleGroup } from "@/components/ui/toggle-group"',
  componentId: "ToggleGroup",
  props: [
    {
      name: "type",
      type: '"single" | "multiple"',
      defaultValue: "single",
      description: "Whether single or multiple items can be selected",
    },
  ],
  examples: [
    {
      id: "single",
      title: "Single Selection",
      description: "Toggle group with single selection",
      code: `<ToggleGroup type="single" defaultValue={["center"]}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`,
    },
    {
      id: "multiple",
      title: "Multiple Selection",
      description: "Toggle group with multiple selection",
      code: `<ToggleGroup type="multiple" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>`,
    },
  ],
};
