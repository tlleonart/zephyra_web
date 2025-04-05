"use client";

import type { FC } from "react";
import { useContactModal } from "@/modules/shared/infraestructure/hooks/useContactModal";
import { Button } from "@/modules/shared/components";

export const CallToAction: FC = () => {
  const { open } = useContactModal();

  return (
    <div className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 relative">
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M45.7,-51.9C59.5,-41.5,71.3,-26.9,74.8,-10.2C78.2,6.5,73.4,25.4,62.4,38.5C51.4,51.6,34.3,59,16.3,65.3C-1.7,71.6,-20.7,76.9,-36.8,71.1C-52.9,65.3,-66.2,48.5,-72.9,29.5C-79.6,10.5,-79.7,-10.7,-71.8,-27.8C-63.9,-44.9,-48,-57.9,-31.8,-67.2C-15.6,-76.4,0.8,-81.9,15.8,-77.1C30.8,-72.3,31.9,-62.3,45.7,-51.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Te interesa profundizar en este tema?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl">
            Nuestro equipo de expertos puede ayudarte a implementar estas
            estrategias en tu organización. Contáctanos para una consulta
            personalizada.
          </p>

          <Button
            onClick={open}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-medium rounded-md shadow-sm hover:bg-teal-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
          >
            Contactar ahora
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
