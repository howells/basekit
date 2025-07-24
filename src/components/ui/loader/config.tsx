import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultLoaderExample, SizesExample, WithTextExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "loader",
  name: "Loader",
  description: "A spinning loader indicator with configurable size.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Loader } from "@/components/ui/loader/loader";`,
  componentId: "LoaderExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description: "The size of the loader."
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes."
    }
  ],
  examples: [
    {
      id: "loader",
      title: "Default",
      description: "A spinning loader indicator with configurable size.",
      code: jsxToString(<DefaultLoaderExample />)},
    {
      id: "sizes",
      title: "Sizes",
      description: "Loader in different sizes.",
      code: jsxToString(<SizesExample />)},
    {
      id: "with-text",
      title: "With Text",
      description: "Loader with accompanying text.",
      code: jsxToString(<WithTextExample />)}
  ]
};