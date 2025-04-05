import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "@/modules/shared/images/light_logo.png";
import { cn } from "@/modules/shared/lib/utils";

type LogoVariant = "nav";

interface LogoProps {
  variant?: LogoVariant;
}

export const Logo: FC<LogoProps> = ({ variant = "nav" }) => {
  return (
    <Link href="/" className={cn(variant == "nav" && "flex items-center")}>
      <Image src={logo} alt="Zephyra Logo" width={240} height={80} priority />
    </Link>
  );
};
