import { cn } from "@/lib/utils";
import { COACH_LIST } from "@/lib/coach-presets";
import type { CoachId } from "@/lib/coach-presets";

export function CoachPicker({
  selected,
  onSelect,
}: {
  selected: CoachId;
  onSelect: (id: CoachId) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {COACH_LIST.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onSelect(c.id)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            selected === c.id
              ? "border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground",
          )}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
