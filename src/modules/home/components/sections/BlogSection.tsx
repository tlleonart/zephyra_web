import type { FC } from "react";
import { dummyBlogPosts } from "@/modules/shared/lib/dummy-blog-data";
import { BlogCard } from "../BlogCard";
import { TitledSection } from "@/modules/shared/components/ui/titled-section";

export const BlogSection: FC = () => {
  return (
    <TitledSection
      title="Blog"
      subtitle="Noticias y artículos"
      id="blog"
      className="bg-zmain/50 text-white px-4 sm:px-6 lg:px-8"
      color="white"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Grid responsive con mejor espaciado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
          {dummyBlogPosts.map((post) => (
            <BlogCard key={post.slug} blogPost={post} />
          ))}
        </div>

        {/* Mensaje si no hay posts */}
        {dummyBlogPosts.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-white/80 text-lg">
              Próximamente tendremos contenido disponible.
            </p>
          </div>
        )}
      </div>
    </TitledSection>
  );
};
