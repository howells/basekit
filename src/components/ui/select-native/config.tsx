import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "select-native",
  name: "Select Native",
  description: "A native HTML select element with enhanced styling and consistent theming.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { SelectNative } from "@/components/ui/select-native";`,
  componentId: "SelectNativeExample",
  props: [
    {
      name: "hasError",
      type: "boolean",
      defaultValue: false,
      description: "Whether the select field has an error state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the select is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic native select element.",
      code: `const [value, setValue] = useState("");

<SelectNative
  value={value}
  onChange={(e) => setValue(e.target.value)}
>
  <option value="">Choose an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</SelectNative>`,
    },
    {
      id: "with-label",
      title: "With Label",
      description: "Native select with a label.",
      code: `const [country, setCountry] = useState("");

<div className="space-y-2">
  <label htmlFor="country" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
    Country
  </label>
  <SelectNative
    id="country"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </SelectNative>
</div>`,
    },
    {
      id: "grouped-options",
      title: "Grouped Options",
      description: "Native select with option groups.",
      code: `const [product, setProduct] = useState("");

<div className="space-y-2">
  <label htmlFor="product" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
    Product
  </label>
  <SelectNative
    id="product"
    value={product}
    onChange={(e) => setProduct(e.target.value)}
  >
    <option value="">Choose a product</option>
    <optgroup label="Software">
      <option value="web-app">Web Application</option>
      <option value="mobile-app">Mobile App</option>
      <option value="desktop-app">Desktop Software</option>
    </optgroup>
    <optgroup label="Services">
      <option value="consulting">Consulting</option>
      <option value="support">Support</option>
      <option value="training">Training</option>
    </optgroup>
  </SelectNative>
</div>`,
    },
    {
      id: "error-state",
      title: "Error State",
      description: "Native select with error styling.",
      code: `const [value, setValue] = useState("");
const hasError = !value;

<div className="space-y-2">
  <label htmlFor="required-select" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
    Required Field *
  </label>
  <SelectNative
    id="required-select"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    hasError={hasError}
  >
    <option value="">Please select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </SelectNative>
  {hasError && (
    <p className="text-sm text-red-600">This field is required.</p>
  )}
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Native select in disabled state.",
      code: `<div className="space-y-4">
  <div className="space-y-2">
    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
      Disabled (no value)
    </label>
    <SelectNative disabled>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </SelectNative>
  </div>
  
  <div className="space-y-2">
    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
      Disabled (with value)
    </label>
    <SelectNative disabled value="option1">
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </SelectNative>
  </div>
</div>`,
    },
    {
      id: "multiple",
      title: "Multiple",
      description: "Native select with multiple selection.",
      code: `const [selected, setSelected] = useState<string[]>([]);

<div className="space-y-2">
  <label htmlFor="multiple-select" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
    Multiple Selection
  </label>
  <SelectNative
    id="multiple-select"
    multiple
    size={4}
    value={selected}
    onChange={(e) => {
      const values = Array.from(e.target.selectedOptions, option => option.value);
      setSelected(values);
    }}
    className="h-auto py-1"
  >
    <option value="javascript">JavaScript</option>
    <option value="typescript">TypeScript</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
    <option value="csharp">C#</option>
    <option value="go">Go</option>
  </SelectNative>
  <p className="text-sm text-zinc-600">
    Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
  </p>
</div>`,
    },
  ],
};