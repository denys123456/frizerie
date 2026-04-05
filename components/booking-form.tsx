"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      className="premium-card space-y-5 p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const response = await fetch("/api/bookings", {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData.entries())),
          headers: {
            "Content-Type": "application/json"
          }
        });

        setStatus(response.ok ? "Cererea a fost trimisa." : "Cererea nu a putut fi trimisa.");
        if (response.ok) form.reset();
      }}
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.36em] text-accent/80">Booking form</p>
        <h2 className="text-3xl text-white">Trimite cererea</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Nume"
          className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515]"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515]"
        />
        <input
          name="phone"
          placeholder="Telefon"
          className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515]"
        />
        <input
          name="service"
          required
          placeholder="Serviciu"
          className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515]"
        />
        <input
          name="preferredAt"
          type="datetime-local"
          required
          className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515] sm:col-span-2"
        />
      </div>
      <textarea
        name="notes"
        placeholder="Detalii suplimentare"
        rows={4}
        className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-accent/50 focus:bg-[#151515]"
      />
      <Button type="submit">Trimite cererea</Button>
      {status ? <p className="text-sm text-accent">{status}</p> : null}
    </form>
  );
}
