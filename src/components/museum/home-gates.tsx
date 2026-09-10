import { Link } from "@tanstack/react-router";
import { GitCompare } from "lucide-react";
import { REALMS } from "@/lib/museum-data";

export function HomeGates() {
  return (
    <div className="relative flex min-h-dvh flex-col" data-realm="central">
      <div className="anim-title pointer-events-none absolute top-[6%] left-1/2 z-10 w-[min(680px,88vw)] text-center max-md:relative max-md:top-auto max-md:left-auto max-md:w-auto max-md:px-5 max-md:pt-10 max-md:pb-2 max-md:translate-x-0">
        <p className="font-display text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">
          Acervo ilustrado
        </p>
        <h1 className="mt-2 font-display text-[clamp(1.7rem,4vw,2.7rem)] text-ink">
          Museu das Mitologias
        </h1>
        <p className="mt-2 text-base italic text-muted">
          Grécia e Escandinávia, lado a lado — retratos, salas e dois panteões.
        </p>
      </div>

      <div className="flex min-h-dvh flex-1 max-md:flex-col">
        <GateCard
          realm="greek"
          side="left"
          to="/ala/$realm"
          params={{ realm: "grega" }}
        />
        <GateCard
          realm="norse"
          side="right"
          to="/ala/$realm"
          params={{ realm: "nordica" }}
        />
      </div>

      <div className="relative z-10 border-t border-line bg-void px-5 py-5 text-center">
        <Link
          to="/convergencias"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <GitCompare className="size-4" strokeWidth={1.75} />
          Visitar o Salão das Convergências
        </Link>
      </div>
    </div>
  );
}

function GateCard({
  realm,
  side,
  to,
  params,
}: {
  realm: "greek" | "norse";
  side: "left" | "right";
  to: "/ala/$realm";
  params: { realm: "grega" | "nordica" };
}) {
  const data = REALMS[realm];
  return (
    <Link
      to={to}
      params={params}
      data-realm={realm}
      aria-label={`Entrar na ${data.name}`}
      className={`group relative flex min-h-[44vh] flex-1 items-end justify-center overflow-hidden ${
        side === "left" ? "anim-gate-left" : "anim-gate-right"
      }`}
    >
      <img
        src={data.gateScene}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-[0.62] saturate-[0.9] transition duration-500 group-hover:brightness-[0.74] group-hover:saturate-100"
      />
      <div
        className={`absolute inset-0 ${
          side === "left"
            ? "bg-[linear-gradient(180deg,rgb(11_14_20_/_0.15)_0%,rgb(11_14_20_/_0.55)_55%,rgb(11_14_20_/_0.94)_100%),linear-gradient(90deg,transparent_60%,rgb(38_68_92_/_0.35))]"
            : "bg-[linear-gradient(180deg,rgb(11_14_20_/_0.15)_0%,rgb(11_14_20_/_0.55)_55%,rgb(11_14_20_/_0.94)_100%),linear-gradient(270deg,transparent_60%,rgb(42_31_23_/_0.45))]"
        }`}
      />
      <div className="relative z-10 px-6 pb-14 text-center transition-transform duration-300 group-hover:-translate-y-1.5">
        <div className="text-[0.78rem] tracking-wide text-muted">{data.name}</div>
        <div
          className={`mt-1 font-display text-[clamp(1.5rem,3.4vw,2.2rem)] ${
            realm === "greek" ? "text-gold-soft" : "text-teal-soft"
          }`}
        >
          {data.gateTitle}
        </div>
        <p className="mx-auto mt-3 max-w-[34ch] text-[0.95rem] text-muted">{data.gateDesc}</p>
        <span
          className={`clip-gate mt-5 inline-block border px-6 py-2.5 text-sm ${
            realm === "greek" ? "border-gold-soft text-gold-soft" : "border-teal-soft text-teal-soft"
          }`}
        >
          {data.gateCta}
        </span>
      </div>
    </Link>
  );
}
