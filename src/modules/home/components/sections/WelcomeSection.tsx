import { Section } from "@/modules/shared/components/ui/section";
import { FC } from "react";

export const WelcomeSection: FC = () => {
  return (
    <Section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <div className="container mx-auto text-white p-24 mt-28 ">
        <p className="text-6xl font-semibold border-l-4 border-zmain px-4">
          Crecimiento y transformación
        </p>
        <p className="text-4xl font-semibold border-l-4 border-zmain px-4">
          En contextos desafiantes
        </p>
      </div>
    </Section>
  );
};
