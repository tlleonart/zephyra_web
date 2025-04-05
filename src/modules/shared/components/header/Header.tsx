import { FC } from "react";
import { Logo, Navbar } from "@/modules/shared/components/";
import { headerLinks } from "@/modules/shared/lib/header-links";

export const Header: FC = () => {
  return (
    <header className="absolute top-0 z-50 backdrop-blur-sm p-4 md:p-10 lg:px-8 shadow-md w-full text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar navLinks={headerLinks} variant="header" />
        </div>
      </div>
    </header>
  );
};
