import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "context-menu",
  name: "Context Menu",
  description: "A context menu component that appears on right-click, providing contextual actions and options.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";`,
  componentId: "ContextMenuExample",
  props: [
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the context menu is disabled.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic context menu with simple menu items.",
      code: `<ContextMenu>
  <ContextMenuTrigger className="p-8 border rounded-lg text-center">
    Right-click me
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    },
    {
      id: "with-shortcuts",
      title: "With Shortcuts",
      description: "Context menu items with keyboard shortcuts displayed.",
      code: `<ContextMenu>
  <ContextMenuTrigger className="p-8 border rounded-lg text-center">
    Right-click for shortcuts
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Copy <span className="ml-auto text-xs text-zinc-500">⌘C</span>
    </ContextMenuItem>
    <ContextMenuItem>
      Paste <span className="ml-auto text-xs text-zinc-500">⌘V</span>
    </ContextMenuItem>
    <ContextMenuItem>
      Delete <span className="ml-auto text-xs text-zinc-500">⌫</span>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    },
  ],
};