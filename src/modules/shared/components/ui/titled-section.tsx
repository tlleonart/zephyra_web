import { FC, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface TitledSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "blue"
    | "purple"
    | "green"
    | "red"
    | "black"
    | string;
  variant?: "default" | "centered" | "left" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  showDivider?: boolean;
  description?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl" | "full";
}

/**
 * Componente TitledSection mejorado y completamente responsive
 * Mantiene compatibilidad total con la versión anterior
 */
export const TitledSection: FC<TitledSectionProps> = ({
  title,
  subtitle,
  titleLevel = "h3",
  subtitleLevel = "h1",
  children,
  className,
  color = "black", // Valor por defecto compatible con versión anterior
  variant = "default",
  size = "lg",
  showDivider = true,
  description,
  maxWidth = "7xl",
  ...props
}) => {
  // Mapeo de colores con fallback para compatibilidad
  const predefinedColors = {
    primary: "border-primary",
    secondary: "border-secondary",
    accent: "border-accent",
    blue: "border-blue-600",
    purple: "border-purple-600",
    green: "border-green-600",
    red: "border-red-600",
    black: "border-gray-900",
  };

  // Función para obtener la clase de color del borde
  const getBorderColorClass = (colorValue: string) => {
    // Si es un color predefinido, usar el mapeo
    if (colorValue in predefinedColors) {
      return predefinedColors[colorValue as keyof typeof predefinedColors];
    }

    // Si es un color personalizado (como en la versión anterior), crear la clase
    if (typeof colorValue === "string") {
      return `border-${colorValue}`;
    }

    // Fallback
    return "border-gray-900";
  };

  // Configuración de tamaños
  const sizeConfig = {
    sm: {
      section: "py-12 md:py-16",
      title: "text-sm md:text-base",
      subtitle: "text-xl md:text-2xl lg:text-3xl",
      description: "text-sm md:text-base",
      spacing: "gap-6 md:gap-8",
      divider: "h-0.5 w-12 md:w-16",
    },
    md: {
      section: "py-16 md:py-20",
      title: "text-base md:text-lg",
      subtitle: "text-2xl md:text-3xl lg:text-4xl",
      description: "text-base md:text-lg",
      spacing: "gap-8 md:gap-10",
      divider: "h-0.5 w-full md:w-full",
    },
    lg: {
      section: "py-20 md:py-24 lg:py-32",
      title: "text-lg md:text-xl",
      subtitle: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      description: "text-lg md:text-xl",
      spacing: "gap-10 md:gap-12 lg:gap-16",
      divider: "h-1 w-full md:w-full lg:w-full",
    },
    xl: {
      section: "py-24 md:py-32 lg:py-40",
      title: "text-xl md:text-2xl",
      subtitle: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
      description: "text-xl md:text-2xl",
      spacing: "gap-12 md:gap-16 lg:gap-20",
      divider: "h-1 w-full md:w-full lg:w-full",
    },
  };

  // Configuración de variantes
  const variantConfig = {
    default: {
      container: "text-left",
      header: "mb-8 md:mb-12 lg:mb-16",
      dividerAlign: "mx-0",
    },
    centered: {
      container: "text-center",
      header: "mb-8 md:mb-12 lg:mb-16",
      dividerAlign: "mx-auto",
    },
    left: {
      container: "text-left",
      header: "mb-6 md:mb-8 lg:mb-12",
      dividerAlign: "mx-0",
    },
    minimal: {
      container: "text-left",
      header: "mb-4 md:mb-6 lg:mb-8",
      dividerAlign: "mx-0",
    },
  };

  const currentSize = sizeConfig[size];
  const currentVariant = variantConfig[variant];
  const borderColorClass = getBorderColorClass(color);

  // Mapeo de max-width
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  // Componentes de encabezado dinámicos
  const TitleComponent = titleLevel;
  const SubtitleComponent = subtitleLevel;

  return (
    <section
      className={cn(
        // Espaciado base y responsivo
        currentSize.section,
        "px-4 sm:px-6 lg:px-8",

        // Layout
        "flex flex-col items-center justify-center",
        "min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]",

        // Espaciado interno
        currentSize.spacing,

        className
      )}
      {...props}
    >
      {/* Container principal con max-width responsive */}
      <div
        className={cn(
          "w-full",
          maxWidthClasses[maxWidth],
          "mx-auto",
          currentVariant.container
        )}
      >
        {/* Header de la sección */}
        <header className={cn(currentVariant.header)}>
          {/* Título principal (eyebrow) */}
          <TitleComponent
            className={cn(
              currentSize.title,
              "font-medium tracking-wide text-muted-foreground uppercase",
              "mb-3 md:mb-4"
            )}
            {...(props.id && { id: props.id })} // Mantener compatibilidad con id en h3
          >
            {title}
          </TitleComponent>

          {/* Divider decorativo */}
          {showDivider && (
            <div
              className={cn(
                currentSize.divider,
                "border-t-2",
                borderColorClass,
                currentVariant.dividerAlign,
                "mb-4 md:mb-6",
                "transition-all duration-300"
              )}
              aria-hidden="true"
            />
          )}

          {/* Subtítulo principal */}
          <SubtitleComponent
            className={cn(
              currentSize.subtitle,
              "font-bold leading-tight tracking-tight",
              "text-foreground",
              description ? "mb-4 md:mb-6" : ""
            )}
          >
            {subtitle}
          </SubtitleComponent>

          {/* Descripción opcional */}
          {description && (
            <p
              className={cn(
                currentSize.description,
                "text-muted-foreground leading-relaxed",
                "max-w-3xl",
                currentVariant.container === "text-center" ? "mx-auto" : ""
              )}
            >
              {description}
            </p>
          )}
        </header>

        {/* Contenido principal */}
        <div className="relative">{children}</div>
      </div>

      {/* Schema.org solo si tenemos props.id */}
      {props.id && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPageElement",
              name: subtitle,
              description: description || title,
              identifier: props.id,
            }),
          }}
        />
      )}
    </section>
  );
};
