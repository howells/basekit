import { ComponentConfig } from "@/lib/component-config-types";
import {
  ResponsiveDrawer,
  ResponsiveDrawerBody,
  ResponsiveDrawerClose,
  ResponsiveDrawerContent,
  ResponsiveDrawerDescription,
  ResponsiveDrawerFooter,
  ResponsiveDrawerHeader,
  ResponsiveDrawerTitle,
  ResponsiveDrawerTrigger,
} from "./responsive-drawer";

export const componentConfig: ComponentConfig = {
  id: "responsive-drawer",
  name: "ResponsiveDrawer",
  description:
    "A responsive drawer that displays as a sheet on desktop and a drawer on mobile.",
  category: "ui",
  importStatement:
    'import { ResponsiveDrawer } from "@/components/ui/responsive-drawer"',
  componentId: "ResponsiveDrawer",
  props: [
    {
      name: "open",
      type: "boolean",
      defaultValue: false,
      description: "Controls the open state of the drawer",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Responsive Drawer",
      description:
        "A basic responsive drawer that adapts to mobile and desktop",
      code: `<ResponsiveDrawer>
  <ResponsiveDrawerTrigger>
    <button>Open Drawer</button>
  </ResponsiveDrawerTrigger>
  <ResponsiveDrawerContent>
    <ResponsiveDrawerHeader>
      <ResponsiveDrawerTitle>Drawer Title</ResponsiveDrawerTitle>
      <ResponsiveDrawerDescription>
        This drawer adapts to mobile and desktop.
      </ResponsiveDrawerDescription>
    </ResponsiveDrawerHeader>
    <ResponsiveDrawerBody>
      <p>Drawer content goes here.</p>
    </ResponsiveDrawerBody>
    <ResponsiveDrawerFooter>
      <ResponsiveDrawerClose>
        <button>Cancel</button>
      </ResponsiveDrawerClose>
    </ResponsiveDrawerFooter>
  </ResponsiveDrawerContent>
</ResponsiveDrawer>`,
    },
    {
      id: "with-form",
      title: "Responsive Drawer with Form",
      description: "A responsive drawer containing a form",
      code: `<ResponsiveDrawer>
  <ResponsiveDrawerTrigger>
    <button>Add Item</button>
  </ResponsiveDrawerTrigger>
  <ResponsiveDrawerContent>
    <ResponsiveDrawerHeader>
      <ResponsiveDrawerTitle>Add New Item</ResponsiveDrawerTitle>
      <ResponsiveDrawerDescription>
        Fill out the form below to add a new item.
      </ResponsiveDrawerDescription>
    </ResponsiveDrawerHeader>
    <ResponsiveDrawerBody>
      <form className="space-y-4">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter item name" />
        </div>
        <div>
          <label>Description</label>
          <textarea rows={3} placeholder="Enter description" />
        </div>
      </form>
    </ResponsiveDrawerBody>
    <ResponsiveDrawerFooter>
      <button>Save</button>
      <ResponsiveDrawerClose>
        <button>Cancel</button>
      </ResponsiveDrawerClose>
    </ResponsiveDrawerFooter>
  </ResponsiveDrawerContent>
</ResponsiveDrawer>`,
    },
  ],
};
