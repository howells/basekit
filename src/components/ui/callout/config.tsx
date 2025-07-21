import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "callout",
  name: "Callout",
  description:
    "An alert component that displays important information with optional icon and variant styling.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { Callout } from "@/components/ui/callout";`,
  componentId: "CalloutExample",
  props: [
    {
      name: "title",
      type: "string",
      defaultValue: "Important Information",
      description:
        "The title text displayed in the callout. Either title or children must be provided.",
      required: false,
    },
    {
      name: "variant",
      type: "select",
      options: ["default", "success", "error", "warning", "neutral"],
      defaultValue: "default",
      description: "The variant style of the callout.",
    },
    {
      name: "icon",
      type: "icon",
      description: "Optional icon displayed before the title.",
    },
    {
      name: "children",
      type: "string",
      defaultValue:
        "This callout contains important information that requires your attention. It can include multiple sentences and longer content to demonstrate how the component handles extended text. The callout will automatically adjust its height to accommodate the content while maintaining proper styling and readability.",
      description: "The content displayed below the title.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic callout with default styling.",
      code: `<Callout title="Information">
  This is important information you should know about.
</Callout>`,
    },
    {
      id: "success",
      title: "Success",
      description: "Success callout for positive feedback.",
      code: `<Callout title="Success" variant="success">
  Your operation completed successfully!
</Callout>`,
    },
    {
      id: "error",
      title: "Error",
      description: "Error callout for warnings or errors.",
      code: `<Callout title="Error" variant="error">
  Something went wrong. Please try again.
</Callout>`,
    },
    {
      id: "warning",
      title: "Warning",
      description: "Warning callout for important notices.",
      code: `<Callout title="Warning" variant="warning">
  Please review this information carefully.
</Callout>`,
    },
    {
      id: "neutral",
      title: "Neutral",
      description: "Neutral callout for general information.",
      code: `<Callout title="Note" variant="neutral">
  This is a neutral callout for general information.
</Callout>`,
    },
    {
      id: "with-icon",
      title: "With Icon",
      description: "Callout with an icon.",
      code: `<Callout title="Alert" variant="warning" icon={AlertTriangle}>
  This callout includes an icon for better visual communication.
</Callout>`,
    },
  ],
};
