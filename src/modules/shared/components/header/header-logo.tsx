import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "@/modules/shared/images/light_logo.png";
import { cn } from "../../lib/utils";

interface HeaderLogoProps {
  isScrolled: boolean;
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ isScrolled }) => {
  return (
    <Link
      href="/"
      className="flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
      aria-label="Ir a la página principal de Zephyra"
    >
      <Image
        src={logo}
        alt="Zephyra Consultora - Logo"
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
            : "w-40 sm:w-48 md:w-56 lg:w-60 h-auto"
        )}
        priority
        quality={90}
        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
      />
    </Link>
  );
};
