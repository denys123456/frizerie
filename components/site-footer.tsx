import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="py-12 sm:py-16">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.008))] px-7 py-10 shadow-[0_36px_110px_rgba(0,0,0,0.26)] sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="space-y-5">
            <Logo />
            <p className="max-w-xl text-sm leading-7 text-white/56 sm:text-base">
              Lasa frizeria sa iasa din tiparele unui job si sa prinda aripi spre arta.
            </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/live" className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">LIVE</Link>
              <Link href="/courses" className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">Cursuri</Link>
              <Link href="/gallery" className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">Galerie</Link>
              <Link href="/reviews" className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">Review-uri</Link>
              <Link href={siteConfig.socials.instagram} className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">Instagram</Link>
              <Link href={siteConfig.socials.mero} className="rounded-full bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/58 transition hover:bg-white/[0.08] hover:text-white">MERO</Link>
              <Link href={siteConfig.socials.whatsapp} className="rounded-full bg-[#d6b98c]/[0.1] px-4 py-3 text-xs uppercase tracking-[0.28em] text-[#f1dec0] transition hover:bg-[#d6b98c]/[0.16] hover:text-white sm:col-span-2 lg:col-span-3">WhatsApp</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
