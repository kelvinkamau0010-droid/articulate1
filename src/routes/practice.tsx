import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DashboardNav } from "@/components/dashboard/nav";
import { CoachPicker } from "@/components/practice/coach-picker";
import { ConversationPanel } from "@/components/practice/conversation-panel";
import { COACH_PRESETS, type CoachId } from "@/lib/coach-presets";

export const Route = createFileRoute("/practice")({
  component: Practice,
});

function Practice() {
  const [coachId, setCoachId] = useState<CoachId>("friendly");
  const coach = COACH_PRESETS[coachId];

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <DashboardNav />
      <main className="mx-auto max-w-3xl space-y-5 px-4 py-8 sm:px-6 sm:py-10">
        <div>
          <h1 className="font-display text-2xl font-semibold">Practice</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick a coach and start talking — your mic does the rest.
          </p>
        </div>

        <CoachPicker selected={coachId} onSelect={setCoachId} />
        <ConversationPanel coach={coach} />
      </main>
    </div>
  );
}
