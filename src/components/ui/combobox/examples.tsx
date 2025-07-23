"use client";

import React, { useState } from "react";
import { Combobox, useCombobox, type ComboboxOption } from "./combobox";
import { Button } from "../button/button";
import { Home, User, Settings, HelpCircle, Check } from "lucide-react";

// Default combobox
export const DefaultExample = () => {
  const [value, setValue] = useState("");

  const options: ComboboxOption[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select a fruit..."
      searchPlaceholder="Search fruits..."
    />
  );
};

// With icons
export const WithIconsExample = () => {
  const [value, setValue] = useState("");

  const options: ComboboxOption[] = [
    { 
      value: "home", 
      label: "Home", 
      leftIcon: ({ className }) => <Home className={className} />
    },
    { 
      value: "profile", 
      label: "Profile", 
      leftIcon: ({ className }) => <User className={className} />
    },
    { 
      value: "settings", 
      label: "Settings", 
      leftIcon: ({ className }) => <Settings className={className} />
    },
    { 
      value: "help", 
      label: "Help", 
      leftIcon: ({ className }) => <HelpCircle className={className} />
    },
  ];

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select a page..."
      searchPlaceholder="Search pages..."
    />
  );
};

// With disabled options
export const WithDisabledOptionsExample = () => {
  const [value, setValue] = useState("");

  const options: ComboboxOption[] = [
    { value: "option1", label: "Available Option 1" },
    { value: "option2", label: "Available Option 2" },
    { value: "option3", label: "Disabled Option", disabled: true },
    { value: "option4", label: "Available Option 3" },
    { value: "option5", label: "Another Disabled Option", disabled: true },
  ];

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select an option..."
      searchPlaceholder="Search options..."
    />
  );
};

// Custom render
export const CustomRenderExample = () => {
  const [value, setValue] = useState("");

  const options: ComboboxOption[] = [
    { 
      value: "john", 
      label: "John Doe", 
      leftIcon: ({ className }) => <User className={className} />
    },
    { 
      value: "jane", 
      label: "Jane Smith", 
      leftIcon: ({ className }) => <User className={className} />
    },
    { 
      value: "bob", 
      label: "Bob Johnson", 
      leftIcon: ({ className }) => <User className={className} />
    },
  ];

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select a user..."
      searchPlaceholder="Search users..."
      renderTrigger={(selectedOption) => 
        selectedOption ? (
          <div className="flex items-center gap-2">
            <User className="size-4" />
            <div className="text-left">
              <div className="font-medium">{selectedOption.label}</div>
            </div>
          </div>
        ) : (
          "Select a user..."
        )
      }
      renderItem={(option) => (
        <>
          <Check className={value === option.value ? "mr-2 h-4 w-4" : "mr-2 h-4 w-4 opacity-0"} />
          <User className="mr-2 size-4" />
          <div className="flex-1">
            <div className="font-medium">{option.label}</div>
          </div>
        </>
      )}
    />
  );
};

// Controlled state
export const ControlledStateExample = () => {
  const [value, setValue] = useState("apple");
  const [searchTerm, setSearchTerm] = useState("");

  const allOptions: ComboboxOption[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];

  const filteredOptions = allOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="text-sm">
        <strong>Selected:</strong> {value || "None"}
      </div>
      
      <Combobox
        options={filteredOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select a fruit..."
        searchPlaceholder="Search fruits..."
      />
      
      <div className="flex gap-2">
        <Button 
          onClick={() => setValue("banana")}
          size="sm"
          variant="outline"
        >
          Select Banana
        </Button>
        <Button 
          onClick={() => setValue("")}
          size="sm"
          variant="outline"
        >
          Clear Selection
        </Button>
      </div>
    </div>
  );
};

// With useCombobox hook
export const WithHookExample = () => {
  const combobox = useCombobox("apple");

  const options: ComboboxOption[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className="space-y-4">
      <div className="text-sm">
        <strong>Selected:</strong> {combobox.value || "None"}
      </div>
      
      <Combobox
        options={options}
        value={combobox.value}
        onValueChange={combobox.setValue}
        placeholder="Select a fruit..."
        searchPlaceholder="Search fruits..."
      />
    </div>
  );
};