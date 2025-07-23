"use client";

import { useState } from "react";
import { Combobox, type ComboboxOption } from "./combobox";

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
  const [value, setValue] = useState("");

  const options: ComboboxOption[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
    { value: "kiwi", label: "Kiwi" },
    { value: "mango", label: "Mango" },
    { value: "pineapple", label: "Pineapple" },
  ];

  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      emptyMessage={emptyMessage}
      disabled={disabled}
      className="max-w-xs"
    />
  );
}
