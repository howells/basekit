// Configuration data - no React imports or JSX
import type { ComponentConfig } from "@/lib/component-config-types";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "copy-button",
  name: "Copy Button",
  description:
    "A button component that copies text to the clipboard with customizable labels and icons.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "lucide-react",
  },
  importStatement: `import { CopyButton } from "@/components/ui/copy-button/copy-button";`,
  componentId: "CopyButtonExample",

  // Props that users can experiment with
  props: [
    {
      name: "text",
      type: "string",
      description: "The text to copy to clipboard.",
      defaultValue: "Hello, World!",
    },
    {
      name: "copyLabel",
      type: "string",
      description: "Label shown before copying.",
      defaultValue: "Copy",
    },
    {
      name: "copiedLabel",
      type: "string",
      description: "Label shown after copying.",
      defaultValue: "Copied",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the button is disabled.",
      defaultValue: false,
    },
  ],

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic copy button with default styling.",
      code: `<CopyButton text="Hello, World!" />`,
    },
    {
      id: "custom-labels",
      title: "Custom Labels",
      description: "Copy button with custom labels.",
      code: `<CopyButton
  text="console.log('Hello, World!');"
  copyLabel="Copy Code"
  copiedLabel="Code Copied!"
/>`,
    },
    {
      id: "long-text",
      title: "Long Text",
      description: "Copy button with longer text content.",
      code: `<CopyButton
  text="This is a longer piece of text that demonstrates how the copy button works with more substantial content that users might want to copy to their clipboard."
  copyLabel="Copy Text"
  copiedLabel="Text Copied!"
/>`,
    },
  ],
};
