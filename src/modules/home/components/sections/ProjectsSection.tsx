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
      className="bg-zmain/50 text-white px-4 sm:px-6 lg:px-8"
      color="white"
    >
      <div className="flex w-full justify-center items-center mt-8 sm:mt-12 lg:mt-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Layout responsive: columna en mobile, fila en desktop */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 w-full items-center">
            {/* Imagen */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:w-[400px] h-64 sm:h-80 lg:h-[500px] mx-auto lg:mx-0 flex-shrink-0">
              <Image
                src={projectsImage}
                alt="Proyectos"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                style={{ objectFit: "cover" }}
                className="rounded-lg lg:rounded-none"
              />
            </div>

            {/* Contenido */}
            <div className="w-full lg:w-3/4 flex flex-col justify-between gap-8 sm:gap-12 lg:gap-16">
              {/* Dropdown de proyectos */}
              <div className="w-full">
                <ProjectsDropdown />
              </div>

              {/* Botón de contacto */}
              <div className="w-full flex justify-center lg:justify-start">
                <Suspense
                  fallback={
                    <div className="w-full max-w-sm h-12 bg-white/20 rounded animate-pulse" />
                  }
                >
                  <OpenContactModalButton variant="projects">
                    ¿Querés que te ayudemos con tu proyecto?
                  </OpenContactModalButton>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TitledSection>
  );
};
