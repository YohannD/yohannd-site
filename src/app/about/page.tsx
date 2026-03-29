import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Yohann Doillon — CCO at 10x Partners, Palantir specialist, and commercial leader.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-brand-400">about</p>
        <h1 className="mb-6 text-4xl font-semibold text-neutral-50">
          Yohann Doillon
        </h1>
        <p className="text-lg text-neutral-400">
          CCO at 10x Partners · Official Palantir Partner
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Bio */}
        <div className="lg:col-span-2 space-y-6 text-neutral-300 leading-relaxed">
          <p>
            I&apos;m the Chief Commercial Officer at{" "}
            <a
              href="https://10x.partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 transition-colors hover:text-brand-300"
            >
              10x Partners
            </a>
            , an official Palantir Partner. We help organizations build and
            operate world-class data platforms using Palantir Foundry, AIP, and
            the broader modern data stack.
          </p>
          <p>
            My work sits at the intersection of commercial strategy, technical
            advisory, and organizational change. I work with enterprise clients
            to identify where data can unlock real operational value — then help
            them build the teams, processes, and systems to get there.
          </p>
          <p>
            Before 10x Partners, I built and scaled commercial functions at
            several high-growth software companies. I&apos;ve led partnerships,
            enterprise sales, and go-to-market strategy across North America and
            Europe.
          </p>
          <p>
            Outside work, I write about AI, data operations, and the changing
            nature of enterprise software on this blog.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Currently
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>CCO @ 10x Partners</li>
              <li>Palantir AIP Advisory</li>
              <li>Enterprise data strategy</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Focus areas
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Palantir Foundry &amp; AIP</li>
              <li>Enterprise GTM</li>
              <li>Data operations</li>
              <li>AI adoption</li>
              <li>Partnerships</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/yohanndoillon" },
                { label: "GitHub", href: "https://github.com/yohannd" },
                { label: "X / Twitter", href: "https://x.com/yohannd" },
                { label: "10x Partners", href: "https://10x.partners" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-400 transition-colors hover:text-brand-300"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-800">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
