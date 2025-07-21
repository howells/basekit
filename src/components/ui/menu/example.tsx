"use client";

import { Button } from "@/components/ui/button";
import { Copy, Eye, FileText, Plus, Settings } from "lucide-react";
import { useState } from "react";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuIconWrapper,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuContent,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "./menu";

interface MenuExampleProps {
  sideOffset?: number;
  align?: "start" | "center" | "end";
  collisionPadding?: number;
}

export function MenuExample({
  sideOffset = 8,
  align = "center",
  collisionPadding = 8,
}: MenuExampleProps) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showToolbar, setShowToolbar] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  return (
    <div className="space-y-8">
      {/* Basic menu */}
      <div className="flex justify-center">
        <Menu>
          <MenuTrigger asChild>
            <Button>Open Menu</Button>
          </MenuTrigger>
          <MenuContent
            sideOffset={sideOffset}
            align={align}
            collisionPadding={collisionPadding}
          >
            <MenuItem>New File</MenuItem>
            <MenuItem>Open File</MenuItem>
            <MenuItem>Save File</MenuItem>
            <MenuSeparator />
            <MenuItem>Exit</MenuItem>
          </MenuContent>
        </Menu>
      </div>

      {/* Menu with icons and shortcuts */}
      <div className="flex justify-center gap-4">
        <Menu>
          <MenuTrigger asChild>
            <Button size="sm">Edit Menu</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <MenuIconWrapper>
                <Plus className="size-4" />
              </MenuIconWrapper>
              New
              <span className="ml-auto text-xs text-zinc-400">⌘N</span>
            </MenuItem>
            <MenuItem>
              <MenuIconWrapper>
                <Copy className="size-4" />
              </MenuIconWrapper>
              Copy
              <span className="ml-auto text-xs text-zinc-400">⌘C</span>
            </MenuItem>
            <MenuItem>
              <MenuIconWrapper>
                <FileText className="size-4" />
              </MenuIconWrapper>
              Paste
              <span className="ml-auto text-xs text-zinc-400">⌘V</span>
            </MenuItem>
          </MenuContent>
        </Menu>

        {/* Menu with checkboxes */}
        <Menu>
          <MenuTrigger asChild>
            <Button size="sm" variant="outline">
              <Eye className="size-4 mr-2" />
              View Options
            </Button>
          </MenuTrigger>
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
      </div>

      {/* Menu with radio group */}
      <div className="flex justify-center">
        <Menu>
          <MenuTrigger asChild>
            <Button variant="secondary">Theme: {theme}</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuLabel>Theme</MenuLabel>
            <MenuRadioGroup value={theme} onValueChange={setTheme}>
              <MenuRadioItem value="light">Light</MenuRadioItem>
              <MenuRadioItem value="dark">Dark</MenuRadioItem>
              <MenuRadioItem value="system">System</MenuRadioItem>
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </div>

      {/* Menu with submenu */}
      <div className="flex justify-center">
        <Menu>
          <MenuTrigger asChild>
            <Button>File Menu</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <MenuIconWrapper>
                <Plus className="size-4" />
              </MenuIconWrapper>
              New File
            </MenuItem>
            <MenuItem>
              <MenuIconWrapper>
                <FileText className="size-4" />
              </MenuIconWrapper>
              Open File
            </MenuItem>
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
      </div>

      {/* Complex menu with all features */}
      <div className="flex justify-center">
        <Menu>
          <MenuTrigger asChild>
            <Button>
              <Settings className="size-4 mr-2" />
              Settings
            </Button>
          </MenuTrigger>
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
      </div>
    </div>
  );
}
