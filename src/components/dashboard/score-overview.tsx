import { Mic2, Smile, Volume2, BookOpenText, SpellCheck2, Speech } from "lucide-react";
import { Progress } from "@/components/ui/progress";

/**
 * Mock scores until session history exists. Replace with an aggregate
 * pulled from the user's speaking_sessions once Supabase is connected.
 */
const OVERALL_SCORE = 76;

const METRICS = [
  { label: "Fluency", value: 78, icon: Mic2 },
  { label: "Confidence", value: 71, icon: Smile },
  { label: "Pronunciation", value: 82, icon: Volume2 },
  { label: "Vocabulary", value: 75, icon: BookOpenText },
  { label: "Grammar", value: 80, icon: SpellCheck2 },
  { label: "Articulation", value: 73, icon: Speech },
];

export function ScoreOverview() {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Speaking score</p>
          <p className="mt-1 font-display text-4xl font-semibold">
            {OVERALL_SCORE}
            <span className="text-lg font-normal text-muted-foreground"> / 100</span>
          </p>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground sm:text-right">
          Averaged across six dimensions from your last five sessions.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {METRICS.map((m) => (
          <div key={m.label} className="rounded-2xl border border-border bg-background/60 p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium">
                <m.icon className="size-4 text-primary" aria-hidden="true" />
                {m.label}
              </span>
              <span className="font-display text-lg font-semibold">{m.value}%</span>
            </div>
            <Progress value={m.value} className="mt-3 h-1.5" />
          </div>
        ))}
      </div>
    </section>
  );
}
