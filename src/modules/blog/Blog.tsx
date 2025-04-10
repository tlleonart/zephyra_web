import { FC, Suspense } from "react";
import { dummyBlogPosts } from "../shared/lib/dummy-blog-data";
import Link from "next/link";
import { formatDate } from "../shared/lib/utils";
import Image from "next/image";
import { CallToAction } from "./components/CallToAction";

interface BlogProps {
  slug: string;
}

export const Blog: FC<BlogProps> = ({ slug }) => {
  const article = dummyBlogPosts.find((post) => post.slug === slug);

  if (!article) {
    return <div>Artículo inexistente</div>;
  }

  return (
    <Suspense>
      <main className="relative pt-40 pb-20 bg-zmain">
        <article className="max-w-6xl mx-auto">
          <Link
            href="/#blog"
            className="inline-flex items-center text-teal-600 mb-8 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver
          </Link>

          <h1 className="text-4xl font-bold mb-4 text-white">
            {article.title}
          </h1>

          <div className="flex items-center text-white mb-8">
            <span>{formatDate(article.date)}</span>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>

          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-white">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16">
            <Suspense>
              <CallToAction />
            </Suspense>
          </div>
        </article>
      </main>
    </Suspense>
  );
};
