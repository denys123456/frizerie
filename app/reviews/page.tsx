import { FadeIn } from "@/components/motion-shell";
import { ReviewsList } from "@/components/reviews-list";
import { SectionHeading } from "@/components/section-heading";
import { reviews, siteConfig } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn>
        <SectionHeading
          eyebrow="Reviews"
          title="Review-uri scurte, clare si usor de scanat."
          description="Layout centrat, carduri curate si un singur buton de extindere ca pagina sa ramana simpla, nu incarcata."
          align="center"
        />
      </FadeIn>
      <div className="mx-auto mt-10 max-w-6xl">
        <ReviewsList items={reviews} moreHref={siteConfig.socials.mero} />
      </div>
    </section>
  );
}
