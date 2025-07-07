import { FC } from "react";
import { Section } from "@/modules/shared/components";

export const IntegrateSection: FC = () => {
  return (
    <Section title="Servicios" id="services" className="px-4 sm:px-6 lg:px-8">
      {/* Contenido descriptivo */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7 my-8 sm:my-12 lg:my-16 max-w-4xl mx-auto">
        <h1 className="text-black text-base sm:text-xl lg:text-2xl leading-relaxed text-center font-bold">
          Incorporar la sostenibilidad no es una opción, es una ventaja
          competitiva.
        </h1>
        <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed text-center ">
          El mundo cambió y las reglas del juego también. Hoy, consumidores,
          inversores y equipos de trabajo buscan algo más que un producto o
          servicio: quieren marcas con propósito, que generen impacto positivo y
          estén alineadas con los desafíos globales. La sostenibilidad no es
          solo una tendencia, es un diferencial clave que fortalece tu
          reputación, te hace más competitivo y abre nuevas oportunidades de
          negocio.
        </p>
      </div>
    </Section>
  );
};
