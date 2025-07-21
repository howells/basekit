import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "command",
  name: "Command",
  description: "Command palette component built on cmdk with search, keyboard navigation, and grouping features.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandItem, 
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
  CommandDialog
} from "@/components/ui/command";`,
  componentId: "CommandExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["sm", "default", "lg"],
      defaultValue: "default",
      description: "Size variant of the command palette.",
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Type a command or search...",
      description: "Placeholder text for the search input.",
    },
    {
      name: "emptyMessage",
      type: "string",
      defaultValue: "No results found.",
      description: "Message to show when no results are found.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic command palette with search and items.",
      code: `<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>New File</CommandItem>
      <CommandItem>Open File</CommandItem>
      <CommandItem>Save File</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Preferences</CommandItem>
      <CommandItem>Keyboard Shortcuts</CommandItem>
      <CommandItem>Extensions</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    },
    {
      id: "with-shortcuts",
      title: "With Shortcuts",
      description: "Command items with keyboard shortcuts.",
      code: `<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="File">
      <CommandItem>
        New File
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Open File
        <CommandShortcut>⌘O</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Save File
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Edit">
      <CommandItem>
        Copy
        <CommandShortcut>⌘C</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Paste
        <CommandShortcut>⌘V</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Find
        <CommandShortcut>⌘F</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Command items with icons and actions.",
      code: `<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        <FileIcon className="mr-2 h-4 w-4" />
        New Document
      </CommandItem>
      <CommandItem>
        <FolderIcon className="mr-2 h-4 w-4" />
        Open Folder
      </CommandItem>
      <CommandItem>
        <SaveIcon className="mr-2 h-4 w-4" />
        Save Changes
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Navigation">
      <CommandItem>
        <SearchIcon className="mr-2 h-4 w-4" />
        Go to File
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CommandIcon className="mr-2 h-4 w-4" />
        Command Palette
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    },
    {
      id: "dialog-mode",
      title: "Dialog Mode",
      description: "Command palette as a modal dialog.",
      code: `const [open, setOpen] = useState(false);

// Listen for keyboard shortcut
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((open) => !open);
    }
  };

  document.addEventListener("keydown", down);
  return () => document.removeEventListener("keydown", down);
}, []);

<>
  <Button
    variant="outline"
    onClick={() => setOpen(true)}
  >
    Open Command Palette
    <CommandShortcut className="ml-2">⌘K</CommandShortcut>
  </Button>

  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      
      <CommandGroup heading="Quick Actions">
        <CommandItem onSelect={() => {
          setOpen(false);
          // Handle new file action
        }}>
          New File
          <CommandShortcut>⌘N</CommandShortcut>
        </CommandItem>
        <CommandItem onSelect={() => {
          setOpen(false);
          // Handle open action
        }}>
          Open File
          <CommandShortcut>⌘O</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      
      <CommandSeparator />
      
      <CommandGroup heading="Settings">
        <CommandItem>Preferences</CommandItem>
        <CommandItem>Extensions</CommandItem>
        <CommandItem>About</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different size variants of the command palette.",
      code: `<div className="space-y-4">
  <Command className="rounded-lg border shadow-md max-w-sm" size="sm">
    <CommandInput placeholder="Small command..." />
    <CommandList>
      <CommandItem>Small Item 1</CommandItem>
      <CommandItem>Small Item 2</CommandItem>
    </CommandList>
  </Command>
  
  <Command className="rounded-lg border shadow-md max-w-md" size="default">
    <CommandInput placeholder="Default command..." />
    <CommandList>
      <CommandItem>Default Item 1</CommandItem>
      <CommandItem>Default Item 2</CommandItem>
    </CommandList>
  </Command>
  
  <Command className="rounded-lg border shadow-md max-w-lg" size="lg">
    <CommandInput placeholder="Large command..." />
    <CommandList>
      <CommandItem>Large Item 1</CommandItem>
      <CommandItem>Large Item 2</CommandItem>
    </CommandList>
  </Command>
</div>`,
    },
  ],
};