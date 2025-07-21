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
  useDayRender,
  useNavigation,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
  type Matcher,
} from "react-day-picker";

import { cx, focusRing } from "@/lib/utils";
import { Button } from "../button/button";

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

type CalendarProps =
  | ({
      mode: "single";
    } & SingleProps)
  | ({
      mode?: undefined;
    } & SingleProps)
  | ({
      mode: "range";
    } & RangeProps);

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
        nav: "gap-1 flex items-center rounded-full size-full justify-between p-4",
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
        day_today: "font-semibold",
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
        Day: ({ date, displayMonth }: DayProps) => {
          const buttonRef = React.useRef<HTMLButtonElement>(null);
          const { activeModifiers, buttonProps, divProps, isButton, isHidden } =
            useDayRender(date, displayMonth, buttonRef);

          const { selected, today, disabled, range_middle } = activeModifiers;

          if (isHidden) {
            return <></>;
          }

          if (!isButton) {
            return (
              <div
                {...divProps}
                className={cx(
                  "flex items-center justify-center",
                  divProps.className
                )}
              />
            );
          }

          const {
            children: buttonChildren,
            className: buttonClassName,
            ...buttonPropsRest
          } = buttonProps;

          return (
            <button
              ref={buttonRef}
              {...buttonPropsRest}
              type="button"
              className={cx("relative", buttonClassName)}
            >
              {buttonChildren}
              {today && (
                <span
                  className={cx(
                    "absolute inset-x-1/2 bottom-1.5 h-0.5 w-4 -translate-x-1/2 rounded-[2px]",
                    {
                      "bg-blue-500 dark:bg-blue-500": !selected,
                      "bg-white! dark:bg-zinc-950!": selected,
                      "bg-zinc-400! dark:bg-zinc-600!":
                        selected && range_middle,
                      "bg-zinc-400 text-zinc-400 dark:bg-zinc-400 dark:text-zinc-600":
                        disabled,
                    }
                  )}
                />
              )}
            </button>
          );
        },
      }}
      {...(props as SingleProps & RangeProps)}
    />
  );
};

Calendar.displayName = "Calendar";

export { Calendar, type CalendarProps, type Matcher };
