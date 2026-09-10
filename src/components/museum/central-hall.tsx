import { Link } from "@tanstack/react-router";
import { Topbar } from "@/components/museum/topbar";
import { CENTRAL } from "@/lib/museum-data";

export function CentralHall() {
  return (
    <div className="flex min-h-dvh flex-col" data-realm="central">
      <Topbar />
      <section className="relative isolate h-[min(34vh,280px)] overflow-hidden border-b border-line">
        <img
          src={CENTRAL.scene}
          alt=""
          className="h-full w-full object-cover brightness-[0.62]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11_14_20_/_0.2),rgb(11_14_20_/_0.92))]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 md:px-11">
          <span className="clip-gate inline-block border border-[var(--realm)] px-2.5 py-1 font-display text-[0.7rem] tracking-[0.1em] text-[var(--realm-soft)]">
            Salão central
          </span>
          <h1 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] text-ink">
            {CENTRAL.title}
          </h1>
        </div>
      </section>

      <div className="px-5 py-8 md:px-11">
        <p className="max-w-[66ch] text-muted">{CENTRAL.intro}</p>

        <div className="mt-8 flex max-w-3xl gap-3">
          <Link
            to="/ala/$realm"
            params={{ realm: "grega" }}
            className="clip-gate flex-1 border border-gold px-4 py-3 text-center text-sm text-gold-soft"
          >
            Ala grega
          </Link>
          <Link
            to="/ala/$realm"
            params={{ realm: "nordica" }}
            className="clip-gate flex-1 border border-teal px-4 py-3 text-center text-sm text-teal-soft"
          >
            Ala nórdica
          </Link>
        </div>

        <div className="mt-9 flex flex-col gap-6">
          {CENTRAL.items.map((item) => (
            <article key={item.title} className="border border-line p-5 md:p-7">
              <h2 className="font-display text-lg text-ink">{item.title}</h2>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <CompareSide
                  realm="greek"
                  label="Grécia"
                  caption={item.grLabel}
                  image={item.grImage}
                  text={item.gr}
                />
                <CompareSide
                  realm="norse"
                  label="Escandinávia"
                  caption={item.noLabel}
                  image={item.noImage}
                  text={item.no}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompareSide({
  realm,
  label,
  caption,
  image,
  text,
}: {
  realm: "greek" | "norse";
  label: string;
  caption: string;
  image: string;
  text: string;
}) {
  return (
    <div className="flex gap-3.5" data-realm={realm}>
      <div className="portrait-mat w-20 shrink-0 p-1">
        <img src={image} alt="" className="aspect-[3/4] w-full object-cover object-top" />
      </div>
      <div>
        <div className="text-[0.7rem] tracking-[0.08em] text-[var(--realm-soft)]">{label}</div>
        <div className="font-display text-sm text-ink">{caption}</div>
        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink/90">{text}</p>
      </div>
    </div>
  );
}
