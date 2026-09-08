import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mic, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waveform } from "./waveform";
import { Reveal } from "./reveal";
import { scrollToId, startFree } from "./cta";

const SCORES = [
  { label: "Fluency", value: 82 },
  { label: "Clarity", value: 88 },
  { label: "Vocabulary", value: 76 },
];

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 48;
    const id = setInterval(() => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(target * eased));
      if (frame >= total) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [target, run]);
  return value;
}

function ScoreChip({ label, value, run }: { label: string; value: number; run: boolean }) {
  const shown = useCountUp(value, run);
  return (
    <div className="rounded-xl border border-border bg-background/70 p-3">
      <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-semibold">{shown}%</p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-[width] duration-1000 ease-out"
          style={{ width: `${run ? value : 0}%` }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRun(true), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Your personal AI coach for fluent English
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
              Speak English with <span className="text-gradient">confidence.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practice real conversations with your personal AI speaking coach and improve your
              fluency, pronunciation, vocabulary and articulation every day.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={startFree}
                className="h-13 rounded-full bg-[image:var(--gradient-primary)] px-7 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                <Mic className="size-5" aria-hidden="true" />
                Start Speaking Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("how-it-works")}
                className="h-13 rounded-full border-border bg-background/60 px-7 text-base font-semibold"
              >
                <Play className="size-4" aria-hidden="true" />
                See How It Works
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["24/7", "Coach availability"],
                ["10", "Real-life scenarios"],
                ["6", "Skills scored"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-2xl font-semibold">{value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div ref={panelRef} className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl"
              style={{ animation: "soft-pulse 5s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div className="glass-panel rounded-3xl p-5 shadow-elegant sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-ember" aria-hidden="true" />
                  <p className="text-sm font-semibold">Live session · Friendly Coach</p>
                </div>
                <p className="text-xs text-muted-foreground">02:14</p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-secondary p-4">
                  <p className="text-xs font-semibold text-muted-foreground">AI Coach</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Tell me about something you're passionate about.
                  </p>
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[image:var(--gradient-primary)] p-4 text-primary-foreground">
                  <p className="text-xs font-semibold opacity-80">You</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Well, I'm passionate about technology because it has changed…
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-background/70 p-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Mic className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">Listening…</p>
                  <Waveform className="mt-1 h-6" />
                </div>
                <span className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-muted-foreground"
                      style={{ animation: `dot-blink 1.4s ${i * 200}ms infinite` }}
                    />
                  ))}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {SCORES.map((s) => (
                  <ScoreChip key={s.label} label={s.label} value={s.value} run={run} />
                ))}
              </div>

              <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <ArrowRight className="size-3.5" aria-hidden="true" />
                Analysis updates as you speak — no waiting until the end.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
