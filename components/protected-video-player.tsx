export function ProtectedVideoPlayer({
  canAccess,
  embedUrl
}: {
  canAccess: boolean;
  embedUrl?: string | null;
}) {
  return (
    <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Virgil Agu live stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video w-full bg-black"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center bg-black px-6 text-center text-white/60">
          Niciun LIVE disponibil momentan
        </div>
      )}
      <div className="p-6 text-sm leading-7 text-white/62">
        {embedUrl
          ? "Playerul foloseste un iframe YouTube generat din linkul salvat in admin."
          : canAccess
            ? "LIVE-ul nu are momentan un link valid salvat in admin."
            : "Adauga un URL YouTube valid in admin pentru a afisa sesiunea aici."}
      </div>
    </div>
  );
}
