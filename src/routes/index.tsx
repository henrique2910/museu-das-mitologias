import { createFileRoute } from "@tanstack/react-router";
import { HomeGates } from "@/components/museum/home-gates";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <HomeGates />;
}
