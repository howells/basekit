import clsx from "clsx";

export type HeadingElementProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function HeadingElement({
  level = 1,
  className,
  ...props
}: HeadingElementProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return <Element {...props} className={clsx(className)} />;
}
