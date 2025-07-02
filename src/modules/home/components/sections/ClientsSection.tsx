import { Section } from "@/modules/shared/components/ui/section";
import { FC } from "react";
import { aliances, clients } from "@/modules/shared/lib/clients";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export const ClientsSection: FC = () => {
  return (
    <Section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Sección de Clientes */}
        <div className="mb-16 sm:mb-20 lg:mb-24" id="clients">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ya confían en nosotros
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Empresas y organizaciones que han confiado en nuestros servicios
              para impulsar su crecimiento sostenible
            </p>
          </div>

          {/* Grid de clientes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {clients.map(({ name, logo, href }) => (
              <ClientCard key={name} name={name} logo={logo} href={href} />
            ))}
          </div>
        </div>

        {/* Sección de Alianzas */}
        <div id="aliances">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nuestras Alianzas
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Colaboramos con organizaciones estratégicas para amplificar
              nuestro impacto y ofrecer soluciones integrales
            </p>
          </div>

          {/* Grid de alianzas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {aliances.map(({ name, logo, href }) => (
              <ClientCard
                key={name}
                name={name}
                logo={logo}
                href={href}
                variant="alliance"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

interface ClientCardProps {
  name: string;
  logo: StaticImageData;
  href: string;
  variant?: "client" | "alliance";
}

const ClientCard: FC<ClientCardProps> = ({
  name,
  logo,
  href,
  variant = "client",
}) => {
  return (
    <div className="group relative">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-48 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 relative overflow-hidden">
          {/* Efecto de fondo en hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Logo */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={logo}
              alt={`Logo de ${name}`}
              width={200}
              height={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "160px",
                maxHeight: "80px",
              }}
            />
          </div>

          {/* Indicador visual del tipo */}
          <div
            className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
              variant === "alliance" ? "bg-purple-400" : "bg-blue-400"
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>

        {/* Tooltip con el nombre */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
          {name}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-4 border-transparent border-b-gray-900" />
        </div>
      </Link>
    </div>
  );
};
