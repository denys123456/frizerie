import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, GraduationCap, Radio, Scissors } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { brandImages } from "@/lib/data";
import { getSiteSettings } from "@/lib/site-content";

function CourseCard({
  title,
  description,
  listTitle,
  listItems,
  detailTitle,
  detailItems,
  icon,
  cta
}: {
  title: string;
  description?: string[];
  listTitle?: string;
  listItems?: string[];
  detailTitle?: string;
  detailItems?: string[];
  icon: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <article className="premium-card flex h-full flex-col p-7 sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
        {icon}
      </div>
      <h2 className="mt-6 text-3xl text-white sm:text-4xl">{title}</h2>
      {description ? (
        <div className="mt-5 space-y-3 text-sm leading-7 text-white/66 sm:text-base">
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ) : null}

      {listTitle && listItems?.length ? (
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{listTitle}</p>
          <div className="mt-4 space-y-3">
            {listItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm leading-6 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {detailTitle && detailItems?.length ? (
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{detailTitle}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {detailItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/74"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <Button asChild variant="secondary" className="mt-8 w-fit">
        <Link href={cta.href}>
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </article>
  );
}

export default async function CoursesPage() {
  const { courses } = await getSiteSettings();

  return (
    <section className="section-shell section-space">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Courses"
          title="Cursuri prezentate curat, cu ritm vizual similar paginii de reviews."
          description="Trei directii clare: incepatori, 1 la 1 si live experience. Fara text in exces, fara layout incarcat."
          align="center"
        />
      </FadeIn>

      <FadeIn className="mx-auto mt-10 max-w-6xl">
        <div className="premium-card overflow-hidden">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={brandImages.aboutSecondary}
                alt="Virgil Agu courses"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Trainer</p>
              <h2 className="mt-4 text-4xl text-white sm:text-5xl">Virgil Agu</h2>
              <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base">
                Experienta de salon, competitii si sute de studenti trecuti prin procese
                reale, nu doar demonstratii sterile.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-5">
                  <p className="text-3xl text-white">10+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/45">
                    ani experienta
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-5">
                  <p className="text-3xl text-white">300+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/45">
                    studenti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <Stagger className="mx-auto mt-12 grid max-w-6xl gap-6 xl:grid-cols-3">
        <StaggerItem>
          <CourseCard
            title={courses.beginner.title}
            description={courses.beginner.description}
            listTitle="Achievements"
            listItems={courses.beginner.achievements}
            detailTitle="Details"
            detailItems={courses.beginner.details}
            icon={<GraduationCap className="h-5 w-5" />}
            cta={{ label: "See membership", href: "/live" }}
          />
        </StaggerItem>

        <StaggerItem>
          <CourseCard
            title={courses.advanced.title}
            description={[courses.advanced.description]}
            listTitle="Include"
            listItems={courses.advanced.includes}
            detailTitle="Ce inveti"
            detailItems={courses.advanced.outcomes}
            icon={<Scissors className="h-5 w-5" />}
            cta={{ label: "See live context", href: "/live" }}
          />
        </StaggerItem>

        <StaggerItem>
          <CourseCard
            title={courses.liveExperience.title}
            description={[courses.liveExperience.description]}
            listTitle="Include"
            listItems={courses.liveExperience.includes}
            detailTitle="Ce inveti"
            detailItems={[...courses.liveExperience.outcomes, ...courses.liveExperience.details]}
            icon={<Radio className="h-5 w-5" />}
            cta={{ label: "Go to live", href: "/live" }}
          />
        </StaggerItem>
      </Stagger>
    </section>
  );
}
