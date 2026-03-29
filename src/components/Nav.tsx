"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
          Yohann Doillon
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
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
