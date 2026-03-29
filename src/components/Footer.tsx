export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 mt-16">
      <div className="mx-auto flex max-w-[620px] items-center gap-5 px-5">
        <a
          href="https://x.com/yohannd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-300"
        >
          X
        </a>
        <a
          href="https://linkedin.com/in/yohannd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:yohann@10x.partners"
          className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
