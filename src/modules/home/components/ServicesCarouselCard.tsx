import { FC, ReactNode } from "react";
import { ServicesCarouselContactButton } from "./ServicesCarouselContactButton";

interface ServicesCarouselCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const ServicesCarouselCard: FC<ServicesCarouselCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
      <div className="group relative bg-white h-[400px] p-8 flex flex-col items-start transition-all duration-300 hover:bg-zmain">
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          {icon}
          <h2 className="text-2xl font-bold text-gray-900 mt-6">{title}</h2>
        </div>
        <div className="absolute p-8 inset-0 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-white flex-grow">{description}</p>
          <ServicesCarouselContactButton />
        </div>
      </div>
    </div>
  );
};
