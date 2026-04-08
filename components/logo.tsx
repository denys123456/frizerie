import Image from "next/image";

import profileImage from "@/assets/about me/pozaProfil.png";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d6b98c]/30 shadow-[0_20px_48px_rgba(0,0,0,0.45)]">
        <Image src={profileImage} alt="Virgil Agu" fill className="object-cover" />
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
