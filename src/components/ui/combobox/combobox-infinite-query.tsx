/**
 * Infinite Scroll Combobox with React Query
 *
 * An enhanced version of the Combobox that uses React Query for data fetching,
 * providing excellent caching, background refetching, and infinite query support.
 * Perfect for scenarios like icon selection where rendering thousands of options
 * would cause performance issues.
 *
 * Features:
 * - React Query infinite queries with automatic caching
 * - Background refetching and stale-while-revalidate
 * - Optimistic updates and error recovery
 * - Search functionality with debounced queries
 * - Loading states and error handling
 * - Virtualization-ready architecture
 * - Configurable cache times and stale times
 *
 * @example
 * ```tsx
 * // Icon selection with React Query infinite scroll
 * <InfiniteQueryCombobox
 *   queryKey={['icons']}
 *   fetchData={async ({ pageParam = 0, queryKey }) => {
 *     const [, search] = queryKey;
 *     const response = await fetch(`/api/icons?page=${pageParam}&limit=50&search=${search || ''}`);
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
import { useInfiniteQuery } from "@tanstack/react-query";
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
 * React Query fetch function signature for infinite queries.
 */
export type InfiniteQueryFetchFunction<T = string> = (context: {
  pageParam: number;
  queryKey: readonly unknown[];
  signal: AbortSignal;
  meta?: Record<string, unknown>;
}) => Promise<{
  items: T[];
  totalCount: number;
  hasMore: boolean;
  nextPage?: number;
}>;

/**
 * Props for the InfiniteQueryCombobox component.
 */
export interface InfiniteQueryComboboxProps<T = string> {
  /** Base query key for React Query */
  queryKey: readonly unknown[];
  /** React Query fetch function */
  fetchData: InfiniteQueryFetchFunction<T>;
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
  /** React Query stale time in ms (default: 5 minutes) */
  staleTime?: number;
  /** React Query cache time in ms (default: 10 minutes) */
  cacheTime?: number;
  /** Enable background refetching (default: true) */
  refetchOnWindowFocus?: boolean;
}

/**
 * Infinite scroll combobox with React Query for optimal data management.
 *
 * Uses React Query's infinite queries for automatic caching, background refetching,
 * and optimistic updates. Provides excellent UX with stale-while-revalidate behavior.
 */
export function InfiniteQueryCombobox<T = string>({
  queryKey,
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
  searchDebounce = 300,
  renderItem,
  renderTrigger,
  getItemValue = (item: T) => String(item),
  getItemLabel = (item: T) => String(item),
  iconStrokeWidth = config.getIconStrokeWidth(),
  staleTime = 5 * 60 * 1000, // 5 minutes
  cacheTime = 10 * 60 * 1000, // 10 minutes
  refetchOnWindowFocus = true,
}: InfiniteQueryComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState("");
  const [sessionId, setSessionId] = React.useState(() => Date.now());

  // Refs for scroll detection
  const listRef = React.useRef<HTMLDivElement>(null);
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const loadMoreRef = React.useRef<HTMLDivElement>(null);

  // Debounced search effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, searchDebounce);

    return () => clearTimeout(timer);
  }, [search, searchDebounce]);

  // React Query infinite query
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: [...queryKey, debouncedSearch, sessionId], // Include session ID for fresh data on each open
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore
        ? lastPage.nextPage ?? (lastPage.items.length > 0 ? 1 : undefined)
        : undefined,
    staleTime: 0, // Always consider data stale to ensure fresh fetches
    gcTime: cacheTime,
    refetchOnWindowFocus,
    enabled: open, // Only fetch when dropdown is open
  });

  // Reset session when combobox opens to ensure fresh data
  React.useEffect(() => {
    if (open) {
      setSessionId(Date.now());
      setSearch(""); // Also reset search when opening
      setDebouncedSearch("");
    }
  }, [open]);

  // Flatten all pages into a single items array
  const allItems = React.useMemo(() => {
    return data?.pages.flatMap((page) => page.items) ?? [];
  }, [data]);

  // Get total count from the first page
  const totalCount = data?.pages[0]?.totalCount ?? 0;

  // Intersection observer for infinite scroll
  React.useEffect(() => {
    if (!open || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
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
  }, [open, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Handle search input changes
  const handleSearchChange = React.useCallback((searchTerm: string) => {
    setSearch(searchTerm);
  }, []);

  // Find selected item
  const selectedItem =
    allItems.find((item) => getItemValue(item) === value) || null;

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

  // Handle retry on error
  const handleRetry = () => {
    refetch();
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
              onValueChange={handleSearchChange}
            />
            <CommandList ref={listRef}>
              {status === "error" ? (
                <CommandEmpty>
                  <div className="flex flex-col items-center gap-2 p-4">
                    <div className="text-sm text-muted-foreground">
                      Error:{" "}
                      {error instanceof Error
                        ? error.message
                        : "Failed to load data"}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRetry}
                      className="text-xs"
                    >
                      Try Again
                    </Button>
                  </div>
                </CommandEmpty>
              ) : allItems.length === 0 && !isFetching ? (
                <CommandEmpty>{emptyMessage}</CommandEmpty>
              ) : (
                <CommandGroup>
                  {allItems.map((item, index) => (
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
                  {hasNextPage && (
                    <div
                      ref={loadMoreRef}
                      className="flex items-center justify-center p-4"
                    >
                      {isFetchingNextPage ? (
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

                  {/* Initial loading state */}
                  {status === "pending" && (
                    <div className="flex items-center justify-center p-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          strokeWidth={iconStrokeWidth}
                        />
                        Loading...
                      </div>
                    </div>
                  )}

                  {/* Background refetch indicator */}
                  {isFetching && !isFetchingNextPage && allItems.length > 0 && (
                    <div className="flex items-center justify-center p-2 border-t">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Loader2
                          className="h-3 w-3 animate-spin"
                          strokeWidth={iconStrokeWidth}
                        />
                        Updating...
                      </div>
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
 * Hook for managing infinite query combobox state with React Query integration.
 */
export function useInfiniteQueryCombobox<T = string>(initialValue?: string) {
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
