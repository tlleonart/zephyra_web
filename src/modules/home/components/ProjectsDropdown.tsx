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
    <Accordion type="single" collapsible>
      {projects.map(({ title, description, slug }, index) => (
        <AccordionItem value={slug} key={index}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <p className="mb-10">{description}</p>
            {/* <Link href={slug} className="text-zmain cursor-pointer">
              Leer más...
            </Link> */}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
