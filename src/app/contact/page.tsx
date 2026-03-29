import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yohann Doillon.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[620px] px-5 py-16">
      <div className="mb-12">
        <h1 className="mb-3 text-2xl font-semibold text-neutral-50">
          Get in touch
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          Interested in working together, speaking at your event, or just want
          to talk data and AI? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="divide-y divide-neutral-800">
        {[
          {
            label: "Email",
            desc: "Best for business inquiries, partnership opportunities, or speaking requests.",
            link: { href: "mailto:yohann@10x.partners", text: "yohann@10x.partners" },
          },
          {
            label: "LinkedIn",
            desc: "Connect professionally. I respond to thoughtful connection requests and messages.",
            link: { href: "https://linkedin.com/in/yohanndoillon", text: "linkedin.com/in/yohanndoillon →" },
          },
          {
            label: "10x Partners",
            desc: "For enterprise data platform and Palantir advisory engagements, reach out through 10x.",
            link: { href: "https://10x.partners/contact", text: "10x.partners/contact →" },
          },
          {
            label: "X / Twitter",
            desc: "Follow for thoughts on AI, data platforms, and enterprise software. DMs open.",
            link: { href: "https://x.com/yohannd", text: "@yohannd →" },
          },
        ].map((item) => (
          <div key={item.label} className="py-6">
            <h2 className="mb-1.5 text-sm font-medium text-neutral-200">{item.label}</h2>
            <p className="mb-3 text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            <a
              href={item.link.href}
              target={item.link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={item.link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-sm text-neutral-300 underline underline-offset-3 decoration-neutral-700 transition-colors hover:text-neutral-100"
            >
              {item.link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
