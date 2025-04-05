import { Blog } from "@/modules/blog/Blog";
import { dummyBlogPosts } from "@/modules/shared/lib/dummy-blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return dummyBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return <Blog slug={slug} />;
}
