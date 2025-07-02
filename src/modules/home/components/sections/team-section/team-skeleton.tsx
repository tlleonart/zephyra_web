"use client";

import { FC } from "react";

/**
 * Skeleton de carga para la sección del equipo
 */
export const TeamSkeleton: FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 sm:space-y-12 animate-pulse">
        {/* Skeleton de controles del carousel - responsive */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
          {/* Controles izquierda */}
          <div className="flex gap-3 order-2 sm:order-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />
          </div>

          {/* Indicador central */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <div className="w-4 h-2 sm:w-6 sm:h-3 bg-gray-200 rounded" />
            <div className="w-12 sm:w-16 h-1 bg-gray-200 rounded-full" />
            <div className="w-4 h-2 sm:w-6 sm:h-3 bg-gray-200 rounded" />
          </div>

          {/* Control derecha */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full order-3" />
        </div>

        {/* Skeleton del grid de empleados - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-xl relative overflow-hidden"
            >
              {/* Efecto de shimmer */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Skeleton de dots del carousel - centrado */}
        <div className="flex justify-center gap-2 sm:gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "w-6 h-2 sm:w-8 sm:h-3" : "w-2 sm:w-3 h-2 sm:h-3"
              } bg-gray-200 rounded-full`}
            />
          ))}
        </div>

        {/* Skeleton del contenido adicional - centrado */}
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="h-4 sm:h-6 bg-gray-200 rounded mx-auto w-11/12 sm:w-3/4" />
            <div className="h-4 sm:h-6 bg-gray-200 rounded mx-auto w-5/6 sm:w-2/3" />
            <div className="h-4 sm:h-6 bg-gray-200 rounded mx-auto w-full sm:w-4/5" />
          </div>

          {/* Skeleton de tags - centrado */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-6 sm:h-8 bg-gray-200 rounded-full"
                style={{ width: `${60 + Math.random() * 40}px` }}
              />
            ))}
          </div>

          {/* Skeleton del call to action - centrado */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            <div className="h-5 sm:h-6 bg-gray-200 rounded mx-auto w-3/4 sm:w-1/2" />
            <div className="h-3 sm:h-4 bg-gray-200 rounded mx-auto w-full sm:w-3/4" />
            <div className="h-3 sm:h-4 bg-gray-200 rounded mx-auto w-5/6 sm:w-2/3" />
            <div className="h-10 sm:h-12 bg-gray-200 rounded-xl mx-auto w-full sm:w-48" />
          </div>
        </div>
      </div>

      {/* Estilos para el efecto shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
