import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, GraduationCap, Radio, Scissors } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
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
    <article className="group premium-card flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:shadow-luxury">
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-accent backdrop-blur-md">
          {icon}
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <Image
          src={brandImages.aboutSecondary}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h2 className="text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
        {description ? (
          <div className="mt-5 space-y-3 text-sm leading-8 text-white/66 sm:text-base">
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
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-white/72"
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
                  className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-2 text-sm text-white/74"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <Button asChild variant="secondary" className="mt-10 w-fit">
          <Link href={cta.href}>
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export default async function CoursesPage() {
  const { courses } = await getSiteSettings();

  return (
    <section className="section-shell section-space">
      <FadeIn className="overflow-hidden rounded-[2.5rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] shadow-luxury">
        <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b98c]">Cursuri</p>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[0.84] text-white sm:text-6xl lg:text-7xl">
              Programe gandite sa te duca de la executie corecta la nivel de autoritate.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Fiecare directie are un rol clar, un ritm clar si o prezentare care lasa expertiza sa
              domine, nu interfata.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="dashboard-label">Beginner</p>
                <p className="mt-3 text-2xl text-white">De la zero</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="dashboard-label">Advanced</p>
                <p className="mt-3 text-2xl text-white">1 la 1</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="dashboard-label">LIVE</p>
                <p className="mt-3 text-2xl text-white">Streaming</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[32rem]">
            <Image src={brandImages.aboutSecondary} alt="Virgil Agu courses" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.25),rgba(0,0,0,0.72)),radial-gradient(circle_at_top,rgba(214,185,140,0.18),transparent_28%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.38em] text-white/55">Trainer profile</p>
              <p className="mt-3 max-w-sm text-3xl leading-tight text-white sm:text-4xl">
                10+ ani experienta si peste 300 de cursanti formati.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <Stagger className="mx-auto mt-16 grid max-w-7xl gap-8 xl:grid-cols-3">
        <StaggerItem>
          <CourseCard
            title={courses.beginner.title}
            description={courses.beginner.description}
            listTitle="Palmares"
            listItems={courses.beginner.achievements}
            detailTitle="Detalii"
            detailItems={courses.beginner.details}
            icon={<GraduationCap className="h-5 w-5" />}
            cta={{ label: "Vezi sesiunea LIVE", href: "/live" }}
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
            cta={{ label: "Vezi sesiunea LIVE", href: "/live" }}
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
            cta={{ label: "Intra pe LIVE", href: "/live" }}
          />
        </StaggerItem>
      </Stagger>
    </section>
  );
}
