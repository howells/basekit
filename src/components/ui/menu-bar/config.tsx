import { ComponentConfig } from "@/lib/component-config-types";
import {
  MenuBar,
  MenuBarContent,
  MenuBarItem,
  MenuBarMenu,
  MenuBarTrigger,
} from "./menu-bar";

export const componentConfig: ComponentConfig = {
  id: "menu-bar",
  name: "MenuBar",
  description: "A horizontal menu bar containing multiple dropdown menus.",
  category: "ui",
  importStatement: 'import { MenuBar } from "@/components/ui/menu-bar"',
  componentId: "MenuBar",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Menu Bar",
      description: "A simple menu bar with dropdown menus",
      code: `<MenuBar>
  <MenuBarMenu>
    <MenuBarTrigger>File</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>New</MenuBarItem>
      <MenuBarItem>Open</MenuBarItem>
      <MenuBarItem>Save</MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
  <MenuBarMenu>
    <MenuBarTrigger>Edit</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>Cut</MenuBarItem>
      <MenuBarItem>Copy</MenuBarItem>
      <MenuBarItem>Paste</MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
</MenuBar>`,
    },
    {
      id: "with-icons",
      title: "Menu Bar with Icons",
      description: "Menu bar with icons in menu items",
      code: `<MenuBar>
  <MenuBarMenu>
    <MenuBarTrigger>Actions</MenuBarTrigger>
    <MenuBarContent>
      <MenuBarItem>
        <Icon name="plus" />
        New Item
      </MenuBarItem>
      <MenuBarItem>
        <Icon name="edit" />
        Edit Item
      </MenuBarItem>
      <MenuBarItem>
        <Icon name="trash" />
        Delete Item
      </MenuBarItem>
    </MenuBarContent>
  </MenuBarMenu>
</MenuBar>`,
    },
  ],
};
