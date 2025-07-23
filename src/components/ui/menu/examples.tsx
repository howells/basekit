"use client";

import React, { useState } from "react";
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSubmenuContent,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Clipboard } from "lucide-react";

export function DefaultMenuExample() {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>Open Menu</MenuTrigger>
      <MenuContent>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open File</MenuItem>
        <MenuItem>Save File</MenuItem>
        <MenuSeparator />
        <MenuItem>Exit</MenuItem>
      </MenuContent>
    </Menu>
  );
}

export function WithIconsExample() {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>Edit Menu</MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Plus className="mr-2 size-4" />
          New
          <span className="ml-auto text-xs">⌘N</span>
        </MenuItem>
        <MenuItem>
          <Copy className="mr-2 size-4" />
          Copy
          <span className="ml-auto text-xs">⌘C</span>
        </MenuItem>
        <MenuItem>
          <Clipboard className="mr-2 size-4" />
          Paste
          <span className="ml-auto text-xs">⌘V</span>
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}

export function WithCheckboxesExample() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showToolbar, setShowToolbar] = useState(false);

  return (
    <Menu>
      <MenuTrigger render={<Button />}>View Options</MenuTrigger>
      <MenuContent>
        <MenuLabel>Show/Hide</MenuLabel>
        <MenuCheckboxItem
          checked={showSidebar}
          onCheckedChange={setShowSidebar}
        >
          Sidebar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showToolbar}
          onCheckedChange={setShowToolbar}
        >
          Toolbar
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuItem>Reset Layout</MenuItem>
      </MenuContent>
    </Menu>
  );
}

export function WithRadioGroupExample() {
  const [theme, setTheme] = useState("light");

  return (
    <Menu>
      <MenuTrigger render={<Button />}>Theme</MenuTrigger>
      <MenuContent>
        <MenuLabel>Theme</MenuLabel>
        <MenuRadioGroup value={theme} onValueChange={setTheme}>
          <MenuRadioItem value="light">Light</MenuRadioItem>
          <MenuRadioItem value="dark">Dark</MenuRadioItem>
          <MenuRadioItem value="system">System</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}

export function WithSubmenuExample() {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>File Menu</MenuTrigger>
      <MenuContent>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open File</MenuItem>
        <MenuSeparator />

        <MenuSubmenu>
          <MenuSubmenuTrigger>Recent Files</MenuSubmenuTrigger>
          <MenuSubmenuContent>
            <MenuItem>document1.txt</MenuItem>
            <MenuItem>document2.txt</MenuItem>
            <MenuItem>document3.txt</MenuItem>
            <MenuSeparator />
            <MenuItem>Clear Recent</MenuItem>
          </MenuSubmenuContent>
        </MenuSubmenu>

        <MenuSubmenu>
          <MenuSubmenuTrigger>Export As</MenuSubmenuTrigger>
          <MenuSubmenuContent>
            <MenuItem>PDF</MenuItem>
            <MenuItem>Word Document</MenuItem>
            <MenuItem>Plain Text</MenuItem>
            <MenuItem>Markdown</MenuItem>
          </MenuSubmenuContent>
        </MenuSubmenu>

        <MenuSeparator />
        <MenuItem>Exit</MenuItem>
      </MenuContent>
    </Menu>
  );
}

export function ComplexMenuExample() {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [language, setLanguage] = useState("english");

  return (
    <Menu>
      <MenuTrigger render={<Button />}>Settings</MenuTrigger>
      <MenuContent className="w-56">
        <MenuLabel>Preferences</MenuLabel>

        <MenuCheckboxItem
          checked={notifications}
          onCheckedChange={setNotifications}
        >
          Enable Notifications
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={autoSave} onCheckedChange={setAutoSave}>
          Auto Save
        </MenuCheckboxItem>

        <MenuSeparator />

        <MenuLabel>Language</MenuLabel>
        <MenuRadioGroup value={language} onValueChange={setLanguage}>
          <MenuRadioItem value="english">English</MenuRadioItem>
          <MenuRadioItem value="spanish">Español</MenuRadioItem>
          <MenuRadioItem value="french">Français</MenuRadioItem>
        </MenuRadioGroup>

        <MenuSeparator />

        <MenuSubmenu>
          <MenuSubmenuTrigger>Advanced</MenuSubmenuTrigger>
          <MenuSubmenuContent>
            <MenuItem>Developer Tools</MenuItem>
            <MenuItem>Reset Settings</MenuItem>
            <MenuSeparator />
            <MenuItem>Export Config</MenuItem>
            <MenuItem>Import Config</MenuItem>
          </MenuSubmenuContent>
        </MenuSubmenu>

        <MenuSeparator />
        <MenuItem>About</MenuItem>
      </MenuContent>
    </Menu>
  );
}