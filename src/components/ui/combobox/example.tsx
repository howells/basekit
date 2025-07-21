"use client";

import { Button } from "@/components/ui/button";
import { Check, HelpCircle, Home, Settings, User } from "lucide-react";
import { useState } from "react";
import { Combobox, useCombobox, type ComboboxOption } from "./combobox";

interface ComboboxExampleProps {
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
}

export function ComboboxExample({
  placeholder = "Select option...",
  searchPlaceholder = "Search options...",
  emptyMessage = "No options found.",
  disabled = false,
}: ComboboxExampleProps) {
  const [basicValue, setBasicValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const hookCombobox = useCombobox("apple");

  const basicOptions: ComboboxOption[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
    { value: "kiwi", label: "Kiwi" },
    { value: "mango", label: "Mango" },
    { value: "pineapple", label: "Pineapple" },
  ];

  const iconOptions: ComboboxOption[] = [
    {
      value: "home",
      label: "Home",
      leftIcon: ({ className }) => <Home className={className} />,
    },
    {
      value: "profile",
      label: "Profile",
      leftIcon: ({ className }) => <User className={className} />,
    },
    {
      value: "settings",
      label: "Settings",
      leftIcon: ({ className }) => <Settings className={className} />,
    },
    {
      value: "help",
      label: "Help",
      leftIcon: ({ className }) => <HelpCircle className={className} />,
    },
  ];

  const userOptions = [
    {
      value: "john",
      label: "John Doe",
      email: "john@example.com",
      leftIcon: ({ className }: { className?: string }) => (
        <User className={className} />
      ),
    },
    {
      value: "jane",
      label: "Jane Smith",
      email: "jane@example.com",
      leftIcon: ({ className }: { className?: string }) => (
        <User className={className} />
      ),
    },
    {
      value: "bob",
      label: "Bob Johnson",
      email: "bob@example.com",
      leftIcon: ({ className }: { className?: string }) => (
        <User className={className} />
      ),
    },
    {
      value: "alice",
      label: "Alice Wilson",
      email: "alice@example.com",
      leftIcon: ({ className }: { className?: string }) => (
        <User className={className} />
      ),
    },
  ];

  const disabledOptions: ComboboxOption[] = [
    { value: "option1", label: "Available Option 1" },
    { value: "option2", label: "Available Option 2" },
    { value: "option3", label: "Disabled Option", disabled: true },
    { value: "option4", label: "Available Option 3" },
    { value: "option5", label: "Another Disabled Option", disabled: true },
  ];

  return (
    <div className="space-y-8">
      {/* Basic combobox */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Combobox</h3>
        <Combobox
          options={basicOptions}
          value={basicValue}
          onValueChange={setBasicValue}
          placeholder={placeholder}
          searchPlaceholder={searchPlaceholder}
          emptyMessage={emptyMessage}
          disabled={disabled}
          className="max-w-xs"
        />
        {basicValue && (
          <p className="text-sm text-zinc-600">Selected: {basicValue}</p>
        )}
      </div>

      {/* With icons */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Icons</h3>
        <Combobox
          options={iconOptions}
          value={iconValue}
          onValueChange={setIconValue}
          placeholder="Select a page..."
          searchPlaceholder="Search pages..."
          className="max-w-xs"
        />
      </div>

      {/* With disabled options */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Disabled Options</h3>
        <Combobox
          options={disabledOptions}
          value=""
          onValueChange={() => {}}
          placeholder="Select an option..."
          searchPlaceholder="Search options..."
          className="max-w-xs"
        />
      </div>

      {/* Custom render */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Rendering</h3>
        <Combobox
          options={userOptions}
          value={userValue}
          onValueChange={setUserValue}
          placeholder="Select a user..."
          searchPlaceholder="Search users..."
          className="max-w-sm"
          renderTrigger={(selectedOption) =>
            selectedOption ? (
              <div className="flex items-center gap-2">
                <User className="size-4" />
                <div className="text-left min-w-0">
                  <div className="font-medium truncate">
                    {selectedOption.label}
                  </div>
                  <div className="text-xs text-zinc-500 truncate">User</div>
                </div>
              </div>
            ) : (
              "Select a user..."
            )
          }
          renderItem={(option) => (
            <>
              <Check
                className={
                  userValue === option.value
                    ? "mr-2 h-4 w-4"
                    : "mr-2 h-4 w-4 opacity-0"
                }
              />
              <User className="mr-2 size-4" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{option.label}</div>
                <div className="text-xs text-zinc-500 truncate">User</div>
              </div>
            </>
          )}
        />
      </div>

      {/* Using hook */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Using useCombobox Hook</h3>
        <div className="space-y-2">
          <Combobox
            options={basicOptions}
            value={hookCombobox.value}
            onValueChange={hookCombobox.setValue}
            placeholder="Select a fruit..."
            searchPlaceholder="Search fruits..."
            className="max-w-xs"
          />
          <div className="flex gap-2">
            <Button
              onClick={() => hookCombobox.setValue("banana")}
              size="sm"
              variant="outline"
            >
              Select Banana
            </Button>
            <Button
              onClick={() => hookCombobox.setValue("")}
              size="sm"
              variant="outline"
            >
              Clear
            </Button>
          </div>
          {hookCombobox.value && (
            <p className="text-sm text-zinc-600">
              Selected: {hookCombobox.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
