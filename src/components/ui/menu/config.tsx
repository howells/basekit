import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "menu",
  name: "Menu",
  description: "Dropdown menu component built on Base UI with support for nested submenus, radio groups, checkboxes, and keyboard navigation.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { 
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
  MenuIconWrapper
} from "@/components/ui/menu";`,
  componentId: "MenuExample",
  props: [
    {
      name: "sideOffset",
      type: "number",
      defaultValue: 8,
      description: "Distance in pixels from the trigger.",
    },
    {
      name: "align",
      type: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
      description: "Alignment of the menu relative to the trigger.",
    },
    {
      name: "collisionPadding",
      type: "number",
      defaultValue: 8,
      description: "Padding to prevent menu from touching viewport edge.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic menu with items and separators.",
      code: `<Menu>
  <MenuTrigger asChild>
    <Button>Open Menu</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem>New File</MenuItem>
    <MenuItem>Open File</MenuItem>
    <MenuItem>Save File</MenuItem>
    <MenuSeparator />
    <MenuItem>Exit</MenuItem>
  </MenuContent>
</Menu>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Menu items with icons and shortcuts.",
      code: `<Menu>
  <MenuTrigger asChild>
    <Button>Edit Menu</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem>
      <MenuIconWrapper>
        <PlusIcon className="size-4" />
      </MenuIconWrapper>
      New
      <span className="ml-auto text-xs">⌘N</span>
    </MenuItem>
    <MenuItem>
      <MenuIconWrapper>
        <CopyIcon className="size-4" />
      </MenuIconWrapper>
      Copy
      <span className="ml-auto text-xs">⌘C</span>
    </MenuItem>
    <MenuItem>
      <MenuIconWrapper>
        <PasteIcon className="size-4" />
      </MenuIconWrapper>
      Paste
      <span className="ml-auto text-xs">⌘V</span>
    </MenuItem>
  </MenuContent>
</Menu>`,
    },
    {
      id: "with-checkboxes",
      title: "With Checkboxes",
      description: "Menu with checkbox items for toggleable options.",
      code: `const [showSidebar, setShowSidebar] = useState(true);
const [showToolbar, setShowToolbar] = useState(false);

<Menu>
  <MenuTrigger asChild>
    <Button>View Options</Button>
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
</Menu>`,
    },
    {
      id: "with-radio-group",
      title: "With Radio Group",
      description: "Menu with radio group for selecting one option.",
      code: `const [theme, setTheme] = useState("light");

<Menu>
  <MenuTrigger asChild>
    <Button>Theme</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuLabel>Theme</MenuLabel>
    <MenuRadioGroup value={theme} onValueChange={setTheme}>
      <MenuRadioItem value="light">
        Light
      </MenuRadioItem>
      <MenuRadioItem value="dark">
        Dark
      </MenuRadioItem>
      <MenuRadioItem value="system">
        System
      </MenuRadioItem>
    </MenuRadioGroup>
  </MenuContent>
</Menu>`,
    },
    {
      id: "with-submenu",
      title: "With Submenu",
      description: "Menu with nested submenu items.",
      code: `<Menu>
  <MenuTrigger asChild>
    <Button>File Menu</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem>New File</MenuItem>
    <MenuItem>Open File</MenuItem>
    <MenuSeparator />
    
    <MenuSubmenu>
      <MenuSubmenuTrigger>
        Recent Files
      </MenuSubmenuTrigger>
      <MenuSubmenuContent>
        <MenuItem>document1.txt</MenuItem>
        <MenuItem>document2.txt</MenuItem>
        <MenuItem>document3.txt</MenuItem>
        <MenuSeparator />
        <MenuItem>Clear Recent</MenuItem>
      </MenuSubmenuContent>
    </MenuSubmenu>
    
    <MenuSubmenu>
      <MenuSubmenuTrigger>
        Export As
      </MenuSubmenuTrigger>
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
</Menu>`,
    },
    {
      id: "complex-menu",
      title: "Complex Menu",
      description: "Full-featured menu with all component types.",
      code: `const [notifications, setNotifications] = useState(true);
const [autoSave, setAutoSave] = useState(false);
const [language, setLanguage] = useState("english");

<Menu>
  <MenuTrigger asChild>
    <Button>Settings</Button>
  </MenuTrigger>
  <MenuContent className="w-56">
    <MenuLabel>Preferences</MenuLabel>
    
    <MenuCheckboxItem 
      checked={notifications}
      onCheckedChange={setNotifications}
    >
      Enable Notifications
    </MenuCheckboxItem>
    <MenuCheckboxItem 
      checked={autoSave}
      onCheckedChange={setAutoSave}
    >
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
</Menu>`,
    },
  ],
};