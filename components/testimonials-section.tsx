import Link from "next/link";
import { Star } from "lucide-react";

import { FadeIn } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function TestimonialsSection({
  items
}: {
  items: { id: string; clientName: string; role: string | null; quote: string; rating?: number }[];
}) {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <FadeIn className="premium-card p-8 sm:p-10">
          <SectionHeading
            eyebrow="Client Reviews"
            title="Destul feedback cat sa inspire incredere, nu sa incarce pagina."
            description="Sectiune scurta, aerisita, cu review-uri usor de citit si acces direct la istoricul complet."
          />
          <div className="mt-8 space-y-4 text-white/62">
            <p className="text-sm uppercase tracking-[0.34em] text-accent/80">MERO</p>
            <p className="text-5xl text-white">4.98</p>
            <p className="max-w-sm text-base leading-7">
              Rating excelent, construit din mii de interactiuni reale si confirmat de clienti.
            </p>
          </div>
          <Button asChild className="mt-8">
            <Link href={siteConfig.socials.mero}>+3000 review-uri</Link>
          </Button>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <FadeIn
              key={item.id}
              className="premium-card flex h-full flex-col p-8 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: item.rating || 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 flex-1 text-xl leading-8 text-white/76">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-lg text-white">{item.clientName}</p>
                <p className="text-sm uppercase tracking-[0.32em] text-white/40">
                  {item.role || "Client"}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
