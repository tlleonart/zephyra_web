import { Section } from "@/modules/shared/components/ui/section";
import { FC, Suspense } from "react";
import { ServicesCarousel } from "../ServicesCarousel";

export const ServicesSection: FC = () => {
  return (
    <Section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10 mt-10">
      <div>
        <h3 id="about">Servicios</h3>
        <div className="w-full border-t-2 border-black my-2" />
        <div>
          <h1 className="text-3xl font-semibold">¿Qué hacemos?</h1>
          <p className="text-black text-lg my-4">
            Convertimos el compromiso con el triple impacto en acciones
            concretas, diseñando e implementando estrategias que hacen de la
            sostenibilidad una realidad tangible para empresas y organizaciones
            públicas y privadas.
          </p>
          <p className="text-black text-lg">
            Asumimos el reto de generar crecimiento y transformación en
            contextos desafiantes, otorgándoles valor agregado a las
            organizaciones y generando soluciones innovadoras y sostenibles.
          </p>
        </div>
      </div>
      <div className="w-full mt-5" id="services">
        <h1 className="text-3xl font-semibold mb-5">Nuestros servicios.</h1>
        <Suspense>
          <ServicesCarousel />
        </Suspense>
      </div>
    </Section>
  );
};
