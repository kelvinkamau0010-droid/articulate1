import { useState } from "react";
import {
  Briefcase,
  Handshake,
  Mic2,
  Presentation,
  Scale,
  Smile,
  Sparkle,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { Waveform } from "./waveform";
import { cn } from "@/lib/utils";

const COACHES = [
  {
    id: "friendly",
    name: "Friendly Coach",
    icon: Smile,
    blurb: "Casual everyday conversations",
    opener: "So — how was your weekend? Tell me the whole story, not the short version.",
  },
  {
    id: "business",
    name: "Business Coach",
    icon: Briefcase,
    blurb: "Professional communication",
    opener: "What do you think is the biggest challenge facing your team right now?",
  },
  {
    id: "interview",
    name: "Interview Coach",
    icon: Handshake,
    blurb: "Job interview simulations",
    opener: "Tell me about yourself and your professional experience.",
  },
  {
    id: "public",
    name: "Public Speaking Coach",
    icon: Presentation,
    blurb: "Presentations and spontaneous speaking",
    opener: "You have two minutes to explain why technology is changing education.",
  },
  {
    id: "pronunciation",
    name: "Pronunciation Coach",
    icon: Mic2,
    blurb: "Focused pronunciation training",
    opener: "Repeat after me: 'Clear communication requires careful thought.'",
  },
  {
    id: "debate",
    name: "Debate Coach",
    icon: Scale,
    blurb: "Arguments, opinions and structured thinking",
    opener: "Remote work damages company culture. Convince me otherwise.",
  },
  {
    id: "advanced",
    name: "Advanced Conversation",
    icon: Sparkle,
    blurb: "Complex, nuanced discussions",
    opener: "Where should the line sit between privacy and public safety?",
  },
];

export function Coaches() {
  const [activeId, setActiveId] = useState(COACHES[0]!.id);
  const active = COACHES.find((c) => c.id === activeId) ?? COACHES[0]!;

  return (
    <section id="coaches" className="border-y border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="AI speaking coach"
          title="Pick the coach the moment needs"
          description="Each coach changes the tone, the difficulty and the kind of questions you get — the same way a real mentor would."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {COACHES.map((coach) => {
                const isActive = coach.id === active.id;
                return (
                  <li key={coach.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(coach.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200",
                        isActive
                          ? "border-primary/50 bg-card shadow-elegant"
                          : "border-border bg-card/50 hover:border-primary/30 hover:bg-card",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-xl",
                          isActive
                            ? "bg-[image:var(--gradient-primary)] text-primary-foreground"
                            : "bg-secondary text-muted-foreground",
                        )}
                      >
                        <coach.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{coach.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {coach.blurb}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="sticky top-24 rounded-3xl border border-border bg-card p-6 shadow-elegant">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <active.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{active.name}</h3>
                  <p className="text-sm text-muted-foreground">{active.blurb}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl rounded-tl-md bg-secondary p-4">
                <p className="text-xs font-semibold text-muted-foreground">AI Coach</p>
                <p className="mt-1 text-sm leading-relaxed">{active.opener}</p>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-border p-4">
                <Waveform className="h-6 flex-1" />
                <span className="text-xs font-semibold text-muted-foreground">Your turn</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The coach remembers what you said earlier in the session, adapts the difficulty to
                your level, and only interrupts when a mistake actually matters.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
