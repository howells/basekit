import { File, Folder, Save, Settings, Terminal } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

interface CommandExampleProps {
  size?: "sm" | "default" | "lg";
  placeholder?: string;
  emptyMessage?: string;
}

export function CommandExample({
  size = "default",
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
}: CommandExampleProps) {
  return (
    <div className="flex justify-center">
      <Command className="rounded-lg border shadow-md max-w-md" size={size}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <File className="mr-2 h-4 w-4" />
              New File
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Folder className="mr-2 h-4 w-4" />
              Open File
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Save className="mr-2 h-4 w-4" />
              Save File
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </CommandItem>
            <CommandItem>
              <Terminal className="mr-2 h-4 w-4" />
              Terminal
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
