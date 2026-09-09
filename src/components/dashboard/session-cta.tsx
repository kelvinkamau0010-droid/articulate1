import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/landing/waveform";

/**
 * Mock user until auth is wired up. Replace with the signed-in
 * profile's name once Supabase auth is connected.
 */
const MOCK_USER_NAME = "Amara";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function SessionCta() {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="hero-glow flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h1 className="font-display text-2xl font-semibold sm:text-3xl">
            {getGreeting()}, {MOCK_USER_NAME} 👋
          </h1>
          <p className="mt-1.5 text-muted-foreground">Ready for today's speaking practice?</p>
        </div>

        <Button
          size="lg"
          className="h-13 shrink-0 gap-2 self-start rounded-full bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] sm:self-auto"
        >
          <Mic className="size-5" aria-hidden="true" />
          Start today's session
        </Button>
      </div>

      <div className="flex items-center gap-3 border-t border-border bg-secondary/40 px-6 py-3 sm:px-8">
        <Waveform active={false} className="h-5" />
        <span className="text-xs text-muted-foreground">
          Yesterday's streak: 12 days in a row 🔥
        </span>
      </div>
    </section>
  );
}
