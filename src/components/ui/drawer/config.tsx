import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "drawer",
  name: "Drawer",
  description: "A sliding panel that appears from the edge of the screen, typically used for navigation or additional content.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";`,
  componentId: "DrawerExample",
  props: [
    {
      name: "direction",
      type: "select", 
      options: ["left", "right", "top", "bottom"],
      defaultValue: "right",
      description: "Direction from which the drawer slides in.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic drawer sliding from the right.",
      code: `<Drawer>
  <DrawerTrigger>Open Drawer</DrawerTrigger>
  <DrawerContent>
    <div className="p-4">
      <h3>Drawer Content</h3>
      <p>This is the drawer content.</p>
    </div>
  </DrawerContent>
</Drawer>`,
    },
  ],
};