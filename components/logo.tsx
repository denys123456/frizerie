export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b98c]/25 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.24),rgba(214,185,140,0.08))] text-sm font-semibold uppercase tracking-[0.28em] text-[#f2e4cb] shadow-[0_14px_38px_rgba(0,0,0,0.35)]">
        VA
      </div>
      <div>
        <p className="font-display text-xl font-semibold tracking-[0.08em] text-white sm:text-[1.65rem]">
          Virgil Agu
        </p>
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/42">
          Education & Barbering
        </p>
      </div>
    </div>
  );
}
