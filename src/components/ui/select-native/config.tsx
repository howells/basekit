import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "select-native",
  name: "Select Native",
  description: "A native HTML select element with custom styling.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { SelectNative } from "@/components/ui/select-native/select-native";`,
  componentId: "SelectNativeExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "Selected value",
      defaultValue: "",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the select is disabled",
      defaultValue: false,
    },
    {
      name: "size",
      type: "select",
      description: "Size of the select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Native Select",
      description: "A styled native select element",
      code: `<SelectNative>
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</SelectNative>`,
    },
    {
      id: "with-groups",
      title: "Select with Option Groups",
      description: "Native select with grouped options",
      code: `<SelectNative defaultValue="apple">
  <option value="">Choose a fruit</option>
  <optgroup label="Citrus">
    <option value="orange">Orange</option>
    <option value="lemon">Lemon</option>
    <option value="grapefruit">Grapefruit</option>
  </optgroup>
  <optgroup label="Other">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="grape">Grape</option>
  </optgroup>
</SelectNative>`,
    },
    {
      id: "sizes",
      title: "Different Sizes",
      description: "Native select in different sizes",
      code: `<div className="space-y-4">
  <SelectNative size="sm">
    <option>Small select</option>
    <option>Option 2</option>
  </SelectNative>
  <SelectNative size="md">
    <option>Medium select</option>
    <option>Option 2</option>
  </SelectNative>
  <SelectNative size="lg">
    <option>Large select</option>
    <option>Option 2</option>
  </SelectNative>
</div>`,
    },
  ],
};