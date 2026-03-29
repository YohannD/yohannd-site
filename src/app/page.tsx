import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getRecentPosts(3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <p className="mb-4 font-mono text-sm text-brand-400">yohann doillon</p>
        <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-neutral-50 sm:text-6xl">
          CCO &amp; Partner.
          <br />
          <span className="text-neutral-400">Building data-driven teams.</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-neutral-400 leading-relaxed">
          Chief Commercial Officer at{" "}
          <a
            href="https://10x.partners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 transition-colors hover:text-brand-300"
          >
            10x Partners
          </a>
          , official Palantir Partner. I help organizations turn complex data
          into operational advantage.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
          >
            About me
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mb-24">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-neutral-500">
          What I do
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Data Platform Strategy",
              desc: "Advising organizations on Palantir Foundry, AIP, and modern data stack architecture.",
            },
            {
              title: "Commercial Leadership",
              desc: "Building and scaling revenue teams, partnerships, and enterprise sales motions.",
            },
            {
              title: "Thought Leadership",
              desc: "Writing and speaking on AI, data operations, and the future of enterprise software.",
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
                className="group flex items-start justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <div>
                  <h3 className="font-medium text-neutral-100 transition-colors group-hover:text-white">
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
