import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultInputExample, SizesExample, InputTypesExample, StatesExample, SearchInputExample, PasswordInputExample, NumberInputExample, FileInputExample, PrefixSuffixTextExample, PrefixSuffixIconsExample, MixedPrefixSuffixExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "input",
  name: "Input",
  description: "A versatile input field component with various types, sizes, and states including search and password inputs.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Input } from "@/components/ui/input/input";`,
  componentId: "InputExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text...",
      description: "Placeholder text for the input.",
    },
    {
      name: "type",
      type: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url", "date", "time", "file"],
      defaultValue: "text",
      description: "The type of input.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "base", "lg"],
      defaultValue: "base",
      description: "The size of the input.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "filled"],
      defaultValue: "default",
      description: "The visual style variant.",
    },
    {
      name: "value",
      type: "string",
      description: "The controlled value of the input.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Disable the input.",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: false,
      description: "Show error state.",
    },
    {
      name: "prefixText",
      type: "string",
      description: "Text to show before the input.",
    },
    {
      name: "suffixText",
      type: "string",
      description: "Text to show after the input.",
    },
    {
      name: "prefixIcon",
      type: "icon",
      description: "Icon to show before the input.",
    },
    {
      name: "suffixIcon",
      type: "icon",
      description: "Icon to show after the input.",
    },
    {
      name: "prefixStyling",
      type: "boolean",
      defaultValue: true,
      description: "Apply styling to prefix.",
    },
    {
      name: "suffixStyling",
      type: "boolean",
      defaultValue: true,
      description: "Apply styling to suffix.",
    },
    {
      name: "enableStepper",
      type: "boolean",
      defaultValue: true,
      description: "Show stepper controls for number inputs.",
    },
  ],
  examples: [
    {
      id: "input",
      title: "Default",
      description: "A versatile input field component with various types, sizes, and states including search and password inputs.",
      code: jsxToString(<DefaultInputExample />),
      render: DefaultInputExample,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different input sizes",
      code: jsxToString(<SizesExample />),
      render: SizesExample,
    },
    {
      id: "types",
      title: "Input Types",
      description: "Various input types",
      code: jsxToString(<InputTypesExample />),
      render: InputTypesExample,
    },
    {
      id: "states",
      title: "States",
      description: "Different input states",
      code: jsxToString(<StatesExample />),
      render: StatesExample,
    },
    {
      id: "search",
      title: "Search Input",
      description: "Search input with icon",
      code: jsxToString(<SearchInputExample />),
      render: SearchInputExample,
    },
    {
      id: "password",
      title: "Password Input",
      description: "Password input with visibility toggle",
      code: jsxToString(<PasswordInputExample />),
      render: PasswordInputExample,
    },
    {
      id: "number",
      title: "Number Input",
      description: "Number input with and without stepper",
      code: jsxToString(<NumberInputExample />),
      render: NumberInputExample,
    },
    {
      id: "file",
      title: "File Input",
      description: "File input for uploads",
      code: jsxToString(<FileInputExample />),
      render: FileInputExample,
    },
    {
      id: "prefix-suffix-text",
      title: "Text Prefix & Suffix",
      description: "Input with text prefix and suffix",
      code: jsxToString(<PrefixSuffixTextExample />),
      render: PrefixSuffixTextExample,
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
      code: jsxToString(<PrefixSuffixIconsExample />),
      render: PrefixSuffixIconsExample,
    },
    {
      id: "mixed-prefix-suffix",
      title: "Mixed Prefix & Suffix",
      description: "Combine text and icons (use prop explorer)",
      code: jsxToString(<MixedPrefixSuffixExample />),
      render: MixedPrefixSuffixExample,
    },
  ],
};
