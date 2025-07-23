import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "description-list",
  name: "Description List",
  description: "A component for displaying key-value pairs in a structured list format, ideal for metadata and property displays.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { DescriptionList, DescriptionListItem, DescriptionListTerm, DescriptionListDetails } from "@/components/ui/description-list";`,
  componentId: "DescriptionListExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "Layout orientation of the description list.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic description list with key-value pairs.",
      code: `<DescriptionList>
  <DescriptionListItem>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDetails>John Doe</DescriptionListDetails>
  </DescriptionListItem>
  <DescriptionListItem>
    <DescriptionListTerm>Email</DescriptionListTerm>
    <DescriptionListDetails>john@example.com</DescriptionListDetails>
  </DescriptionListItem>
</DescriptionList>`,
    },
  ],
};