// Configuration data - no React imports or JSX
import type { ComponentConfig } from "@/lib/component-config-types";

// Component configuration - single source of truth
export const componentConfig: ComponentConfig = {
  id: "stacked-list",
  name: "Stacked List",
  description:
    "A clean list component for displaying structured data with avatars and actions. Follows Vercel's Entity pattern for simple, flexible layouts.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  StackedList,
  StackedListItem,
  StackedListHeader,
  StackedListEmpty,
} from "@/components/ui/stacked-list/stacked-list";`,
  componentId: "StackedListExample",

  // Props that users can experiment with (only actual component props)
  props: [
    {
      name: "showDividers",
      type: "boolean",
      description: "Whether to show dividers between list items.",
      defaultValue: true,
    },
    {
      name: "gap",
      type: "number",
      description: "Gap between list items (4px grid scale).",
      defaultValue: 0,
      min: 0,
      max: 24,
    },
    {
      name: "padding",
      type: "number",
      description: "Padding for each item (4px grid scale).",
      defaultValue: 4,
      min: 0,
      max: 24,
    },
  ],

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic stacked list with header, items, and actions.",
      code: `<StackedList>
  <StackedList.Header
    title="Team Members"
    description="Manage your team and their permissions."
    actions={<Button size="sm" variant="outline">Add Member</Button>}
  />
  <StackedList.Item
    left={<Avatar initials="JD" alt="John Doe" />}
    right={<Button size="sm" variant="outline">Edit</Button>}
  >
    <StackedList.Content
      title="John Doe"
      description="Software Engineer"
    />
  </StackedList.Item>
  <StackedList.Item
    left={<Avatar initials="JS" alt="Jane Smith" />}
    right={<Button size="sm" variant="outline">Edit</Button>}
  >
    <StackedList.Content
      title="Jane Smith"
      description="Product Manager"
    />
  </StackedList.Item>
</StackedList>`,
    },
    {
      id: "in-card",
      title: "In Card",
      description: "Stacked list wrapped in a card for elevated styling.",
      code: `<Card padding={0}>
  <StackedList>
    <StackedList.Header
      title="Recent Activity"
      description="Latest updates from your team."
    />
    <StackedList.Item
      left={<Avatar initials="AB" alt="Alice Brown" />}
      right={<span className="text-sm text-zinc-500">2h ago</span>}
    >
      <StackedList.Content
        title="Alice Brown"
        description="Updated project documentation"
      />
    </StackedList.Item>
    <StackedList.Item
      left={<Avatar initials="BW" alt="Bob Wilson" />}
      right={<span className="text-sm text-zinc-500">5h ago</span>}
    >
      <StackedList.Content
        title="Bob Wilson"
        description="Merged pull request #42"
      />
    </StackedList.Item>
  </StackedList>
</Card>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Using icons instead of avatars.",
      code: `<StackedList>
  <StackedList.Item
    left={<FileText className="size-5 text-zinc-500" />}
    right={<Badge variant="warning">Updated</Badge>}
  >
    <StackedList.Content
      title="Project Documentation"
      description="Updated project requirements and specifications"
    />
  </StackedList.Item>
  <StackedList.Item
    left={<Calendar className="size-5 text-zinc-500" />}
    right={<Badge variant="default">Scheduled</Badge>}
  >
    <StackedList.Content
      title="Team Meeting"
      description="Weekly sync with the development team"
    />
  </StackedList.Item>
</StackedList>`,
    },
    {
      id: "interactive",
      title: "Interactive Items",
      description: "List items that respond to clicks and have hover states.",
      code: `<StackedList>
  <StackedList.Item
    as="a"
    href="/users/carol"
    left={<Avatar initials="CD" alt="Carol Davis" />}
    right={<Badge variant="success">Active</Badge>}
  >
    <StackedList.Content
      title="Carol Davis"
      description="Marketing Manager"
    />
  </StackedList.Item>
  <StackedList.Item
    as="button"
    onClick={() => alert("Clicked David Miller")}
    left={<Avatar initials="DM" alt="David Miller" />}
    right={<Badge variant="warning">Away</Badge>}
  >
    <StackedList.Content
      title="David Miller"
      description="Sales Representative"
    />
  </StackedList.Item>
</StackedList>`,
    },
    {
      id: "empty-state",
      title: "Empty State",
      description: "Showing empty state when no items are available.",
      code: `<StackedList>
  <StackedList.Header
    title="Team Members"
    description="Manage your team and their permissions."
  />
  <StackedList.Empty
    title="No team members"
    description="Get started by adding your first team member."
    icon={<UserPlus className="size-12" />}
    action={<Button variant="default">Add Team Member</Button>}
  />
</StackedList>`,
    },
  ],
};
