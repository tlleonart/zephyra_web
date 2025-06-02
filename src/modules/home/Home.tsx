import Image from "next/image";
import { FC } from "react";

import background from "@/modules/home/images/background.jpg";
import {
  ProjectsSection,
  ServicesSection,
  WelcomeSection,
  ClientsSection,
  TeamSection,
  BlogSection,
} from "@/modules/home/components/";
import { NewsletterForm } from "../shared/components/NewsletterForm";

export const Home: FC = () => {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10">
        <WelcomeSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <BlogSection />
        <NewsletterForm />
        <ClientsSection />
      </div>
    </main>
  );
};
