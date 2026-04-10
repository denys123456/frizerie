import Link from "next/link";
import type { Session } from "next-auth";

import { SignOutButton } from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";

export function AuthButtons({ session }: { session: Session | null }) {
  if (!session?.user) {
    return (
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <Button asChild variant="ghost" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 sm:px-5">
          <Link href="/auth/signin">Autentificare</Link>
        </Button>
        <Button asChild className="border border-[#f1d9ae]/25 bg-[linear-gradient(180deg,#ecd4ac,#cfab72)] px-5 text-black shadow-[0_18px_45px_rgba(214,185,140,0.22)] sm:px-6">
          <Link href="/live">Vezi LIVE</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {session.user.role === "ADMIN" ? (
        <Button asChild variant="ghost" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 sm:px-5">
          <Link href="/admin">Admin</Link>
        </Button>
      ) : null}
      <Button asChild variant="secondary" className="inline-flex border-[#d6b98c]/24 bg-[#d6b98c]/[0.08] px-4 text-[#f4e5c8] sm:px-5">
        <Link href="/dashboard">Contul meu</Link>
      </Button>
      <SignOutButton />
    </div>
  );
}
