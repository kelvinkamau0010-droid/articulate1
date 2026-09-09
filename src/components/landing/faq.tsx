import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./reveal";

const FAQS = [
  {
    q: "Do I need a good microphone?",
    a: "No. Any laptop or phone microphone works. SpeakFlow is built to handle normal room noise and everyday audio quality.",
  },
  {
    q: "What if I'm a beginner?",
    a: "The coach adjusts pace and vocabulary to your level from the first conversation, and gets harder as you improve.",
  },
  {
    q: "Is my audio saved?",
    a: "Recordings are used to generate your feedback for that session. You can review or delete your history from your account at any time.",
  },
  {
    q: "Can I cancel Premium anytime?",
    a: "Yes. There's no lock-in — cancel from your account settings and you'll keep access until the end of your billing period.",
  },
  {
    q: "Which coach should I start with?",
    a: "Most people start with the Friendly Coach for everyday conversation, then move into Interview or Business coaching once they're comfortable.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <Reveal delay={80} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
