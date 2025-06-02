import { FC, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface TitledSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  color?: string;
}

export const TitledSection: FC<TitledSectionProps> = ({
  title,
  subtitle,
  children,
  className,
  color = "black",
  ...props
}) => {
  return (
    <section
      className={cn(
        className,
        "py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10 mt-10"
      )}
      {...props}
    >
      <div className="container mx-auto px-24">
        <h3 id={props.id}>{title}</h3>
        <div className={`w-full border-t-2 border-${color} my-2`} />
        <div>
          <h1 className="text-3xl font-semibold">{subtitle}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
