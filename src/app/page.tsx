import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";
import EmailSubscribe from "@/components/EmailSubscribe";

export default async function HomePage() {
  const posts = await getRecentPosts(3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <p className="mb-4 font-mono text-sm text-brand-400">yohann doillon</p>
        <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-neutral-50 sm:text-6xl">
          Builder. Operator.
          <br />
          <span className="text-neutral-400">Writing at the frontier of AI.</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-neutral-400 leading-relaxed">
          I ship things at the intersection of AI, data, and people. This is
          where I think out loud — about building teams, applied AI in the real
          world, and what it means to operate at the frontier.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-brand-400"
          >
            Read the writing
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Email subscribe — primary CTA */}
      <section className="mb-24 rounded-xl border border-neutral-700 bg-neutral-900 px-8 py-10">
        <h2 className="mb-2 text-lg font-semibold text-neutral-50">
          Get the writing in your inbox
        </h2>
        <p className="mb-6 text-sm text-neutral-400">
          No noise. When I publish something worth reading, you&apos;ll get it.
        </p>
        <EmailSubscribe />
      </section>

      {/* Thought leadership pillars */}
      <section className="mb-24">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-neutral-500">
          What I think about
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
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
            <div
              key={item.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <h3 className="mb-2 font-medium text-neutral-100">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-brand-400 transition-colors hover:text-brand-300"
            >
              All posts →
            </Link>
          </div>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-colors hover:border-brand-600 hover:bg-neutral-900"
              >
                <div>
                  <h3 className="font-medium text-neutral-100 transition-colors group-hover:text-brand-400">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-1 text-sm text-neutral-500 line-clamp-1">
                      {post.description}
                    </p>
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
        </section>
      )}
    </div>
  );
}
