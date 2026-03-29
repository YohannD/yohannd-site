import type { Metadata } from "next";
import Link from "next/link";
import EmailSubscribe from "@/components/EmailSubscribe";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Yohann Doillon — technologist, operator, and writer on AI, building, and the future of work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <div className="mb-12">
        <h1 className="mb-3 text-2xl font-semibold text-neutral-50">
          Yohann Doillon
        </h1>
        <p className="text-base text-neutral-400">
          Technologist · Operator · Writing on AI, building, and what comes next
        </p>
      </div>

      <div className="space-y-6 text-base text-neutral-300 leading-relaxed mb-14">
        <p>
          I grew up with computers before I understood what they were. That
          curiosity — about how systems work, how people use them, and what
          happens when you push them — has never left.
        </p>
        <p>
          My path into tech wasn&apos;t linear. I spent years moving between
          commercial roles and technical environments, building a mental model
          that sits at the intersection: I can read code and I can close deals,
          but what I care about is the layer in between — the operational
          decisions that determine whether a technology actually changes anything.
        </p>
        <p>
          That led me to applied AI. I&apos;ve spent the better part of the last
          decade working on real AI deployments in real organizations — not demos,
          not sandboxes. Production systems where the stakes were operational and
          the tolerance for error was low. The work taught me that the hardest
          part of AI is almost never the model. It&apos;s the organizational
          readiness, the data quality, the workflow integration, the change
          management.
        </p>
        <p>
          Today I&apos;m the CCO at{" "}
          <a
            href="https://10x.partners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 underline underline-offset-3 decoration-neutral-600 transition-colors hover:text-neutral-50"
          >
            10x Partners
          </a>
          , where we help organizations build and operate world-class data
          platforms. But my interest is broader than any one company or platform.
          I&apos;m trying to understand — and help others navigate — what it means
          to build in an era of genuinely transformative technology.
        </p>
        <p>
          This site is where I think in public. Not polished takes — actual
          thinking. The writing here is my attempt to work through what I&apos;m
          seeing, what I believe, and what I&apos;m getting wrong.
        </p>
      </div>

      <div className="mb-14 border-t border-neutral-800 pt-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Currently
            </h3>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li>CCO @ 10x Partners</li>
              <li>Applied AI strategy</li>
              <li>Writing on AI &amp; building</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Links
            </h3>
            <ul className="space-y-1.5">
              {[
                { label: "GitHub", href: "https://github.com/yohannd" },
                { label: "X / Twitter", href: "https://x.com/yohannd" },
                { label: "10x Partners", href: "https://10x.partners" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-300 underline underline-offset-3 decoration-neutral-700 transition-colors hover:text-neutral-100"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 border-t border-neutral-800 pt-10">
        <h2 className="mb-2 text-base font-medium text-neutral-100">
          Follow the writing
        </h2>
        <p className="mb-5 text-sm text-neutral-500">
          Subscribe to get new posts directly in your inbox.
        </p>
        <EmailSubscribe />
      </div>

      <div>
        <Link
          href="/contact"
          className="text-sm text-neutral-500 underline underline-offset-3 decoration-neutral-700 transition-colors hover:text-neutral-300"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
