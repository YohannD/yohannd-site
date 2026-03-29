import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yohann Doillon.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm text-brand-400">contact</p>
        <h1 className="mb-4 text-4xl font-semibold text-neutral-50">
          Get in touch
        </h1>
        <p className="max-w-lg text-lg text-neutral-400 leading-relaxed">
          Interested in working together, speaking at your event, or just want
          to talk data and AI? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Direct contact */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
          <h2 className="mb-4 font-medium text-neutral-100">Email</h2>
          <p className="mb-4 text-sm text-neutral-400">
            Best for business inquiries, partnership opportunities, or speaking
            requests.
          </p>
          <a
            href="mailto:yohann@10x.partners"
            className="text-brand-400 transition-colors hover:text-brand-300"
          >
            yohann@10x.partners
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
          <h2 className="mb-4 font-medium text-neutral-100">LinkedIn</h2>
          <p className="mb-4 text-sm text-neutral-400">
            Connect professionally. I respond to thoughtful connection requests
            and messages.
          </p>
          <a
            href="https://linkedin.com/in/yohanndoillon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 transition-colors hover:text-brand-300"
          >
            linkedin.com/in/yohanndoillon →
          </a>
        </div>

        {/* 10x Partners */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
          <h2 className="mb-4 font-medium text-neutral-100">10x Partners</h2>
          <p className="mb-4 text-sm text-neutral-400">
            For enterprise data platform and Palantir advisory engagements,
            reach out through 10x.
          </p>
          <a
            href="https://10x.partners/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 transition-colors hover:text-brand-300"
          >
            10x.partners/contact →
          </a>
        </div>

        {/* X */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
          <h2 className="mb-4 font-medium text-neutral-100">X / Twitter</h2>
          <p className="mb-4 text-sm text-neutral-400">
            Follow for thoughts on AI, data platforms, and enterprise software.
            DMs open.
          </p>
          <a
            href="https://x.com/yohannd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 transition-colors hover:text-brand-300"
          >
            @yohannd →
          </a>
        </div>
      </div>
    </div>
  );
}
