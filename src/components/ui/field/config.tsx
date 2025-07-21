import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "field",
  name: "Field",
  description: "A form field wrapper that combines label, input, and error/help text into a cohesive form element.",
  category: "forms" as const,
  badge: "Form",
  importStatement: `import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";`,
  componentId: "FieldExample",
  props: [
    {
      name: "invalid",
      type: "boolean",
      defaultValue: false,
      description: "Whether the field has validation errors.",
    },
    {
      name: "disabled",
      type: "boolean", 
      defaultValue: false,
      description: "Whether the field is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic field with label and input.",
      code: `<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="Enter your email" />
</Field>`,
    },
    {
      id: "with-description",
      title: "With Description",
      description: "Field with helpful description text.",
      code: `<Field>
  <FieldLabel>Username</FieldLabel>
  <Input placeholder="Enter username" />
  <FieldDescription>Must be at least 3 characters long</FieldDescription>
</Field>`,
    },
    {
      id: "with-error",
      title: "With Error",
      description: "Field showing validation error state.",
      code: `<Field invalid>
  <FieldLabel>Password</FieldLabel>
  <Input type="password" placeholder="Enter password" />
  <FieldError>Password must be at least 8 characters</FieldError>
</Field>`,
    },
  ],
};