import { ComponentConfig } from "@/lib/component-config-types";
import { Tabs, TabsList, TabsPanel, TabsTab } from "./tabs";

export const componentConfig: ComponentConfig = {
  id: "tabs",
  name: "Tabs",
  description:
    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  category: "ui",
  importStatement: 'import { Tabs } from "@/components/ui/tabs"',
  componentId: "Tabs",
  props: [
    {
      name: "defaultValue",
      type: "string",
      defaultValue: "tab1",
      description: "The default active tab",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Tabs",
      description: "Simple tabs with content panels",
      code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTab value="tab1">Tab 1</TabsTab>
    <TabsTab value="tab2">Tab 2</TabsTab>
    <TabsTab value="tab3">Tab 3</TabsTab>
  </TabsList>
  <TabsPanel value="tab1">
    <p>Content for Tab 1</p>
  </TabsPanel>
  <TabsPanel value="tab2">
    <p>Content for Tab 2</p>
  </TabsPanel>
  <TabsPanel value="tab3">
    <p>Content for Tab 3</p>
  </TabsPanel>
</Tabs>`,
    },
  ],
};
