import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "button",
  name: "Button",
  description:
    "A clickable button component with multiple variants and states.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Button } from "@/components/ui/button/button";`,
  componentId: "ButtonExample",
  props: [
    {
      name: "variant",
      type: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      defaultValue: "default",
      description: "The visual style variant of the button.",
    },
    {
      name: "size",
      type: "select",
      options: ["default", "sm", "icon"],
      defaultValue: "default",
      description: "The size of the button.",
    },
    {
      name: "children",
      type: "string",
      defaultValue: "Button",
      description: "The content to display inside the button.",
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultValue: false,
      description: "Shows loading spinner and disables the button.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Disables the button interaction.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
      description: "Makes the button take the full width of its container.",
    },
    {
      name: "textAlign",
      type: "select",
      options: ["left", "center", "right"],
      defaultValue: "center",
      description: "Text alignment within the button.",
    },
    {
      name: "leftIcon",
      type: "icon",
      description: "Icon to display on the left side.",
    },
    {
      name: "rightIcon",
      type: "icon",
      description: "Icon to display on the right side.",
    },
    {
      name: "loadingText",
      type: "string",
      description: "Text to show when loading (optional).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic button with default styling.",
      code: `<Button>Click me</Button>`,
    },
    {
      id: "secondary",
      title: "Secondary",
      description: "Button with secondary styling.",
      code: `<Button variant="secondary">Secondary</Button>`,
    },
    {
      id: "destructive",
      title: "Destructive",
      description: "Button for destructive actions.",
      code: `<Button variant="destructive">Delete</Button>`,
    },
    {
      id: "outline",
      title: "Outline",
      description: "Button with outline styling.",
      code: `<Button variant="outline">Outline</Button>`,
    },
    {
      id: "ghost",
      title: "Ghost",
      description: "Button with ghost styling.",
      code: `<Button variant="ghost">Ghost</Button>`,
    },
    {
      id: "link",
      title: "Link",
      description: "Button styled as a link.",
      code: `<Button variant="link">Link</Button>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Button with left and right icons.",
      code: `<Button leftIcon={PlusIcon} rightIcon={ArrowRightIcon}>
  With Icons
</Button>`,
    },
    {
      id: "loading",
      title: "Loading State",
      description: "Button in loading state.",
      code: `<Button isLoading>Loading...</Button>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different button sizes.",
      code: `<div className="flex items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="icon">
    <PlusIcon />
  </Button>
</div>`,
    },
    {
      id: "full-width",
      title: "Full Width",
      description: "Button that spans the full width.",
      code: `<Button fullWidth>Full Width Button</Button>`,
    },
  ],
};
