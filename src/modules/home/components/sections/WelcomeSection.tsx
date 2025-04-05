import { Section } from "@/modules/shared/components/ui/section";
import { FC } from "react";

export const WelcomeSection: FC = () => {
  return (
    <Section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <div className="container mx-auto text-white p-24 mt-28 text-center space-y-6">
        <p className="text-4xl font-semibold">
          Crecimiento y transformación en contextos desafiantes
        </p>
      </div>
    </Section>
  );
};
