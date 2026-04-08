import Link from "next/link";

import { auth } from "@/auth";

import { LivePageContent } from "@/components/site/live-page-content";
import { FadeIn } from "@/components/motion-shell";
import { Button } from "@/components/ui/button";
import { hasSubscriptionAccess } from "@/lib/live-access";
import { getPastLiveSessions, getPrimaryLiveSession, isLiveSessionActive } from "@/lib/live";

export default async function LivePage() {
  const session = await auth();
  const isLoggedIn = Boolean(session?.user?.id);
  const isAdmin = session?.user?.role === "ADMIN";
  const [hasAccess, liveSession] = await Promise.all([
    hasSubscriptionAccess(session?.user?.id, session?.user?.role),
    getPrimaryLiveSession()
  ]);
  const pastSessions = await getPastLiveSessions(hasAccess);
  const isActive = liveSession ? isLiveSessionActive(liveSession) : false;

  return (
    <section className="section-shell section-space">
      <FadeIn className="premium-card px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300">
              <span className="live-dot" />
              Live Barber Experience
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[0.92] text-white sm:text-5xl lg:text-6xl">
              Video centrat mare, chat in dreapta si acces clar, fara clutter.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
              In fiecare luna, Virgil intra live si lucreaza pe modele reale, explicand pas cu pas
              tehnicile, ritmul de lucru si deciziile din proces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={!isLoggedIn ? "/auth/signin" : hasAccess || isAdmin ? "/live" : "/api/stripe/checkout?mode=subscription"}>
                {!isLoggedIn ? "Autentificare" : hasAccess || isAdmin ? "Acces activ" : "Activeaza abonamentul"}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/courses">Vezi cursuri</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="dashboard-label">Status acces</p>
            <p className="mt-3 text-lg text-white">
              {!isLoggedIn
                ? "Necesita autentificare"
                : hasAccess || isAdmin
                  ? "Acces valid"
                  : "Abonament necesar"}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="dashboard-label">Status sesiune</p>
            <p className="mt-3 text-lg text-white">{isActive ? "LIVE acum" : "Programata / inactiva"}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="dashboard-label">Acces continut</p>
            <p className="mt-3 text-lg text-white">Video + chat + replay</p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-10">
        <LivePageContent
          canAccess={hasAccess}
          isAdmin={isAdmin}
          initialSession={liveSession
            ? {
                id: liveSession.id,
                title: liveSession.title,
                description: liveSession.description,
                scheduledFor: liveSession.scheduledFor.toISOString(),
                isLive: isActive
              }
            : null}
          pastSessions={pastSessions.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            scheduledFor: item.scheduledFor.toISOString(),
            recordingUrl: item.recordingUrl || ""
          }))}
        />
      </div>
    </section>
  );
}
