import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FramedPortrait } from "@/components/museum/framed-portrait";
import type { Exhibit } from "@/lib/museum-data";

export function ExhibitDrawer({
  exhibit,
  realmName,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  exhibit: Exhibit | null;
  realmName: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    if (!exhibit) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [exhibit, onClose, onPrev, onNext]);

  return (
    <>
      {exhibit ? (
        <button
          type="button"
          aria-label="Fechar ficha"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-[rgb(6_8_12_/_0.62)] transition-opacity duration-200"
        />
      ) : (
        <div className="pointer-events-none fixed inset-0 z-30 opacity-0" />
      )}
      <aside
        role="dialog"
        aria-modal={exhibit ? "true" : "false"}
        aria-labelledby="exhibit-name"
        className={`fixed z-40 flex flex-col overflow-hidden bg-void-softer shadow-[-20px_0_60px_rgb(0_0_0_/_0.45)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] max-md:inset-x-0 max-md:bottom-0 max-md:max-h-[86vh] max-md:rounded-t-xl max-md:border-t max-md:border-line md:top-0 md:right-0 md:h-full md:w-[min(440px,100%)] md:border-l md:border-line ${
          exhibit
            ? "max-md:translate-y-0 md:translate-x-0"
            : "max-md:translate-y-full md:translate-x-full"
        }`}
      >
        {exhibit ? (
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-5 pt-4">
              <span className="text-[0.7rem] tracking-[0.14em] text-[var(--realm-soft)] uppercase">
                {realmName}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1 border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-[var(--realm)] hover:text-ink"
              >
                Fechar
                <X className="size-3.5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="px-8 pt-4">
              <FramedPortrait exhibit={exhibit} size="hero" />
            </div>

            <div className="px-6 pt-5 pb-8">
              <p className="text-[0.72rem] tracking-[0.08em] text-[var(--realm-soft)]">
                {exhibit.domain}
              </p>
              <h2 id="exhibit-name" className="mt-1 font-display text-[1.7rem] text-ink">
                {exhibit.name}
              </h2>
              <p className="mt-1 text-[0.95rem] italic text-muted">{exhibit.epithet}</p>
              <p className="mt-4 max-w-[56ch] text-[1.02rem] leading-relaxed text-ink">
                {exhibit.text}
              </p>
              <div className="mt-5 border-l-2 border-[var(--realm)] bg-ink/5 px-4 py-3.5">
                <div className="text-[0.72rem] tracking-[0.08em] text-[var(--realm-soft)]">
                  Curiosidade
                </div>
                <p className="mt-1.5 text-[0.95rem] italic text-muted">{exhibit.fact}</p>
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className="inline-flex flex-1 items-center justify-center gap-1 border border-line py-2.5 text-sm text-muted transition-colors hover:text-ink disabled:opacity-30"
                >
                  <ChevronLeft className="size-4" />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!hasNext}
                  className="inline-flex flex-1 items-center justify-center gap-1 border border-line py-2.5 text-sm text-muted transition-colors hover:text-ink disabled:opacity-30"
                >
                  Seguinte
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </aside>
    </>
  );
}
