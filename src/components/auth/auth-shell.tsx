import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AudioLines } from "lucide-react";

export function AuthShell({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="hero-glow flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 font-display text-lg font-semibold">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant">
            <AudioLines className="size-[18px]" aria-hidden="true" />
          </span>
          SpeakFlow<span className="text-primary">AI</span>
        </Link>

        <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-elegant">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>

          <div className="mt-6">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
      </div>
    </div>
  );
}
