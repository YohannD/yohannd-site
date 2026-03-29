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
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-brand-400">writing</p>
        <h1 className="mb-4 text-4xl font-semibold text-neutral-50">Blog</h1>
        <p className="text-lg text-neutral-400">
          Thoughts on AI, data operations, Palantir, and commercial leadership.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-10 text-center">
          <p className="text-neutral-500">No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              <div className="min-w-0">
                <h2 className="font-medium text-neutral-100 transition-colors group-hover:text-white">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                    {post.description}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <time className="shrink-0 text-sm text-neutral-600">
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
