import { useState } from "react";
import { portraitSrc, type Exhibit } from "@/lib/museum-data";
import { cn } from "@/lib/utils";

type Size = "tile" | "hero";

export function FramedPortrait({
  exhibit,
  size = "tile",
  className,
}: {
  exhibit: Exhibit;
  size?: Size;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  const src = portraitSrc(exhibit.id);

  return (
    <figure className={cn("portrait-mat p-1.5", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-void-soft",
          size === "hero" ? "aspect-[2/3] w-full" : "aspect-[2/3] w-full",
        )}
      >
        {broken ? (
          <div className="flex h-full items-end bg-[radial-gradient(circle_at_30%_20%,rgb(233_228_216_/_0.12),transparent_55%)] px-3 py-4">
            <span className="font-display text-lg text-ink">{exhibit.name}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={`Retrato de ${exhibit.name}`}
            className="h-full w-full object-cover object-top"
            onError={() => setBroken(true)}
          />
        )}
      </div>
    </figure>
  );
}
