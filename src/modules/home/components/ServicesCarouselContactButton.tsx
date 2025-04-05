"use client";

import { Button } from "@/modules/shared/components";
import { useContactModal } from "@/modules/shared/infraestructure/hooks/useContactModal";
import { FC } from "react";

export const ServicesCarouselContactButton: FC = () => {
  const { open } = useContactModal();

  return (
    <Button
      className="self-start bg-white text-zmain hover:bg-gray-100 hover:text-zmain"
      onClick={open}
    >
      Contáctanos
    </Button>
  );
};
