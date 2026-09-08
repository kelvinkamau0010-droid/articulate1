import { BarChart3, Mic, MessageSquareQuote, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const STEPS = [
  {
    icon: Mic,
    title: "Speak naturally",
    body: "Answer your coach out loud, exactly as you would in a real conversation. No scripts, no grammar drills.",
  },
  {
    icon: BarChart3,
    title: "AI analyzes your speech",
    body: "Fluency, pace, filler words, pronunciation, grammar and vocabulary are measured from your own recording.",
  },
  {
    icon: MessageSquareQuote,
    title: "Receive personalized feedback",
    body: "A clear report shows what you did well and gives stronger ways to say the sentences you struggled with.",
  },
  {
    icon: TrendingUp,
    title: "Practice and improve",
    body: "Tomorrow's session targets your weak spots automatically, so every day builds on the last.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="One loop, repeated daily"
          description="Speak, listen, analyze, correct, practice, improve. The coach keeps you moving through the cycle instead of leaving you on a lesson page."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="h-full">
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <span className="absolute top-6 right-6 font-display text-sm font-semibold text-muted-foreground/60">
                  0{i + 1}
                </span>
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
