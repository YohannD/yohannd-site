import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.published === false) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
      >
        ← All posts
      </Link>

      {/* Header */}
      <header className="mb-12">
        <time className="mb-4 block font-mono text-sm text-brand-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1 className="mb-4 text-4xl font-semibold leading-tight text-neutral-50">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg text-neutral-400">{post.description}</p>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <article className="prose">
        <MDXRemote source={post.content} />
      </article>

      {/* Footer */}
      <div className="mt-16 border-t border-neutral-800 pt-8">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
