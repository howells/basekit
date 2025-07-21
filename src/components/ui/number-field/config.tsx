import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "number-field",
  name: "Number Field",
  description: "A number input field built on Base UI with stepper controls, scrubbing functionality, and full keyboard navigation.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { NumberField } from "@/components/ui/number-field";`,
  componentId: "NumberFieldExample",
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text for the number field.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter number...",
      description: "Placeholder text for the input.",
    },
    {
      name: "defaultValue",
      type: "number",
      description: "Default value for the number field.",
    },
    {
      name: "min",
      type: "number",
      description: "Minimum allowed value.",
    },
    {
      name: "max",
      type: "number",
      description: "Maximum allowed value.",
    },
    {
      name: "step",
      type: "number",
      defaultValue: 1,
      description: "Step increment for stepper controls.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the number field is disabled.",
    },
    {
      name: "showSteppers",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show increment/decrement buttons.",
    },
    {
      name: "showScrubArea",
      type: "boolean",
      defaultValue: true,
      description: "Whether the label acts as a scrub area for mouse dragging.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
      description: "Whether the number field should span full width.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic number field with steppers and scrub area.",
      code: `<NumberField label="Quantity" placeholder="Enter quantity" />`,
    },
    {
      id: "with-constraints",
      title: "With Constraints",
      description: "Number field with min, max, and step constraints.",
      code: `<NumberField
  label="Price"
  placeholder="$0.00"
  min={0}
  max={1000}
  step={0.01}
  defaultValue={29.99}
/>`,
    },
    {
      id: "without-steppers",
      title: "Without Steppers",
      description: "Clean number input without visible stepper controls.",
      code: `<NumberField
  label="Age"
  placeholder="Enter age"
  showSteppers={false}
  min={0}
  max={120}
/>`,
    },
    {
      id: "disabled-scrub-area",
      title: "Without Scrub Area",
      description: "Number field with regular label (no mouse scrubbing).",
      code: `<NumberField
  label="Score"
  placeholder="Enter score"
  showScrubArea={false}
  min={0}
  max={100}
/>`,
    },
    {
      id: "full-width",
      title: "Full Width",
      description: "Number field that spans the full width of its container.",
      code: `<NumberField
  label="Amount"
  placeholder="Enter amount"
  fullWidth
  defaultValue={500}
/>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled number field that cannot be interacted with.",
      code: `<NumberField
  label="Read Only"
  defaultValue={42}
  disabled
/>`,
    },
  ],
};