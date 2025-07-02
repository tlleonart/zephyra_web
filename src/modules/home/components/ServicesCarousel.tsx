"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FC, useCallback, useEffect, useState } from "react";
import { ServicesCarouselCard } from "./ServicesCarouselCard";
import { Button } from "@/modules/shared/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Diseño y gestión de proyectos de innovación",
    description:
      "Transformamos tus ideas en proyectos concretos con impacto social y ambiental. Desde el diseño estratégico hasta la implementación, te ayudamos a generar valor sostenible para tu organización y comunidad.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <path
          d="M20 40H70M70 40L50 20M70 40L50 60"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M30 20H50M40 10V30" stroke="currentColor" strokeWidth="2" />
        <rect
          x="15"
          y="50"
          width="20"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Certificación / recertificación B Corp",
    description:
      "Acompañamos a tu organización a lo largo del camino de la certificación o recertificación B Corp, incluyendo el proceso de evaluación inicial, verificación, mejora y certificación.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <path d="M40 15V65" stroke="currentColor" strokeWidth="2" />
        <path d="M25 20H55V60H25V20Z" stroke="currentColor" strokeWidth="2" />
        <path d="M32 30H48" stroke="currentColor" strokeWidth="2" />
        <path d="M32 40H48" stroke="currentColor" strokeWidth="2" />
        <path d="M32 50H48" stroke="currentColor" strokeWidth="2" />
        <path d="M20 25L60 25" stroke="currentColor" strokeWidth="2" />
        <path d="M20 55L60 55" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Cálculo de huella de carbono",
    description:
      "Medimos la huella de carbono de tu organización, identificando áreas clave para reducir emisiones y avanzar hacia la neutralidad climática. Este servicio incluye análisis detallados y propuestas de estrategias para mitigar tu impacto ambiental.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M40 20C30 20 25 30 25 40C25 50 30 60 40 60C50 60 55 50 55 40C55 30 50 20 40 20Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M30 30L50 50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 50L50 30" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Elaboración de informes de sostenibilidad",
    description:
      "Creamos informes de sostenibilidad claros y completos, alineados con los estándares de GRI y los Objetivos de Desarrollo Sostenible.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <path d="M25 15H55V65H25V15Z" stroke="currentColor" strokeWidth="2" />
        <path d="M30 25H50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 35H50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 45H50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 55H40" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20L60 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Capacitaciones corporativas en sostenibilidad",
    description:
      "Brindamos talleres y capacitaciones personalizados para tu equipo, abordando temáticas clave en sostenibilidad, triple impacto y responsabilidad social empresaria. Inspiramos y fortalecemos el compromiso con la sostenibilidad en toda tu organización.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M30 40V60" stroke="currentColor" strokeWidth="2" />
        <path d="M50 40V60" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Planes de género y diversidad corporativa",
    description:
      "Diseñamos e implementamos planes integrales para incorporar la perspectiva de género y gestionar la diversidad en tu organización. Fomentamos equipos más inclusivos, innovadores y comprometidos con la igualdad.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <circle cx="30" cy="25" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="25" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M30 35V60" stroke="currentColor" strokeWidth="2" />
        <path d="M50 35V60" stroke="currentColor" strokeWidth="2" />
        <path d="M30 45H50" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Comunicación estratégica en sostenibilidad y triple impacto",
    description:
      "Diseñamos estrategias de comunicación personalizadas que destacan y amplifican los logros de tu organización en sostenibilidad e impacto social.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <path
          d="M20 30H50C55.5228 30 60 34.4772 60 40C60 45.5228 55.5228 50 50 50H20V30Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 30C20 30 15 35 15 40C15 45 20 50 20 50"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M60 30L65 25M60 50L65 55M65 25L65 55"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Certificación ISO",
    description:
      "Asesoramos y acompañamos en el proceso de certificación de normas ISO, adaptando los requisitos a las necesidades específicas de tu organización para garantizar una implementación efectiva y sostenible.",
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#5CBFBF] w-16 h-16 sm:w-20 sm:h-20"
      >
        <rect
          x="20"
          y="20"
          width="40"
          height="40"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M30 35H50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 45H50" stroke="currentColor" strokeWidth="2" />
        <path
          d="M35 20V15C35 13.8954 35.8954 13 37 13H43C44.1046 13 45 13.8954 45 15V20"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export const ServicesCarousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: {
      "(max-width: 640px)": { align: "center" },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 lg:gap-8">
              {services.map(({ title, description, icon }, index) => (
                <ServicesCarouselCard
                  key={index}
                  title={title}
                  description={description}
                  icon={icon}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons - hide on very small screens */}
          <Button
            className="absolute left-2 sm:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md z-10 hover:bg-gray-50 transition-colors hidden sm:flex"
            onClick={scrollPrev}
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
          </Button>
          <Button
            className="absolute right-2 sm:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md z-10 hover:bg-gray-50 transition-colors hidden sm:flex"
            onClick={scrollNext}
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" />
          </Button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === selectedIndex ? "bg-[#5CBFBF]" : "bg-gray-300"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center gap-4 mt-4 sm:hidden">
          <Button
            className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-colors"
            onClick={scrollPrev}
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>
          <Button
            className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-colors"
            onClick={scrollNext}
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};
