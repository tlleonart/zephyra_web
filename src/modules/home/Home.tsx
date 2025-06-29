import Image from "next/image";
import { FC } from "react";

import background from "@/modules/home/images/background.jpg";
import {
  ProjectsSection,
  ServicesSection,
  ClientsSection,
  BlogSection,
} from "@/modules/home/components/";
import { NewsletterForm } from "../shared/components/NewsletterForm";
import { WelcomeSection } from "./components/sections/welcome-section/welcome-section";
import { TeamSection } from "./components/sections/team-section/team-section";

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
        <ClientsSection />
        <NewsletterForm />
      </div>
    </main>
  );
};
