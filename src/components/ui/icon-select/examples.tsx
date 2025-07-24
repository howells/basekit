import React from "react";
import { IconSelect } from "./icon-select";

export function DefaultIconSelectExample() {
  return <IconSelect onValueChange={(icon) => console.log(icon)} />;
}
