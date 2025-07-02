"use client";

import type { FC } from "react";
import { useContactModal } from "@/modules/shared/infraestructure/hooks/useContactModal";
import { Button } from "@/modules/shared/components";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CallToAction: FC = () => {
  const { open } = useContactModal();

  return (
    <div className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="currentColor"
                d="M45.7,-51.9C59.5,-41.5,71.3,-26.9,74.8,-10.2C78.2,6.5,73.4,25.4,62.4,38.5C51.4,51.6,34.3,59,16.3,65.3C-1.7,71.6,-20.7,76.9,-36.8,71.1C-52.9,65.3,-66.2,48.5,-72.9,29.5C-79.6,10.5,-79.7,-10.7,-71.8,-27.8C-63.9,-44.9,-48,-57.9,-31.8,-67.2C-15.6,-76.4,0.8,-81.9,15.8,-77.1C30.8,-72.3,31.9,-62.3,45.7,-51.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="currentColor"
                d="M39.2,-47.1C50.9,-39.9,60.1,-29.2,65.2,-16.4C70.3,-3.7,71.3,11.1,65.8,22.6C60.3,34.1,48.3,42.3,35.5,47.8C22.7,53.3,9.1,56.1,-5.2,53.8C-19.5,51.5,-34.5,44.1,-44.3,33.2C-54.1,22.3,-58.7,7.8,-58.5,-6.8C-58.3,-21.4,-53.3,-36.1,-43.2,-43.2C-33.1,-50.3,-18,-49.8,-3.9,-44.6C10.2,-39.4,27.5,-54.3,39.2,-47.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            {/* Icon */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            {/* Header */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
              ¿Te interesa profundizar en este tema?
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nuestro equipo de expertos puede ayudarte a implementar estas
              estrategias en tu organización. Contáctanos para una consulta
              personalizada y descubre cómo transformar estos conceptos en
              resultados tangibles.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 font-semibold rounded-lg sm:rounded-xl shadow-lg hover:bg-white/95 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 text-sm sm:text-base group"
              >
                <span>Contactar ahora</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Secondary action */}
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-medium rounded-lg sm:rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Volver arriba
              </Button>
            </div>

            {/* Additional info */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs sm:text-sm">
                💡 <strong>Consulta gratuita:</strong> La primera conversación
                es sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
