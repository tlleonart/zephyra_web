"use client";

import { FC } from "react";
import { Mail } from "lucide-react";
import { useContactModal } from "@/modules/shared/infraestructure/hooks/useContactModal";
import { Button } from "@/modules/shared/components";

export const TeamCallToAction: FC = () => {
  const { setIsOpen } = useContactModal();

  const handleContactModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Nuestro equipo está preparado para llevar tu proyecto al siguiente
            nivel. Conversemos sobre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>
        </div>

        <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
          <Button
            onClick={handleContactModal}
            size="lg"
            className="w-full h-auto p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="text-center sm:text-left">
              <div className="font-semibold text-sm sm:text-base">Contacto</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
