import Image from "next/image";
import { FC } from "react";

interface EmployeeCardProps {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
  blogCount?: number;
  className?: string;
  priority?: boolean;
  interactive?: boolean;
}

export const EmployeeCard: FC<EmployeeCardProps> = ({
  id,
  name,
  role,
  specialty,
  image,
  blogCount,
  className = "",
  priority = false,
  interactive = false,
}) => {
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f3f4f6" offset="20%" />
          <stop stop-color="#e5e7eb" offset="50%" />
          <stop stop-color="#f3f4f6" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f3f4f6" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" opacity="0.5" />
      <animateTransform attributeName="transform" attributeType="XML" values="-${w} 0; ${w} 0; ${w} 0" dur="1s" repeatCount="indefinite"/>
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <article
      className={`group relative w-full aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-50 to-gray-100 ${
        interactive ? "cursor-pointer hover:scale-[1.02]" : ""
      } ${className}`}
      data-employee-id={id}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
          priority={priority}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(400, 400)
          )}`}
          quality={85}
          itemProp="image"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:from-black/0 md:via-black/0 md:to-black/0 md:group-hover:from-black/90 md:group-hover:via-black/30 md:group-hover:to-black/10 transition-all duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6">
          <div className="text-white text-center transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
            <h3
              className="font-bold text-xl mb-3 leading-tight tracking-wide"
              itemProp="name"
            >
              {name}
            </h3>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mb-4" />

            <p
              className="font-semibold text-sm mb-2 text-blue-200 tracking-wide"
              itemProp="jobTitle"
            >
              {role}
            </p>

            <p
              className="text-xs text-gray-300 leading-relaxed mb-3 max-w-xs mx-auto"
              itemProp="knowsAbout"
            >
              {specialty}
            </p>

            {blogCount !== undefined && blogCount > 0 && (
              <div className="flex items-center justify-center gap-2 text-xs text-blue-300 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {blogCount} {blogCount === 1 ? "artículo" : "artículos"}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent transform rotate-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {blogCount !== undefined && blogCount > 3 && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            ✨ Top Writer
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: name,
            jobTitle: role,
            knowsAbout: specialty,
            image: image,
            memberOf: {
              "@type": "Organization",
              name: "Zephyra",
              url: typeof window !== "undefined" ? window.location.origin : "",
            },
            ...(blogCount &&
              blogCount > 0 && {
                author: {
                  "@type": "CreativeWork",
                  name: `${blogCount} artículos publicados`,
                },
              }),
          }),
        }}
      />

      <div className="sr-only">
        <span itemProp="name">{name}</span>
        <span itemProp="jobTitle">{role}</span>
        <span itemProp="knowsAbout">{specialty}</span>
        {blogCount && blogCount > 0 && (
          <span>Ha publicado {blogCount} artículos en el blog</span>
        )}
      </div>
    </article>
  );
};
