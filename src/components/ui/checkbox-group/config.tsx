import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "checkbox-group",
  name: "Checkbox Group",
  description: "A checkbox group component built on Base UI for managing multiple checkbox selections with accessible labeling.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { CheckboxGroup, CheckboxGroupItem } from "@/components/ui/checkbox-group";`,
  componentId: "CheckboxGroupExample",
  props: [
    {
      name: "label",
      type: "string",
      description: "The label text for the checkbox group.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether all checkboxes in the group are disabled.",
    },
    {
      name: "defaultValue",
      type: "string",
      description: "Default selected values (comma-separated).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic checkbox group with multiple options.",
      code: `<CheckboxGroup label="Select options">
  <CheckboxGroupItem value="option1">Option 1</CheckboxGroupItem>
  <CheckboxGroupItem value="option2">Option 2</CheckboxGroupItem>
  <CheckboxGroupItem value="option3">Option 3</CheckboxGroupItem>
</CheckboxGroup>`,
    },
    {
      id: "with-default",
      title: "With Default Selection",
      description: "Checkbox group with pre-selected options.",
      code: `<CheckboxGroup label="Features" defaultValue={["feature1", "feature3"]}>
  <CheckboxGroupItem value="feature1">Feature 1</CheckboxGroupItem>
  <CheckboxGroupItem value="feature2">Feature 2</CheckboxGroupItem>
  <CheckboxGroupItem value="feature3">Feature 3</CheckboxGroupItem>
</CheckboxGroup>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled checkbox group.",
      code: `<CheckboxGroup label="Disabled options" disabled>
  <CheckboxGroupItem value="option1">Option 1</CheckboxGroupItem>
  <CheckboxGroupItem value="option2">Option 2</CheckboxGroupItem>
</CheckboxGroup>`,
    },
    {
      id: "mixed-states",
      title: "Mixed States",
      description: "Checkbox group with individually disabled items.",
      code: `<CheckboxGroup label="Mixed states">
  <CheckboxGroupItem value="available">Available</CheckboxGroupItem>
  <CheckboxGroupItem value="unavailable" disabled>Unavailable</CheckboxGroupItem>
  <CheckboxGroupItem value="premium">Premium Feature</CheckboxGroupItem>
</CheckboxGroup>`,
    },
  ],
};