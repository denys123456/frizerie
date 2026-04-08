export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b98c]/30 bg-[radial-gradient(circle_at_top,rgba(246,214,162,0.3),rgba(214,185,140,0.08))] text-sm font-semibold uppercase tracking-[0.28em] text-[#f7ead6] shadow-[0_20px_48px_rgba(0,0,0,0.45)]">
        VA
      </div>
      <div>
        <p className="font-display text-xl font-semibold tracking-[0.12em] text-white sm:text-[1.65rem]">
          Virgil Agu
        </p>
        <p className="text-[10px] uppercase tracking-[0.58em] text-white/46">
          Education & Barbering
        </p>
      </div>
    </div>
  );
}
