// src/modules/shared/components/Carousel.tsx

"use client";

import { FC, ReactNode, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";
import { cn } from "@/modules/shared/lib/utils";
import { Button } from "./ui/Button";

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  showProgress?: boolean;
  gap?: string;
  className?: string;
  ariaLabel?: string;
  initialIndex?: number;
}

/**
 * Carousel interactivo que se hidrata progresivamente
 */
export const Carousel: FC<CarouselProps> = ({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = false,
  autoPlayInterval = 4000,
  loop = true,
  showDots = true,
  showArrows = true,
  showProgress = false,
  gap = "gap-6",
  className = "",
  ariaLabel = "Carousel",
  initialIndex = 0,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const {
    currentIndex,
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
    goToSlide,
    visibleItems,
    totalSlides,
    isAutoPlaying,
    pauseAutoPlay,
    resumeAutoPlay,
    progress,
  } = useCarousel({
    totalItems: children.length,
    itemsPerView,
    autoPlay,
    autoPlayInterval,
    loop,
    initialIndex,
  });

  // Detectar hidratación
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const translateX = isHydrated
    ? `translateX(-${currentIndex * (100 / visibleItems)}%)`
    : "translateX(0%)";

  return (
    <div
      ref={carouselRef}
      className={cn("relative w-full", className)}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={isHydrated ? pauseAutoPlay : undefined}
      onMouseLeave={isHydrated ? resumeAutoPlay : undefined}
    >
      {isHydrated && (showArrows || autoPlay) && totalSlides > 1 && (
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            {showArrows && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrev}
                  disabled={!canGoPrev}
                  className="rounded-full shadow-md hover:shadow-lg"
                  aria-label="Elemento anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  disabled={!canGoNext}
                  className="rounded-full shadow-md hover:shadow-lg"
                  aria-label="Elemento siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Progreso visual */}
            {showProgress && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">{currentIndex + 1}</span>
                <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-medium">{totalSlides}</span>
              </div>
            )}

            {autoPlay && (
              <Button
                variant="outline"
                size="icon"
                onClick={isAutoPlaying ? pauseAutoPlay : resumeAutoPlay}
                className="rounded-full shadow-md hover:shadow-lg"
                aria-label={
                  isAutoPlaying
                    ? "Pausar reproducción automática"
                    : "Reanudar reproducción automática"
                }
              >
                {isAutoPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Container principal del carousel */}
      <div className="overflow-hidden rounded-xl">
        {/* Fallback para SSR: Grid responsivo */}
        <noscript>
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
              gap
            )}
          >
            {children.map((child, index) => (
              <div key={index}>{child}</div>
            ))}
          </div>
        </noscript>

        {/* Carousel interactivo */}
        <div
          className={cn(
            "flex transition-transform duration-500 ease-in-out",
            gap,
            !isHydrated && "md:grid md:grid-cols-2 lg:grid-cols-3"
          )}
          style={
            isHydrated
              ? {
                  transform: translateX,
                  width: `${(children.length / visibleItems) * 100}%`,
                }
              : undefined
          }
          role="tabpanel"
          aria-live={isAutoPlaying ? "off" : "polite"}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn(isHydrated ? "flex-shrink-0" : "w-full")}
              style={
                isHydrated ? { width: `${100 / children.length}%` } : undefined
              }
              role="tabpanel"
              aria-label={`Elemento ${index + 1} de ${children.length}`}
            >
              <div className={isHydrated ? "px-3" : ""}>{child}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de puntos - Solo después de hidratación */}
      {isHydrated && showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => goToSlide(index)}
              className={cn(
                "relative overflow-hidden transition-all duration-300 p-0",
                index === currentIndex
                  ? "w-8 h-3 bg-primary hover:bg-primary/90 rounded-full"
                  : "w-3 h-3 bg-muted hover:bg-muted-foreground/20 rounded-full"
              )}
              aria-label={`Ir al grupo ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              {/* Animación de progreso para el slide activo */}
              {index === currentIndex && autoPlay && isAutoPlaying && (
                <div
                  className="absolute inset-0 bg-primary/60 rounded-full origin-left"
                  style={{
                    animation: `progressBar ${autoPlayInterval}ms linear infinite`,
                  }}
                />
              )}
            </Button>
          ))}
        </div>
      )}

      {/* Información de navegación para screen readers */}
      {isHydrated && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Mostrando elementos {currentIndex * visibleItems + 1} al{" "}
          {Math.min((currentIndex + 1) * visibleItems, children.length)} de{" "}
          {children.length}
          {isAutoPlaying && ". Reproducción automática activada"}
        </div>
      )}

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};
