import { FadeIn } from "@/components/motion-shell";
import { ReviewsList } from "@/components/reviews-list";
import { SectionHeading } from "@/components/section-heading";
import { reviews, siteConfig } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn>
        <SectionHeading
          eyebrow="Review-uri"
          title="Feedback real de la clienti care au vazut diferenta."
          description="Pagina ramane curata si usor de scanat, cu review-uri care sustin increderea in executia si constanta lui Virgil Agu."
          align="center"
        />
      </FadeIn>
      <div className="mx-auto mt-10 max-w-6xl">
        <ReviewsList items={reviews} moreHref={siteConfig.socials.mero} />
      </div>
    </section>
  );
}
