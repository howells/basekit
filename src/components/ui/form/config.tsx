import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "form",
  name: "Form",
  description: "A form component wrapper that provides form validation, submission handling, and error management.",
  category: "forms" as const,
  badge: "Form",
  importStatement: `import { Form } from "@/components/ui/form";`,
  componentId: "FormExample",
  props: [
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the form is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic form with validation.",
      code: `<Form onSubmit={(data) => console.log(data)}>
  <Field>
    <FieldLabel>Name</FieldLabel>
    <Input name="name" required />
  </Field>
  <Button type="submit">Submit</Button>
</Form>`,
    },
  ],
};