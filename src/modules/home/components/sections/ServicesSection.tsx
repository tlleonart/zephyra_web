import { FC, Suspense } from "react";
import { ServicesCarousel } from "../ServicesCarousel";
import { TitledSection } from "@/modules/shared/components/ui/titled-section";

export const ServicesSection: FC = () => {
  return (
    <TitledSection
      title="Servicios"
      subtitle="¿Qué hacemos?"
      id="services"
      className="px-4 sm:px-6 lg:px-8"
    >
      {/* Contenido descriptivo */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7 my-8 sm:my-12 lg:my-16 max-w-4xl mx-auto">
        <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
          Convertimos el compromiso con el triple impacto en acciones concretas,
          diseñando e implementando estrategias que hacen de la sostenibilidad
          una realidad tangible para empresas y organizaciones públicas y
          privadas.
        </p>
        <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
          Asumimos el reto de generar crecimiento y transformación en contextos
          desafiantes, otorgándoles valor agregado a las organizaciones y
          generando soluciones innovadoras y sostenibles.
        </p>
      </div>

      {/* Sección de servicios */}
      <div className="w-full mt-6 sm:mt-8 lg:mt-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 text-zmain text-center lg:text-left">
          Nuestros servicios
        </h1>
        <Suspense
          fallback={
            <div className="w-full h-96 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Cargando servicios...</div>
            </div>
          }
        >
          <ServicesCarousel />
        </Suspense>
      </div>
    </TitledSection>
  );
};
