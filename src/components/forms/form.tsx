// Form Component [v1.0.0] - Base UI + Zod Integration

import { cx } from "@/lib/utils";
import { Field as BaseField } from "@base-ui-components/react/field";
import { Form as BaseForm } from "@base-ui-components/react/form";
import * as React from "react";
import { z } from "zod";

// Form wrapper that integrates Base UI Form with Zod validation
interface FormProps extends React.ComponentPropsWithoutRef<typeof BaseForm> {
  schema?: z.ZodSchema;
  onValidSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
  children: React.ReactNode;
}

const Form = React.forwardRef<React.ElementRef<typeof BaseForm>, FormProps>(
  ({ schema, onValidSubmit, children, className, onSubmit, ...props }, ref) => {
    const [errors, setErrors] = React.useState({});

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);

      // Validate with Zod if schema provided
      if (schema) {
        const result = schema.safeParse(data);

        if (!result.success) {
          setErrors(result.error.flatten().fieldErrors);
          return;
        }

        // Call onValidSubmit with validated data
        if (onValidSubmit) {
          await onValidSubmit(result.data as Record<string, unknown>);
        }
      } else {
        // No schema validation, just call onValidSubmit
        if (onValidSubmit) {
          await onValidSubmit(data as Record<string, unknown>);
        }
      }
    };

    return (
      <BaseForm
        ref={ref}
        className={cx("space-y-6", className)}
        errors={errors}
        onClearErrors={() => setErrors({})}
        onSubmit={handleSubmit}
        {...props}
      >
        {children}
      </BaseForm>
    );
  }
);
Form.displayName = "Form";

// Form Item - container for form fields
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx("space-y-2", className)} {...props} />;
});
FormItem.displayName = "FormItem";

// Form Label - styled label component
const FormLabel = React.forwardRef<
  React.ElementRef<typeof BaseField.Label>,
  React.ComponentPropsWithoutRef<typeof BaseField.Label>
