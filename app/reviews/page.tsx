import { FadeIn } from "@/components/motion-shell";
import { ReviewsList } from "@/components/reviews-list";
import { reviews, siteConfig } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn className="overflow-hidden rounded-[2.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] shadow-luxury">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/8 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d6b98c]">Review-uri</p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[0.84] text-white sm:text-6xl lg:text-7xl">
              Increderea trebuie sa se simta la fel de premium ca designul.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Mai putina senzatie de testimonial generic, mai multa greutate vizuala pentru vocea
              clientului si consistenta brandului.
            </p>
          </div>
          <div className="grid gap-4 p-8 sm:grid-cols-3 sm:p-10 lg:p-14">
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="dashboard-label">Rating</p>
              <p className="mt-3 text-3xl text-white">5.0</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="dashboard-label">Source</p>
              <p className="mt-3 text-3xl text-white">MERO</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="dashboard-label">Focus</p>
              <p className="mt-3 text-3xl text-white">Trust</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-6xl">
        <ReviewsList items={reviews} moreHref={siteConfig.socials.mero} />
      </div>
    </section>
  );
}
