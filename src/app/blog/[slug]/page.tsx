import { Blog } from "@/modules/blog/Blog";
import { Suspense } from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense>
      <Blog slug={slug} />
    </Suspense>
  );
}