>(({ className, ...props }, ref) => {
  return (
    <BaseField.Label
      ref={ref}
      className={cx(
        // base
        "block text-sm font-medium leading-6",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // disabled
        "data-disabled:text-zinc-400 dark:data-disabled:text-zinc-600",
        className
      )}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// Form Control - wrapper for form inputs
const FormControl = React.forwardRef<
  React.ElementRef<typeof BaseField.Control>,
  React.ComponentPropsWithoutRef<typeof BaseField.Control>
>(({ className, ...props }, ref) => {
  return (
    <BaseField.Control
      ref={ref}
      className={cx(
        // base
        "block w-full rounded-md border px-3 py-2 text-sm transition-colors",
        // border
        "border-zinc-300 dark:border-zinc-600",
        // background
        "bg-white dark:bg-zinc-800",
        // text
        "text-zinc-900 dark:text-zinc-50",
        // placeholder
        "placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
        // focus
        "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
        // disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        // invalid
        "data-invalid:border-red-500 data-invalid:focus:border-red-500 data-invalid:focus:ring-red-500/20",
        className
      )}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// Form Description - help text component
const FormDescription = React.forwardRef<
  React.ElementRef<typeof BaseField.Description>,
  React.ComponentPropsWithoutRef<typeof BaseField.Description>
>(({ className, ...props }, ref) => {
  return (
    <BaseField.Description
      ref={ref}
      className={cx(
        // base
        "text-sm leading-6",
        // text color
        "text-zinc-600 dark:text-zinc-400",
        className
      )}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

// Form Error - error message component
const FormError = React.forwardRef<
  React.ElementRef<typeof BaseField.Error>,
  React.ComponentPropsWithoutRef<typeof BaseField.Error>
>(({ className, ...props }, ref) => {
  return (
    <BaseField.Error
      ref={ref}
      className={cx(
        // base
        "text-sm leading-6",
        // text color
        "text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    />
  );
});
FormError.displayName = "FormError";

// Form Field - complete field with all components
interface FormFieldProps {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ name, label, description, required, className, children }, ref) => {
    return (
      <BaseField.Root name={name} className={className}>
        <FormItem ref={ref}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          {children}
          {description && <FormDescription>{description}</FormDescription>}
          <FormError />
        </FormItem>
      </BaseField.Root>
    );
  }
);
FormField.displayName = "FormField";

// Component configuration for documentation
export const componentConfig = {
  id: "form",
  name: "Form",
  description:
    "A modern form component that integrates Base UI Form with Zod validation for type-safe, accessible forms.",
  category: "forms" as const,

  importStatement: `import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormError
} from "@/components/forms/form";
import { z } from "zod";`,

  examples: [
    {
      id: "basic",
      title: "Basic Form with Zod Validation",
      description:
        "A simple form with Zod schema validation following Base UI patterns.",
      preview: (() => {
        const ExampleForm = () => {
          const schema = z.object({
            name: z.string().min(1, "Name is required"),
            email: z.string().email("Please enter a valid email"),
            age: z.coerce.number().min(1, "Age must be positive"),
          });

          const handleSubmit = async (data: Record<string, unknown>) => {
            console.log("Valid form data:", data);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            alert("Form submitted successfully!");
          };

          return (
            <Form
              schema={schema}
              onValidSubmit={handleSubmit}
              className="max-w-md space-y-4"
            >
              <FormField name="name" label="Name" required>
                <FormControl placeholder="Enter your name" />
              </FormField>

              <FormField
                name="email"
                label="Email"
                required
                description="We'll never share your email with anyone else."
              >
                <FormControl type="email" placeholder="Enter your email" />
              </FormField>

              <FormField name="age" label="Age" required>
                <FormControl type="number" placeholder="Enter your age" />
              </FormField>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                Submit
              </button>
            </Form>
          );
        };

        return <ExampleForm />;
      })(),
      code: `const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  age: z.coerce.number().min(1, "Age must be positive"),
});

const handleSubmit = async (data: z.infer<typeof schema>) => {
  console.log("Valid form data:", data);
  // Handle form submission
};

return (
  <Form
    schema={schema}
    onValidSubmit={handleSubmit}
    className="max-w-md space-y-4"
  >
    <FormField name="name" label="Name" required>
      <FormControl placeholder="Enter your name" />
    </FormField>

    <FormField
      name="email"
      label="Email"
      required
      description="We'll never share your email."
    >
      <FormControl type="email" placeholder="Enter your email" />
    </FormField>

    <FormField name="age" label="Age" required>
      <FormControl type="number" placeholder="Enter your age" />
    </FormField>

    <button type="submit">Submit</button>
  </Form>
);`,
    },
    {
      id: "native-validation",
      title: "Native HTML Validation",
      description: "Using HTML5 validation attributes without Zod schema.",
      preview: (
        <Form className="max-w-md space-y-4">
          <FormField name="url" label="Website URL" required>
            <FormControl
              type="url"
              placeholder="https://example.com"
              pattern="https?://.*"
            />
          </FormField>

          <FormField name="phone" label="Phone Number">
            <FormControl
              type="tel"
              placeholder="+1 (555) 123-4567"
              pattern="[+]?[0-9\s\-\(\)]+"
            />
          </FormField>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </Form>
      ),
      code: `<Form className="max-w-md space-y-4">
  <FormField name="url" label="Website URL" required>
    <FormControl
      type="url"
      placeholder="https://example.com"
      pattern="https?://.*"
    />
  </FormField>

  <FormField name="phone" label="Phone Number">
    <FormControl
      type="tel"
      placeholder="+1 (555) 123-4567"
      pattern="[+]?[0-9\\s\\-\\(\\)]+"
    />
  </FormField>

  <button type="submit">Submit</button>
</Form>`,
    },
  ],

  api: [
    {
      name: "Form",
      description: "The root form component with optional Zod validation.",
      properties: [
        {
          name: "schema",
          type: "z.ZodSchema",
          description: "Optional Zod schema for form validation.",
        },
        {
          name: "onValidSubmit",
          type: "(data: Record<string, unknown>) => void | Promise<void>",
          description:
            "Callback called when form is submitted with valid data.",
        },
        {
          name: "children",
          type: "React.ReactNode",
          description: "Form fields and other content.",
          required: true,
        },
      ],
    },
    {
      name: "FormField",
      description:
        "A complete form field with label, control, description, and error.",
      properties: [
        {
          name: "name",
          type: "string",
          description: "The name of the form field.",
          required: true,
        },
        {
          name: "label",
          type: "string",
          description: "The label text for the field.",
        },
        {
          name: "description",
          type: "string",
          description: "Optional help text for the field.",
        },
        {
          name: "required",
          type: "boolean",
          description: "Whether the field is required (adds * indicator).",
        },
        {
          name: "children",
          type: "React.ReactNode",
          description: "The form control (input, select, textarea, etc.).",
          required: true,
        },
      ],
    },
    {
      name: "FormControl",
      description: "A styled form control component (input, select, textarea).",
      properties: [
        {
          name: "type",
          type: "string",
          description: "HTML input type (text, email, password, etc.).",
        },
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text for the input.",
        },
      ],
    },
    {
      name: "FormLabel",
      description: "A styled label component with proper accessibility.",
      properties: [],
    },
    {
      name: "FormDescription",
      description: "Help text component for form fields.",
      properties: [],
    },
    {
      name: "FormError",
      description: "Error message component that displays validation errors.",
      properties: [],
    },
  ],

  accessibility: {
    pattern: {
      name: "Form",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/form/",
    },
    keyboardShortcuts: [
      {
        key: "Tab",
        description: "Moves focus to the next form control.",
      },
      {
        key: "Shift + Tab",
        description: "Moves focus to the previous form control.",
      },
      {
        key: "Enter",
        description: "Submits the form.",
      },
    ],
    notes: [
      "Uses Base UI Field components for proper ARIA labeling and descriptions.",
      "Integrates with Zod for type-safe validation with clear error messages.",
      "Supports both Zod validation and native HTML5 validation.",
      "Error states are automatically communicated to screen readers.",
      "Form controls are properly associated with their labels and descriptions.",
    ],
  },
};

export {
  Form,
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormItem,
  FormLabel,
};
