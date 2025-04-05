"use client";

import { FC } from "react";
import { useContactModal } from "../../infraestructure/hooks/useContactModal";
import { BaseModal } from "./BaseModal";
import ContactForm from "../ContactForm";

export const ContactModal: FC = () => {
  const { isOpen, setIsOpen } = useContactModal();

  return (
    <BaseModal open={isOpen} onOpenChange={setIsOpen}>
      <ContactForm />
    </BaseModal>
  );
};
