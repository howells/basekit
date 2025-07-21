import { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "input",
  name: "Input",
  description:
    "A versatile input field component with various types, sizes, and states including search and password inputs.",
  category: "inputs",
  badge: "INPUTS",
  importStatement: `import { Input } from "@/components/ui/input/input";`,
  componentId: "InputExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["sm", "base", "lg"],
      defaultValue: "base",
      description: "The size of the input field.",
    },
    {
      name: "type",
      type: "select",
      options: [
        "text",
        "email",
        "password",
        "search",
        "number",
        "tel",
        "url",
        "file",
      ],
      defaultValue: "text",
      description: "The type of input field.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
      description: "Placeholder text for the input field.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the input is disabled.",
    },
    {
      name: "hasError",
      type: "boolean",
      defaultValue: false,
      description: "Whether the input has an error state.",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: false,
      description: "Whether the input is required.",
    },
    {
      name: "enableStepper",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show stepper controls for number inputs.",
    },
    {
      name: "prefixText",
      type: "string",
      defaultValue: "",
      description: "Text to display before the input.",
    },
    {
      name: "prefixIcon",
      type: "icon",
      defaultValue: "",
      description: "Icon to display before the input.",
    },
    {
      name: "suffixText",
      type: "string",
      defaultValue: "",
      description: "Text to display after the input.",
    },
    {
      name: "suffixIcon",
      type: "icon",
      defaultValue: "",
      description: "Icon to display after the input.",
    },
    {
      name: "prefixStyling",
      type: "boolean",
      defaultValue: true,
      description: "Whether to apply default styling to the prefix.",
    },
    {
      name: "suffixStyling",
      type: "boolean",
      defaultValue: true,
      description: "Whether to apply default styling to the suffix.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic text input",
      code: `<Input placeholder="Enter text..." />`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different input sizes",
      code: `<div className="space-y-4">
  <Input size="sm" placeholder="Small input" />
  <Input size="base" placeholder="Base input" />
  <Input size="lg" placeholder="Large input" />
</div>`,
    },
    {
      id: "types",
      title: "Input Types",
      description: "Various input types",
      code: `<div className="space-y-4">
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="search" placeholder="Search input" />
  <Input type="number" placeholder="Number input" />
  <Input type="tel" placeholder="Phone input" />
  <Input type="url" placeholder="URL input" />
</div>`,
    },
    {
      id: "states",
      title: "States",
      description: "Different input states",
      code: `<div className="space-y-4">
  <Input placeholder="Normal input" />
  <Input placeholder="Disabled input" disabled />
  <Input placeholder="Error input" hasError />
  <Input placeholder="Required input" required />
</div>`,
    },
    {
      id: "search",
      title: "Search Input",
      description: "Search input with icon",
      code: `<Input type="search" placeholder="Search components..." />`,
    },
    {
      id: "password",
      title: "Password Input",
      description: "Password input with visibility toggle",
      code: `<Input type="password" placeholder="Enter password" />`,
    },
    {
      id: "number",
      title: "Number Input",
      description: "Number input with and without stepper",
      code: `<div className="space-y-4">
  <Input type="number" placeholder="With stepper" />
  <Input type="number" placeholder="Without stepper" enableStepper={false} />
</div>`,
    },
    {
      id: "file",
      title: "File Input",
      description: "File input for uploads",
      code: `<Input type="file" />`,
    },
    {
      id: "prefix-suffix-text",
      title: "Text Prefix & Suffix",
      description: "Input with text prefix and suffix",
      code: `<div className="space-y-4">
  <Input placeholder="Enter domain" prefixText="https://" />
  <Input placeholder="Enter username" suffixText="@company.com" />
  <Input placeholder="Website" prefixText="https://" suffixText=".com" />
</div>`,
    },
    {
      id: "prefix-suffix-styling",
      title: "Styling Options",
      description: "Control styling of prefix and suffix",
      code: `<div className="space-y-4">
  <Input placeholder="Styled" prefixText="$" suffixText="USD" />
  <Input placeholder="Unstyled" prefixText="$" suffixText="USD" prefixStyling={false} suffixStyling={false} />
</div>`,
    },
    {
      id: "prefix-suffix-icons",
      title: "Icon Prefix & Suffix",
      description: "Input with icon prefix and suffix (use prop explorer)",
      code: `// Use the prop explorer to set:
// prefixIcon: "Search", suffixIcon: "ArrowRight"
<Input placeholder="Search and submit..." />`,
    },
    {
      id: "mixed-prefix-suffix",
      title: "Mixed Prefix & Suffix",
      description: "Combine text and icons (use prop explorer)",
      code: `// Use the prop explorer to set:
// prefixText: "@", suffixIcon: "Mail"
<Input placeholder="Enter your email" />`,
    },
  ],
};
