"use client";

import { addYears, format, isSameMonth } from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import * as React from "react";
import {
  DayPicker,
  useDayPicker,
  useNavigation,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
  type Matcher,
} from "react-day-picker";

import { cx, focusRing } from "@/lib/utils";
import { Button } from "../button/button";

/**
 * Utility type to omit specific keys from a type.
 * 
 * Helper for creating clean interfaces by removing unwanted props
 * from react-day-picker types.
 */
type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

/**
 * Props to omit from react-day-picker interfaces.
 * 
 * These props are either handled internally or not supported
 * in this calendar implementation.
 */
type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";

/**
 * Props for single date selection mode.
 * 
 * Based on react-day-picker's single mode with custom modifications.
 */
type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;

/**
 * Props for date range selection mode.
 * 
 * Based on react-day-picker's range mode with custom modifications.
 */
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

/**
 * Props for the Calendar component.
 * 
 * Supports both single date and date range selection modes
 * with appropriate prop types for each mode.
 */
type CalendarProps =
  | ({
      /** Single date selection mode */
      mode: "single";
    } & SingleProps)
  | ({
      /** Default mode (single date selection) */
      mode?: undefined;
    } & SingleProps)
  | ({
      /** Date range selection mode */
      mode: "range";
    } & RangeProps);

/**
 * A flexible calendar component built on React Day Picker.
 * 
 * Based on React Day Picker (https://daypicker.dev/), providing accessible
 * date selection with single date and date range modes. Features custom styling,
 * localization support, navigation controls, and extensive customization options.
 *
 * @param mode - Selection mode ("single" or "range")
 * @param weekStartsOn - First day of week (0=Sunday, 1=Monday)
 * @param numberOfMonths - Number of months to display
 * @param enableYearNavigation - Show year navigation buttons
 * @param disableNavigation - Disable all navigation
 * @param locale - Date formatting locale
 * @param selected - Selected date(s)
 * @param onSelect - Selection change callback
 * @param disabled - Disabled date matcher(s)
 * @param fromDate - Earliest selectable date
 * @param toDate - Latest selectable date
 *
 * @component
 * @example
 * ```tsx
 * // Single date selection
 * <Calendar
 *   mode="single"
 *   selected={selectedDate}
 *   onSelect={setSelectedDate}
 * />
 *
 * // Date range selection
 * <Calendar
 *   mode="range"
 *   selected={selectedRange}
 *   onSelect={setSelectedRange}
 * />
 *
 * // Multiple months with year navigation
 * <Calendar
 *   mode="single"
 *   numberOfMonths={2}
 *   enableYearNavigation
 *   selected={date}
 *   onSelect={setDate}
 * />
 *
 * // With date constraints
 * <Calendar
 *   mode="single"
 *   selected={selectedDate}
 *   onSelect={setSelectedDate}
 *   fromDate={new Date()}
 *   toDate={addMonths(new Date(), 6)}
 *   disabled={[
 *     { dayOfWeek: [0, 6] }, // Disable weekends
 *     new Date(2024, 0, 1)   // Disable specific date
 *   ]}
 * />
 *
 * // Localized calendar
 * <Calendar
 *   mode="single"
 *   selected={selectedDate}
 *   onSelect={setSelectedDate}
 *   locale={es} // Spanish locale
 *   weekStartsOn={1} // Start week on Monday
 * />
 * ```
 *
 * @see https://daypicker.dev/ - React Day Picker documentation
 */
const Calendar = ({
  mode = "single",
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation,
  locale,
  className,
  classNames,
  ...props
}: CalendarProps & { enableYearNavigation?: boolean }) => {
  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cx(className)}
      classNames={{
        months: "flex space-y-0",
        month: "space-y-4 p-3",
        nav: "hidden",
        table: "w-full border-collapse space-y-1",
        head_cell:
          "w-9 font-medium text-sm sm:text-xs text-center text-zinc-400 dark:text-zinc-600 pb-2",
        row: "w-full mt-0.5",
        cell: cx(
          "relative p-0 text-center focus-within:relative",
          "text-zinc-900 dark:text-zinc-50"
        ),
        day: cx(
          "size-9 rounded-sm text-sm focus:z-10",
          "text-zinc-900 dark:text-zinc-50",
          "hover:bg-zinc-200 dark:hover:bg-zinc-700",
          focusRing
        ),
        day_today: "font-semibold bg-blue-50 dark:bg-blue-950/50",
        day_selected: cx(
          "rounded-sm",
          "aria-selected:bg-blue-500 aria-selected:text-white",
          "dark:aria-selected:bg-blue-500 dark:aria-selected:text-white"
        ),
        day_disabled:
          "text-zinc-300! dark:text-zinc-700! line-through disabled:hover:bg-transparent",
        day_outside: "text-zinc-400 dark:text-zinc-600",
        day_range_middle: cx(
          "rounded-none!",
          "aria-selected:bg-zinc-100! aria-selected:text-zinc-900!",
          "dark:aria-selected:bg-zinc-900! dark:aria-selected:text-zinc-50!"
        ),
        day_range_start: "rounded-r-none rounded-l!",
        day_range_end: "rounded-l-none rounded-r!",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft aria-hidden="true" className="size-4" />,
        IconRight: () => <ChevronRight aria-hidden="true" className="size-4" />,
        Caption: ({ ...props }) => {
          const {
            goToMonth,
            nextMonth,
            previousMonth,
            currentMonth,
            displayMonths,
          } = useNavigation();
          const { numberOfMonths, fromDate, toDate } = useDayPicker();

          const displayIndex = displayMonths.findIndex((month) =>
            isSameMonth(props.displayMonth, month)
          );
          const isFirst = displayIndex === 0;
          const isLast = displayIndex === displayMonths.length - 1;

          const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast);
          const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst);

          const goToPreviousYear = () => {
            const targetMonth = addYears(currentMonth, -1);
            if (
              previousMonth &&
              (!fromDate || targetMonth.getTime() >= fromDate.getTime())
            ) {
              goToMonth(targetMonth);
            }
          };

          const goToNextYear = () => {
            const targetMonth = addYears(currentMonth, 1);
            if (
              nextMonth &&
              (!toDate || targetMonth.getTime() <= toDate.getTime())
            ) {
              goToMonth(targetMonth);
            }
          };

          return (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {enableYearNavigation && !hidePreviousButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={
                      disableNavigation ||
                      !previousMonth ||
                      (fromDate &&
                        addYears(currentMonth, -1).getTime() <
                          fromDate.getTime())
                    }
                    aria-label="Go to previous year"
                    onClick={goToPreviousYear}
                  >
                    <ChevronsLeft className="size-4" />
                  </Button>
                )}
                {!hidePreviousButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous month"
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                )}
              </div>

              <div
                role="presentation"
                aria-live="polite"
                className="text-sm font-medium capitalize tabular-nums text-zinc-900 dark:text-zinc-50"
              >
                {format(props.displayMonth, "LLLL yyy", { locale })}
              </div>

              <div className="flex items-center gap-1">
                {!hideNextButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next month"
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                )}
                {enableYearNavigation && !hideNextButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={
                      disableNavigation ||
                      !nextMonth ||
                      (toDate &&
                        addYears(currentMonth, 1).getTime() > toDate.getTime())
                    }
                    aria-label="Go to next year"
                    onClick={goToNextYear}
                  >
                    <ChevronsRight className="size-4" />
                  </Button>
                )}
              </div>
            </div>
          );
        },
      }}
      {...(props as SingleProps & RangeProps)}
    />
  );
};

Calendar.displayName = "Calendar";

export { Calendar, type CalendarProps, type Matcher };
