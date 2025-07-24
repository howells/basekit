import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio-group",
  name: "Radio Group",
  description: "A set of radio buttons where only one option can be selected at a time.",
  category: "inputs" as const,
  icon: "Circle",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group";`,
  componentId: "RadioGroupExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "Selected value",
      defaultValue: "option1"
    },
    {
      name: "orientation",
      type: "select",
      description: "Layout orientation",
      options: ["horizontal", "vertical"],
      defaultValue: "vertical"
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the radio group is disabled",
      defaultValue: false
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Radio Group",
      description: "A simple radio group with labels",
      code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <label htmlFor="r1">Default</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <label htmlFor="r2">Comfortable</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <label htmlFor="r3">Compact</label>
  </div>
</RadioGroup>`
    },
    {
      id: "horizontal",
      title: "Horizontal Radio Group",
      description: "Radio buttons arranged horizontally",
      code: `<RadioGroup defaultValue="option1" orientation="horizontal">
  <div className="flex gap-4">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" />
      <label htmlFor="option1">Option 1</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" />
      <label htmlFor="option2">Option 2</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option3" id="option3" />
      <label htmlFor="option3">Option 3</label>
    </div>
  </div>
</RadioGroup>`
    },
    {
      id: "disabled",
      title: "Disabled Radio Group",
      description: "Radio group in disabled state",
      code: `<RadioGroup defaultValue="option1" disabled>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="d1" />
    <label htmlFor="d1">Disabled Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="d2" />
    <label htmlFor="d2">Disabled Option 2</label>
  </div>
</RadioGroup>`
    },
  ]
};