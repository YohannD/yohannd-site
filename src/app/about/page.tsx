import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Yohann Doillon — founder, writer, living abroad.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <h1 className="mb-10 text-[28px] font-[500] text-neutral-50">About</h1>

      <div className="space-y-5 text-base text-neutral-400 leading-relaxed">
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
          decisions that determine whether a technology actually changes
          anything.
        </p>
        <p>
          That led me to applied AI. I&apos;ve spent the better part of the last
          decade working on real AI deployments in real organizations — not
          demos, not sandboxes. Production systems where the stakes were
          operational and the tolerance for error was low. The work taught me
          that the hardest part of AI is almost never the model. It&apos;s the
          organizational readiness, the data quality, the workflow integration,
          the change management.
        </p>
        <p>
          Today I&apos;m the founder of{" "}
          <a
            href="https://10x.partners"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-[3px] text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            10x Partners
          </a>
          , where we help organizations build and operate world-class data
          platforms. But my interest is broader than any one company or
          platform. I&apos;m trying to understand — and help others navigate —
          what it means to build in an era of genuinely transformative
          technology.
        </p>
        <p>
          This site is where I think in public. Not polished takes — actual
          thinking. The writing here is my attempt to work through what I&apos;m
          seeing, what I believe, and what I&apos;m getting wrong.
        </p>
        <p>
          Based in Zürich. Originally from Burgundy, France, with a few years
          in between.
        </p>
      </div>
    </div>
  );
}
