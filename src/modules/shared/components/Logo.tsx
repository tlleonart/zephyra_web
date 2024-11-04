import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import logo from '../images/light_logo.png'

type LogoVariant = 'nav'

interface LogoProps {
    variant?: LogoVariant
}

const Logo: FC<LogoProps> = ({ variant = 'nav' }) => {
    return (
        <Link href="/" className={clsx(variant == 'nav' && "flex items-center")}>
            <Image
                src={logo}
                alt="Zephyra Logo"
                width={120}
                height={40}
                priority
            />
        </Link>
    )
}

export default Logo