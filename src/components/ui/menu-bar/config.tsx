import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "menu-bar",
  name: "Menu Bar",
  description: "A horizontal menu bar containing multiple dropdown menus.",
  category: "navigation" as const,
  icon: "Menu",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  MenuBar,
  MenuBarContent,
  MenuBarItem,
  MenuBarMenu,
  MenuBarTrigger
} from "@/components/ui/menu-bar/menu-bar";`,
  componentId: "MenuBarExample",
  props: [],
  examples: [
    {
      id: "default",
      title: "Basic Menu Bar",
      description: "A horizontal menu bar containing multiple dropdown menus.",
      code: `<MenuBar>
  <MenuBarMenu>
    <MenuBarTrigger>File</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>New File</MenuBarItem>
      <MenuBarItem>Open...</MenuBarItem>
      <MenuBarItem>Save</MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
  <MenuBarMenu>
    <MenuBarTrigger>Edit</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>Undo</MenuBarItem>
      <MenuBarItem>Redo</MenuBarItem>
      <MenuBarItem>Cut</MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
</MenuBar>`
    },
    {
      id: "with-icons",
      title: "Menu Bar with Icons",
      description: "Menu bar with icons in menu items",
      code: `<MenuBar>
  <MenuBarMenu>
    <MenuBarTrigger>File</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>
        <FileText className="mr-2 h-4 w-4" />
        New File
      </MenuBarItem>
      <MenuBarItem>
        <FolderOpen className="mr-2 h-4 w-4" />
        Open...
      </MenuBarItem>
      <MenuBarItem>
        <Save className="mr-2 h-4 w-4" />
        Save
      </MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
</MenuBar>`
    },
  ]
};