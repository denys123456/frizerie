import Link from "next/link";

import { LivePageContent } from "@/components/site/live-page-content";
import { FadeIn } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function LivePage() {
  return (
    <section className="section-shell section-space">
      <FadeIn>
        <SectionHeading
          eyebrow="LIVE"
          title="LIVE Barber Experience, direct alaturi de Virgil Agu."
          description="In fiecare luna, Virgil intra LIVE si lucreaza pe clienti reali, explicand pas cu pas miscarile, tehnicile si ritmul de lucru."
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <LivePageContent />
        <div className="premium-card p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Acces LIVE</p>
          <h2 className="mt-4 text-4xl text-white">
            Invata in timp real, din confortul casei tale
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Fiecare sesiune arata exact cum se construieste o tunsoare corecta, cum se optimizeaza viteza
            si cum se mentine calitatea fara pasi inutili.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/admin">Admin LIVE</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/gallery">Vezi galeria</Link>
            </Button>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/60">
            In sesiune vezi tunsori pe modele reale, explicatii detaliate, intrebari si raspunsuri,
            tehnici actuale si sfaturi construite din peste 10 ani de experienta. Pretul unei sesiuni LIVE este 100 lei.
          </div>
        </div>
      </div>
    </section>
  );
}
