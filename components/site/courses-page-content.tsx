"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { CourseDetailDialog } from "@/components/site/course-detail-dialog";
import { Button } from "@/components/ui/button";
import { courseOffers, getCourseCheckoutHref } from "@/lib/course-offers";
import { brandImages } from "@/lib/data";

export function CoursesPageContent() {
  return (
    <section className="section-shell section-space">
      <FadeIn className="overflow-hidden rounded-[2.8rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] shadow-luxury">
        <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b98c]">Cursuri</p>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[0.84] text-white sm:text-6xl lg:text-7xl">
              Programe premium construite pentru progres clar, nu pentru impresie generica.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
              Fiecare format are un rol clar: inceput curat, perfectionare directa sau lucru in timp real prin LIVE Barber Experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="px-7">
                <Link href={getCourseCheckoutHref(courseOffers[1].id)}>
                  Rezerva perfectionarea 1 la 1
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="px-7">
                <Link href="/live">Vezi live</Link>
              </Button>
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

      <Stagger className="mx-auto mt-14 grid max-w-7xl gap-5 xl:grid-cols-3">
        {courseOffers.map((course) => (
          <StaggerItem key={course.id}>
            <CourseDetailDialog course={course} ctaHref={getCourseCheckoutHref(course.id)} compact />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
