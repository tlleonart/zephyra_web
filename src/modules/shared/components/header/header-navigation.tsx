import { FC } from "react";
import { NavigationLink } from "./navigation-link";
import { headerLinks } from "../../lib/header-links";

export const HeaderNavigation: FC = () => {
  return (
    <nav
      className="flex items-center space-x-1 xl:space-x-2"
      role="navigation"
      aria-label="Navegación principal"
    >
      {headerLinks.map((link) => (
        <NavigationLink
          key={link.href}
          href={link.href}
          text={link.text}
          variant="desktop"
        />
      ))}
    </nav>
  );
};
