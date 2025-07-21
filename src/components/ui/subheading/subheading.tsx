import clsx from "clsx";
import { HeadingElement, type HeadingElementProps } from "../heading-element";

export type SubheadingProps = HeadingElementProps;

export function Subheading({
  className,
  level = 2,
  ...props
}: SubheadingProps) {
  return (
    <HeadingElement
      level={level}
      className={clsx(
        className,
        "m-0 text-base/7 font-semibold text-current sm:text-sm/6"
      )}
      {...props}
    />
  );
}
