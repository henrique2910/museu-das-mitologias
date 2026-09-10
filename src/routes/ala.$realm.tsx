import { createFileRoute, redirect } from "@tanstack/react-router";
import { WingView } from "@/components/museum/wing-view";
import { REALMS, SLUG_TO_REALM, isRealmSlug } from "@/lib/museum-data";

type WingSearch = {
  sala?: string;
};

export const Route = createFileRoute("/ala/$realm")({
  validateSearch: (search: Record<string, unknown>): WingSearch => ({
    sala: typeof search.sala === "string" ? search.sala : undefined,
  }),
  beforeLoad: ({ params }) => {
    if (!isRealmSlug(params.realm)) {
      throw redirect({ to: "/" });
    }
  },
  component: WingPage,
});

function WingPage() {
  const { realm } = Route.useParams();
  const { sala } = Route.useSearch();
  if (!isRealmSlug(realm)) return null;
  return <WingView realm={REALMS[SLUG_TO_REALM[realm]]} sala={sala} />;
}
