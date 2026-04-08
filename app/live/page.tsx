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
      <FadeIn className="overflow-hidden rounded-[2.5rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.15),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] shadow-luxury">
        <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-white/8 p-8 sm:p-10 xl:border-b-0 xl:border-r xl:p-14">
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300">
              <span className="live-dot" />
              Live Barber Experience
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl leading-[0.84] text-white sm:text-6xl lg:text-7xl">
              Streaming premium, nu doar o pagina cu video si chat.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/62 sm:text-lg">
              Totul este rearanjat ca o experienta de platforma: acces clar, focalizare pe stream si
              o ierarhie care arata scump din primul ecran.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="px-7">
                <Link href={!isLoggedIn ? "/auth/signin" : hasAccess || isAdmin ? "/live" : "/api/stripe/checkout?mode=subscription"}>
                  {!isLoggedIn ? "Autentificare" : hasAccess || isAdmin ? "Acces activ" : "Activeaza abonamentul"}
                </Link>
              </Button>
              <Button asChild variant="secondary" className="px-7">
                <Link href="/courses">Vezi cursuri</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 p-8 sm:grid-cols-3 sm:p-10 xl:p-14">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="dashboard-label">Status acces</p>
              <p className="mt-3 text-lg text-white">
                {!isLoggedIn ? "Necesita autentificare" : hasAccess || isAdmin ? "Acces valid" : "Abonament necesar"}
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="dashboard-label">Status sesiune</p>
              <p className="mt-3 text-lg text-white">{isActive ? "LIVE acum" : "Programata / inactiva"}</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="dashboard-label">Acces continut</p>
              <p className="mt-3 text-lg text-white">Video + chat + replay</p>
            </div>
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
