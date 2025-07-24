import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample, WithImageExample, SquareExample } from "./examples";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "avatar",
  name: "Avatar",
  description:
    "A circular or square avatar component with support for images and initials fallback.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Avatar } from "@/components/ui/avatar/avatar";`,
  componentId: "AvatarExample",

  // Props that users can experiment with
  props: [
    {
      name: "src",
      type: "select",
      description: "The image source URL for the avatar.",
      defaultValue: "",
      options: [
        "",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
      ]
    },
    {
      name: "square",
      type: "boolean",
      description: "If true, displays a square avatar instead of circular.",
      defaultValue: false
    },
    {
      name: "initials",
      type: "string",
      description: "The initials to display when no image is provided.",
      defaultValue: "JD"
    },
    {
      name: "alt",
      type: "string",
      description: "Alt text for the avatar image.",
      defaultValue: "Avatar"
    }
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic avatar with initials.",
      code: jsxToString(<DefaultExample />)},
    {
      id: "with-image",
      title: "With Image",
      description: "Avatar with a profile image.",
      code: jsxToString(<WithImageExample />)},
    {
      id: "square",
      title: "Square",
      description: "Square-shaped avatar.",
      code: jsxToString(<SquareExample />)}
  ]
};
