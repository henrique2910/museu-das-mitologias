import { createFileRoute } from "@tanstack/react-router";
import { CentralHall } from "@/components/museum/central-hall";

export const Route = createFileRoute("/convergencias")({
  component: ConvergenciasPage,
});

function ConvergenciasPage() {
  return <CentralHall />;
}
