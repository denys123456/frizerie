import { auth } from "@/auth";

import { LivePageContent } from "@/components/site/live-page-content";
import { hasSubscriptionAccess } from "@/lib/live-access";
import { getPastLiveSessions, getPrimaryLiveSession, isLiveSessionActive } from "@/lib/live";

export default async function LivePage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";
  const [hasAccess, liveSession] = await Promise.all([
    hasSubscriptionAccess(session?.user?.id, session?.user?.role),
    getPrimaryLiveSession()
  ]);
  const pastSessions = await getPastLiveSessions(true);
  const isActive = liveSession ? isLiveSessionActive(liveSession) : false;

  return (
    <section className="section-shell section-space pt-6 sm:pt-8">
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
          recordingUrl: item.recordingUrl || "",
          price: item.price,
          visibility: item.visibility
        }))}
      />
    </section>
  );
}
