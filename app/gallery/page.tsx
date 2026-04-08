import { FadeIn } from "@/components/motion-shell";
import { GalleryPageContent } from "@/components/site/gallery-page-content";

export default function GalleryPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn className="overflow-hidden rounded-[2.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-luxury">
        <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b98c]">Galerie</p>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[0.84] text-white sm:text-6xl lg:text-7xl">
              Fotografia trebuie sa aiba scena ei, nu doar un grid banal.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Prezentarea este mai editoriala, cu mai mult aer si o senzatie de portofoliu high-end.
            </p>
          </div>
          <div className="grid gap-4 p-8 sm:grid-cols-2 sm:p-10 lg:p-14">
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="dashboard-label">Look</p>
              <p className="mt-3 text-3xl text-white">Editorial</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="dashboard-label">Focus</p>
              <p className="mt-3 text-3xl text-white">Image first</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5 sm:col-span-2">
              <p className="dashboard-label">Experience</p>
              <p className="mt-3 text-3xl text-white">Fullscreen lightbox premium</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-[92rem]">
        <GalleryPageContent />
      </div>
    </section>
  );
}
