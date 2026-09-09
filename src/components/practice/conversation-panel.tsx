import { useEffect, useRef, useState } from "react";
import { Mic, Square, Loader2, Send, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Waveform } from "@/components/landing/waveform";
import { cn } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { sendCoachMessage } from "@/lib/ai/coach.server";
import type { CoachPreset } from "@/lib/coach-presets";

type Turn = { role: "user" | "assistant"; message: string };

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

export function ConversationPanel({ coach }: { coach: CoachPreset }) {
  const [turns, setTurns] = useState<Turn[]>([{ role: "assistant", message: coach.opener }]);
  const [textInput, setTextInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { supported, listening, interimTranscript, start, stop } = useSpeechRecognition();

  // Reset the conversation whenever the coach changes.
  useEffect(() => {
    setTurns([{ role: "assistant", message: coach.opener }]);
  }, [coach.id]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, interimTranscript]);

  async function submitMessage(message: string) {
    const trimmed = message.trim();
    if (!trimmed) return;

    const history = turns;
    setTurns((prev) => [...prev, { role: "user", message: trimmed }]);
    setTextInput("");
    setThinking(true);

    try {
      const { reply } = await sendCoachMessage({
        data: { coachId: coach.id, history, message: trimmed },
      });
      setTurns((prev) => [...prev, { role: "assistant", message: reply }]);
      speak(reply);
    } catch (error) {
      toast("The coach couldn't respond", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setThinking(false);
    }
  }

  function toggleMic() {
    if (listening) {
      stop();
      return;
    }
    start((finalTranscript) => {
      void submitMessage(finalTranscript);
    });
  }

  return (
    <div className="flex h-[600px] max-h-[75vh] flex-col rounded-3xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-semibold">{coach.name}</p>
          <p className="text-xs text-muted-foreground">{coach.blurb}</p>
        </div>
        {thinking ? (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
            Thinking…
          </span>
        ) : null}
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-6">
        {turns.map((turn, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
              turn.role === "assistant"
                ? "bg-secondary text-foreground"
                : "ml-auto bg-[image:var(--gradient-primary)] text-primary-foreground",
            )}
          >
            {turn.message}
          </div>
        ))}

        {interimTranscript ? (
          <div className="ml-auto max-w-[85%] rounded-2xl bg-secondary/60 px-4 py-2.5 text-sm italic text-muted-foreground">
            {interimTranscript}
          </div>
        ) : null}
      </div>

      <div className="border-t border-border px-5 py-4">
        {supported ? (
          <div className="flex items-center gap-4">
            <Button
              type="button"
              size="icon"
              onClick={toggleMic}
              aria-label={listening ? "Stop listening" : "Start speaking"}
              className={cn(
                "size-12 shrink-0 rounded-full shadow-elegant transition-transform hover:scale-105",
                listening
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-[image:var(--gradient-primary)] text-primary-foreground",
              )}
            >
              {listening ? <Square className="size-5" /> : <Mic className="size-5" />}
            </Button>

            <div className="flex-1">
              {listening ? (
                <Waveform active className="h-6" />
              ) : (
                <p className="text-sm text-muted-foreground">Tap the mic and start talking.</p>
              )}
            </div>

            <Volume2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submitMessage(textInput);
            }}
            className="flex items-center gap-2"
          >
            <Input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Speech recognition isn't supported here — type your reply instead"
              disabled={thinking}
            />
            <Button type="submit" size="icon" disabled={thinking} className="shrink-0 rounded-full">
              <Send className="size-4" />
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
