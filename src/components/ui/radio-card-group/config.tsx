import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio-card-group",
  name: "Radio Card Group",
  description: "Card-style radio group component for selecting between multiple options with rich content displays.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { RadioCardGroup, RadioCardItem, RadioCardIndicator } from "@/components/ui/radio-card-group";`,
  componentId: "RadioCardGroupExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
      description: "Layout orientation of the radio card group.",
    },
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "Size variant affecting spacing between cards.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the entire radio card group is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic radio card group with selectable cards.",
      code: `const [value, setValue] = useState("basic");

<RadioCardGroup value={value} onValueChange={setValue}>
  <RadioCardItem value="basic">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Basic Plan
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Perfect for individuals and small projects
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="pro">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Pro Plan
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Best for growing teams and businesses
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="enterprise">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Enterprise Plan
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Advanced features for large organizations
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
</RadioCardGroup>`,
    },
    {
      id: "with-pricing",
      title: "With Pricing",
      description: "Radio cards showing pricing information.",
      code: `const [plan, setPlan] = useState("starter");

<RadioCardGroup value={plan} onValueChange={setPlan}>
  <RadioCardItem value="starter">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-50">
            Starter
          </div>
          <div className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            $9<span className="text-sm font-normal text-zinc-500">/mo</span>
          </div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
          Perfect for personal projects
        </div>
        <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>• 5 projects</li>
          <li>• 1GB storage</li>
          <li>• Email support</li>
        </ul>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="professional">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-50">
            Professional
          </div>
          <div className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            $29<span className="text-sm font-normal text-zinc-500">/mo</span>
          </div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
          Best for small teams
        </div>
        <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>• Unlimited projects</li>
          <li>• 10GB storage</li>
          <li>• Priority support</li>
          <li>• Team collaboration</li>
        </ul>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
</RadioCardGroup>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Radio cards with icons and detailed content.",
      code: `const [shipping, setShipping] = useState("standard");

<RadioCardGroup value={shipping} onValueChange={setShipping}>
  <RadioCardItem value="standard">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3 flex-1">
        <TruckIcon className="size-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
        <div>
          <div className="font-medium text-zinc-900 dark:text-zinc-50">
            Standard Shipping
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            5-7 business days • Free
          </div>
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="express">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3 flex-1">
        <ZapIcon className="size-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
        <div>
          <div className="font-medium text-zinc-900 dark:text-zinc-50">
            Express Shipping
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            2-3 business days • $9.99
          </div>
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="overnight">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3 flex-1">
        <RocketIcon className="size-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
        <div>
          <div className="font-medium text-zinc-900 dark:text-zinc-50">
            Overnight Shipping
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Next business day • $24.99
          </div>
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
</RadioCardGroup>`,
    },
    {
      id: "horizontal",
      title: "Horizontal",
      description: "Radio cards arranged horizontally.",
      code: `const [size, setSize] = useState("medium");

<RadioCardGroup 
  value={size} 
  onValueChange={setSize}
  orientation="horizontal"
  className="grid-cols-3"
>
  <RadioCardItem value="small">
    <div className="text-center">
      <div className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">
        Small
      </div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        32GB
      </div>
      <div className="mt-2 flex justify-center">
        <RadioCardIndicator />
      </div>
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="medium">
    <div className="text-center">
      <div className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">
        Medium
      </div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        64GB
      </div>
      <div className="mt-2 flex justify-center">
        <RadioCardIndicator />
      </div>
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="large">
    <div className="text-center">
      <div className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">
        Large
      </div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        128GB
      </div>
      <div className="mt-2 flex justify-center">
        <RadioCardIndicator />
      </div>
    </div>
  </RadioCardItem>
</RadioCardGroup>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Radio card group with disabled options.",
      code: `const [value, setValue] = useState("available1");

<RadioCardGroup value={value} onValueChange={setValue}>
  <RadioCardItem value="available1">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Available Option 1
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          This option is selectable
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="disabled" disabled>
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Disabled Option
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          This option is not available
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
  
  <RadioCardItem value="available2">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="font-medium text-zinc-900 dark:text-zinc-50">
          Available Option 2
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          This option is also selectable
        </div>
      </div>
      <RadioCardIndicator />
    </div>
  </RadioCardItem>
</RadioCardGroup>`,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Fully controlled radio card group with external state management.",
      code: `const [selectedValue, setSelectedValue] = useState("option2");

<div className="space-y-4">
  <div className="text-sm">
    <strong>Selected:</strong> {selectedValue}
  </div>
  
  <RadioCardGroup value={selectedValue} onValueChange={setSelectedValue}>
    <RadioCardItem value="option1">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium text-zinc-900 dark:text-zinc-50">
            Option 1
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            First selectable option
          </div>
        </div>
        <RadioCardIndicator />
      </div>
    </RadioCardItem>
    
    <RadioCardItem value="option2">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium text-zinc-900 dark:text-zinc-50">
            Option 2
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Second selectable option
          </div>
        </div>
        <RadioCardIndicator />
      </div>
    </RadioCardItem>
  </RadioCardGroup>
  
  <div className="flex gap-2">
    <Button 
      onClick={() => setSelectedValue("option1")}
      size="sm"
      variant="outline"
    >
      Select Option 1
    </Button>
    <Button 
      onClick={() => setSelectedValue("option2")}
      size="sm"
      variant="outline"
    >
      Select Option 2
    </Button>
  </div>
</div>`,
    },
  ],
};