import { FC } from "react";
import { WelcomeHeroText } from "./welcome-hero-text";

export const WelcomeContent: FC = () => {
  return (
    <div className="container mx-auto text-white p-24 mt-28">
      <WelcomeHeroText />
    </div>
  );
};
