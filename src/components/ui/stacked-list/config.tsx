import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "stacked-list",
  name: "Stacked List",
  description: "A list component that displays items in a vertically stacked layout with dividers.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { StackedList, StackedListItem } from "@/components/ui/stacked-list/stacked-list";`,
  componentId: "StackedListExample",
  props: [],
  examples: [
    {
      id: "default",
      title: "Basic Stacked List",
      description: "A simple list with dividers between items",
      code: `<StackedList>
  <StackedListItem>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">Item 1</h4>
        <p className="text-sm text-gray-600">Description for item 1</p>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </StackedListItem>
  <StackedListItem>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">Item 2</h4>
        <p className="text-sm text-gray-600">Description for item 2</p>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </StackedListItem>
  <StackedListItem>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">Item 3</h4>
        <p className="text-sm text-gray-600">Description for item 3</p>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </StackedListItem>
</StackedList>`,
    },
    {
      id: "with-avatars",
      title: "Stacked List with Avatars",
      description: "List items with avatar images",
      code: `<StackedList>
  <StackedListItem>
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/api/placeholder/32/32" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-medium">John Doe</h4>
        <p className="text-sm text-gray-600">john.doe@example.com</p>
      </div>
      <Button size="sm" variant="ghost">
        View
      </Button>
    </div>
  </StackedListItem>
  <StackedListItem>
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/api/placeholder/32/32" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-medium">Jane Smith</h4>
        <p className="text-sm text-gray-600">jane.smith@example.com</p>
      </div>
      <Button size="sm" variant="ghost">
        View
      </Button>
    </div>
  </StackedListItem>
</StackedList>`,
    },
    {
      id: "interactive",
      title: "Interactive Stacked List",
      description: "List items that are clickable",
      code: `<StackedList>
  <StackedListItem className="cursor-pointer hover:bg-gray-50">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Settings className="h-5 w-5 text-gray-500" />
        <div>
          <h4 className="font-medium">Account Settings</h4>
          <p className="text-sm text-gray-600">Manage your account preferences</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </StackedListItem>
  <StackedListItem className="cursor-pointer hover:bg-gray-50">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Bell className="h-5 w-5 text-gray-500" />
        <div>
          <h4 className="font-medium">Notifications</h4>
          <p className="text-sm text-gray-600">Configure notification preferences</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </StackedListItem>
</StackedList>`,
    },
  ],
};