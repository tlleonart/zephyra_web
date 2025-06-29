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
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo está preparado para llevar tu proyecto al siguiente
            nivel. Conversemos sobre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>
        </div>

        <div className=" max-w-4xl mx-auto">
          <Button
            onClick={handleContactModal}
            size="lg"
            className="w-full h-auto p-6 flex flex-col gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold">Contacto</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
