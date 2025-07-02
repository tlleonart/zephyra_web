import { FC } from "react";
import { Section } from "@/modules/shared/components/ui/section";
import { WelcomeBackground } from "./welcome-background";
import { WelcomeContent } from "./welcome-content";

export const WelcomeSection: FC = () => {
  return (
    <Section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <WelcomeBackground />
      <WelcomeContent />
    </Section>
  );
};
