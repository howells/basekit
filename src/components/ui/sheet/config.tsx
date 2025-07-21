import { ComponentConfig } from "@/lib/component-config-types";
import {
  Drawer as Sheet,
  DrawerClose as SheetClose,
  DrawerContent as SheetContent,
  DrawerDescription as SheetDescription,
  DrawerFooter as SheetFooter,
  DrawerHeader as SheetHeader,
  DrawerTitle as SheetTitle,
  DrawerTrigger as SheetTrigger,
} from "./sheet";

export const componentConfig: ComponentConfig = {
  id: "sheet",
  name: "Sheet",
  description:
    "A slide-out panel that overlays content from the edge of the screen.",
  category: "ui",
  importStatement: 'import { Sheet } from "@/components/ui/sheet"',
  componentId: "Sheet",
  props: [
    {
      name: "open",
      type: "boolean",
      defaultValue: false,
      description: "Controls the open state of the sheet",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Sheet",
      description: "A simple sheet with header and content",
      code: `<Sheet>
  <SheetTrigger>
    <button>Open Sheet</button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a description of the sheet content.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>Sheet content goes here.</p>
    </div>
    <SheetFooter>
      <SheetClose>
        <button>Close</button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    },
    {
      id: "with-form",
      title: "Sheet with Form",
      description: "A sheet containing a form",
      code: `<Sheet>
  <SheetTrigger>
    <button>Edit Profile</button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <form className="space-y-4 py-4">
      <div>
        <label>Name</label>
        <input type="text" defaultValue="John Doe" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" defaultValue="john@example.com" />
      </div>
    </form>
    <SheetFooter>
      <button type="submit">Save Changes</button>
      <SheetClose>
        <button>Cancel</button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    },
  ],
};
