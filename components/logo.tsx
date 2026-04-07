export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        VA
      </div>
      <div>
        <p className="font-display text-lg font-semibold text-white sm:text-xl">Virgil Agu</p>
        <p className="text-[10px] uppercase tracking-[0.42em] text-white/45">
          Education & Barbering
        </p>
      </div>
    </div>
  );
}
