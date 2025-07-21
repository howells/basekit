import React from "react";
import { BarList } from "./bar-list";

// Example component for preview system
export const BarListExample = ({
  data = [
    { name: "New York", value: 400 },
    { name: "London", value: 300 },
    { name: "Tokyo", value: 200 },
    { name: "Paris", value: 100 },
  ],
  valueFormatter,
  showAnimation = false,
  sortOrder = "descending",
  onValueChange,
  ...props
}: {
  data?: Array<{ name: string; value: number; key?: string; href?: string }>;
  valueFormatter?: (value: number) => string;
  showAnimation?: boolean;
  sortOrder?: "ascending" | "descending" | "none";
  onValueChange?: (payload: { name: string; value: number; key?: string; href?: string }) => void;
  [key: string]: unknown;
}) => {
  return (
    <BarList
      data={data}
      valueFormatter={valueFormatter}
      showAnimation={showAnimation}
      sortOrder={sortOrder}
      onValueChange={onValueChange}
      {...props}
    />
  );
};