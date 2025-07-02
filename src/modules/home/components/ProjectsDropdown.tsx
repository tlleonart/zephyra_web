import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/shared/components/ui/accordion";
import { FC } from "react";

interface ProjectsInterface {
  title: string;
  description: string;
  slug: string;
}

const projects: ProjectsInterface[] = [
  {
    title:
      "Proyecto de innovación socio-ambiental de articulación público-privada",
    description:
      "Este proyecto, iniciado en 2024, busca reducir el impacto ambiental mediante la recolección y reutilización de residuos ópticos, al mismo tiempo que genera un impacto social al utilizarlos como materia prima en talleres barriales.",
    slug: "/projects/innovacion-socio-ambiental",
  },
  {
    title:
      "Diseño e implementación de Planes de género y diversidad corporativa",
    description:
      "Acompañamos a empresas de distintos rubros, en la implementación de la herramienta de ONU Mujeres de diagnóstico de brechas de género.",
    slug: "/projects/diseño-planes-genero",
  },
  {
    title: "Elaboración de Reportes de sostenibilidad",
    description:
      "En colaboración con uno de nuestros aliados, acompañamos estrategias de sostenibilidad a partir de la redacción de reportes  para empresas de distintos rubros.",
    slug: "/projects/reportes-sostenibilidad",
  },
];

export const ProjectsDropdown: FC = () => {
  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2 sm:space-y-3"
      >
        {projects.map(({ title, description, slug }, index) => (
          <AccordionItem
            value={slug}
            key={index}
            className="border-white/20 bg-white/5 rounded-lg px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:no-underline py-4 sm:py-6">
              {title}
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6">
              <p className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base leading-relaxed text-white/90">
                {description}
              </p>
              {/* Comentado para futuras funcionalidades */}
              {/* <Link href={slug} className="text-zmain cursor-pointer hover:underline">
                Leer más...
              </Link> */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
