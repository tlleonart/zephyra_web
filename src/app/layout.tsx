import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {
  Header,
  Footer,
  BackgroundDecoration,
} from "@/modules/shared/components/";
import { NuqsAdapter } from "nuqs/adapters/next";
import { ModalContainer } from "@/modules/shared/components/modals/ModalContainer";

const monserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={`${monserrat.className} antialiased`}>
        <NuqsAdapter>
          <ModalContainer />
          <Header />
          <BackgroundDecoration />
          <div className="flex flex-col min-h-screen">{children}</div>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
