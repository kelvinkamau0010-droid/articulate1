import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "./reveal";
import { startFree } from "./cta";

const FREE_FEATURES = [
  "Three conversations a day",
  "Basic speaking analysis",
  "Limited vocabulary exercises",
  "Weekly progress summary",
];

const PREMIUM_FEATURES = [
  "Unlimited conversations",
  "Advanced speech analysis",
  "Personalized coaching plan",
  "All scenarios and coaches",
  "Detailed progress reports",
  "Full conversation history",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Upgrade when it becomes a habit."
          description="No credit card to start. Cancel Premium anytime — you keep access until the end of the billing period."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="mt-2 font-display text-4xl font-semibold">$0</p>
              <p className="mt-1 text-sm text-muted-foreground">Forever</p>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                onClick={startFree}
                className="mt-8 h-11 rounded-full border-border font-semibold"
              >
                Start speaking free
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative flex h-full flex-col rounded-3xl border border-primary/40 bg-card p-8 shadow-elegant">
              <Badge className="absolute -top-3 left-8 border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground">
                Most popular
              </Badge>

              <h3 className="text-lg font-semibold">Premium</h3>
              <p className="mt-2 font-display text-4xl font-semibold">
                $12<span className="text-lg font-normal text-muted-foreground"> / month</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Billed monthly</p>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {PREMIUM_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={startFree}
                className="mt-8 h-11 rounded-full bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02]"
              >
                Go Premium
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
