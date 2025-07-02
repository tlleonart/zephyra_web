"use client";

import { FC } from "react";
import { Users, Building2, Mail } from "lucide-react";
import { Button } from "@/modules/shared/components";

/**
 * Componente de estado vacío para cuando no hay empleados
 * Client component para manejar interactividad
 */
export const EmptyState: FC = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-12 sm:py-16">
        <div className="relative mb-8">
          {/* Iconos decorativos - responsive */}
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-6">
            <div className="p-3 sm:p-4 bg-blue-100 rounded-full">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <div className="p-4 sm:p-6 bg-blue-50 rounded-full">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />
            </div>
            <div className="p-3 sm:p-4 bg-purple-100 rounded-full">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </div>

          {/* Elementos decorativos - responsive */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30" />
        </div>

        {/* Contenido principal */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Estamos construyendo nuestro equipo
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Actualmente estamos en proceso de presentar a nuestro increíble
              equipo. Pronto podrás conocer a las personas talentosas que hacen
              posible todo lo que hacemos.
            </p>
          </div>

          {/* Características del equipo futuro - grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Multidisciplinario
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Profesionales especializados en desarrollo, diseño y
                consultoría.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Experiencia
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Años de experiencia en proyectos innovadores y desafiantes.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Comunicación
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Enfoque colaborativo y comunicación transparente en cada
                proyecto.
              </p>
            </div>
          </div>

          {/* Call to action - responsive */}
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              ¿Quieres conocer más sobre nosotros?
            </h4>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Aunque aún estamos actualizando esta sección, puedes contactarnos
              directamente para conocer más sobre nuestro equipo y servicios.
            </p>
            <Button
              onClick={handleContactClick}
              className="gap-2 w-full sm:w-auto"
              size="lg"
            >
              <Mail className="w-4 h-4" />
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
