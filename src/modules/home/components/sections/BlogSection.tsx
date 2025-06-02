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
      className="bg-zmain/50 text-white"
      color="white"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {dummyBlogPosts.map((post) => (
          <BlogCard key={post.slug} blogPost={post} />
        ))}
      </div>
    </TitledSection>
  );
};
