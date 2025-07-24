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
  type DayPickerProps,
  type DayProps,
  type Matcher,
} from "react-day-picker";

import { cx, focusRing } from "@/lib/utils";
import { Button } from "../button/button";

/**
 * Props for the Calendar component.
 *
 * Extends DayPicker props with additional calendar-specific options.
 */
type CalendarProps = DayPickerProps & {
  /** Show year navigation buttons */
  enableYearNavigation?: boolean;
};

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
}: CalendarProps) => {
  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cx("p-3", className)}
      classNames={{
        months: "flex space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: cx(
          "text-sm font-medium text-gray-900 dark:text-gray-50",
          "capitalize tabular-nums"
        ),
        nav: "hidden", // We'll use custom navigation
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: cx(
          "w-9 font-medium text-sm text-center",
          "text-gray-400 dark:text-gray-600 pb-2"
        ),
        week: "flex w-full mt-0.5",
        day: "relative p-0 text-center focus-within:relative",
        day_button: cx(
          // Base styles
          "h-9 w-9 p-0 font-normal text-sm",
          "inline-flex items-center justify-center whitespace-nowrap rounded-md",
          "transition-colors",
          // Default state
          "text-gray-900 dark:text-gray-50",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          // Focus styles
          focusRing,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        ),
        day_today: cx("bg-gray-100 dark:bg-gray-800", "font-semibold"),
        day_selected: cx(
          "bg-gray-900 text-gray-50 hover:bg-gray-900 hover:text-gray-50",
          "dark:bg-gray-50 dark:text-gray-900",
          "dark:hover:bg-gray-50 dark:hover:text-gray-900",
          "focus:bg-gray-900 focus:text-gray-50",
          "dark:focus:bg-gray-50 dark:focus:text-gray-900"
        ),
        day_disabled: cx(
          "text-gray-400 dark:text-gray-600",
          "opacity-50 cursor-not-allowed",
          "hover:bg-transparent dark:hover:bg-transparent"
        ),
        day_outside: cx("text-gray-400 dark:text-gray-600", "opacity-50"),
        day_range_middle: cx(
          "aria-selected:bg-gray-100 aria-selected:text-gray-900",
          "dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50",
          "rounded-none"
        ),
        day_range_start: cx("rounded-r-none"),
        day_range_end: cx("rounded-l-none"),
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) => {
          if (orientation === "left") {
            return (
              <ChevronLeft
                aria-hidden="true"
                className="h-4 w-4"
                {...chevronProps}
              />
            );
          }
          return (
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4"
              {...chevronProps}
            />
          );
        },
        MonthCaption: ({ ...captionProps }) => {
          const { goToMonth, nextMonth, previousMonth, months } =
            useDayPicker();

          const currentMonth = captionProps.calendarMonth.date;
          const displayIndex = captionProps.displayIndex;
          const isFirst = displayIndex === 0;
          const isLast = displayIndex === months.length - 1;

          const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast);
          const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst);

          const goToPreviousYear = () => {
            const targetMonth = addYears(currentMonth, -1);
            if (previousMonth) {
              goToMonth(targetMonth);
            }
          };

          const goToNextYear = () => {
            const targetMonth = addYears(currentMonth, 1);
            if (nextMonth) {
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
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous year"
                    onClick={goToPreviousYear}
                    className={cx(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                      "border-gray-300 dark:border-gray-700",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                )}
                {!hidePreviousButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous month"
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                    className={cx(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                      "border-gray-300 dark:border-gray-700",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div
                role="presentation"
                aria-live="polite"
                className={cx(
                  "text-sm font-medium capitalize tabular-nums",
                  "text-gray-900 dark:text-gray-50"
                )}
              >
                {format(currentMonth, "LLLL yyy", { locale })}
              </div>

              <div className="flex items-center gap-1">
                {!hideNextButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next month"
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                    className={cx(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                      "border-gray-300 dark:border-gray-700",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
                {enableYearNavigation && !hideNextButton && (
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next year"
                    onClick={goToNextYear}
                    className={cx(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                      "border-gray-300 dark:border-gray-700",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          );
        },
      }}
      disableNavigation={disableNavigation}
      {...props}
    />
  );
};

Calendar.displayName = "Calendar";

export { Calendar, type CalendarProps, type Matcher };
