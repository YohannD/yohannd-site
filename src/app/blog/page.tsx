import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Yohann Doillon writing on AI, data platforms, enterprise software, and commercial strategy.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <div className="mb-12">
        <h1 className="mb-3 text-2xl font-semibold text-neutral-50">Writing</h1>
        <p className="text-base text-neutral-400">
          Thoughts on AI, data operations, Palantir, and commercial leadership.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-neutral-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-neutral-800">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-4 py-5 transition-colors"
            >
              <div className="min-w-0">
                <h2 className="text-sm font-medium text-neutral-200 transition-colors group-hover:text-neutral-50">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <time className="shrink-0 text-xs text-neutral-600">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
