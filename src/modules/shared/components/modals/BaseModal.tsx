import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface BaseModalProps {
  children: ReactNode;
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BaseModal: FC<BaseModalProps> = ({
  children,
  title,
  description,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full rounded-none">
        <DialogHeader className="w-full flex flex-col text-center p-4">
          <DialogTitle className={`text-4xl w-full text-center`}>
            {title}
          </DialogTitle>
          <DialogDescription className="w-full text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
