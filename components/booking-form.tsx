"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <form
      className="space-y-6 rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.1),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] p-8 shadow-luxury"
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
        <h2 className="text-4xl leading-tight text-white">Trimite cererea</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Nume"
          className="field-shell"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="field-shell"
        />
        <input
          name="phone"
          placeholder="Telefon"
          className="field-shell"
        />
        <input
          name="service"
          required
          placeholder="Serviciu"
          className="field-shell"
        />
        <input
          name="preferredAt"
          type="datetime-local"
          required
          className="field-shell sm:col-span-2"
        />
      </div>
      <textarea
        name="notes"
        placeholder="Detalii suplimentare"
        rows={4}
        className="field-shell w-full"
      />
      <Button type="submit">Trimite cererea</Button>
      {status ? <p className="text-sm text-accent">{status}</p> : null}
    </form>
  );
}
