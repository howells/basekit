import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "responsive-drawer",
  name: "Responsive Drawer",
  description:
    "A drawer component that adapts to different screen sizes, showing as a sheet on mobile and a dialog on desktop.",
  category: "overlay" as const,

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  ResponsiveDrawer,
  ResponsiveDrawerContent,
  ResponsiveDrawerDescription,
  ResponsiveDrawerHeader,
  ResponsiveDrawerTitle,
  ResponsiveDrawerTrigger
} from "@/components/ui/responsive-drawer/responsive-drawer";`,
  componentId: "ResponsiveDrawerExample",
  props: [
    {
      name: "open",
      type: "boolean",
      description: "Whether the drawer is open",
      defaultValue: false
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Responsive Drawer",
      description: "A drawer that adapts to screen size",
      code: `<ResponsiveDrawer>
  <ResponsiveDrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </ResponsiveDrawerTrigger>
  <ResponsiveDrawerContent>
    <ResponsiveDrawerHeader>
      <ResponsiveDrawerTitle>Edit Profile</ResponsiveDrawerTitle>
      <ResponsiveDrawerDescription>
        Make changes to your profile here. Click save when you're done.
      </ResponsiveDrawerDescription>
    </ResponsiveDrawerHeader>
    <div className="p-4">
      <p>Your content here...</p>
    </div>
  </ResponsiveDrawerContent>
</ResponsiveDrawer>`
    },
    {
      id: "with-form",
      title: "Responsive Drawer with Form",
      description: "A responsive drawer containing a form",
      code: `<ResponsiveDrawer>
  <ResponsiveDrawerTrigger asChild>
    <Button>Edit Settings</Button>
  </ResponsiveDrawerTrigger>
  <ResponsiveDrawerContent>
    <ResponsiveDrawerHeader>
      <ResponsiveDrawerTitle>Account Settings</ResponsiveDrawerTitle>
      <ResponsiveDrawerDescription>
        Update your account settings below.
      </ResponsiveDrawerDescription>
    </ResponsiveDrawerHeader>
    <div className="p-4 space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" type="text" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" type="email" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
      </div>
      <Button className="w-full">Save Changes</Button>
    </div>
  </ResponsiveDrawerContent>
</ResponsiveDrawer>`
    },
  ]
};
