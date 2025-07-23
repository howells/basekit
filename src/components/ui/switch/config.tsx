import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "switch",
  name: "Switch",
  description: "A control that allows the user to toggle between checked and not checked.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Switch } from "@/components/ui/switch/switch";`,
  componentId: "SwitchExample",
  props: [
    {
      name: "checked",
      type: "boolean",
      description: "Whether the switch is checked",
      defaultValue: false,
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the switch is disabled",
      defaultValue: false,
    },
    {
      name: "size",
      type: "select",
      description: "Size of the switch",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Switch",
      description: "A simple toggle switch",
      code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode">Airplane Mode</label>
</div>`,
    },
    {
      id: "checked",
      title: "Checked by Default",
      description: "Switch that starts in the on position",
      code: `<div className="flex items-center space-x-2">
  <Switch id="notifications" defaultChecked />
  <label htmlFor="notifications">Enable notifications</label>
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled States",
      description: "Switches in disabled state",
      code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <label htmlFor="disabled-off" className="text-gray-500">
      Disabled (off)
    </label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" defaultChecked disabled />
    <label htmlFor="disabled-on" className="text-gray-500">
      Disabled (on)
    </label>
  </div>
</div>`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Switches in various sizes",
      code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="small" size="sm" />
    <label htmlFor="small">Small switch</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="medium" size="md" />
    <label htmlFor="medium">Medium switch</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="large" size="lg" />
    <label htmlFor="large">Large switch</label>
  </div>
</div>`,
    },
    {
      id: "form",
      title: "In a Form",
      description: "Switch used within a form context",
      code: `<form className="space-y-4">
  <div className="space-y-3">
    <h3 className="text-lg font-medium">Email Preferences</h3>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="marketing" className="text-sm font-medium">
          Marketing emails
        </label>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="security" className="text-sm font-medium">
          Security alerts
        </label>
        <Switch id="security" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="updates" className="text-sm font-medium">
          Product updates
        </label>
        <Switch id="updates" />
      </div>
    </div>
  </div>
</form>`,
    },
  ],
};