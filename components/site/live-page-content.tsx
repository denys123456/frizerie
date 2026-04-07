"use client";

import { ProtectedVideoPlayer } from "@/components/protected-video-player";
import { useCleaningContent } from "@/components/site/use-cleaning-content";
import { getYoutubeEmbedUrl } from "@/lib/cleaning-content";

export function LivePageContent({ canAccess }: { canAccess: boolean }) {
  const { content } = useCleaningContent();
  const embedUrl = canAccess ? getYoutubeEmbedUrl(content.live.url) : null;

  return <ProtectedVideoPlayer canAccess={canAccess} embedUrl={embedUrl} />;
}
