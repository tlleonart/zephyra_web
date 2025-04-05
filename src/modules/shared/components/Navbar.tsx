import { FC, HTMLAttributes } from "react";
import Navlink from "./Navlink";
import { Button } from "./ui/Button";
import Link from "next/link";

type NavbarVariant = "header";

export type Navlink = {
  text: string;
  href: string;
};

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  navLinks: Navlink[];
  variant: NavbarVariant;
}

export const Navbar: FC<NavbarProps> = ({ navLinks }) => {
  return (
    <nav className="flex justify-between">
      {navLinks.map((link, index) => (
        <Button
          key={index}
          className="h-full w-full rounded-none text-white cursor-pointer"
          variant="link"
        >
          <Link href={link.href}>{link.text}</Link>
        </Button>
      ))}
    </nav>
  );
};
