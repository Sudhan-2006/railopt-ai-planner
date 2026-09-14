import { createFileRoute } from "@tanstack/react-router";
import { RailOptApp } from "@/components/RailOptApp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "RailOpt AI — Railway Block Planning" },
    { name: "description", content: "AI-assisted railway maintenance planning for safer and more efficient railway operations." },
    { property: "og:title", content: "RailOpt AI — Railway Block Planning" },
    { property: "og:description", content: "AI-assisted railway maintenance planning for safer and more efficient railway operations." },
  ] }),
  component: () => <RailOptApp view="dashboard" />,
});
