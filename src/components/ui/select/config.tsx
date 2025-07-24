import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "select",
  name: "Select",
  description:
    "Displays a list of options for the user to pick from—triggered by a button.",
  category: "inputs" as const,
  icon: "ChevronUpDown",

  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select/select";`,
  componentId: "SelectExample",
  props: [
    {
      name: "value",
      type: "string",
      description: "Selected value",
      defaultValue: "",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text",
      defaultValue: "Select an option",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the select is disabled",
      defaultValue: false,
    },
    {
      name: "size",
      type: "select",
      options: ["default", "sm"],
      defaultValue: "default",
      description: "Size variant of the select trigger",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Select",
      description: "A simple select dropdown",
      code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      id: "with-groups",
      title: "Select with Groups",
      description: "Select with grouped options",
      code: `<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe & Africa</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
    },
    {
      id: "small-size",
      title: "Small Select",
      description: "Select with small size variant",
      code: `<Select>
  <SelectTrigger size="sm" className="w-[150px]">
    <SelectValue placeholder="Small select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      id: "form-select",
      title: "Form Select",
      description: "Select integrated in a form",
      code: `<form className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-md border border-zinc-300 px-3 py-2"
    />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium">Country</label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select your country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
      </SelectContent>
    </Select>
  </div>
</form>`,
    },
  ],
};
