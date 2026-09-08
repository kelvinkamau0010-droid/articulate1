import { useEffect, useState } from "react";
import { AudioLines, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { scrollToId, startFree } from "./cta";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "How it works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "Coaches", id: "coaches" },
  { label: "Scenarios", id: "scenarios" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel border-x-0 border-t-0 shadow-soft" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-[17px] font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant">
            <AudioLines className="size-[18px]" aria-hidden="true" />
          </span>
          SpeakFlow<span className="text-primary">AI</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            onClick={startFree}
            className="hidden rounded-full bg-[image:var(--gradient-primary)] px-5 font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Start Speaking Free
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="glass-panel border-x-0 border-b-0 lg:hidden">
          <nav aria-label="Mobile" className="mx-auto grid max-w-6xl gap-1 px-4 pb-4 sm:px-6">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                startFree();
              }}
              className="mt-2 h-12 rounded-xl bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground"
            >
              Start Speaking Free
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
