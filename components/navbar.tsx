"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Session } from "next-auth";

import { AuthButtons } from "@/components/auth-buttons";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Acasa" },
  { href: "/live", label: "LIVE" },
  { href: "/reviews", label: "Review-uri" },
  { href: "/courses", label: "Cursuri" }
];

export function Navbar({ session }: { session: Session | null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const visibleLinks = session?.user?.role === "ADMIN"
    ? [...navLinks, { href: "/admin", label: "Admin" }]
    : navLinks;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-5">
        <div
          className={cn(
            "soft-ring flex items-center justify-between rounded-full border px-5 py-3.5 transition duration-500 sm:px-7 lg:px-8",
            isScrolled
              ? "border-white/12 bg-black/72 shadow-panel backdrop-blur-2xl"
              : "border-white/8 bg-black/38 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          )}
        >
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
            {visibleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62 transition hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[#d6b98c] transition duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex">
            <AuthButtons session={session} />
          </div>
          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {isOpen ? (
          <div className="mt-3 rounded-[1.75rem] border border-white/10 bg-black/85 p-4 shadow-panel backdrop-blur-2xl md:hidden">
            <nav className="grid gap-2">
              {visibleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/78 transition hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t border-white/10 pt-4">
              <AuthButtons session={session} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
