"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" aria-label="Pond home" className="text-ink">
          <Logo />
        </Link>

        <nav className="flex items-center gap-1 sm:gap-4" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="hidden rounded-full px-3 py-2 font-medium text-ink/80 hover:text-ink aria-[current=page]:text-indigo sm:inline-block"
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile keeps About visible; "How it works" lives on the home page anyway */}
          <Link
            href="/about"
            className="rounded-full px-3 py-2 font-medium text-ink/80 hover:text-ink sm:hidden"
          >
            About
          </Link>
          <Link href="/join" className="btn-primary">
            Join Pond
          </Link>
        </nav>
      </div>
    </header>
  );
}
