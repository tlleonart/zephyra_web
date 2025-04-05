import { Blog } from "@/modules/blog/Blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return <Blog slug={slug} />;
}
