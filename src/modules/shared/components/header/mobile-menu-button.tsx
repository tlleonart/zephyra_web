import { FC } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton: FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="relative text-white hover:bg-white/10 focus:bg-white/10 p-2"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="relative w-6 h-6">
        <Menu
          className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </Button>
  );
};
