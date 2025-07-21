import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "select",
  name: "Select",
  description: "A select component built on Base UI with comprehensive dropdown functionality and keyboard navigation.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";`,
  componentId: "SelectExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Select an option...",
      description: "Placeholder text when no value is selected.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the select is disabled.",
    },
    {
      name: "hasError",
      type: "boolean",
      defaultValue: false,
      description: "Whether the select has an error state.",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Default selected value.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic select with options.",
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
    <SelectItem value="date">Date</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      id: "with-groups",
      title: "With Groups",
      description: "Select with grouped options.",
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a color" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectGroupLabel>Primary Colors</SelectGroupLabel>
      <SelectItem value="red">Red</SelectItem>
      <SelectItem value="blue">Blue</SelectItem>
      <SelectItem value="yellow">Yellow</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectGroupLabel>Secondary Colors</SelectGroupLabel>
      <SelectItem value="green">Green</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="purple">Purple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled select that cannot be interacted with.",
      code: `<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Cannot select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      id: "error-state",
      title: "Error State",
      description: "Select with error styling.",
      code: `<Select>
  <SelectTrigger hasError>
    <SelectValue placeholder="Select with error" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      id: "with-default-value",
      title: "With Default Value",
      description: "Select with a pre-selected value.",
      code: `<Select defaultValue="medium">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="small">Small</SelectItem>
    <SelectItem value="medium">Medium</SelectItem>
    <SelectItem value="large">Large</SelectItem>
  </SelectContent>
</Select>`,
    },
  ],
};