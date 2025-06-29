"use client";

import { FC } from "react";

/**
 * Skeleton de carga para la sección del equipo
 */
export const TeamSkeleton: FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="space-y-12 animate-pulse">
        {/* Skeleton de controles del carousel */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-3 bg-gray-200 rounded" />
            <div className="w-16 h-1 bg-gray-200 rounded-full" />
            <div className="w-6 h-3 bg-gray-200 rounded" />
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
        </div>

        {/* Skeleton del grid de empleados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Skeleton de dots del carousel */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "w-8 h-3" : "w-3 h-3"
              } bg-gray-200 rounded-full`}
            />
          ))}
        </div>

        {/* Skeleton del contenido adicional */}
        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="h-6 bg-gray-200 rounded mx-auto w-3/4" />
            <div className="h-6 bg-gray-200 rounded mx-auto w-2/3" />
            <div className="h-6 bg-gray-200 rounded mx-auto w-4/5" />
          </div>

          {/* Skeleton de tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-8 bg-gray-200 rounded-full"
                style={{ width: `${80 + Math.random() * 40}px` }}
              />
            ))}
          </div>

          {/* Skeleton del call to action */}
          <div className="bg-gray-100 rounded-2xl p-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded mx-auto w-1/2" />
            <div className="h-4 bg-gray-200 rounded mx-auto w-3/4" />
            <div className="h-4 bg-gray-200 rounded mx-auto w-2/3" />
            <div className="h-12 bg-gray-200 rounded-xl mx-auto w-48" />
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
