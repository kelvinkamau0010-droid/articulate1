import { COACH_PRESETS, type CoachId } from "@/lib/coach-presets";

export type ScenarioId =
  | "job-interviews"
  | "business-meetings"
  | "public-speaking"
  | "everyday-conversations"
  | "travel"
  | "customer-service"
  | "networking"
  | "presentations"
  | "academic-english"
  | "social-conversations";

export type ScenarioPreset = {
  id: ScenarioId;
  label: string;
  coachId: CoachId;
  opener: string;
};

/**
 * Each landing-page scenario borrows an existing coach persona for tone
 * and correction style, but opens with a line specific to that scenario
 * rather than the coach's generic opener.
 */
export const SCENARIO_PRESETS: Record<ScenarioId, ScenarioPreset> = {
  "job-interviews": {
    id: "job-interviews",
    label: "Job interviews",
    coachId: "interview",
    opener: "Tell me about yourself and your professional experience.",
  },
  "business-meetings": {
    id: "business-meetings",
    label: "Business meetings",
    coachId: "business",
    opener: "What do you think is the biggest challenge facing your team right now?",
  },
  "public-speaking": {
    id: "public-speaking",
    label: "Public speaking",
    coachId: "public",
    opener: "You have two minutes to explain why technology is changing education.",
  },
  "everyday-conversations": {
    id: "everyday-conversations",
    label: "Everyday conversations",
    coachId: "friendly",
    opener: "So, what have you been up to lately?",
  },
  travel: {
    id: "travel",
    label: "Travel",
    coachId: "friendly",
    opener: "Where are you headed on your next trip, and what are you most excited about?",
  },
  "customer-service": {
    id: "customer-service",
    label: "Customer service",
    coachId: "business",
    opener: "Hi there, thanks for calling — how can I help you today?",
  },
  networking: {
    id: "networking",
    label: "Networking",
    coachId: "business",
    opener: "It's nice to meet you. What do you do?",
  },
  presentations: {
    id: "presentations",
    label: "Presentations",
    coachId: "public",
    opener: "Whenever you're ready, go ahead and walk me through your presentation.",
  },
  "academic-english": {
    id: "academic-english",
    label: "Academic English",
    coachId: "advanced",
    opener: "What's a topic from your studies you find genuinely interesting right now?",
  },
  "social-conversations": {
    id: "social-conversations",
    label: "Social conversations",
    coachId: "friendly",
    opener: "It's a great party, isn't it? How do you know the host?",
  },
};

export function getScenarioPreset(id: string | undefined) {
  if (!id) return undefined;
  return SCENARIO_PRESETS[id as ScenarioId];
}

export const SCENARIO_LIST = Object.values(SCENARIO_PRESETS);

/** A coach preset with the opener swapped for the scenario's own opening line. */
export function buildScenarioCoach(scenario: ScenarioPreset) {
  const base = COACH_PRESETS[scenario.coachId];
  return { ...base, opener: scenario.opener };
}
