import {
  BrainCircuit,
  Gauge,
  MessagesSquare,
  ShieldCheck,
  Speech,
  BookOpenText,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const FEATURES = [
  {
    icon: MessagesSquare,
    title: "Real conversations",
    body: "Talk about work, opinions, plans and problems with a coach that asks follow-up questions instead of reading a script.",
  },
  {
    icon: Gauge,
    title: "Instant feedback",
    body: "Fluency, clarity and pace are scored while you speak, so you feel the difference within a single session.",
  },
  {
    icon: BrainCircuit,
    title: "Personalized coaching",
    body: "Your recurring mistakes shape tomorrow's practice. Struggle with past tense and you'll get more of it.",
  },
  {
    icon: Speech,
    title: "Pronunciation improvement",
    body: "Targeted sentences and word-level feedback on the sounds that keep tripping you up.",
  },
  {
    icon: BookOpenText,
    title: "Vocabulary enhancement",
    body: "Stronger alternatives pulled from words you actually overuse — not a random list to memorize.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence building",
    body: "Timed, no-preparation challenges train you to think in English instead of translating in your head.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why SpeakFlow"
          title="Built for people who already know English"
          description="You don't need more grammar rules. You need hours of speaking with feedback that tells you exactly what to change."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90} className="h-full">
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant">
                  <f.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
