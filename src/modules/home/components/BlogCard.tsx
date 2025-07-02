import { BlogPost } from "@/modules/shared/lib/dummy-blog-data";
import { formatDate } from "@/modules/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blogPost: BlogPost;
}

export const BlogCard: FC<BlogCardProps> = ({ blogPost }) => {
  const { author, coverImage, date, excerpt, slug, title } = blogPost;

  return (
    <Link href={`/blog/${slug}`} className="group w-full">
      <article className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        {/* Imagen */}
        <div className="relative h-40 sm:h-48 lg:h-52 w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          {/* Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-3 gap-1 sm:gap-0">
            <span className="font-medium">{formatDate(date)}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="text-gray-600">{author}</span>
          </div>

          {/* Título */}
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zmain leading-tight line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Call to action */}
          <div className="text-teal-600 font-medium flex items-center text-sm sm:text-base group-hover:text-teal-700 transition-colors">
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};
