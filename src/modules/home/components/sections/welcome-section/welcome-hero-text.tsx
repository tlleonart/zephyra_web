import { FC } from "react";

export const WelcomeHeroText: FC = () => {
  return (
    <div className="relative z-50 text-white space-y-3 sm:space-y-4 md:space-y-6">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold border-l-4 sm:border-l-6 md:border-l-8 border-zmain pl-4 sm:pl-6 md:pl-8 leading-tight text-center lg:text-left">
        Crecimiento y transformación
      </p>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold border-l-4 sm:border-l-6 md:border-l-8 border-zmain pl-4 sm:pl-6 md:pl-8 leading-tight text-center lg:text-left">
        En contextos desafiantes
      </p>
    </div>
  );
};
