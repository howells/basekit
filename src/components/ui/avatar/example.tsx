import React from "react";
import { Avatar } from "./avatar";

// Example component for preview system
export const AvatarExample = ({
  src,
  square = false,
  initials = "JD",
  alt = "Avatar",
  ...props
}: {
  src?: string;
  square?: string | boolean;
  initials?: string;
  alt?: string;
  [key: string]: unknown;
}) => {
  const isSquare = square === true || square === "true";

  return (
    <Avatar
      src={src || null}
      square={isSquare}
      initials={initials}
      alt={alt}
      {...props}
    />
  );
};
