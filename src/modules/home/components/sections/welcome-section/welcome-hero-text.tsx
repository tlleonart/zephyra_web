import { FC } from "react";

export const WelcomeHeroText: FC = () => {
  return (
    <div className="relative z-50   text-white space-y-2 md:space-y-4">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold border-l-2 sm:border-l-3 md:border-l-4 border-zmain px-2 sm:px-3 md:px-4 leading-tight">
        Crecimiento y transformación
      </p>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold border-l-2 sm:border-l-3 md:border-l-4 border-zmain px-2 sm:px-3 md:px-4 leading-tight">
        En contextos desafiantes
      </p>
    </div>
  );
};
