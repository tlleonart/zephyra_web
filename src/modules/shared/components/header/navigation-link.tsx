"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { cn } from "../../lib/utils";

interface NavigationLinkProps {
  href: string;
  text: string;
  variant: "desktop" | "mobile";
  onClick?: () => void;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  href,
  text,
  variant,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (variant === "desktop") {
    return (
      <Link
        href={href}
        className={cn(
          "relative px-4 py-2 text-white font-medium transition-all duration-300",
          "hover:text-primary focus:text-primary",
          "focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
          "rounded-md",

          isActive && "text-primary"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {text}

        <span
          className={cn(
            "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300",
            "w-0 group-hover:w-3/4",
            isActive ? "w-3/4" : "w-0 hover:w-3/4"
          )}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block px-6 py-4 text-lg font-medium text-white transition-all duration-200",
        "hover:bg-white/10 hover:text-primary active:bg-white/20",
        "focus:outline-none focus:bg-white/10 focus:text-primary",
        "border-l-4 border-transparent hover:border-primary",
        isActive && "border-primary text-primary bg-white/5"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {text}
    </Link>
  );
};
