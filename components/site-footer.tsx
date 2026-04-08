import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-12 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 border-t border-white/6 pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xl text-sm leading-7 text-white/56 sm:text-base">
              Lasa frizeria sa iasa din tiparele unui job si sa prinda aripi spre arta.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.28em] text-white/52">
            <Link href="/live" className="transition hover:text-white">LIVE</Link>
            <Link href="/courses" className="transition hover:text-white">Cursuri</Link>
            <Link href="/gallery" className="transition hover:text-white">Galerie</Link>
            <Link href="/reviews" className="transition hover:text-white">Review-uri</Link>
            <Link href={siteConfig.socials.instagram} className="transition hover:text-white">Instagram</Link>
            <Link href={siteConfig.socials.mero} className="transition hover:text-white">MERO</Link>
            <Link href={siteConfig.socials.whatsapp} className="transition hover:text-white">WhatsApp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
