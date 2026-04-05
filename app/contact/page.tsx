import Link from "next/link";
import { Instagram, MessageCircle, Phone, Video } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { FadeIn } from "@/components/motion-shell";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const contactItems = [
  { label: "WhatsApp", value: "+40 700 000 000", href: siteConfig.socials.whatsapp, icon: MessageCircle },
  { label: "Instagram", value: "@virgilagu", href: siteConfig.socials.instagram, icon: Instagram },
  { label: "Phone", value: "+40 700 000 000", href: siteConfig.socials.phone, icon: Phone }
];

export default function ContactPage() {
  return (
    <section className="section-shell section-space">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Programare rapida, contact clar, layout simplu."
          description="Totul ramane aerisit: date de contact, social si formularul de booking, fara sa se lupte intre ele pentru atentie."
        />
      </FadeIn>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="premium-card flex items-center gap-4 p-5 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <item.icon className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{item.label}</p>
                <p className="mt-1 text-xl text-white">{item.value}</p>
              </div>
            </Link>
          ))}
          <div className="premium-card p-6">
            <div className="flex items-center gap-3 text-accent">
              <Video className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.35em]">Live si colaborari</p>
            </div>
            <p className="mt-3 text-base leading-7 text-white/60">
              Pentru cursuri, colaborari sau sesiuni private, foloseste acelasi formular si centralizezi totul intr-un singur flux.
            </p>
          </div>
        </div>
        <div id="booking">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
