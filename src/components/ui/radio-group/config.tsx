import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio-group",
  name: "Radio Group",
  description:
    "Radio group component built on Base UI for grouping related radio buttons with support for controlled selection.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioOption } from "@/components/ui/radio";`,
  componentId: "RadioGroupExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
      description: "Layout orientation of the radio group.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size variant affecting spacing between items.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the entire radio group is disabled.",
    },
    {
      name: "value",
      type: "text",
      defaultValue: "",
      description: "The controlled value of the selected radio button.",
    },
    {
      name: "defaultValue",
      type: "text",
      defaultValue: "option2",
      description: "The default selected value (uncontrolled).",
    },
    {
      name: "name",
      type: "text",
      defaultValue: "",
      description: "The name attribute for form submission.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: false,
      description: "Whether the radio group is required in a form.",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: false,
      description: "Whether the radio group is read-only.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic radio group with vertical layout.",
      code: `const [value, setValue] = useState("option1");

<RadioGroup value={value} onValueChange={setValue}>
  <RadioOption value="option1" label="Option 1" />
  <RadioOption value="option2" label="Option 2" />
  <RadioOption value="option3" label="Option 3" />
</RadioGroup>`,
    },
    {
      id: "horizontal",
      title: "Horizontal",
      description: "Radio group with horizontal layout.",
      code: `const [value, setValue] = useState("small");

<RadioGroup
  value={value}
  onValueChange={setValue}
  orientation="horizontal"
>
  <RadioOption value="small" label="Small" />
  <RadioOption value="medium" label="Medium" />
  <RadioOption value="large" label="Large" />
</RadioGroup>`,
    },
    {
      id: "with-descriptions",
      title: "With Descriptions",
      description: "Radio group with descriptive text for each option.",
      code: `const [plan, setPlan] = useState("basic");

<RadioGroup value={plan} onValueChange={setPlan}>
  <RadioOption
    value="basic"
    label="Basic Plan"
    description="Perfect for individuals and small projects"
  />
  <RadioOption
    value="pro"
    label="Pro Plan"
    description="Best for growing teams and businesses"
  />
  <RadioOption
    value="enterprise"
    label="Enterprise Plan"
    description="Advanced features for large organizations"
  />
</RadioGroup>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Radio groups in different sizes affecting spacing.",
      code: `const [value1, setValue1] = useState("option1");
const [value2, setValue2] = useState("option1");
const [value3, setValue3] = useState("option1");

<div className="space-y-6">
  <div>
    <h4 className="text-sm font-medium mb-2">Small</h4>
    <RadioGroup value={value1} onValueChange={setValue1} size="sm">
      <RadioOption value="option1" label="Option 1" size="sm" />
      <RadioOption value="option2" label="Option 2" size="sm" />
    </RadioGroup>
  </div>

  <div>
    <h4 className="text-sm font-medium mb-2">Medium</h4>
    <RadioGroup value={value2} onValueChange={setValue2} size="md">
      <RadioOption value="option1" label="Option 1" size="md" />
      <RadioOption value="option2" label="Option 2" size="md" />
    </RadioGroup>
  </div>

  <div>
    <h4 className="text-sm font-medium mb-2">Large</h4>
    <RadioGroup value={value3} onValueChange={setValue3} size="lg">
      <RadioOption value="option1" label="Option 1" size="lg" />
      <RadioOption value="option2" label="Option 2" size="lg" />
    </RadioGroup>
  </div>
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Radio group with some disabled options.",
      code: `const [value, setValue] = useState("available1");

<RadioGroup value={value} onValueChange={setValue}>
  <RadioOption value="available1" label="Available Option 1" />
  <RadioOption value="available2" label="Available Option 2" />
  <RadioOption
    value="disabled"
    label="Disabled Option"
    description="This option is not selectable"
    disabled
  />
  <RadioOption value="available3" label="Available Option 3" />
</RadioGroup>`,
    },
    {
      id: "controlled",
      title: "Controlled",
      description:
        "Fully controlled radio group with external state management.",
      code: `const [selectedValue, setSelectedValue] = useState("option2");

<div className="space-y-4">
  <div className="text-sm">
    <strong>Selected:</strong> {selectedValue}
  </div>

  <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
    <RadioOption value="option1" label="Option 1" />
    <RadioOption value="option2" label="Option 2" />
    <RadioOption value="option3" label="Option 3" />
  </RadioGroup>

  <div className="flex gap-2">
    <Button
      onClick={() => setSelectedValue("option1")}
      size="sm"
      variant="outline"
    >
      Select Option 1
    </Button>
    <Button
      onClick={() => setSelectedValue("option3")}
      size="sm"
      variant="outline"
    >
      Select Option 3
    </Button>
  </div>
</div>`,
    },
    {
      id: "custom-structure",
      title: "Custom Structure",
      description: "Radio group using RadioGroupItem for custom layouts.",
      code: `const [value, setValue] = useState("custom1");

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="custom1" />
    <div className="flex flex-col">
      <span className="text-sm font-medium">Custom Item 1</span>
      <span className="text-xs text-zinc-500">With custom layout</span>
    </div>
  </div>

  <div className="flex items-center space-x-2">
    <RadioGroupItem value="custom2" />
    <div className="flex flex-col">
      <span className="text-sm font-medium">Custom Item 2</span>
      <span className="text-xs text-zinc-500">Full control over structure</span>
    </div>
  </div>
</RadioGroup>`,
    },
  ],
};
