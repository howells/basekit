import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "form",
  name: "Form",
  description:
    "A modern form component that integrates Base UI Form with Zod validation for type-safe, accessible forms.",
  category: "forms" as const,
  badge: "Form",
  importStatement: `import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
  FormError
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";`,
  componentId: "FormExample",
  props: [
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the form is disabled.",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
      description: "Additional CSS classes for the form.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Contact Form",
      description:
        "A complete form with Zod validation, including text inputs and textarea.",
      code: `const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const handleSubmit = async (data: Record<string, unknown>) => {
  console.log("Form submitted:", data);
};

<Form schema={formSchema} onValidSubmit={handleSubmit}>
  <FormField name="name" label="Full Name" required>
    <FormControl placeholder="Enter your name" />
  </FormField>

  <FormField
    name="email"
    label="Email Address"
    required
    description="We'll never share your email."
  >
    <FormControl type="email" placeholder="Enter your email" />
  </FormField>

    <FormField name="message" label="Message" required>
    <Textarea name="message" placeholder="Enter your message..." />
  </FormField>

  <Button type="submit" fullWidth textAlign="center">Submit Form</Button>
</Form>`,
    },
  ],
};
