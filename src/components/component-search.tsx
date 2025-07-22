"use client";

import {
  getComponentsByCategory,
  type ComponentInfo,
} from "@/lib/component-registry";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge/badge";
import { Button } from "./ui/button/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog/dialog";
import { Input } from "./ui/input/input";
import { Subheading } from "./ui/subheading/subheading";
import { Text } from "./ui/text/text";

interface ComponentSearchProps {
  placeholder?: string;
}

export function ComponentSearch({
  placeholder = "Search...",
}: ComponentSearchProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get all components and filter them
  const allComponents = [
    ...getComponentsByCategory("ui"),
    ...getComponentsByCategory("inputs"),
    ...getComponentsByCategory("forms"),
    ...getComponentsByCategory("charts"),
  ];

  const filteredComponents = searchTerm
    ? allComponents.filter(
        (component) =>
          component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allComponents;

  // Group by category
  const groupedComponents = filteredComponents.reduce((groups, component) => {
    const category = component.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(component);
    return groups;
  }, {} as Record<string, ComponentInfo[]>);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, filteredComponents.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredComponents[selectedIndex];
        if (selected) {
          router.push(`/${selected.category}/${selected.id}`);
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredComponents]);

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (component: ComponentInfo) => {
    const url = `/${component.category}/${component.id}`;
    router.push(url);
    setIsOpen(false);
  };

  let currentIndex = 0;

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
        <Search className="h-4 w-4 mr-2" />
        {placeholder}
        <kbd className="ml-auto pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-600">
          ⌘K
        </kbd>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Search Components</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              prefixIcon={Search}
              prefixStyling={false}
            />

            <div className="max-h-96 overflow-y-auto space-y-4">
              {Object.keys(groupedComponents).length === 0 ? (
                <div className="py-8 text-center text-zinc-500">
                  No components found
                </div>
              ) : (
                Object.entries(groupedComponents).map(
                  ([category, components]) => (
                    <div key={category}>
                      <div className="px-2 py-1 text-xs font-semibold text-zinc-500 capitalize">
                        {category}
                      </div>
                      <div className="space-y-1">
                        {components.map((component) => {
                          const isSelected = currentIndex === selectedIndex;
                          currentIndex++;

                          return (
                            <button
                              key={component.name}
                              className={`w-full text-left p-3 rounded-lg transition-colors ${
                                isSelected
                                  ? "bg-zinc-100 dark:bg-zinc-800"
                                  : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                              }`}
                              onClick={() => handleSelect(component)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Subheading className="text-sm">
                                    {component.name}
                                  </Subheading>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {component.badge ||
                                      component.category.toUpperCase()}
                                  </Badge>
                                </div>
                              </div>
                              <Text size="sm">{component.description}</Text>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
