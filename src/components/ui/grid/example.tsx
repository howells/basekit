"use client";

import React from "react";
import { Grid, GridAuto, GridCell } from "./grid";

// Example component for preview system
export const GridExample = ({
  columns = 3,
  rows = 3,
  gap = 4,
  showColumnGuides = true,
  showRowGuides = true,
  useAutoGrid = false,
  cellCount = 9,
  solidCells = false,
  showSpanning = false,
  showOverlay = false,
  ...props
}: {
  columns?: number;
  rows?: number;
  gap?: number;
  showColumnGuides?: boolean;
  showRowGuides?: boolean;
  useAutoGrid?: boolean;
  cellCount?: number;
  solidCells?: boolean;
  showSpanning?: boolean;
  showOverlay?: boolean;
  [key: string]: unknown;
}) => {
  // Ensure values are numbers (props explorer now passes numbers directly)
  const columnsValue = Number(columns) || 3;
  const rowsValue = Number(rows) || 3;
  const gapValue = Number(gap) || 4;
  const cellCountValue = Number(cellCount) || 9;

  // Use GridAuto for simple numbered grid
  if (useAutoGrid) {
    return (
      <GridAuto
        columns={columnsValue}
        rows={rowsValue}
        gap={gapValue}
        showColumnGuides={showColumnGuides}
        showRowGuides={showRowGuides}
        cellCount={cellCountValue}
        solidCells={solidCells}
        className="h-[300px]"
        {...props}
      />
    );
  }

  // Show spanning example
  if (showSpanning) {
    return (
      <Grid
        columns={columnsValue}
        rows={4}
        gap={gapValue}
        showColumnGuides={showColumnGuides}
        showRowGuides={showRowGuides}
        className="h-[300px]"
        {...props}
      >
        <GridCell colSpan={2} solid={solidCells}>
          Span 2 cols
        </GridCell>
        <GridCell solid={solidCells}>3</GridCell>
        <GridCell solid={solidCells}>4</GridCell>
        <GridCell rowSpan={2} solid={solidCells}>
          Span 2 rows
        </GridCell>
        <GridCell solid={solidCells}>6</GridCell>

        <GridCell solid={solidCells}>7</GridCell>
        <GridCell colSpan={3} solid={solidCells}>
          Span 3 cols
        </GridCell>

        <GridCell colStart={2} colSpan={2} solid={solidCells}>
          Start col 2
        </GridCell>
        <GridCell solid={solidCells}>Last</GridCell>
      </Grid>
    );
  }

  // Show overlay example
  if (showOverlay) {
    return (
      <Grid
        columns={columnsValue}
        rows={3}
        gap={gapValue}
        showColumnGuides={showColumnGuides}
        showRowGuides={showRowGuides}
        className="h-[250px]"
        {...props}
      >
        <GridCell solid={solidCells}>1</GridCell>
        <GridCell overlay solid={solidCells}>
          Overlay
        </GridCell>
        <GridCell solid={solidCells}>3</GridCell>
        <GridCell solid={solidCells}>4</GridCell>
        <GridCell solid={solidCells}>5</GridCell>
        <GridCell solid={solidCells}>6</GridCell>

        <GridCell solid={solidCells}>7</GridCell>
        <GridCell overlay colSpan={2} solid={solidCells}>
          Overlay + Span
        </GridCell>
        <GridCell solid={solidCells}>10</GridCell>
      </Grid>
    );
  }

  // Default basic grid
  const totalCells = Math.min(cellCountValue, 24); // Reasonable limit

  return (
    <Grid
      columns={columnsValue}
      rows={rowsValue}
      gap={gapValue}
      showColumnGuides={showColumnGuides}
      showRowGuides={showRowGuides}
      className="h-[300px]"
      {...props}
    >
      {Array.from({ length: totalCells }, (_, index) => (
        <GridCell key={index} solid={solidCells}>
          {index + 1}
        </GridCell>
      ))}
    </Grid>
  );
};
