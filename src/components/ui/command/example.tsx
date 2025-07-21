"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { File, Folder, Save, Search, Terminal, Settings } from "lucide-react";
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandItem, 
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
  CommandDialog
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
  const [dialogOpen, setDialogOpen] = useState(false);

  // Listen for keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setDialogOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-8">
      {/* Basic command palette */}
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

      {/* Dialog trigger */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          Open Command Palette
          <CommandShortcut className="ml-2">⌘K</CommandShortcut>
        </Button>
      </div>

      {/* Size variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-center">Size Variants</h3>
        
        <div className="flex flex-col items-center gap-4">
          <Command className="rounded-lg border shadow-md max-w-sm" size="sm">
            <CommandInput placeholder="Small size..." />
            <CommandList>
              <CommandItem>Small Item 1</CommandItem>
              <CommandItem>Small Item 2</CommandItem>
            </CommandList>
          </Command>
          
          <Command className="rounded-lg border shadow-md max-w-md" size="default">
            <CommandInput placeholder="Default size..." />
            <CommandList>
              <CommandItem>Default Item 1</CommandItem>
              <CommandItem>Default Item 2</CommandItem>
            </CommandList>
          </Command>
          
          <Command className="rounded-lg border shadow-md max-w-lg" size="lg">
            <CommandInput placeholder="Large size..." />
            <CommandList>
              <CommandItem>Large Item 1</CommandItem>
              <CommandItem>Large Item 2</CommandItem>
            </CommandList>
          </Command>
        </div>
      </div>

      {/* Command Dialog */}
      <CommandDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => {
              setDialogOpen(false);
              console.log("New file action");
            }}>
              <File className="mr-2 h-4 w-4" />
              New File
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              setDialogOpen(false);
              console.log("Open file action");
            }}>
              <Folder className="mr-2 h-4 w-4" />
              Open File
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              setDialogOpen(false);
              console.log("Save action");
            }}>
              <Save className="mr-2 h-4 w-4" />
              Save File
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Navigation">
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              Go to File
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Terminal className="mr-2 h-4 w-4" />
              Command Palette
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Settings">
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </CommandItem>
            <CommandItem>Extensions</CommandItem>
            <CommandItem>About</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}