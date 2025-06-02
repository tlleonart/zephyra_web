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
    <Link href={`/blog/${slug}`} className="group">
      <div className="bg-white border border-gray-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{formatDate(date)}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-zmain">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
          <div className="text-teal-600 font-medium flex items-center">
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
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
      </div>
    </Link>
  );
};
