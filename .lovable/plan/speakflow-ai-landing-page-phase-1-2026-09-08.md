# SpeakFlow AI — Landing Page (Phase 1)

Build the full marketing landing page only. No accounts, no database, no AI calls yet — but the page is written and structured so the app phases plug in behind the buttons later.

## What gets built

A single, polished home page with these sections, in order:

1. **Hero** — "Speak English with confidence." + subheadline, "Start Speaking Free" and "See How It Works" buttons, and an animated mock of the AI conversation interface (AI question, user reply, live scores: Fluency 82%, Clarity 88%, Vocabulary 76%).
2. **How It Works** — four steps: speak naturally, AI analyzes, personalized feedback, practice and improve.
3. **Why SpeakFlow** — six feature cards: real conversations, instant feedback, personalized coaching, pronunciation, vocabulary, confidence.
4. **AI Speaking Coach** — showcase of the coach personalities (Friendly, Business, Interview, Public Speaking, Pronunciation, Debate).
5. **Speaking Analysis** — mock report card with the six scores and sample "what you did well" / "improve this" feedback.
6. **Learning Scenarios** — the ten scenarios as a browsable grid.
7. **Progress Tracking** — mock progress chart (62 → 67 → 72 → 79) and metric breakdown.
8. **Testimonials** — three placeholder quotes, clearly labelled as demo content.
9. **Pricing** — Free vs Premium comparison.
10. **FAQ** — accordion, 6–8 questions.
11. **Final CTA + footer** — "Your voice is your most powerful communication tool."

Plus: sticky header with navigation, light/dark mode toggle, smooth scroll to sections, subtle motion on scroll, and a mobile layout designed for phones rather than a squeezed desktop.

## Behaviour of the buttons

Every button works. Until sign-up exists, "Start Speaking Free" scrolls to pricing and shows a short "coming soon — the speaking app is in build" note; no dead links or fake screens.

## Design

Before writing code I will show three rendered design directions for you to pick from. All three hold to: premium SaaS, clean and spacious, strong typography, rounded cards, restrained gradients, no cartoonish language-school look. Light and dark mode both.

## Technical notes

- React + TypeScript + Tailwind + shadcn/ui + Lucide, with Framer-style motion for the microphone waveform, score counters and scroll reveals.
- One design token system in the stylesheet (colors, typography, spacing) so the app phases inherit the same look.
- Page composed of small section components under `src/components/landing/`, rendered by the home route.
- Accessibility: semantic landmarks, keyboard-reachable nav and accordion, visible focus states, alt text, contrast-checked palette in both themes.
- SEO: page title, description, social preview tags, single H1, lazy-loaded imagery.
- No backend enabled in this phase.

## Next phases (not in this build)

- Phase 2: accounts (email/password + Google), onboarding, dashboard.
- Phase 3: voice conversation engine — speak in, coach speaks back — plus session analysis and speaking report.
- Phase 4: Articulation Lab, Say It Better, filler words, vocabulary, streaks.
- Phase 5: subscriptions, notifications, admin dashboard.
