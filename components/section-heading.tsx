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
    <div className={cn("space-y-5", align === "center" && "text-center")}>
      <p className="text-xs uppercase tracking-[0.46em] text-[#d6b98c]">{eyebrow}</p>
      <h2 className={cn("max-w-5xl text-5xl leading-[0.88] text-white md:text-6xl lg:text-7xl", align === "center" && "mx-auto")}>
        {title}
      </h2>
      <p className={cn("max-w-2xl text-base leading-8 text-white/62 sm:text-lg", align === "center" && "mx-auto")}>
        {description}
      </p>
    </div>
  );
}
