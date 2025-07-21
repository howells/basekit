import { ComponentConfig } from "@/lib/component-config-types";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from "./toolbar";

export const componentConfig: ComponentConfig = {
  id: "toolbar",
  name: "Toolbar",
  description: "A container for grouping a set of controls or actions.",
  category: "ui",
  importStatement: 'import { Toolbar } from "@/components/ui/toolbar"',
  componentId: "Toolbar",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Toolbar",
      description: "A simple toolbar with buttons and separators",
      code: `<Toolbar>
  <ToolbarGroup>
    <ToolbarButton>Cut</ToolbarButton>
    <ToolbarButton>Copy</ToolbarButton>
    <ToolbarButton>Paste</ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarGroup>
    <ToolbarButton>Undo</ToolbarButton>
    <ToolbarButton>Redo</ToolbarButton>
  </ToolbarGroup>
</Toolbar>`,
    },
  ],
};
