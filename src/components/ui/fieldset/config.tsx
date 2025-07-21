import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "fieldset",
  name: "Fieldset",
  description: "A fieldset component that groups related form controls with an optional legend.",
  category: "forms" as const,
  badge: "Form",
  importStatement: `import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";`,
  componentId: "FieldsetExample",
  props: [
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the fieldset is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic fieldset with legend and form fields.",
      code: `<Fieldset>
  <FieldsetLegend>Personal Information</FieldsetLegend>
  <div className="space-y-4">
    <Field>
      <FieldLabel>First Name</FieldLabel>
      <Input />
    </Field>
    <Field>
      <FieldLabel>Last Name</FieldLabel>
      <Input />
    </Field>
  </div>
</Fieldset>`,
    },
  ],
};