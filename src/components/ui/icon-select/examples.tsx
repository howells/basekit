import React from "react";
import { IconSelect } from "@/components/ui/icon-select";

export function DefaultIconSelectExample() {
  return <IconSelect onValueChange={(icon) => console.log(icon)} />;
}