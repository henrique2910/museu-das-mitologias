import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function Topbar({ backLabel = "Museu" }: { backLabel?: string }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-4 md:px-11">
      <Link to="/" className="group block">
        <span className="font-display text-sm tracking-wide text-ink/90">
          Museu das Mitologias
        </span>
        <small className="mt-0.5 block font-sans text-xs italic text-muted group-hover:text-ink">
          toque para voltar à entrada
        </small>
      </Link>
      <Link
        to="/"
        className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm text-muted transition-colors hover:border-line hover:text-ink"
      >
        <ArrowLeft className="size-4" strokeWidth={1.75} />
        {backLabel}
      </Link>
    </header>
  );
}
