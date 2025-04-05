"use client";

import { Button } from "@/modules/shared/components";
import { useContactModal } from "@/modules/shared/infraestructure/hooks/useContactModal";
import { cn } from "@/modules/shared/lib/utils";
import { FC, ReactNode } from "react";

interface OpenContactModalButtonProps {
  variant?: "projects";
  children: ReactNode;
}

export const OpenContactModalButton: FC<OpenContactModalButtonProps> = ({
  variant,
  children,
}) => {
  const { open } = useContactModal();

  return (
    <Button
      variant="outline"
      onClick={open}
      className={cn(variant === "projects" && "")}
    >
      {children}
    </Button>
  );
};
