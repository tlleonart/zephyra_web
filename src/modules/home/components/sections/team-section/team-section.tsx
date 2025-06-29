import { FC, Suspense } from "react";
import { TitledSection } from "@/modules/shared/components/ui/titled-section";
import { TeamContent } from "./team-content";
import { TeamSkeleton } from "./team-skeleton";

/**
 * Componente principal de la sección del equipo
 */
export const TeamSection: FC = () => {
  return (
    <TitledSection
      title="Equipo"
      subtitle="¿Quiénes somos?"
      id="team"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Contenido principal con Suspense */}
      <div className="relative z-10">
        <Suspense fallback={<TeamSkeleton />}>
          <TeamContent />
        </Suspense>
      </div>

      {/* Schema.org para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Zephyra",
            description: "Equipo multidisciplinario de desarrollo y diseño",
            knowsAbout: [
              "Desarrollo Full-Stack",
              "Diseño UX/UI",
              "DevOps & Cloud",
              "Consultoría Técnica",
            ],
          }),
        }}
      />
    </TitledSection>
  );
};
