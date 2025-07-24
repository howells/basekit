import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultMenuExample, WithIconsExample, WithCheckboxesExample, WithRadioGroupExample, WithSubmenuExample, ComplexMenuExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "menu",
  name: "Menu",
  description: "Dropdown menu component built on Base UI with support for nested submenus, radio groups, checkboxes, and keyboard navigation.",
  category: "overlay" as const,
  icon: "Menu",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger
} from "@/components/ui/menu/menu";`,
  componentId: "MenuExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: "Menu",
      description: "The trigger button content."
    },
    {
      name: "align",
      type: "select",
      options: ["start", "center", "end"],
      defaultValue: "start",
      description: "Menu alignment relative to trigger."
    },
    {
      name: "sideOffset",
      type: "number",
      defaultValue: 5,
      description: "Distance in pixels from the trigger."
    }
  ],
  examples: [
    {
      id: "menu",
      title: "Default",
      description: "Dropdown menu component built on Base UI with support for nested submenus, radio groups, checkboxes, and keyboard navigation.",
      code: jsxToString(<DefaultMenuExample />)},
    {
      id: "with-icons",
      title: "With Icons",
      description: "Menu items with icons and shortcuts.",
      code: jsxToString(<WithIconsExample />)},
    {
      id: "with-checkboxes",
      title: "With Checkboxes",
      description: "Menu with checkbox items for toggleable options.",
      code: `const [showSidebar, setShowSidebar] = useState(true);
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
);`},
    {
      id: "with-radio-group",
      title: "With Radio Group",
      description: "Menu with radio group for selecting one option.",
      code: `const [theme, setTheme] = useState("light");

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
);`},
    {
      id: "with-submenu",
      title: "With Submenu",
      description: "Menu with nested submenu items.",
      code: jsxToString(<WithSubmenuExample />)},
    {
      id: "complex-menu",
      title: "Complex Menu",
      description: "Full-featured menu with all component types.",
      code: `const [notifications, setNotifications] = useState(true);
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
);`}
  ]
};