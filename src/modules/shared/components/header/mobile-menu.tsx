import { FC, useEffect, useRef } from "react";
import { NavigationLink } from "./navigation-link";
import { headerLinks } from "../../lib/header-links";
import { cn } from "../../lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      className={cn(
        "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw]",
        "bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg",
        "border-l border-white/10 shadow-2xl",

        "transform transition-transform duration-300 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
    >
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-semibold text-white">Navegación</h2>
      </div>

      <nav
        className="flex-1 py-4"
        role="navigation"
        aria-label="Navegación móvil"
      >
        {headerLinks.map((link) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            text={link.text}
            variant="mobile"
            onClick={onClose}
          />
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <p className="text-sm text-white/60 text-center">Zephyra Consultora</p>
        <p className="text-xs text-white/40 text-center mt-1">
          Crecimiento y transformación
        </p>
      </div>
    </div>
  );
};
