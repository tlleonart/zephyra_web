import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Zephyra Consultora",
  description: "Impulsando un futuro sostenible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={monserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
