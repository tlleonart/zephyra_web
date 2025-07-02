import { FC } from "react";
import { WelcomeHeroText } from "./welcome-hero-text";

export const WelcomeContent: FC = () => {
  return (
    <div className="container mx-auto text-white relative z-10 w-full">
      <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        <div className="text-center lg:text-left w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <WelcomeHeroText />
        </div>
      </div>
    </div>
  );
};
