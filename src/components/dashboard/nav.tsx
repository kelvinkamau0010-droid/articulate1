import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AudioLines,
  BarChart3,
  BookOpen,
  LayoutDashboard,
  Mic2,
  Speech,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Practice", icon: Mic2 },
  { label: "Conversations", icon: AudioLines },
  { label: "Articulation", icon: Speech },
  { label: "Vocabulary", icon: BookOpen },
  { label: "Progress", icon: BarChart3 },
  { label: "Profile", icon: User },
] as const;

/**
 * Shell navigation for the logged-in product area. Only "Dashboard" is a
 * real destination today — the rest are placeholders until those sections
 * exist, wired up as disabled-looking but present so the information
 * architecture from the spec is visible from day one.
 */
export function DashboardNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-display text-[17px] font-semibold">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant">
              <AudioLines className="size-[18px]" aria-hidden="true" />
            </span>
            SpeakFlow<span className="text-primary">AI</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.label}
                type="button"
                aria-current={i === 0 ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  i === 0
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
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
          <div className="border-t border-border lg:hidden">
            <nav aria-label="Mobile" className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
              {NAV_ITEMS.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors",
                    i === 0 ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary",
                  )}
                >
                  <item.icon className="size-4" aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {/* Bottom nav for mobile — the most important sections only */}
      <nav
        aria-label="Bottom"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-border bg-background/95 backdrop-blur lg:hidden"
      >
        {NAV_ITEMS.slice(0, 5).map((item, i) => (
          <button
            key={item.label}
            type="button"
            aria-current={i === 0 ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
              i === 0 ? "text-primary" : "text-muted-foreground",
            )}
          >
            <item.icon className="size-5" aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
