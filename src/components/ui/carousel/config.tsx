import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample, VerticalExample, MultipleItemsExample, NoNavigationExample, ImageCarouselExample,  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "carousel",
  name: "Carousel",
  description:
    "A responsive carousel component built on Embla Carousel with navigation controls and keyboard support.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "embla-carousel-react",
  },
  importStatement: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";`,
  componentId: "CarouselExample",
  props: [
    {
      name: "orientation",
      type: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The orientation of the carousel.",
    },
    {
      name: "showNavigation",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show navigation arrows.",
    },
    {
      name: "itemCount",
      type: "number",
      defaultValue: 5,
      min: 1,
      max: 10,
      description: "Number of carousel items to display.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic horizontal carousel with navigation.",
      code: jsxToString(<DefaultExample />),
      render: DefaultExample,
    },
    {
      id: "vertical",
      title: "Vertical",
      description: "Vertical carousel orientation.",
      code: jsxToString(<VerticalExample />),
      render: VerticalExample,
    },
    {
      id: "multiple-items",
      title: "Multiple Items",
      description: "Carousel showing multiple items at once.",
      code: jsxToString(<MultipleItemsExample />),
      render: MultipleItemsExample,
    },
    {
      id: "no-navigation",
      title: "No Navigation",
      description: "Carousel without navigation arrows.",
      code: jsxToString(<NoNavigationExample />),
      render: NoNavigationExample,
    },
    {
      id: "image-carousel",
      title: "Image Carousel",
      description: "Carousel displaying images.",
      code: jsxToString(<ImageCarouselExample />),
      render: ImageCarouselExample,
    },
  ],
};