import React from "react";
import { Text } from "./text";

export function Basic() {
  return (
    <div className="space-y-2">
      <Text>This is a paragraph of text.</Text>
      <Text>This is another text example.</Text>
      <Text>This is a third text example.</Text>
    </div>
  );
}