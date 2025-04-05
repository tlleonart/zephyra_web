import { FC, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const Section: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn(className, "w-full")} {...props}>
      {children}
    </section>
  );
};
