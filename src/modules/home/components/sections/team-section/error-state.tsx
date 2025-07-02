"use client";

import { FC } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/modules/shared/components";

interface ErrorStateProps {
  onRetry?: () => void;
  message?: string;
}

/**
 * Componente de estado de error para la sección del equipo
 * Client component para manejar interactividad
 */
export const ErrorState: FC<ErrorStateProps> = ({
  onRetry,
  message = "No pudimos cargar la información del equipo. Por favor, recarga la página o intenta más tarde.",
}) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      // Por defecto, recargar la página
      window.location.reload();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8 text-center">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Icono de error - responsive */}
          <div className="relative">
            <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
            <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-red-200 animate-ping" />
          </div>

          {/* Mensaje de error - responsive */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-red-800">
              Error al cargar el equipo
            </h3>
            <p className="text-red-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base px-4 sm:px-0">
              {message}
            </p>
          </div>

          {/* Botón de reintento - responsive */}
          <Button
            onClick={handleRetry}
            variant="destructive"
            className="gap-2 w-full sm:w-auto"
            size="lg"
          >
            <RefreshCw className="w-4 h-4" />
            Reintentar
          </Button>

          {/* Información adicional - responsive */}
          <div className="text-xs sm:text-sm text-red-500 space-y-2 max-w-md mx-auto">
            <p className="font-medium">Si el problema persiste, puedes:</p>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Verificar tu conexión a internet</li>
              <li>Recargar la página completa</li>
              <li>Contactarnos si continúa el problema</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Información técnica (solo en desarrollo) - responsive */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-100 rounded-lg text-xs sm:text-sm text-gray-600">
          <p className="font-medium mb-2">Información de desarrollo:</p>
          <div className="space-y-1">
            <p>
              Verifica que el servicio de empleados esté funcionando
              correctamente.
            </p>
            <p>Revisa la consola del navegador para más detalles del error.</p>
          </div>
        </div>
      )}
    </div>
  );
};
