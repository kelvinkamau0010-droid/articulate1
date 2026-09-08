import { cn } from "@/lib/utils";

const BARS = [0.4, 0.75, 0.5, 1, 0.65, 0.9, 0.45, 0.8, 0.55, 1, 0.6, 0.85, 0.4, 0.7, 0.5];

export function Waveform({
  active = true,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("flex h-8 items-center gap-[3px]", className)}
      aria-hidden="true"
    >
      {BARS.map((height, i) => (
        <span
          key={i}
          className="w-[3px] origin-center rounded-full bg-primary"
          style={{
            height: `${Math.round(height * 100)}%`,
            animation: active ? `wave-bar ${900 + (i % 5) * 160}ms ease-in-out infinite` : undefined,
            animationDelay: `${i * 70}ms`,
            opacity: active ? 1 : 0.35,
          }}
        />
      ))}
    </div>
  );
}
