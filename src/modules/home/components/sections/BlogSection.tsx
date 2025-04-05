import type { FC } from "react";
import { Section } from "@/modules/shared/components/ui/section";
import { dummyBlogPosts } from "@/modules/shared/lib/dummy-blog-data";
import { BlogCard } from "../BlogCard";

export const BlogSection: FC = () => {
  return (
    <Section className="pt-20 md:pt-32 px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10">
      <div className="w-full">
        <h3>Blog</h3>
        <div className="w-full border-t-2 border-black my-2" />
        <div>
          <h1 className="text-3xl font-semibold">Noticias.</h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {dummyBlogPosts.map((post) => (
          <BlogCard key={post.slug} blogPost={post} />
        ))}
      </div>
    </Section>
  );
};
