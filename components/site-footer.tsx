import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-6 text-white/55">
            Cursuri de frizerie, sesiuni LIVE si rezultate premium, construite pe experienta reala
            din salon, competitii si sute de cursanti formati alaturi de Virgil Agu.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
          <Link href="/live" className="transition hover:text-white">LIVE</Link>
          <Link href="/courses" className="transition hover:text-white">Cursuri</Link>
          <Link href="/gallery" className="transition hover:text-white">Galerie</Link>
          <Link href="/reviews" className="transition hover:text-white">Review-uri</Link>
          <Link href={siteConfig.socials.instagram} className="transition hover:text-white">Instagram</Link>
          <Link href={siteConfig.socials.mero} className="transition hover:text-white">MERO</Link>
          <Link href={siteConfig.socials.whatsapp} className="transition hover:text-white">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}
