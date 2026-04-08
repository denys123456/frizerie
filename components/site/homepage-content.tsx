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
  "Virgil Agu construieste cursuri pentru oameni care nu vor doar sa invete o tunsoare, ci sa inteleaga ritm, intentie, control si prezenta in lucru.",
  "Cu peste 10 ani de experienta, participari constante la seminarii si workshopuri, plus sute de ore petrecute langa cursanti, formarea vine din practica reala, nu din teorie decorativa.",
  "Peste 300 de cursanti au trecut prin procesul lui de lucru, iar diferenta vine exact de aici: claritate in explicatii, disciplina in executie si standard ridicat pana la ultimul detaliu."
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
      <section className="section-shell section-space pt-8 sm:pt-14 lg:pt-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
          <FadeIn className="flex min-h-[36rem] flex-col justify-between rounded-[2.25rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-7 py-10 shadow-luxury sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="max-w-4xl">
              <span className="section-kicker">Virgil Agu Education</span>
              <h1 className="mt-8 max-w-5xl text-[3.8rem] leading-[0.84] text-white sm:text-[5rem] lg:text-[6.4rem]">
                Locul unde frizeria inceteaza sa fie un job si devine arta.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                Aici incepe diferenta.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild className="px-7">
                  <Link href="/courses">
                    Vezi cursuri
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="px-7">
                  <Link href="/live">
                    <Play className="h-4 w-4" />
                    Vezi live
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-14 grid gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
              <div>
                <p className="dashboard-label">Experienta</p>
                <p className="mt-3 text-3xl text-white">10+ ani</p>
              </div>
              <div>
                <p className="dashboard-label">Cursanti formati</p>
                <p className="mt-3 text-3xl text-white">300+</p>
              </div>
              <div>
                <p className="dashboard-label">Format</p>
                <p className="mt-3 text-3xl text-white">Fizic + LIVE</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="relative min-h-[36rem] overflow-hidden rounded-[2.25rem] border border-white/8 shadow-luxury">
            <Image
              src={brandImages.hero}
              alt="Virgil Agu"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.76)),radial-gradient(circle_at_top,rgba(214,185,140,0.2),transparent_34%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-black/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-red-300 backdrop-blur-md">
                <span className="live-dot" />
                Educatie reala
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell section-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FadeIn className="section-intro">
            <span className="section-kicker">About Me</span>
            <h2 className="mt-6 editorial-title">
              Nu predau doar tehnica. Predau ochi, control, disciplina si standard.
            </h2>
            <div className="mt-7 max-w-xl space-y-4 text-sm leading-8 text-white/62 sm:text-base">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="premium-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[26rem]">
                <Image src={brandImages.aboutMain} alt="Virgil Agu trainer" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d6b98c]">Palmares</p>
                  <p className="mt-5 max-w-md text-2xl leading-tight text-white sm:text-3xl">
                    Rezultate reale din competitie, educatie si ani de executie constanta.
                  </p>
                  <div className="mt-8 space-y-3">
                    {achievements.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-5 py-4 text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell section-space pt-0">
        <FadeIn className="section-intro">
          <span className="section-kicker">Cursuri</span>
          <h2 className="mt-6 editorial-title">
            Trei directii clare, cu accent pe imagine, ritm si informatie esentiala.
          </h2>
          <p className="mt-6 editorial-copy">
            Cursurile nu mai stau in cutii generice. Fiecare bloc e mai mare, mai aerisit si lasa
            imaginea si valoarea sa conduca prima impresie.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-8 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => {
            const meta = courseMeta[index];

            return (
              <StaggerItem key={service.id}>
                <article className="group premium-card flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:shadow-luxury">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={getAssetImageById(service.imageId).src}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#d6b98c]">
                        {meta.label}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62">
                        {meta.note}
                      </span>
                    </div>
                    <h3 className="mt-6 text-3xl leading-tight text-white sm:text-[2.15rem]">
                      {index === 0 ? "Curs de frizerie Incepatori" : service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/64 sm:text-base">
                      {meta.description}
                    </p>
                    <div className="mt-8 border-t border-white/10 pt-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.34em] text-white/42">Pret</p>
                          <p className="mt-2 text-3xl text-white">{meta.price}</p>
                        </div>
                        <span className="rounded-full border border-[#d6b98c]/18 bg-[#d6b98c]/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#f1dec0]">
                          Plata in web
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="section-shell section-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <FadeIn className="section-intro">
            <span className="section-kicker">Review-uri</span>
            <h2 className="mt-6 editorial-title">Fara prea multa cosmetizare a realitatii.</h2>
            <p className="mt-6 editorial-copy">
              Review-urile de pe MERO pun realitatea in fata.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {compactReviews.map((review) => (
              <FadeIn key={review.id} className="premium-card h-full p-7 sm:p-8">
                <div className="flex gap-1 text-[#d6b98c]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className="text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="mt-6 text-lg leading-8 text-white/76">&ldquo;{review.text}&rdquo;</p>
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
