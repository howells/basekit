import { ComponentConfig } from "@/lib/component-config-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export const componentConfig: ComponentConfig = {
  id: "tabs",
  name: "Tabs",
  description:
    "A set of layered sections of content—known as tab panels—that are displayed one at a time. Features Geist-style design with clean line indicators.",
  category: "ui",
  importStatement:
    'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"',
  componentId: "TabsExample",
  props: [
    {
      name: "defaultValue",
      type: "string",
      defaultValue: "overview",
      description: "The default active tab value",
      required: false,
    },
    {
      name: "variant",
      type: "select",
      options: [
        {
          value: "line",
          label: "Line (Default)",
          description:
            "Clean Geist-style design with bottom divider and line indicator",
        },
        {
          value: "solid",
          label: "Solid",
          description:
            "Traditional style with background and rounded indicator",
        },
      ],
      defaultValue: "line",
      description: "The visual style variant of the tabs",
      required: false,
    },
    {
      name: "hideDivider",
      type: "boolean",
      defaultValue: false,
      description: "Hide the bottom divider line (Line variant only)",
      required: false,
    },
    {
      name: "hideBorder",
      type: "boolean",
      defaultValue: false,
      description: "Hide the active tab indicator",
      required: false,
    },
  ],
  examples: [
    {
      id: "line",
      title: "Line Style (Default)",
      description:
        "Clean Geist-style tabs with bottom divider and line indicator",
      code: `<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Reports content goes here</p>
  </TabsContent>
</Tabs>`,
    },
    {
      id: "line-no-divider",
      title: "Line Without Divider",
      description: "Clean tabs without the bottom divider line",
      code: `<Tabs defaultValue="tab1">
  <TabsList variant="line" hideDivider={true}>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Reports content goes here</p>
  </TabsContent>
</Tabs>`,
    },
    {
      id: "solid",
      title: "Solid Variant",
      description:
        "Traditional tabs with solid background and rounded indicator",
      code: `<Tabs defaultValue="tab1">
  <TabsList variant="solid">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>`,
    },
  ],
};
