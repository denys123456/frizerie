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
      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((review, index) => (
          <StaggerItem key={review.id}>
            <FadeIn delay={index * 0.04} className="premium-card h-full p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg text-white">{review.name}</p>
                <span className="text-[10px] uppercase tracking-[0.38em] text-accent/80">
                  {review.source}
                </span>
              </div>
              <div className="mt-4 flex gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">{review.text}</p>
            </FadeIn>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
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
