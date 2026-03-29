import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Yohann Doillon writing about building AI-first companies and living abroad.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <h1 className="mb-12 text-[28px] font-[500] text-neutral-50">Writing</h1>

      {posts.length === 0 ? (
        <p className="text-sm text-neutral-500">No posts yet. Check back soon.</p>
      ) : (
        <section>
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className={`flex items-baseline justify-between gap-4 py-3 text-neutral-200 hover:text-neutral-50 transition-colors${
                i < posts.length - 1 ? " border-b border-neutral-800" : ""
              }`}
              style={{ borderBottomWidth: i < posts.length - 1 ? "0.5px" : undefined }}
            >
              <span className="text-[15px]">{post.title}</span>
              <time className="text-[13px] text-neutral-500 shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
