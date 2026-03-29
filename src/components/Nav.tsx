"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto flex max-w-[620px] items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-100 transition-colors hover:text-neutral-50"
        >
          YD
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
