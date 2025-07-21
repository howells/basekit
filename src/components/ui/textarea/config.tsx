import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "textarea",
  name: "Textarea",
  description: "A textarea component for multi-line text input with error state support and accessible styling.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { Textarea } from "@/components/ui/textarea";`,
  componentId: "TextareaExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter your text here...",
      description: "Placeholder text for the textarea.",
    },
    {
      name: "rows",
      type: "number",
      defaultValue: 3,
      description: "Number of visible text lines.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the textarea is disabled.",
    },
    {
      name: "hasError",
      type: "boolean",
      defaultValue: false,
      description: "Whether the textarea has an error state.",
    },
    {
      name: "resize",
      type: "select",
      options: ["none", "both", "horizontal", "vertical"],
      defaultValue: "vertical",
      description: "Controls how the textarea can be resized.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic textarea for multi-line text input.",
      code: `<Textarea placeholder="Enter your message..." />`,
    },
    {
      id: "with-rows",
      title: "With Rows",
      description: "Textarea with specific number of visible rows.",
      code: `<Textarea
  placeholder="Write a detailed description..."
  rows={5}
/>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled textarea that cannot be edited.",
      code: `<Textarea
  placeholder="This field is disabled"
  disabled
  defaultValue="This content cannot be edited"
/>`,
    },
    {
      id: "error-state",
      title: "Error State",
      description: "Textarea with error styling.",
      code: `<Textarea
  placeholder="This field has an error"
  hasError
  defaultValue="Invalid content"
/>`,
    },
    {
      id: "resize-options",
      title: "Resize Control",
      description: "Textarea with different resize behaviors.",
      code: `<div className="space-y-4">
  <Textarea
    placeholder="Cannot be resized"
    className="resize-none"
  />
  <Textarea
    placeholder="Resize horizontally only"
    className="resize-x"
  />
  <Textarea
    placeholder="Resize vertically only (default)"
    className="resize-y"
  />
</div>`,
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Textarea with associated label and description.",
      code: `<div className="space-y-2">
  <label htmlFor="feedback" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
    Feedback
  </label>
  <Textarea
    id="feedback"
    placeholder="Please share your thoughts..."
    rows={4}
  />
  <p className="text-xs text-zinc-500">Your feedback helps us improve our service.</p>
</div>`,
    },
  ],
};