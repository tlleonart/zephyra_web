import { FC } from "react";
import Navbar from "./Navbar";
import { headerLinks } from "../lib/header-links"

const Header: FC = () => {
    return (
        <header className="text-white bg-zmain p-12">
            <Navbar navLinks={headerLinks} variant="header" />
        </header>
    )
}

export default Header