import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCoachPreset } from "@/lib/coach-presets";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  message: z.string(),
});

const inputSchema = z.object({
  coachId: z.string(),
  history: z.array(messageSchema).max(20),
  message: z.string().min(1).max(2000),
});

/**
 * The one place an AI provider key is used. Swap the fetch call below
 * to change providers without touching any client code — the practice
 * UI only ever talks to this server function, never to the provider
 * directly.
 *
 * NOTE: intentionally open to anyone right now (no requireSupabaseAuth)
 * so scenarios can be tried straight from the landing page without an
 * account. Re-add the auth middleware once you want practice sessions
 * gated behind login again.
 */
export const sendCoachMessage = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(async ({ data }) => {
    const coach = getCoachPreset(data.coachId);

    const apiKey = process.env["ANTHROPIC_API_KEY"];
    if (!apiKey) {
      throw new Error(
        "The AI coach isn't configured yet — add ANTHROPIC_API_KEY as an environment variable.",
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 300,
        system: coach.systemPrompt,
        messages: [
          ...data.history.map((m) => ({ role: m.role, content: m.message })),
          { role: "user", content: data.message },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Anthropic API error:", errorBody);
      throw new Error("The coach couldn't respond just now. Please try again.");
    }

    const result = (await response.json()) as {
      content: Array<{ type: string; text?: string }>;
    };

    const reply = result.content.find((block) => block.type === "text")?.text?.trim();

    if (!reply) {
      throw new Error("The coach didn't return a response. Please try again.");
    }

    return { reply };
  });
