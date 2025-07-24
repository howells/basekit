import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "sheet",
  name: "Sheet",
  description:
    "Extends the Dialog component to display content that complements the main content of the screen.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/sheet";`,
  componentId: "SheetExample",
  props: [
    {
      name: "side",
      type: "select",
      description: "The side of the screen the sheet appears from",
      options: ["top", "right", "bottom", "left"],
      defaultValue: "right",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Sheet",
      description: "A sheet that slides in from the right",
      code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="name" className="text-right">
          Name
        </label>
        <input
          id="name"
          value="Pedro Duarte"
          className="col-span-3 rounded-md border border-zinc-300 px-3 py-2"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="username" className="text-right">
          Username
        </label>
        <input
          id="username"
          value="@peduarte"
          className="col-span-3 rounded-md border border-zinc-300 px-3 py-2"
        />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    },
    {
      id: "sides",
      title: "Sheet Sides",
      description: "Sheets from different sides",
      code: `<div className="grid grid-cols-2 gap-2">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Top</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Sheet from top</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Right</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Sheet from right</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Sheet from bottom</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Left</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Sheet from left</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>`,
    },
  ],
};
