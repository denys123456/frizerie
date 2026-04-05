import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Scissors,
  Sparkles,
  Star
} from "lucide-react";

import { GalleryGrid } from "@/components/gallery-grid";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Button } from "@/components/ui/button";
import {
  aboutHighlights,
  brandImages,
  compactReviews,
  homeGalleryPreview,
  homepageStats,
  services
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="section-shell section-space pt-10 sm:pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <FadeIn className="max-w-2xl">
            <span className="accent-chip">Premium Barber Studio</span>
            <h1 className="mt-6 text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              Clean cuts. Dark mood. Quiet confidence.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/66 sm:text-lg">
              Barbering premium, cu detalii precise, atmosfera calma si un rezultat care
              ramane curat si usor de purtat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact#booking">
                  Book appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/gallery">View gallery</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {homepageStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-5"
                >
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/42">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="relative">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-accent/10 blur-3xl lg:block" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="premium-card relative overflow-hidden sm:col-span-2">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={brandImages.hero}
                    alt="Premium barber studio"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-3 p-5">
                  <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                    Bucharest
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                    Sharp fades
                  </div>
                </div>
              </div>
              <div className="premium-card flex min-h-[180px] flex-col justify-between p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-white/45">Program</p>
                  <p className="mt-2 text-xl text-white">Luni - Sambata</p>
                  <p className="mt-1 text-sm text-white/60">
                    Interval optim pentru programari si retusuri precise.
                  </p>
                </div>
              </div>
              <div className="premium-card flex min-h-[180px] flex-col justify-between p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-white/45">Studio</p>
                  <p className="mt-2 text-xl text-white">Modern, dark, premium</p>
                  <p className="mt-1 text-sm text-white/60">
                    Spatiu aerisit, fara aglomeratie vizuala si fara compromis pe detalii.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Barbering gandit simplu, executat precis."
              description="Fara texte lungi, fara zgomot vizual. Doar o experienta curata, construita pe consistenta, forma si finisaj."
            />
          </FadeIn>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {aboutHighlights.map(([title, description]) => (
              <StaggerItem key={title}>
                <div className="premium-card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64 sm:text-base">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-shell section-space">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Servicii clare, spacing bun, fara aglomeratie."
            description="Trei optiuni esentiale, prezentate simplu si consistent. Fiecare card pastreaza aceeasi inaltime si acelasi ritm vizual."
          />
        </FadeIn>
        <Stagger className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.name}>
              <div className="premium-card flex h-full flex-col p-7 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                  <Scissors className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl text-white">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/64 sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm uppercase tracking-[0.28em] text-white/40">from</span>
                  <span className="text-lg text-accent">{service.price}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn className="premium-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Gallery Preview"
              title="Doar cateva imagini pe home, restul pe pagina dedicata."
              description="Preview scurt, aerisit si clar. Toata galeria ramane separata, cu lightbox fullscreen si grid coerent."
            />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/gallery">Open full gallery</Link>
            </Button>
          </FadeIn>
          <div>
            <GalleryGrid items={homeGalleryPreview} columns="preview" />
          </div>
        </div>
      </section>

      <TestimonialsSection
        items={compactReviews.map((item) => ({
          id: item.id,
          clientName: item.name,
          role: item.source,
          quote: item.text,
          rating: item.rating
        }))}
      />

      <section className="section-shell section-space">
        <FadeIn className="premium-card overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="accent-chip">Booking</span>
              <h2 className="mt-6 max-w-2xl text-4xl leading-[0.95] text-white sm:text-5xl">
                Rezerva simplu. Intri, te asezi, iesi cu un look curat.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 sm:text-base">
                Contact rapid, programare clara si un flow simplu, fara elemente inutile.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact#booking">
                  <CalendarDays className="h-4 w-4" />
                  Book now
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/reviews">
                  <Star className="h-4 w-4" />
                  Read reviews
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
