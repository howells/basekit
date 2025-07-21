"use client";

import { cx } from "@/lib/utils";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Responsive breakpoint type
type ResponsiveValue<T> =
  | T
  | {
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

// Grid variants
const gridVariants = tv({
  base: [
    "relative w-full h-full min-h-[200px]",
    // Grid background pattern
    "bg-[linear-gradient(to_right,_rgb(226_232_240)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(226_232_240)_1px,_transparent_1px)]",
    "dark:bg-[linear-gradient(to_right,_rgb(51_65_85)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(51_65_85)_1px,_transparent_1px)]",
  ],
  variants: {
    showColumnGuides: {
      true: "",
      false: "bg-none",
    },
    showRowGuides: {
      true: "",
      false: "[background-image:none]",
    },
  },
  compoundVariants: [
    {
      showColumnGuides: false,
      showRowGuides: false,
      class: "bg-none [background-image:none]",
    },
    {
      showColumnGuides: false,
      showRowGuides: true,
      class:
        "bg-[linear-gradient(to_bottom,_rgb(226_232_240)_1px,_transparent_1px)] dark:bg-[linear-gradient(to_bottom,_rgb(51_65_85)_1px,_transparent_1px)]",
    },
    {
      showColumnGuides: true,
      showRowGuides: false,
      class:
        "bg-[linear-gradient(to_right,_rgb(226_232_240)_1px,_transparent_1px)] dark:bg-[linear-gradient(to_right,_rgb(51_65_85)_1px,_transparent_1px)]",
    },
  ],
  defaultVariants: {
    showColumnGuides: true,
    showRowGuides: true,
  },
});

// Grid cell variants
const gridCellVariants = tv({
  base: [
    "relative flex items-center justify-center",
    "bg-zinc-100 dark:bg-zinc-800",
    "border border-zinc-200 dark:border-zinc-700",
    "text-zinc-900 dark:text-zinc-100",
    "font-medium text-sm",
    "transition-all duration-200",
  ],
  variants: {
    solid: {
      true: "bg-white dark:bg-zinc-900 shadow-sm",
      false: "bg-zinc-50/80 dark:bg-zinc-800/80",
    },
    overlay: {
      true: "z-10 shadow-lg border-2 border-blue-200 dark:border-blue-800",
      false: "",
    },
  },
  defaultVariants: {
    solid: false,
    overlay: false,
  },
});

// Helper function to generate responsive grid styles
const generateResponsiveGridStyles = (
  columns: ResponsiveValue<number> | undefined,
  rows: ResponsiveValue<number> | undefined
): string => {
  const styles: string[] = [];
  const breakpoints = {
    sm: "sm:",
    md: "md:",
    lg: "lg:",
    xl: "xl:",
    "2xl": "2xl:",
  };

  // Handle columns
  if (columns !== undefined) {
    if (typeof columns === "object") {
      Object.entries(columns).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          const prefix =
            breakpoints[breakpoint as keyof typeof breakpoints] || "";
          styles.push(`${prefix}grid-cols-${value}`);
          styles.push(`${prefix}[background-size:${100 / value}%_20px]`);
        }
      });
    } else {
      styles.push(`grid-cols-${columns}`);
      styles.push(`[background-size:${100 / columns}%_20px]`);
    }
  }

  // Handle rows
  if (rows !== undefined) {
    if (typeof rows === "object") {
      Object.entries(rows).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          const prefix =
            breakpoints[breakpoint as keyof typeof breakpoints] || "";
          styles.push(`${prefix}grid-rows-${value}`);
        }
      });
    } else {
      styles.push(`grid-rows-${rows}`);
    }
  }

  return styles.join(" ");
};

// Helper function to get base value for variants
const getBaseValue = <T,>(
  value: ResponsiveValue<T> | undefined
): T | undefined => {
  if (!value) return undefined;
  if (typeof value === "object" && value !== null) {
    const responsiveObj = value as {
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };
    return responsiveObj.sm || responsiveObj.md || responsiveObj.lg;
  }
  return value as T;
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns - can be responsive
   */
  columns?: ResponsiveValue<number>;
  /**
   * Number of rows - can be responsive
   */
  rows?: ResponsiveValue<number>;
  /**
   * Gap between grid items
   */
  gap?: number;
  /**
   * Whether to show column guides
   */
  showColumnGuides?: boolean;
  /**
   * Whether to show row guides
   */
  showRowGuides?: boolean;
  /**
   * Grid content
   */
  children?: React.ReactNode;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 6,
      rows,
      gap = 4,
      showColumnGuides = true,
      showRowGuides = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const responsiveGridStyles = generateResponsiveGridStyles(columns, rows);

    return (
      <div
        ref={ref}
        className={cx(
          "grid",
          `gap-${gap}`,
          gridVariants({
            showColumnGuides,
            showRowGuides,
          }),
          responsiveGridStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

interface GridCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the cell should have a solid background (occludes guides)
   */
  solid?: boolean;
  /**
   * Whether the cell should overlay other cells
   */
  overlay?: boolean;
  /**
   * Column span
   */
  colSpan?: number;
  /**
   * Row span
   */
  rowSpan?: number;
  /**
   * Column start position
   */
  colStart?: number;
  /**
   * Row start position
   */
  rowStart?: number;
  /**
   * Cell content
   */
  children?: React.ReactNode;
}

const GridCell = React.forwardRef<HTMLDivElement, GridCellProps>(
  (
    {
      solid = false,
      overlay = false,
      colSpan,
      rowSpan,
      colStart,
      rowStart,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const spanClasses = [
      colSpan && `col-span-${colSpan}`,
      rowSpan && `row-span-${rowSpan}`,
      colStart && `col-start-${colStart}`,
      rowStart && `row-start-${rowStart}`,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={cx(
          gridCellVariants({
            solid,
            overlay,
          }),
          spanClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridCell.displayName = "GridCell";

// Helper component for auto-flowing numbered cells
interface GridAutoProps extends Omit<GridProps, "children"> {
  /**
   * Number of cells to generate
   */
  cellCount?: number;
  /**
   * Whether cells should be solid
   */
  solidCells?: boolean;
  /**
   * Custom cell renderer
   */
  renderCell?: (index: number) => React.ReactNode;
}

const GridAuto = React.forwardRef<HTMLDivElement, GridAutoProps>(
  ({ cellCount = 6, solidCells = false, renderCell, ...gridProps }, ref) => {
    return (
      <Grid ref={ref} {...gridProps}>
        {Array.from({ length: cellCount }, (_, index) => (
          <GridCell key={index} solid={solidCells}>
            {renderCell ? renderCell(index) : index + 1}
          </GridCell>
        ))}
      </Grid>
    );
  }
);

GridAuto.displayName = "GridAuto";

export {
  Grid,
  GridAuto,
  GridCell,
  gridCellVariants,
  gridVariants,
  type GridCellProps,
  type GridProps,
  type ResponsiveValue,
};
