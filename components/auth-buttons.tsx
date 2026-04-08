import Link from "next/link";
import type { Session } from "next-auth";

import { SignOutButton } from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";

export function AuthButtons({ session }: { session: Session | null }) {
  if (!session?.user) {
    return (
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" className="hidden sm:inline-flex rounded-full border border-white/8 bg-white/[0.03] px-5">
          <Link href="/auth/signin">Autentificare</Link>
        </Button>
        <Button asChild className="border border-[#f1d9ae]/25 bg-[linear-gradient(180deg,#ecd4ac,#cfab72)] px-6 text-black shadow-[0_18px_45px_rgba(214,185,140,0.22)]">
          <Link href="/live">Vezi LIVE</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {session.user.role === "ADMIN" ? (
        <Button asChild variant="ghost" className="hidden sm:inline-flex rounded-full border border-white/8 bg-white/[0.03] px-5">
          <Link href="/admin">Admin</Link>
        </Button>
      ) : null}
      <Button asChild variant="secondary" className="hidden sm:inline-flex border-[#d6b98c]/24 bg-[#d6b98c]/[0.08] text-[#f4e5c8]">
        <Link href="/dashboard">Contul meu</Link>
      </Button>
      <SignOutButton />
    </div>
  );
}
