import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "switch",
  name: "Switch",
  description:
    "A control that allows the user to toggle between checked and unchecked states.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { Switch } from "@/components/ui/switch";`,
  componentId: "SwitchExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["default", "small"],
      defaultValue: "default",
      description: "The size of the switch.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the switch is disabled.",
    },
    {
      name: "checked",
      type: "boolean",
      defaultValue: false,
      description: "Whether the switch is checked.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      defaultValue: false,
      description: "The default checked state (uncontrolled).",
    },
    {
      name: "label",
      type: "text",
      defaultValue: "",
      description: "Optional label text displayed next to the switch.",
    },
    {
      name: "name",
      type: "text",
      defaultValue: "",
      description: "The name of the form control.",
    },
    {
      name: "value",
      type: "text",
      defaultValue: "",
      description: "The value of the form control.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: false,
      description: "Whether the switch is required in a form.",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: false,
      description: "Whether the switch is read-only.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic switch component.",
      code: `const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />`,
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Switch with a text label.",
      code: `const [notifications, setNotifications] = useState(true);

<Switch
  checked={notifications}
  onCheckedChange={setNotifications}
  label="Enable notifications"
/>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Switch in different sizes.",
      code: `const [defaultChecked, setDefaultChecked] = useState(true);
const [smallChecked, setSmallChecked] = useState(false);

<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch
      checked={defaultChecked}
      onCheckedChange={setDefaultChecked}
    />
    <span className="text-sm">Default size</span>
  </div>

  <div className="flex items-center space-x-2">
    <Switch
      size="small"
      checked={smallChecked}
      onCheckedChange={setSmallChecked}
    />
    <span className="text-sm">Small size</span>
  </div>
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Switch in disabled state.",
      code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch disabled checked={false} />
    <span className="text-sm text-zinc-600">Disabled (off)</span>
  </div>

  <div className="flex items-center space-x-2">
    <Switch disabled checked={true} />
    <span className="text-sm text-zinc-600">Disabled (on)</span>
  </div>
</div>`,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Fully controlled switch with external state management.",
      code: `const [isEnabled, setIsEnabled] = useState(false);

<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch
      checked={isEnabled}
      onCheckedChange={setIsEnabled}
    />
    <span className="text-sm">
      Status: {isEnabled ? "Enabled" : "Disabled"}
    </span>
  </div>

  <div className="flex gap-2">
    <Button
      size="sm"
      variant="outline"
      onClick={() => setIsEnabled(true)}
    >
      Turn On
    </Button>
    <Button
      size="sm"
      variant="outline"
      onClick={() => setIsEnabled(false)}
    >
      Turn Off
    </Button>
  </div>
</div>`,
    },
    {
      id: "form-example",
      title: "Form Example",
      description: "Switch used within a form context.",
      code: `const [settings, setSettings] = useState({
  notifications: true,
  autoSave: false,
  darkMode: true,
});

<div className="space-y-4 max-w-sm">
  <div className="flex items-center justify-between">
    <label className="text-sm font-medium">
      Push Notifications
    </label>
    <Switch
      checked={settings.notifications}
      onCheckedChange={(checked) =>
        setSettings(prev => ({ ...prev, notifications: checked }))
      }
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm font-medium">
      Auto Save
    </label>
    <Switch
      checked={settings.autoSave}
      onCheckedChange={(checked) =>
        setSettings(prev => ({ ...prev, autoSave: checked }))
      }
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm font-medium">
      Dark Mode
    </label>
    <Switch
      checked={settings.darkMode}
      onCheckedChange={(checked) =>
        setSettings(prev => ({ ...prev, darkMode: checked }))
      }
    />
  </div>
</div>`,
    },
  ],
};
