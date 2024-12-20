import { FC, HTMLAttributes } from "react";
import Logo from "./Logo";
import Navlink from "./Navlink";

type NavbarVariant = 'header'

export type Navlink = {
    text: string,
    href: string,
}

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    navLinks: Navlink[],
    variant: NavbarVariant
}

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
    return (
        <nav className="container mx-auto flex fl   ex-wrap justify-between items-center">
            <Logo />
            <ul className="hidden md:flex md:flex-wrap md:space-x-4">
                {navLinks.map((link, index) => (
                    <Navlink text={link.text} href={link.href} key={index} />
                ))}
            </ul>
        </nav>
    )
}

export default Navbar