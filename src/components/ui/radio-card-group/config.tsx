import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "radio-card-group",
  name: "Radio Card Group",
  description: "A group of selectable cards that behave like radio buttons.",
  category: "inputs" as const,
  badge: "Inputs",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { RadioCardGroup, RadioCard } from "@/components/ui/radio-card-group/radio-card-group";`,
  componentId: "RadioCardGroupExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "Selected value",
      defaultValue: "option1",
    },
    {
      name: "orientation",
      type: "select",
      description: "Layout orientation",
      options: ["horizontal", "vertical"],
      defaultValue: "vertical",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Radio Card Group",
      description: "A group of selectable cards",
      code: `<RadioCardGroup defaultValue="free">
  <RadioCard value="free">
    <h3 className="font-semibold">Free Plan</h3>
    <p className="text-sm text-gray-600">Perfect for getting started</p>
  </RadioCard>
  <RadioCard value="pro">
    <h3 className="font-semibold">Pro Plan</h3>
    <p className="text-sm text-gray-600">For professional developers</p>
  </RadioCard>
  <RadioCard value="enterprise">
    <h3 className="font-semibold">Enterprise</h3>
    <p className="text-sm text-gray-600">For large teams and organizations</p>
  </RadioCard>
</RadioCardGroup>`,
    },
    {
      id: "horizontal",
      title: "Horizontal Layout",
      description: "Radio cards arranged horizontally",
      code: `<RadioCardGroup defaultValue="monthly" orientation="horizontal">
  <RadioCard value="monthly">
    <span className="font-medium">Monthly</span>
    <span className="text-sm text-gray-600">$9/mo</span>
  </RadioCard>
  <RadioCard value="yearly">
    <span className="font-medium">Yearly</span>
    <span className="text-sm text-gray-600">$90/yr</span>
  </RadioCard>
</RadioCardGroup>`,
    },
  ],
};