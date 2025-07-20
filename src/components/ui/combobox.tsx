"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cx } from "@/lib/utils";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  popoverClassName?: string;
  renderTrigger?: (selectedOption: ComboboxOption | null) => React.ReactNode;
  renderItem?: (option: ComboboxOption) => React.ReactNode;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search options...",
  emptyMessage = "No options found.",
  disabled = false,
  className,
  buttonClassName,
  popoverClassName,
  renderTrigger,
  renderItem,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const renderTriggerContent = () => {
    if (renderTrigger) {
      return renderTrigger(selectedOption || null);
    }

    if (selectedOption) {
      return (
        <div className="flex items-center gap-2">
          {selectedOption.leftIcon && (
            <selectedOption.leftIcon className="size-4 shrink-0" />
          )}
          <span className="truncate">{selectedOption.label}</span>
        </div>
      );
    }

    return placeholder;
  };

  const renderItemContent = (option: ComboboxOption) => {
    if (renderItem) {
      return renderItem(option);
    }

    return (
      <>
        <Check
          className={cx(
            "mr-2 h-4 w-4",
            value === option.value ? "opacity-100" : "opacity-0"
          )}
        />
        <div className="flex items-center gap-2 flex-1">
          {option.leftIcon && <option.leftIcon className="size-4 shrink-0" />}
          <span className="truncate">{option.label}</span>
        </div>
      </>
    );
  };

  return (
    <div className={cx(className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              leftIcon={selectedOption?.leftIcon}
              rightIcon={ChevronsUpDown}
              fullWidth
              textAlign="left"
              className={cx(
                "font-normal",
                !selectedOption && "text-zinc-500 dark:text-zinc-400",
                buttonClassName
              )}
            />
          }
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </PopoverTrigger>
        <PopoverContent
          className={cx(
            // widths - match Select exactly
            "min-w-[var(--anchor-width)] max-w-[95vw]",
            // heights - match Select
            "max-h-[var(--available-height)]",
            // padding
            "p-0",
            popoverClassName
          )}
          align="start"
        >
          <Command className="border-0">
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    onSelect={(currentValue: string) => {
                      const newValue =
                        currentValue === value ? "" : currentValue;
                      onValueChange?.(newValue);
                      setOpen(false);
                    }}
                    className="flex items-center"
                  >
                    {renderItemContent(option)}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Hook for easier usage with forms
export function useCombobox(initialValue?: string) {
  const [value, setValue] = React.useState(initialValue || "");
  const [open, setOpen] = React.useState(false);

  return {
    value,
    setValue,
    open,
    setOpen,
  };
}
