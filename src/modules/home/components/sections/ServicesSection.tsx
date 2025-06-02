import { FC, Suspense } from "react";
import { ServicesCarousel } from "../ServicesCarousel";
import { TitledSection } from "@/modules/shared/components/ui/titled-section";

export const ServicesSection: FC = () => {
  return (
    <TitledSection title="Servicios" subtitle="¿Qué hacemos?" id="services">
      <div className="flex flex-col gap-7 my-16">
        <p className="text-black text-lg">
          Convertimos el compromiso con el triple impacto en acciones concretas,
          diseñando e implementando estrategias que hacen de la sostenibilidad
          una realidad tangible para empresas y organizaciones públicas y
          privadas.
        </p>
        <p className="text-black text-lg">
          Asumimos el reto de generar crecimiento y transformación en contextos
          desafiantes, otorgándoles valor agregado a las organizaciones y
          generando soluciones innovadoras y sostenibles.
        </p>
      </div>
      <div className="w-full mt-5" id="services">
        <h1 className="text-3xl mb-6 text-zmain">Nuestros servicios</h1>
        <Suspense>
          <ServicesCarousel />
        </Suspense>
      </div>
    </TitledSection>
  );
};
