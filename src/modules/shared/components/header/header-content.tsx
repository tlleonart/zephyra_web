import { FC } from "react";
import { HeaderLogo } from "./header-logo";
import { HeaderNavigation } from "./header-navigation";
import { MobileMenuButton } from "./mobile-menu-button";

interface HeaderContentProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export const HeaderContent: FC<HeaderContentProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled,
}) => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <HeaderLogo isScrolled={isScrolled} />
      </div>
      <div className="hidden lg:block">
        <HeaderNavigation />
      </div>
      <div className="lg:hidden">
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
    </div>
  );
};
