import { FadeIn } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { GalleryPageContent } from "@/components/site/gallery-page-content";

export default function GalleryPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Galerie"
          title="Galerie completa, construita exclusiv din imaginile locale."
          description="O prezentare mai editoriala, cu mai mult aer, focus pe fotografie si un lightbox care sustine senzatia premium."
          align="center"
        />
      </FadeIn>
      <div className="mx-auto mt-16 max-w-[92rem]">
        <GalleryPageContent />
      </div>
    </section>
  );
}
