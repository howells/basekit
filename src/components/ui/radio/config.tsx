import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio",
  name: "Radio",
  description: "Radio button component built on Base UI with support for individual radios, grouped radios, and card-style selections.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { 
  Radio, 
  RadioItem, 
  RadioLabel, 
  RadioOption, 
  RadioCard, 
  RadioCardOption, 
  RadioIndicator 
} from "@/components/ui/radio";`,
  componentId: "RadioExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size variant of the radio button.",
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "card"],
      defaultValue: "default",
      description: "Visual variant of the radio button.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the radio button is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic radio button for single selection.",
      code: `<RadioOption 
  value="option1" 
  label="Option 1" 
  description="This is the first option"
/>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Radio buttons in different sizes.",
      code: `<div className="space-y-4">
  <RadioOption 
    value="small" 
    label="Small Radio" 
    size="sm"
  />
  <RadioOption 
    value="medium" 
    label="Medium Radio" 
    size="md"
  />
  <RadioOption 
    value="large" 
    label="Large Radio" 
    size="lg"
  />
</div>`,
    },
    {
      id: "with-description",
      title: "With Description",
      description: "Radio buttons with additional description text.",
      code: `<div className="space-y-4">
  <RadioOption 
    value="basic" 
    label="Basic Plan" 
    description="Perfect for individuals getting started"
  />
  <RadioOption 
    value="pro" 
    label="Pro Plan" 
    description="Best for small teams and growing businesses"
  />
  <RadioOption 
    value="enterprise" 
    label="Enterprise Plan" 
    description="Advanced features for large organizations"
  />
</div>`,
    },
    {
      id: "card-style",
      title: "Card Style",
      description: "Radio buttons styled as selectable cards.",
      code: `<div className="space-y-3">
  <RadioCardOption 
    value="starter" 
    title="Starter" 
    description="Perfect for personal projects and small websites"
  />
  <RadioCardOption 
    value="professional" 
    title="Professional" 
    description="Ideal for growing businesses and medium-scale applications"
  />
  <RadioCardOption 
    value="enterprise" 
    title="Enterprise" 
    description="Advanced features for large-scale applications"
  />
</div>`,
    },
    {
      id: "disabled-state",
      title: "Disabled State",
      description: "Radio buttons in disabled state.",
      code: `<div className="space-y-4">
  <RadioOption 
    value="enabled" 
    label="Enabled Option" 
    description="This option is available"
  />
  <RadioOption 
    value="disabled" 
    label="Disabled Option" 
    description="This option is not available"
    disabled
  />
</div>`,
    },
    {
      id: "custom-structure",
      title: "Custom Structure",
      description: "Building radio buttons with individual components.",
      code: `<div className="space-y-4">
  <RadioLabel size="md">
    <RadioItem value="custom1" size="md" />
    <div className="flex flex-col">
      <span className="font-medium">Custom Radio 1</span>
      <span className="text-sm text-zinc-500">Built with individual components</span>
    </div>
  </RadioLabel>
  
  <RadioLabel size="md">
    <RadioItem value="custom2" size="md" />
    <div className="flex flex-col">
      <span className="font-medium">Custom Radio 2</span>
      <span className="text-sm text-zinc-500">Full control over styling</span>
    </div>
  </RadioLabel>
</div>`,
    },
    {
      id: "card-sizes",
      title: "Card Sizes",
      description: "Card-style radio buttons in different sizes.",
      code: `<div className="space-y-3">
  <RadioCardOption 
    value="small-card" 
    title="Small Card" 
    description="Compact card style"
    size="sm"
  />
  <RadioCardOption 
    value="medium-card" 
    title="Medium Card" 
    description="Default card size"
    size="md"
  />
  <RadioCardOption 
    value="large-card" 
    title="Large Card" 
    description="Spacious card layout"
    size="lg"
  />
</div>`,
    },
  ],
};