"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Home,
  Images,
  Menu,
  MessageCircleMore,
  Radio,
  Star,
  X
} from "lucide-react";
import type { Session } from "next-auth";

import { AuthButtons } from "@/components/auth-buttons";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Acasa", icon: Home, tone: "bg-white/[0.06]" },
  { href: "/live", label: "LIVE", icon: Radio, tone: "bg-red-500/12" },
  { href: "/courses", label: "Cursuri", icon: GraduationCap, tone: "bg-[#d6b98c]/12" },
  { href: "/reviews", label: "Review-uri", icon: Star, tone: "bg-white/[0.05]" },
  { href: "/gallery", label: "Galerie", icon: Images, tone: "bg-white/[0.05]" },
  { href: "/contact", label: "Contact", icon: MessageCircleMore, tone: "bg-[#d6b98c]/10" }
] as const;

export function Navbar({ session }: { session: Session | null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const visibleLinks = session?.user?.role === "ADMIN"
    ? [...navLinks, { href: "/admin", label: "Admin", icon: ArrowUpRight, tone: "bg-white/[0.06]" }]
    : navLinks;

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 18);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell flex items-start justify-between gap-4 pt-5">
        <div
          className={cn(
            "rounded-full bg-black/38 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 will-change-transform",
            isScrolled ? "-translate-y-5 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
          )}
        >
          <Link href="/" aria-label="Go to homepage" className="block">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={cn(
              "hidden rounded-full bg-black/40 px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 md:flex",
              isScrolled ? "-translate-y-4 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
            )}
          >
            <AuthButtons session={session} />
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-black/50 text-white shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:bg-black/68"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 transition duration-300",
          isOpen ? "pointer-events-auto bg-black/72 backdrop-blur-[8px]" : "pointer-events-none bg-black/0"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-50 px-5 pt-20 transition duration-300 sm:px-7 lg:px-10",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        )}
      >
        <div className="section-shell">
          <div className="pointer-events-auto mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.008))] p-4 shadow-[0_32px_120px_rgba(0,0,0,0.38)] sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">Navigation</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-white/72 transition hover:bg-white/[0.1] hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
                Close
              </button>
            </div>

            <nav className="grid gap-3 sm:grid-cols-2">
              {visibleLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.01))] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("flex h-9 w-9 items-center justify-center rounded-full text-white/88", link.tone)}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-base text-white">{link.label}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/28 transition duration-300 group-hover:text-[#d6b98c]" />
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 md:hidden">
              <AuthButtons session={session} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
