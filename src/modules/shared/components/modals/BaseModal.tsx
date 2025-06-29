import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { cn } from "../../lib/utils";

interface BaseModalProps {
  children: ReactNode;
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export const BaseModal: FC<BaseModalProps> = ({
  children,
  title,
  description,
  open,
  onOpenChange,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md md:max-w-lg",
    lg: "max-w-lg md:max-w-xl lg:max-w-2xl",
    xl: "max-w-xl md:max-w-2xl lg:max-w-4xl",
    full: "max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw]",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          sizeClasses[size],

          "w-[95vw] md:w-full",
          "max-h-[90vh] md:max-h-[85vh]",
          "rounded-xl md:rounded-2xl",
          "border shadow-2xl",

          "overflow-hidden flex flex-col",

          "animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2",
          "duration-200",

          className
        )}
        aria-describedby={description ? "modal-description" : undefined}
      >
        {(title || description) && (
          <DialogHeader className="px-6 pt-6 pb-4 border-b bg-muted/30">
            {title && (
              <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription
                id="modal-description"
                className="text-center text-muted-foreground mt-2 text-sm md:text-base"
              >
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
