import Image from "next/image";
import { FC, Suspense } from "react";

import projectsImage from "@/modules/home/images/projects.jpg";
import { ProjectsDropdown } from "../ProjectsDropdown";
import { OpenContactModalButton } from "../OpenContactModalButton";
import { TitledSection } from "@/modules/shared/components/ui/titled-section";

export const ProjectsSection: FC = () => {
  return (
    <TitledSection
      title="Proyectos"
      subtitle="¿Cuál es nuestra experiencia?"
      id="projects"
      className="bg-zmain/50 text-white"
      color="white"
    >
      <div className="flex w-full justify-center items-center mt-16">
        <div className="flex gap-20 w-full">
          <div className="relative w-[400px] h-[500px]">
            <Image
              src={projectsImage}
              alt="Proyectos"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-3/4 flex justify-between flex-col">
            <ProjectsDropdown />
            <Suspense>
              <OpenContactModalButton variant="projects">
                ¿Querés que te ayudemos con tu proyecto?
              </OpenContactModalButton>
            </Suspense>
          </div>
        </div>
      </div>
    </TitledSection>
  );
};
