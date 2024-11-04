import Link from "next/link"
import { FC } from "react"

interface NavlinkProps {
    text: string
    href: string
}

const Navlink: FC<NavlinkProps> = ({ text, href }) => {
    return (
        <Link href={href} className='hover:text-[#8FBC8F] transition-colors'>
            {text}
        </Link>
    )
}

export default Navlink