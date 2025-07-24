/**
 * Infinite Scroll Combobox Component
 *
 * An enhanced version of the Combobox that supports infinite scrolling for large datasets.
 * Perfect for scenarios like icon selection where rendering thousands of options at once
 * would cause performance issues.
 *
 * Features:
 * - Infinite scrolling with automatic data loading
 * - Search functionality with debounced API calls
 * - Loading states and error handling
 * - Virtualization-ready architecture
 * - Configurable page sizes and thresholds
 *
 * @example
 * ```tsx
 * // Icon selection with infinite scroll
 * <InfiniteCombobox
 *   fetchData={async (page, limit, search) => {
 *     const response = await fetch(`/api/icons?page=${page}&limit=${limit}&search=${search}`);
 *     return response.json();
 *   }}
 *   renderItem={(item) => (
 *     <div className="flex items-center gap-2">
 *       <DynamicIcon name={item.toLowerCase()} className="size-4" />
 *       <span>{item}</span>
 *     </div>
 *   )}
 *   placeholder="Search icons..."
 *   onValueChange={setSelectedIcon}
 * />
 * ```
 */

"use client";

import { config } from "@/lib/config";
import { cx } from "@/lib/utils";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
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

/**
 * Data fetching function signature for infinite scroll.
 */
export type InfiniteFetchFunction<T = string> = (
  page: number,
  limit: number,
  search: string
) => Promise<{
  items: T[];
  totalCount: number;
  hasMore: boolean;
}>;

/**
 * Props for the InfiniteCombobox component.
 */
export interface InfiniteComboboxProps<T = string> {
  /** Function to fetch data for each page */
  fetchData: InfiniteFetchFunction<T>;
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
  /** Placeholder text for the trigger button */
  placeholder?: string;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Message shown when no items found */
  emptyMessage?: string;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional CSS classes for trigger button */
  buttonClassName?: string;
  /** Additional CSS classes for popover content */
  popoverClassName?: string;
  /** Whether trigger button should take full width */
  triggerFullWidth?: boolean;
  /** Items per page (default: 50) */
  pageSize?: number;
  /** Search debounce delay in ms (default: 300) */
  searchDebounce?: number;
  /** Custom render function for items */
  renderItem?: (item: T, isSelected: boolean) => React.ReactNode;
  /** Custom render function for trigger content */
  renderTrigger?: (selectedItem: T | null) => React.ReactNode;
  /** Function to convert item to string value */
  getItemValue?: (item: T) => string;
  /** Function to get display label for item */
  getItemLabel?: (item: T) => string;
  /** Stroke width for icons */
  iconStrokeWidth?: number;
}

/**
 * Infinite scroll combobox for large datasets.
 *
 * Efficiently handles thousands of items by loading data on-demand
 * and only rendering visible items in the dropdown.
 */
export function InfiniteCombobox<T = string>({
  fetchData,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No items found.",
  disabled = false,
  className,
  buttonClassName,
  popoverClassName,
  triggerFullWidth = true,
  pageSize = 50,
  searchDebounce = 300,
  renderItem,
  renderTrigger,
  getItemValue = (item: T) => String(item),
  getItemLabel = (item: T) => String(item),
  iconStrokeWidth = config.getIconStrokeWidth(),
}: InfiniteComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [totalCount, setTotalCount] = React.useState(0);
  const [error, setError] = React.useState<string | null>(null);

  // Refs for scroll detection
  const listRef = React.useRef<HTMLDivElement>(null);
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const loadMoreRef = React.useRef<HTMLDivElement>(null);

  // Debounced search
  const debouncedSearch = React.useMemo(() => {
    const timeoutRef = { current: null as NodeJS.Timeout | null };

    return (searchTerm: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setSearch(searchTerm);
        setPage(0);
        setItems([]);
        setHasMore(true);
      }, searchDebounce);
    };
  }, [searchDebounce]);

  // Load data function
  const loadData = React.useCallback(
    async (pageNum: number, searchTerm: string, append = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const result = await fetchData(pageNum, pageSize, searchTerm);

        setItems((prev) =>
          append ? [...prev, ...result.items] : result.items
        );
        setHasMore(result.hasMore);
        setTotalCount(result.totalCount);
        setPage(pageNum);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    },
    [fetchData, pageSize, loading]
  );

  // Initial load and search changes
  React.useEffect(() => {
    if (open) {
      loadData(0, search, false);
    }
  }, [open, search, loadData]);

  // Intersection observer for infinite scroll
  React.useEffect(() => {
    if (!open || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadData(page + 1, search, true);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [open, hasMore, loading, page, search, loadData]);

  // Find selected item
  const selectedItem =
    items.find((item) => getItemValue(item) === value) || null;

  // Render trigger content
  const renderTriggerContent = () => {
    if (renderTrigger) {
      return renderTrigger(selectedItem);
    }

    if (selectedItem) {
      return <span className="truncate">{getItemLabel(selectedItem)}</span>;
    }

    return placeholder;
  };

  // Render item content
  const renderItemContent = (item: T) => {
    const isSelected = getItemValue(item) === value;

    if (renderItem) {
      return renderItem(item, isSelected);
    }

    return (
      <>
        <div className="flex items-center gap-2 flex-1">
          <span className="truncate">{getItemLabel(item)}</span>
        </div>
        <Check
          className={cx(
            "ml-2 h-4 w-4 shrink-0",
            isSelected ? "opacity-100" : "opacity-0"
          )}
          strokeWidth={iconStrokeWidth}
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
                !selectedItem && "text-zinc-500 dark:text-zinc-400",
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
          <Command className="border-0" shouldFilter={false}>
            <CommandInput
              placeholder={searchPlaceholder}
              onValueChange={debouncedSearch}
            />
            <CommandList ref={listRef}>
              {error ? (
                <CommandEmpty>Error: {error}</CommandEmpty>
              ) : items.length === 0 && !loading ? (
                <CommandEmpty>{emptyMessage}</CommandEmpty>
              ) : (
                <CommandGroup>
                  {items.map((item, index) => (
                    <CommandItem
                      key={`${getItemValue(item)}-${index}`}
                      value={getItemValue(item)}
                      onSelect={(currentValue: string) => {
                        const newValue =
                          currentValue === value ? "" : currentValue;
                        onValueChange?.(newValue);
                        setOpen(false);
                      }}
                      className="flex items-center"
                    >
                      {renderItemContent(item)}
                    </CommandItem>
                  ))}

                  {/* Loading indicator and infinite scroll trigger */}
                  {hasMore && (
                    <div
                      ref={loadMoreRef}
                      className="flex items-center justify-center p-4"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Loader2
                            className="h-4 w-4 animate-spin"
                            strokeWidth={iconStrokeWidth}
                          />
                          Loading more...
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          Scroll for more ({totalCount} total)
                        </div>
                      )}
                    </div>
                  )}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

/**
 * Hook for managing infinite combobox state.
 */
export function useInfiniteCombobox<T = string>(initialValue?: string) {
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
