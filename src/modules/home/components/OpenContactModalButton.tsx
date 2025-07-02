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
      size="lg"
      className={cn(
        "w-full sm:w-auto max-w-sm mx-auto lg:mx-0 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105",
        variant === "projects" &&
          "text-zmain border-white bg-white/90 hover:bg-white rounded-lg sm:rounded-none"
      )}
    >
      {children}
    </Button>
  );
};
