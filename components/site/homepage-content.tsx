"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { Button } from "@/components/ui/button";
import { useCleaningContent } from "@/components/site/use-cleaning-content";
import { defaultServices, getAssetImageById } from "@/lib/cleaning-content";
import { brandImages, compactReviews } from "@/lib/data";

const courseMeta = [
  {
    label: "Incepatori",
    price: "3650 lei",
    note: "max 6 cursanti",
    description:
      "Curs incepatori de la 0, organizat fizic impreuna cu Scoala Comerciala si de Servicii Bacau."
  },
  {
    label: "Perfectionare 1 la 1",
    price: "1000 lei / zi",
    note: "1 zi intensiva",
    description:
      "Curs de perfectionare 1 la 1. Experienta intensiva alaturi de Virgil Agu, cu 2 modele reale, practica + corectare live."
  },
  {
    label: "LIVE",
    price: "100 lei / sesiune",
    note: "lunar",
    description:
      "LIVE Barber Experience. Tunsori live, explicatii pas cu pas si Q&A, ca sa vezi procesul real cap-coada."
  }
] as const;

const aboutParagraphs = [
  "Apropo, poti adauga si cursuri de incepatori fizice.",
  "Plus cursuri de frizerie pentru avansati (de perfectionare tot fizice.",
  "Curs incepatori de la 0 .",
  "Impreuna cu Scoala Comerciala si de Servicii Bacau, Provibe, alaturi de fondatorul Virgil Agu, organizeaza cursuri de frizerie dedicate incepatorilor.",
  "Cu o experienta vasta de peste 10 ani in domeniu, Virgil Agu a participat la zeci de seminarii si workshopuri, atat in calitate de cursant, cat si ca trainer.",
  "A format peste 300 de cursanti, ajutandu-i sa devina frizeri de top in industrie."
] as const;

const achievements = [
  "Fast Fade Dublin",
  "Master Barber Romania 2 ani consecutiv",
  "Multiple premii internationale"
] as const;

export function HomepageContent() {
  const { content } = useCleaningContent();
  const services = content.services.length ? content.services : defaultServices;

  return (
    <>
      <section className="section-shell section-space pt-8 sm:pt-14 lg:pt-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="premium-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.18),transparent_36%)]" />
            <div className="relative max-w-3xl">
              <span className="accent-chip">Virgil Agu Education</span>
              <h1 className="mt-7 max-w-4xl text-5xl leading-[0.88] text-white sm:text-6xl lg:text-7xl">
                Cursuri de frizerie. Live-uri reale. Rezultate premium.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Training fizic pentru incepatori si avansati, plus sesiuni live construite pe
                experienta reala din salon, competitie si educatie aplicata.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/courses">
                    Vezi cursuri
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/live">
                    <Play className="h-4 w-4" />
                    Vezi live
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="premium-card relative min-h-[420px] overflow-hidden">
            <Image
              src={brandImages.hero}
              alt="Virgil Agu"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/12 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-red-300">
                <span className="live-dot" />
                Educatie reala
              </div>
              <p className="mt-5 max-w-md text-2xl leading-tight text-white sm:text-3xl">
                Peste 300 de cursanti formati si peste 10 ani de experienta in industrie.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell section-space pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="premium-card overflow-hidden p-7 sm:p-10">
            <span className="accent-chip">About Me</span>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/68 sm:text-base">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="premium-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[320px]">
                <Image src={brandImages.aboutMain} alt="Virgil Agu trainer" fill className="object-cover" />
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[#d6b98c]">Palmares</p>
                <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
                  Trainer, competitor si fondator cu rezultate confirmate.
                </h2>
                <div className="mt-8 space-y-3">
                  {achievements.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-white/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell section-space pt-0">
        <FadeIn className="max-w-3xl">
          <span className="accent-chip">Cursuri</span>
          <h2 className="mt-6 text-4xl leading-[0.94] text-white sm:text-5xl">
            Trei directii clare. Fara sectiuni inutile. Fara clutter.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
            Cursuri fizice pentru incepatori si perfectionare, plus sesiuni live construite simplu,
            clar si premium.
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => {
            const meta = courseMeta[index];

            return (
              <StaggerItem key={service.id}>
                <article className="premium-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={getAssetImageById(service.imageId).src}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#d6b98c]">
                        {meta.label}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
                        {meta.note}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl leading-tight text-white">
                      {index === 0 ? "Curs de frizerie Incepatori" : service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base">
                      {meta.description}
                    </p>
                    <div className="mt-8 border-t border-white/10 pt-5">
                      <p className="text-sm uppercase tracking-[0.34em] text-white/42">Pret</p>
                      <p className="mt-2 text-3xl text-white">{meta.price}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="section-shell section-space pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <FadeIn className="premium-card p-7 sm:p-8 lg:col-span-1">
            <span className="accent-chip">Review-uri</span>
            <h2 className="mt-6 text-4xl leading-[0.94] text-white sm:text-5xl">
              Feedback real de la clienti.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              Design curat, mesaj clar si rezultate care inspira incredere.
            </p>
          </FadeIn>

          <div className="grid gap-6 lg:col-span-2 md:grid-cols-2 xl:grid-cols-3">
            {compactReviews.map((review) => (
              <FadeIn key={review.id} className="premium-card h-full p-6 sm:p-7">
                <p className="text-lg leading-8 text-white/76">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-lg text-white">{review.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.32em] text-white/40">
                    {review.source}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
