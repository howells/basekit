import type { ComponentConfig } from "@/lib/component-config-types";

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
      code: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">1</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">2</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">3</span>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    },
    {
      id: "vertical",
      title: "Vertical",
      description: "Vertical carousel orientation.",
      code: `<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    <CarouselItem className="pt-1 md:basis-1/2">
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <span className="text-3xl font-semibold">1</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem className="pt-1 md:basis-1/2">
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <span className="text-3xl font-semibold">2</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem className="pt-1 md:basis-1/2">
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <span className="text-3xl font-semibold">3</span>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    },
    {
      id: "multiple-items",
      title: "Multiple Items",
      description: "Carousel showing multiple items at once.",
      code: `<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    },
    {
      id: "no-navigation",
      title: "No Navigation",
      description: "Carousel without navigation arrows.",
      code: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">1</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">2</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">3</span>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
</Carousel>`,
    },
  ],
};
