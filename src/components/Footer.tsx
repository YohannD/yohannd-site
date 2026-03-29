import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/yohannd" },
  { label: "X / Twitter", href: "https://x.com/yohannd" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-10 mt-20">
      <div className="mx-auto flex max-w-[620px] flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Yohann Doillon
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
