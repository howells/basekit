import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "split-button",
  name: "Split Button",
  description: "A button with a dropdown menu for secondary actions.",
  category: "inputs" as const,
  icon: "Split",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { SplitButton } from "@/components/ui/split-button/split-button";`,
  componentId: "SplitButtonExample",
  props: [
    {
      name: "variant",
      type: "select",
      description: "Button variant",
      options: ["default", "outline", "ghost", "destructive"],
      defaultValue: "default"
    },
    {
      name: "size",
      type: "select",
      description: "Button size",
      options: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the button is disabled",
      defaultValue: false
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Split Button",
      description: "A button with dropdown for additional actions",
      code: `<SplitButton>
  <Button>Save</Button>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Save as draft</DropdownMenuItem>
      <DropdownMenuItem>Save and publish</DropdownMenuItem>
      <DropdownMenuItem>Save and schedule</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>`
    },
    {
      id: "with-icons",
      title: "Split Button with Icons",
      description: "Split button with icons in menu items",
      code: `<SplitButton>
  <Button>
    <Send className="mr-2 h-4 w-4" />
    Send
  </Button>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <Clock className="mr-2 h-4 w-4" />
        Send later
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Users className="mr-2 h-4 w-4" />
        Send to group
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Archive className="mr-2 h-4 w-4" />
        Send and archive
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>`
    },
  ]
};