"use client";

import { ComponentConfig, getAllComponents } from "@/lib/component-registry";
import Link from "next/link";
import React, { useState } from "react";
import { Badge } from "./ui/badge/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Subheading } from "./ui/subheading";

interface ComponentSearchProps {
  onSearch: (searchTerm: string) => void;
  onSelect?: (component: ComponentConfig) => void;
  placeholder?: string;
  maxResults?: number;
}

export function ComponentSearch({
  onSearch,
  onSelect,
  placeholder = "Search components...",
  maxResults = 8,
}: ComponentSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const allComponents = getAllComponents();

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSelect = (component: ComponentConfig) => {
    setSearchTerm("");
    onSelect?.(component);
  };

  const getCategoryVariant = (category: string) => {
    switch (category) {
      case "ui":
        return "default";
      case "inputs":
        return "success";
      case "forms":
        return "warning";
      case "charts":
        return "error";
      default:
        return "neutral";
    }
  };

  // Only show results if there's a search term
  const shouldShowResults = searchTerm.trim().length > 0;

  // Group components by category
  const groupedComponents = allComponents.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, ComponentConfig[]>);

  const categoryOrder = ["ui", "inputs", "forms", "charts"];

  return (
    <div className="relative w-full">
      <Command className="rounded-lg border overflow-visible">
        <CommandInput
          placeholder={placeholder}
          value={searchTerm}
          onValueChange={handleSearchChange}
        />
        {shouldShowResults && (
          <CommandList className="absolute top-full left-0 right-0 z-50 mt-1 max-h-80 rounded-lg border shadow-lg bg-white dark:bg-zinc-900">
            <CommandEmpty>No components found.</CommandEmpty>
            {categoryOrder.map((category) => {
              const components = groupedComponents[category] || [];
              const filteredComponents = components.slice(0, maxResults);

              if (filteredComponents.length === 0) return null;

              return (
                <CommandGroup key={category} heading={category.toUpperCase()}>
                  {filteredComponents.map((component) => (
                    <CommandItem
                      key={component.id}
                      value={`${component.name} ${component.id} ${component.description}`}
                      onSelect={() => handleSelect(component)}
                      className="flex items-center justify-between gap-3 p-3"
                    >
                      <Link
                        href={`/${component.category}/${component.id}`}
                        className="flex-1 min-w-0"
                        onClick={() => handleSelect(component)}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Subheading className="truncate">
                            {component.name}
                          </Subheading>
                          <Badge
                            variant={getCategoryVariant(component.category)}
                            size="sm"
                          >
                            {component.category.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                          {component.description}
                        </p>
                      </Link>
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            })}
          </CommandList>
        )}
      </Command>
    </div>
  );
}
