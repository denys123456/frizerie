"use client";

import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion-shell";
import { Button } from "@/components/ui/button";

type ReviewItem = {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
};

export function ReviewsList({
  items,
  moreHref
}: {
  items: ReviewItem[];
  moreHref: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 3);

  return (
    <>
      <Stagger className="grid gap-8 lg:grid-cols-2">
        {visibleItems.map((review, index) => (
          <StaggerItem key={review.id}>
            <FadeIn
              delay={index * 0.04}
              className="relative h-full overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.008))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-10"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d6b98c]/[0.08] blur-3xl" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.38em] text-white/42">Verified review</p>
                  <p className="mt-3 text-3xl text-white">{review.name}</p>
                </div>
                <span className="rounded-full bg-white/[0.045] px-4 py-2 text-[10px] uppercase tracking-[0.38em] text-accent/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  {review.source}
                </span>
              </div>
              <div className="mt-6 flex gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74 sm:text-[1.25rem]">
                &ldquo;{review.text}&rdquo;
              </p>
            </FadeIn>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {items.length > 3 ? (
          <Button variant="secondary" onClick={() => setExpanded((value) => !value)}>
            {expanded ? "Arata mai putin" : "Arata mai mult"}
          </Button>
        ) : null}
        <Button asChild>
          <Link href={moreHref}>Vezi toate pe MERO</Link>
        </Button>
      </div>
    </>
  );
}
