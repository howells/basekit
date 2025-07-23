import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "slider",
  name: "Slider",
  description: "An input where the user selects a value from within a given range.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Slider } from "@/components/ui/slider/slider";`,
  componentId: "SliderExample",
  props: [
    {
      name: "value",
      type: "number",
      description: "The controlled value of the slider",
      defaultValue: 50,
    },
    {
      name: "min",
      type: "number",
      description: "The minimum value",
      defaultValue: 0,
    },
    {
      name: "max",
      type: "number",
      description: "The maximum value",
      defaultValue: 100,
    },
    {
      name: "step",
      type: "number",
      description: "The step value",
      defaultValue: 1,
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the slider is disabled",
      defaultValue: false,
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Slider",
      description: "A simple slider with default settings",
      code: `<Slider defaultValue={[50]} max={100} step={1} />`,
    },
    {
      id: "range",
      title: "Range Slider",
      description: "A slider with two handles for selecting a range",
      code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`,
    },
    {
      id: "steps",
      title: "Slider with Steps",
      description: "A slider with custom step increments",
      code: `<div className="space-y-4">
  <div>
    <label className="text-sm font-medium">Volume: {value}%</label>
    <Slider 
      defaultValue={[50]} 
      max={100} 
      step={10}
      onValueChange={setValue}
    />
  </div>
</div>`,
    },
    {
      id: "custom-range",
      title: "Custom Range",
      description: "A slider with custom min and max values",
      code: `<div className="space-y-4">
  <div>
    <label className="text-sm font-medium">Temperature: {value}°C</label>
    <Slider 
      defaultValue={[20]} 
      min={-10} 
      max={40} 
      step={1}
      onValueChange={setValue}
    />
  </div>
</div>`,
    },
    {
      id: "disabled",
      title: "Disabled Slider",
      description: "A slider in disabled state",
      code: `<Slider defaultValue={[30]} max={100} disabled />`,
    },
  ],
};