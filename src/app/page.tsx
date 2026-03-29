import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";
import EmailSubscribe from "@/components/EmailSubscribe";

export default async function HomePage() {
  const posts = await getRecentPosts(3);

  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="mb-5 text-3xl font-semibold leading-snug tracking-tight text-neutral-50">
          Builder. Operator.
          <br />
          Writing at the frontier of AI.
        </h1>
        <p className="mb-8 text-base text-neutral-400 leading-relaxed">
          I ship things at the intersection of AI, data, and people. This is
          where I think out loud — about building teams, applied AI in the real
          world, and what it means to operate at the frontier.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="text-sm font-medium text-neutral-100 underline underline-offset-4 decoration-neutral-700 transition-colors hover:text-neutral-50 hover:decoration-neutral-400"
          >
            Read the writing →
          </Link>
          <Link
            href="/about"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Email subscribe */}
      <section className="mb-20 border-t border-neutral-800 pt-10">
        <h2 className="mb-2 text-base font-medium text-neutral-100">
          Get the writing in your inbox
        </h2>
        <p className="mb-5 text-sm text-neutral-500">
          No noise. When I publish something worth reading, you&apos;ll get it.
        </p>
        <EmailSubscribe />
      </section>

      {/* Thought leadership pillars */}
      <section className="mb-20">
        <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-neutral-500">
          What I think about
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Applied AI",
              desc: "What actually works in production. Lessons from deploying AI in organizations that can't afford to be wrong.",
            },
            {
              title: "Building",
              desc: "The operator's view on high-leverage teams, systems, and the decisions that compound over time.",
            },
            {
              title: "AI & Society",
              desc: "How this technology changes work, knowledge, and human agency — without the hype or the doom.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="mb-1 text-sm font-medium text-neutral-200">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
            >
              All posts →
            </Link>
          </div>
          <div className="divide-y divide-neutral-800">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 py-4 transition-colors hover:text-neutral-50"
              >
                <div>
                  <h3 className="text-sm font-medium text-neutral-200 transition-colors group-hover:text-neutral-50">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-0.5 text-sm text-neutral-500 line-clamp-1">
                      {post.description}
                    </p>
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
        </section>
      )}
    </div>
  );
}
