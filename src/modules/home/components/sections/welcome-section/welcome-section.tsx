import { FC } from "react";
import { Section } from "@/modules/shared/components/ui/section";
import { WelcomeBackground } from "./welcome-background";
import { WelcomeContent } from "./welcome-content";

export const WelcomeSection: FC = () => {
  return (
    <Section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <WelcomeBackground />
      <WelcomeContent />
    </Section>
  );
};
