import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      <p className="text-xs uppercase tracking-[0.5em] text-accent/80">{eyebrow}</p>
      <h2 className="max-w-4xl text-4xl leading-[0.96] text-white md:text-5xl lg:text-6xl">{title}</h2>
      <p className={cn("max-w-2xl text-sm leading-7 text-white/62 sm:text-base", align === "center" && "mx-auto")}>
        {description}
      </p>
    </div>
  );
}
