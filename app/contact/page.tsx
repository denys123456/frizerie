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
      <FadeIn className="max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Contact direct pentru cursuri, colaborari si sesiuni private."
          description="Datele de contact raman clare si usor de parcurs, fie ca vrei informatii despre cursul de incepatori, perfectionare 1 la 1 sau LIVE Barber Experience."
        />
      </FadeIn>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="grid gap-4">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-4 rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-6 shadow-panel transition duration-500 hover:-translate-y-1.5 hover:shadow-luxury"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b98c]/20 bg-[#d6b98c]/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{item.label}</p>
                <p className="mt-2 text-2xl text-white">{item.value}</p>
              </div>
            </Link>
          ))}
          <div className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-6 shadow-panel">
            <div className="flex items-center gap-3 text-accent">
              <Video className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.35em]">Cursuri si colaborari</p>
            </div>
            <p className="mt-3 text-base leading-7 text-white/60">
              Pentru inscrieri la cursuri, colaborari sau sesiuni private, foloseste acelasi formular si centralizezi totul intr-un singur flux.
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
