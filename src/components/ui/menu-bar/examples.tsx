import React from "react";
import {
  MenuBar,
  MenuBarContent,
  MenuBarItem,
  MenuBarMenu,
  MenuBarTrigger,
} from "@/components/ui/menu-bar";
import { Plus, Edit, Trash } from "lucide-react";

export function BasicMenuBarExample() {
  return (
    <MenuBar>
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
    </MenuBar>
  );
}

export function WithIconsExample() {
  return (
    <MenuBar>
      <MenuBarMenu>
        <MenuBarTrigger>Actions</MenuBarTrigger>
        <MenuBarContent>
          <MenuBarItem>
            <Plus className="size-4 mr-2" />
            New Item
          </MenuBarItem>
          <MenuBarItem>
            <Edit className="size-4 mr-2" />
            Edit Item
          </MenuBarItem>
          <MenuBarItem>
            <Trash className="size-4 mr-2" />
            Delete Item
          </MenuBarItem>
        </MenuBarContent>
      </MenuBarMenu>
    </MenuBar>
  );
}