import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.1rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.11),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.006))] px-6 py-7 shadow-[0_26px_90px_rgba(0,0,0,0.22)] sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <Logo />
                <p className="hidden text-[10px] uppercase tracking-[0.36em] text-white/32 sm:block">
                  Virgil Agu
                </p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/56 sm:text-base">
                Educatie, executie si prezenta construita curat, fara zgomot vizual inutil.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses" className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.26em] text-white/64 transition hover:bg-white/[0.08] hover:text-white">
                  Cursuri
                </Link>
                <Link href="/live" className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.26em] text-white/64 transition hover:bg-white/[0.08] hover:text-white">
                  Live
                </Link>
                <Link href="/contact" className="rounded-full border border-[#d6b98c]/18 bg-[#d6b98c]/[0.08] px-4 py-3 text-xs uppercase tracking-[0.26em] text-[#f1dec0] transition hover:bg-[#d6b98c]/[0.15] hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/gallery" className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-white/68 transition hover:bg-white/[0.06] hover:text-white">
                Galerie
              </Link>
              <Link href="/reviews" className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-white/68 transition hover:bg-white/[0.06] hover:text-white">
                Review-uri
              </Link>
              <Link href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-white/68 transition hover:bg-white/[0.06] hover:text-white">
                Instagram
                <ArrowUpRight className="h-4 w-4 text-white/34 transition group-hover:text-[#d6b98c]" />
              </Link>
              <Link href={siteConfig.socials.mero} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm text-white/68 transition hover:bg-white/[0.06] hover:text-white">
                MERO
                <ArrowUpRight className="h-4 w-4 text-white/34 transition group-hover:text-[#d6b98c]" />
              </Link>
              <Link href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[1.35rem] border border-[#d6b98c]/18 bg-[#d6b98c]/[0.08] px-5 py-4 text-sm text-[#f1dec0] transition hover:bg-[#d6b98c]/[0.15] hover:text-white sm:col-span-2">
                WhatsApp
                <ArrowUpRight className="h-4 w-4 text-[#f1dec0]/80 transition group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
