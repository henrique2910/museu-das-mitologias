import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExhibitDrawer } from "@/components/museum/exhibit-drawer";
import { FramedPortrait } from "@/components/museum/framed-portrait";
import { Topbar } from "@/components/museum/topbar";
import { findRoom, type Realm, type RealmSlug } from "@/lib/museum-data";

export function WingView({ realm, sala }: { realm: Realm; sala?: string }) {
  const room = useMemo(() => findRoom(realm, sala), [realm, sala]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    setOpenId(null);
  }, [room.id]);

  const openIndex = room.exhibits.findIndex((item) => item.id === openId);
  const exhibit = openIndex >= 0 ? room.exhibits[openIndex] : null;

  return (
    <div className="flex min-h-dvh flex-col" data-realm={realm.key}>
      <Topbar />

      <section className="relative isolate h-[min(42vh,380px)] overflow-hidden border-b border-line">
        <img
          src={room.scene}
          alt=""
          className="h-full w-full object-cover object-center brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11_14_20_/_0.15),rgb(11_14_20_/_0.88))]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 md:px-11">
          <span className="clip-gate inline-block border border-[var(--realm)] px-2.5 py-1 font-display text-[0.7rem] tracking-[0.1em] text-[var(--realm-soft)]">
            {realm.name}
          </span>
          <h1 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] text-ink">
            {room.title}
          </h1>
          <p className="mt-2 max-w-[62ch] text-sm text-ink/80 md:text-base">{room.desc}</p>
        </div>
      </section>

      <p className="px-5 pt-4 text-center text-sm italic text-muted md:px-11">
        Toque em um retrato para abrir a ficha da obra.
      </p>

      <div className="gallery-scroll flex gap-5 overflow-x-auto px-5 py-5 md:px-11">
        {room.exhibits.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="w-[min(58vw,220px)] shrink-0 text-left transition-transform duration-150 ease-out hover:-translate-y-1 active:scale-[0.98]"
            aria-label={`Ver ${item.name}`}
          >
            <FramedPortrait exhibit={item} />
            <span className="mt-3 block font-display text-base text-ink">{item.name}</span>
            <span className="mt-0.5 block text-xs italic text-muted">{item.epithet}</span>
          </button>
        ))}
      </div>

      <nav className="flex gap-2.5 overflow-x-auto px-5 pb-2 md:px-11" aria-label="Salas da ala">
        {realm.rooms.map((item) => {
          const active = item.id === room.id;
          return (
            <Link
              key={item.id}
              to="/ala/$realm"
              params={{ realm: realm.slug as RealmSlug }}
              search={{ sala: item.id }}
              className={`flex shrink-0 items-center gap-2 border border-line px-3.5 py-2.5 text-sm transition-colors ${
                active
                  ? "border-b-2 border-b-[var(--realm)] text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <p className="mt-auto border-t border-line px-5 py-5 text-xs italic text-muted md:px-11">
        Passeio ilustrativo — retratos de estudo e obras de acervo público (Wikimedia
        Commons), reunidos no espírito de percorrer uma sala de cada vez.
      </p>

      <ExhibitDrawer
        exhibit={exhibit}
        realmName={realm.name}
        onClose={() => setOpenId(null)}
        hasPrev={openIndex > 0}
        hasNext={openIndex >= 0 && openIndex < room.exhibits.length - 1}
        onPrev={() => {
          if (openIndex > 0) setOpenId(room.exhibits[openIndex - 1].id);
        }}
        onNext={() => {
          if (openIndex >= 0 && openIndex < room.exhibits.length - 1) {
            setOpenId(room.exhibits[openIndex + 1].id);
          }
        }}
      />
    </div>
  );
}
