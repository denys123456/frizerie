"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

import { GalleryGrid } from "@/components/gallery-grid";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { PricingSection } from "@/components/pricing-section";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Button } from "@/components/ui/button";
import { useCleaningContent } from "@/components/site/use-cleaning-content";
import {
  defaultGalleryImages,
  defaultServices,
  getAssetImageById
} from "@/lib/cleaning-content";
import {
  aboutHighlights,
  brandImages,
  compactReviews,
  homepageStats
} from "@/lib/data";

export function HomepageContent() {
  const { content } = useCleaningContent();
  const services = content.services.length ? content.services : defaultServices;
  const galleryItems = [...defaultGalleryImages, ...content.uploadedGallery];
  const previewGallery = galleryItems.slice(0, 4);

  return (
    <>
      <section className="section-shell section-space pt-10 sm:pt-14 lg:pt-20">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <span className="accent-chip">Virgil Agu Education</span>
          <h1 className="mt-6 text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            Cursuri de frizerie, live-uri si executie premium, fara clutter.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
            Virgil Agu construieste o platforma clara pentru cursuri de incepatori, perfectionare
            1 la 1, sesiuni live si o galerie care pune executia in valoare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/gallery">
                Vezi galeria
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/live">Vezi live</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="premium-card flex h-full flex-col overflow-hidden">
              <div className="relative min-h-[320px] flex-1">
                <Image
                  src={brandImages.hero}
                  alt="Virgil Agu hero"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.34em] text-accent/85">
                    Trainer cu peste 10 ani experienta
                  </p>
                  <p className="mt-2 text-2xl text-white sm:text-3xl">
                    Peste 300 de cursanti formati si rezultate premiate in tara si in strainatate.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {services.slice(0, 2).map((service) => (
                <div key={service.id} className="premium-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={getAssetImageById(service.imageId).src}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.34em] text-accent/85">Curs</p>
                      <h3 className="mt-2 text-2xl text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <Stagger className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {homepageStats.map(([value, label]) => (
            <StaggerItem key={label}>
              <div className="premium-card px-4 py-5 text-center">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/42">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Experienta de salon, competitie si training real."
              description="Virgil Agu a participat la zeci de seminarii si workshopuri, atat ca trainer, cat si ca participant, construind un proces clar si practic."
            />
          </FadeIn>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {aboutHighlights.map(([title, description]) => (
              <StaggerItem key={title}>
                <div className="premium-card flex h-full flex-col p-6">
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
            eyebrow="Cursuri"
            title="Trei directii clare: incepatori, perfectionare si live."
            description="Fiecare card ramane in aceeasi tema, dar foloseste acum continut relevant despre cursuri fizice si sesiuni LIVE."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="premium-card flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image
                  src={getAssetImageById(service.imageId).src}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn className="premium-card h-full p-8 sm:p-10">
            <SectionHeading
              eyebrow="Galerie"
              title="Rezultate reale, premii si imagini locale din portofoliu."
              description="Galeria ramane separata, dar preview-ul din homepage arata rapid stilul de lucru, premiile si executia care definesc brandul."
            />
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/gallery">Deschide galeria</Link>
            </Button>
          </FadeIn>
          <div>
            <GalleryGrid items={previewGallery} columns="preview" />
          </div>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="premium-card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent/80">LIVE Barber Experience</p>
            <h3 className="mt-3 text-3xl text-white">Invata in timp real alaturi de Virgil Agu.</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/60">
              In fiecare luna, Virgil intra LIVE si lucreaza pe modele reale, explicand pas cu pas tehnicile, ritmul de lucru si detaliile care fac diferenta.
            </p>
          </div>
          <Button asChild>
            <Link href="/live">
              <Play className="h-4 w-4" />
              Intra pe live
            </Link>
          </Button>
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

      <PricingSection />
    </>
  );
}
