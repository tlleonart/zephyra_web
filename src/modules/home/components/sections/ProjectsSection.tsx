import Image from "next/image";
import { FC, Suspense } from "react";

import { Section } from "@/modules/shared/components/ui/section";
import projectsImage from "@/modules/home/images/projects.jpg";
import { ProjectsDropdown } from "../ProjectsDropdown";
import { OpenContactModalButton } from "../OpenContactModalButton";

export const ProjectsSection: FC = () => {
  return (
    <Section
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10"
      id="projects"
    >
      <div className="w-full">
        <h3>Proyectos</h3>
        <div className="w-full border-t-2 border-black my-2" />
        <div>
          <h1 className="text-3xl font-semibold">
            ¿Cuál es nuestra experiencia?
          </h1>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
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
              <OpenContactModalButton>
                ¿Querés que te ayudemos con tu proyecto?
              </OpenContactModalButton>
            </Suspense>
          </div>
        </div>
      </div>
    </Section>
  );
};
