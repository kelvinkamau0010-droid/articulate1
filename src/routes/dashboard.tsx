import { createFileRoute } from "@tanstack/react-router";
import { DashboardNav } from "@/components/dashboard/nav";
import { SessionCta } from "@/components/dashboard/session-cta";
import { ScoreOverview } from "@/components/dashboard/score-overview";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <DashboardNav />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
        <SessionCta />
        <ScoreOverview />
      </main>
    </div>
  );
}
