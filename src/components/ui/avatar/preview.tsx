import React from "react";
import { Avatar } from "./avatar";

// Example component for preview system
export const AvatarExample = ({
  src,
  square = false,
  initials = "DH",
  alt = "Avatar",
  dynamicBackground = true,
  ...props
}: {
  src?: string;
  square?: string | boolean;
  initials?: string;
  alt?: string;
  dynamicBackground?: string | boolean;
  [key: string]: unknown;
}) => {
  const isSquare = square === true || square === "true";
  const isDynamicBackground =
    dynamicBackground === true || dynamicBackground === "true";

  return (
    <Avatar
      src={src || null}
      square={isSquare}
      initials={initials}
      alt={alt}
      dynamicBackground={isDynamicBackground}
      {...props}
    />
  );
};
