import {
  Briefcase,
  Building2,
  Coffee,
  GraduationCap,
  Handshake,
  MessagesSquare,
  Mic2,
  Plane,
  Presentation,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const SCENARIOS = [
  { icon: Handshake, label: "Job interviews" },
  { icon: Briefcase, label: "Business meetings" },
  { icon: Presentation, label: "Public speaking" },
  { icon: MessagesSquare, label: "Everyday conversations" },
  { icon: Plane, label: "Travel" },
  { icon: Coffee, label: "Customer service" },
  { icon: Users, label: "Networking" },
  { icon: Mic2, label: "Presentations" },
  { icon: GraduationCap, label: "Academic English" },
  { icon: Building2, label: "Social conversations" },
];

export function Scenarios() {
  return (
    <section id="scenarios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Learning scenarios"
          title="Practice for the room you're actually walking into"
          description="Pick a scenario and the coach sets the tone, vocabulary and pace to match it — the same conversation you'd expect in real life."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SCENARIOS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 5) * 70}>
              <button
                type="button"
                className="group flex w-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold">{s.label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
