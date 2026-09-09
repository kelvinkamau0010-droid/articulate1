import { AudioLines } from "lucide-react";
import { scrollToId } from "./cta";

const LINKS = [
  { label: "How it works", id: "how-it-works" },
  { label: "Coaches", id: "coaches" },
  { label: "Scenarios", id: "scenarios" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-[17px] font-semibold">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant">
            <AudioLines className="size-[18px]" aria-hidden="true" />
          </span>
          SpeakFlow<span className="text-primary">AI</span>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className="cursor-pointer transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SpeakFlow AI
        </p>
      </div>
    </footer>
  );
}
