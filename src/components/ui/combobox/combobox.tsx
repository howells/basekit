"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button/button";
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

/**
 * Option configuration for combobox items.
 *
 * Defines the structure for individual selectable options including
 * display text, unique values, disabled state, and optional icons.
 *
 * @interface ComboboxOption
 */
export interface ComboboxOption {
  /** Unique identifier for the option */
  value: string;
  /** Display text for the option */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Icon to display on the left side */
  leftIcon?: React.ComponentType<{ className?: string }>;
  /** Icon to display on the right side */
  rightIcon?: React.ComponentType<{ className?: string }>;
}

/**
 * Props for the Combobox component.
 *
 * Comprehensive configuration for searchable select dropdowns with
 * custom rendering, styling, and interaction options.
 *
 * @interface ComboboxProps
 */
export interface ComboboxProps {
  /** Array of selectable options */
  options: ComboboxOption[];
  /** Currently selected value (controlled mode) */
  value?: string;
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
  /** Placeholder text for the trigger button */
  placeholder?: string;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Message shown when no options match search */
  emptyMessage?: string;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Additional CSS classes for container */
  className?: string;
  /** Additional CSS classes for trigger button */
  buttonClassName?: string;
  /** Additional CSS classes for popover content */
  popoverClassName?: string;
  /** Whether trigger button should take full width */
  triggerFullWidth?: boolean;
  /** Custom render function for trigger content */
  renderTrigger?: (selectedOption: ComboboxOption | null) => React.ReactNode;
  /** Custom render function for option items */
  renderItem?: (option: ComboboxOption) => React.ReactNode;
}

/**
 * A searchable select component with filtering and custom rendering.
 *
 * Combines a button trigger with a command palette popup for option selection.
 * Built on Command and Popover components, providing search functionality,
 * keyboard navigation, and extensive customization options.
 *
 * @param options - Array of selectable options
 * @param value - Currently selected value
 * @param onValueChange - Callback when selection changes
 * @param placeholder - Trigger button placeholder
 * @param searchPlaceholder - Search input placeholder
 * @param emptyMessage - No results message
 * @param disabled - Whether combobox is disabled
 * @param triggerFullWidth - Whether trigger takes full width
 * @param renderTrigger - Custom trigger renderer
 * @param renderItem - Custom option renderer
 *
 * @component
 * @example
 * ```tsx
 * // Basic combobox
 * <Combobox
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *     { value: "cherry", label: "Cherry" }
 *   ]}
 *   placeholder="Select fruit..."
 *   onValueChange={setFruit}
 * />
 *
 * // With icons and controlled state
 * <Combobox
 *   options={[
 *     { value: "js", label: "JavaScript", leftIcon: JsIcon },
 *     { value: "ts", label: "TypeScript", leftIcon: TsIcon },
 *     { value: "py", label: "Python", leftIcon: PyIcon }
 *   ]}
 *   value={selectedLang}
 *   onValueChange={setSelectedLang}
 *   searchPlaceholder="Search languages..."
 * />
 *
 * // Custom rendering
 * <Combobox
 *   options={users}
 *   renderTrigger={(option) => (
 *     <div className="flex items-center gap-2">
 *       <Avatar size="sm" src={option?.avatar} />
 *       <span>{option?.name}</span>
 *     </div>
 *   )}
 *   renderItem={(option) => (
 *     <div className="flex items-center gap-3">
 *       <Avatar size="xs" src={option.avatar} />
 *       <div>
 *         <div className="font-medium">{option.name}</div>
 *         <div className="text-sm text-gray-500">{option.email}</div>
 *       </div>
 *     </div>
 *   )}
 * />
 * ```
 */
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
  triggerFullWidth = true,
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
        <>
          {selectedOption.leftIcon && (
            <selectedOption.leftIcon className="size-4 shrink-0" />
          )}
          <span className="truncate">{selectedOption.label}</span>
        </>
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
        <div className="flex items-center gap-2 flex-1">
          {option.leftIcon && <option.leftIcon className="size-4 shrink-0" />}
          <span className="truncate">{option.label}</span>
        </div>
        <Check
          className={cx(
            "ml-2 h-4 w-4",
            value === option.value ? "opacity-100" : "opacity-0"
          )}
        />
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
              rightIcon={ChevronsUpDown}
              fullWidth={triggerFullWidth}
              textAlign={triggerFullWidth ? "left" : "center"}
              className={cx(
                !selectedOption && "text-zinc-500 dark:text-zinc-400",
                buttonClassName
              )}
            />
          }
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
        >
          {renderTriggerContent()}
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

/**
 * Hook for managing combobox state in forms.
 *
 * Provides state management for value and open/close state,
 * simplifying combobox integration in forms and controlled components.
 *
 * @param initialValue - Initial selected value
 * @returns Object with value, setValue, open, and setOpen
 *
 * @example
 * ```tsx
 * function UserSelector() {
 *   const { value, setValue, open, setOpen } = useCombobox();
 *
 *   return (
 *     <Combobox
 *       value={value}
 *       onValueChange={setValue}
 *       options={userOptions}
 *       placeholder="Select user..."
 *     />
 *   );
 * }
 *
 * // With initial value
 * const combobox = useCombobox("default-user-id");
 * ```
 */
export function useCombobox(initialValue?: string) {
  const [value, setValue] = React.useState(initialValue || "");
  const [open, setOpen] = React.useState(false);

  return {
    /** Current selected value */
    value,
    /** Update selected value */
    setValue,
    /** Whether popover is open */
    open,
    /** Update popover open state */
    setOpen,
  };
}
