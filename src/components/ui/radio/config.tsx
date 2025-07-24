import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio",
  name: "Radio",
  description: "A radio button component for selecting a single option from a set.",
  category: "inputs" as const,
  icon: "Circle",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Radio } from "@/components/ui/radio/radio";`,
  componentId: "RadioExample",
  props: [
    {
      name: "checked",
      type: "boolean",
      description: "Whether the radio is checked",
      defaultValue: false
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the radio is disabled",
      defaultValue: false
    },
    {
      name: "value",
      type: "string",
      description: "The value of the radio button",
      defaultValue: "option1"
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Radio",
      description: "A simple radio button",
      code: `<div className="flex items-center space-x-2">
  <Radio id="option1" name="options" value="option1" />
  <label htmlFor="option1">Option 1</label>
</div>`
    },
    {
      id: "checked",
      title: "Checked Radio",
      description: "A radio button in checked state",
      code: `<div className="flex items-center space-x-2">
  <Radio id="checked" name="options" value="checked" defaultChecked />
  <label htmlFor="checked">Checked Option</label>
</div>`
    },
    {
      id: "disabled",
      title: "Disabled Radio",
      description: "A radio button in disabled state",
      code: `<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Radio id="disabled1" name="disabled" value="disabled1" disabled />
    <label htmlFor="disabled1">Disabled Unchecked</label>
  </div>
  <div className="flex items-center space-x-2">
    <Radio id="disabled2" name="disabled" value="disabled2" defaultChecked disabled />
    <label htmlFor="disabled2">Disabled Checked</label>
  </div>
</div>`
    },
  ]
};