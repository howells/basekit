import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "slider",
  name: "Slider",
  description: "An input component that allows users to select a single value or range from a continuous set of values.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { Slider } from "@/components/ui/slider";`,
  componentId: "SliderExample",
  props: [
    {
      name: "showValue",
      type: "boolean",
      defaultValue: false,
      description: "Whether to display the current value above the slider.",
    },
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The orientation of the slider.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the slider is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic slider component.",
      code: `const [value, setValue] = useState([50]);

<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
/>`,
    },
    {
      id: "with-value",
      title: "With Value",
      description: "Slider that displays its current value.",
      code: `const [value, setValue] = useState([25]);

<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
  showValue
/>`,
    },
    {
      id: "range",
      title: "Range Slider",
      description: "Slider with two handles for selecting a range.",
      code: `const [range, setRange] = useState([20, 80]);

<Slider
  value={range}
  onValueChange={setRange}
  min={0}
  max={100}
  step={1}
  showValue
/>`,
    },
    {
      id: "custom-step",
      title: "Custom Step",
      description: "Slider with a custom step increment.",
      code: `const [value, setValue] = useState([25]);

<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={5}
  showValue
  valueFormatter={(val) => \`$\${val}\`}
/>`,
    },
    {
      id: "vertical",
      title: "Vertical",
      description: "Slider with vertical orientation.",
      code: `const [value, setValue] = useState([40]);

<div className="h-64 flex items-center">
  <Slider
    value={value}
    onValueChange={setValue}
    min={0}
    max={100}
    step={1}
    orientation="vertical"
    showValue
  />
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Slider in disabled state.",
      code: `const [value] = useState([60]);

<Slider
  value={value}
  min={0}
  max={100}
  step={1}
  disabled
  showValue
/>`,
    },
  ],
};