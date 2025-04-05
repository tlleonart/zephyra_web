import { useModal } from "./useModal";

export const useContactModal = () => {
  const { isOpen, setIsOpen, open, close } = useModal("contact-modal");

  return {
    isOpen,
    setIsOpen,
    open,
    close,
  };
};
