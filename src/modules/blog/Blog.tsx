import { FC, Suspense } from "react";
import { dummyBlogPosts } from "../shared/lib/dummy-blog-data";
import Link from "next/link";
import { formatDate } from "../shared/lib/utils";
import Image from "next/image";
import { CallToAction } from "./components/CallToAction";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogProps {
  slug: string;
}

export const Blog: FC<BlogProps> = ({ slug }) => {
  const article = dummyBlogPosts.find((post) => post.slug === slug);

  if (!article) {
    return (
      <main className="relative pt-20 sm:pt-32 lg:pt-36 pb-20 bg-zmain min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 rounded-2xl p-8 sm:p-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Artículo no encontrado
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Lo sentimos, el artículo que buscas no existe o ha sido movido.
            </p>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 bg-white text-zmain px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <Suspense
      fallback={
        <main className="relative pt-20 sm:pt-32 lg:pt-36 pb-20 bg-zmain min-h-screen flex items-center justify-center">
          <div className="text-white text-lg">Cargando artículo...</div>
        </main>
      }
    >
      <main className="relative pt-20 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 bg-zmain w-full">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm sm:text-base">Volver al Blog</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              {article.title}
            </h1>

            {/* Article Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">
                  {formatDate(article.date)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm sm:text-base">{article.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 w-full mb-8 sm:mb-12 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div className="bg-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-white/10">
              {article.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 sm:mb-6 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 sm:mt-16 lg:mt-20">
            {/* Tags section (if available) */}
            {article.tags && (
              <div className="mb-8 sm:mb-12">
                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  Etiquetas:
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <Suspense
              fallback={
                <div className="bg-teal-600/20 rounded-lg p-8 animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-white/20 rounded w-1/2" />
                </div>
              }
            >
              <CallToAction />
            </Suspense>
          </footer>
        </article>
      </main>
    </Suspense>
  );
};
