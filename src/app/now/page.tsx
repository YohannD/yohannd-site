import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What Yohann Doillon is working on right now.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <h1 className="mb-3 text-[28px] font-[500] text-neutral-50">Now</h1>
      <p className="mb-10 text-[13px] text-neutral-500">Updated March 2026 · Zürich</p>

      <div className="space-y-8 text-base text-neutral-400 leading-relaxed">
        <div>
          <h2 className="mb-3 text-sm font-medium text-neutral-200">Working on</h2>
          <p>
            Building 10x Partners — helping organizations deploy AI and data
            platforms that actually work in production. Mostly enterprise, mostly
            complex, always interesting.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-medium text-neutral-200">Writing</h2>
          <p>
            Trying to write honestly about what building an AI-first company
            actually looks like from the inside — the decisions, the trade-offs,
            the things that don&apos;t show up in the headlines.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-medium text-neutral-200">Living</h2>
          <p>
            Zürich. Still adjusting to the pace of a city that takes weekends
            seriously. Reading more than I have in years. Running when the
            weather cooperates.
          </p>
        </div>
      </div>
    </div>
  );
}
