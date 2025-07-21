import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "checkbox",
  name: "Checkbox",
  description: "A checkbox input built on Base UI with indeterminate state support and accessible interactions.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { Checkbox } from "@/components/ui/checkbox";`,
  componentId: "CheckboxExample",
  props: [
    {
      name: "checked",
      type: "select",
      options: ["true", "false", "indeterminate"],
      defaultValue: false,
      description: "The checked state of the checkbox. Can be true, false, or 'indeterminate'.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the checkbox is disabled.",
    },
    {
      name: "name",
      type: "string",
      description: "The name attribute of the checkbox input.",
    },
    {
      name: "value",
      type: "string",
      description: "The value attribute of the checkbox input.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic checkbox with default styling.",
      code: `<Checkbox />`,
    },
    {
      id: "checked",
      title: "Checked",
      description: "Checkbox in checked state.",
      code: `<Checkbox checked={true} />`,
    },
    {
      id: "indeterminate",
      title: "Indeterminate",
      description: "Checkbox in indeterminate state.",
      code: `<Checkbox checked="indeterminate" />`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled checkbox in various states.",
      code: `<div className="space-x-4 flex items-center">
  <Checkbox disabled />
  <Checkbox checked={true} disabled />
  <Checkbox checked="indeterminate" disabled />
</div>`,
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Checkbox with associated label.",
      code: `<label className="flex items-center gap-2 cursor-pointer">
  <Checkbox />
  <span className="text-sm font-medium">Accept terms and conditions</span>
</label>`,
    },
  ],
};