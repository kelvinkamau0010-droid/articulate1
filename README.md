# SpeakWell AI

MASTER SOFTWARE DEVELOPMENT PROMPT

AI-Powered English Fluency, Articulation & Confidence Coaching Platform

Act as a Senior Software Architect, Senior Full-Stack Engineer, AI Engineer, Product Designer, UX Strategist, Database Architect, and SaaS Product Manager.

Your task is to design and develop a production-quality, modern, responsive web application that helps users become more fluent, articulate, natural, and confident when speaking English.

The application should not feel like a traditional grammar-learning website.

It should feel like having a personal AI English-speaking coach available 24/7.

The core learning cycle is:

SPEAK → LISTEN → ANALYZE → CORRECT → PRACTICE → IMPROVE → REPEAT

The product should be highly engaging, visually premium, intelligent, conversational, and scalable.

1. PRODUCT VISION

Build an AI-powered English communication platform where users practice speaking English through realistic conversations and receive personalized feedback on:

Fluency

Pronunciation

Articulation

Grammar

Vocabulary

Sentence construction

Speaking confidence

Pace

Filler words

Clarity

Naturalness

Professional communication

Conversation skills

The platform should help users progress from:

"I know English, but I struggle to speak."

to:

"I can express myself clearly, naturally and confidently."

The primary interaction should be voice-first, while still supporting text.

2. BRAND POSITIONING

Create a premium, memorable brand identity.

Suggested working name:

SpeakFlow AI

Tagline:

Think clearly. Speak confidently.

Alternative positioning:

Your personal AI coach for fluent, confident English.

Do not make the interface look like a generic school or language-learning platform.

The visual identity should communicate:

Intelligence

Confidence

Communication

Growth

Modern technology

Professionalism

Approachability

3. TECHNOLOGY STACK

Use a modern production-ready stack.

Preferred:

Frontend

React

TypeScript

Vite or Next.js

Tailwind CSS

shadcn/ui

Lucide icons

Framer Motion where appropriate

Backend

Use Supabase unless the environment provides an equivalent managed backend.

Implement:

Supabase Authentication

PostgreSQL database

Row Level Security

Storage

Edge/server functions where required

Realtime where useful

AI

Architect the application so AI providers can be replaced without rewriting the application.

Create an abstraction layer for:

Speech-to-text

Text generation

Pronunciation analysis

Text-to-speech

Conversation generation

Speaking evaluation

Do not hard-code the application to a single AI provider.

Use environment variables for all API credentials.

Never expose secret API keys in frontend code.

4. LANDING PAGE

Create an exceptional marketing landing page.

Hero section

Headline:

Speak English with confidence.

Subheadline:

Practice real conversations with your personal AI speaking coach and improve your fluency, pronunciation, vocabulary and articulation every day.

Primary CTA:

Start Speaking Free

Secondary CTA:

See How It Works

Include a visually impressive AI conversation interface preview.

Show an example conversation:

AI:

"Tell me about something you're passionate about."

User:

"Well, I'm passionate about technology because it has changed..."

Then show subtle AI analysis indicators:

Fluency 82%
Clarity 88%
Vocabulary 76%

5. LANDING PAGE SECTIONS

Create the following sections:

Hero

How It Works

Three or four steps:

Speak naturally

AI analyzes your speech

Receive personalized feedback

Practice and improve

Why SpeakFlow?

Feature cards:

Real conversations

Instant feedback

Personalized coaching

Pronunciation improvement

Vocabulary enhancement

Confidence building

AI Speaking Coach

Demonstrate the AI conversation experience.

Speaking Analysis

Show an attractive mock analytics dashboard.

Learning Scenarios

Display:

Job Interviews

Business Meetings

Public Speaking

Everyday Conversations

Travel

Customer Service

Networking

Presentations

Academic English

Social Conversations

Progress Tracking

Show a progression graph.

Metrics:

Fluency

Confidence

Pronunciation

Vocabulary

Grammar

Articulation

Testimonials

Create realistic placeholder testimonials clearly marked as demo content until replaced with real testimonials.

Pricing

Create a Free and Premium plan structure.

FAQ

Final CTA

Your voice is your most powerful communication tool.

Start improving it today.

6. AUTHENTICATION

Implement:

Sign up

Login

Logout

Forgot password

Reset password

Email verification

Google authentication if supported

Protected routes

After registration, launch an onboarding flow.

7. ONBOARDING

Create a beautiful multi-step onboarding experience.

Ask:

Step 1

What is your current English level?

Beginner

Elementary

Intermediate

Upper Intermediate

Advanced

Step 2

Why do you want to improve your English?

Everyday communication

Career

Interviews

Business

School

Public speaking

Travel

Social confidence

Allow multiple selections.

Step 3

What would you most like to improve?

Fluency

Pronunciation

Vocabulary

Grammar

Confidence

Articulation

Step 4

How much time can you practice?

5 minutes

10 minutes

15 minutes

30 minutes

60 minutes

Step 5

Generate a personalized learning plan.

8. USER DASHBOARD

The dashboard should immediately communicate progress.

Display:

Good morning, [Name] 👋

Ready for today's speaking practice?

Large CTA:

Start Today's Session

Display:

Speaking Score

Example:

76 / 100

Fluency

78%

Confidence

71%

Pronunciation

82%

Vocabulary

75%

Grammar

80%

Articulation

73%

Use elegant progress visualizations.

9. DAILY PRACTICE

Create a personalized daily practice system.

Example:

Today's Practice

Challenge 1

Warm-up

Speak for 60 seconds.

Challenge 2

Conversation

Have a conversation with the AI.

Challenge 3

Vocabulary

Learn five better alternatives to common words.

Challenge 4

Articulation

Repeat targeted sentences.

Challenge 5

Confidence

Give a 2-minute spontaneous response.

At the end:

Daily Progress: 84%

10. AI CONVERSATION ENGINE

This is the core feature.

Build a real conversational interface.

The user should be able to:

Speak into the microphone

See transcription

Hear AI responses

Continue naturally

Pause

Restart

End conversation

The AI should NOT behave like a robotic examiner.

It should behave like a natural conversation partner.

The AI should:

Ask follow-up questions

Remember context during the session

Adapt difficulty

Encourage the user

Correct important mistakes

Avoid interrupting unnecessarily

Maintain natural conversation

11. CONVERSATION MODES

Create selectable AI coaches.

Friendly Coach

Casual everyday conversations.

Business Coach

Professional communication.

Interview Coach

Job interview simulations.

Public Speaking Coach

Presentations and spontaneous speaking.

Pronunciation Coach

Focused pronunciation training.

Debate Coach

Arguments, opinions and structured thinking.

Advanced Conversation

Complex discussions.

12. SCENARIO SYSTEM

Create reusable scenario templates.

Examples:

Job Interview

AI:

"Tell me about yourself and your professional experience."

Business Meeting

AI:

"What do you think is the biggest challenge facing your team?"

Networking

AI:

"It's nice to meet you. What do you do?"

Restaurant

AI:

"Good evening. Do you have a reservation?"

Public Speaking

AI:

"You have two minutes to explain why technology is changing education."

The system should dynamically generate scenarios based on user level and goals.

13. SPEECH ANALYSIS

After every speaking session, generate a detailed analysis.

Analyze:

Fluency

Measure:

Speech continuity

Excessive pauses

Hesitation

Repetition

Filler words

Pronunciation

Analyze pronunciation where supported by the speech-analysis provider.

Articulation

Evaluate:

Clarity

Sentence delivery

Word clarity

Pace

Grammar

Identify meaningful grammatical errors.

Vocabulary

Evaluate:

Variety

Repetition

Word choice

Appropriateness

Confidence

Estimate based on speech behavior such as:

Excessive hesitation

Very short responses

Uncertainty markers

Pace

Response completeness

Do not present confidence as a medical or psychological diagnosis.

14. SPEAKING REPORT

Create a beautiful post-session report.

Example:

Your Speaking Report

Overall Score
82 / 100

Fluency

84%

Pronunciation

79%

Grammar

86%

Vocabulary

81%

Articulation

78%

Confidence

83%

Then display:

What You Did Well

You maintained a natural conversational flow and gave detailed responses.

Improve This

You frequently used "actually", "basically" and "you know".

Better Expression

Instead of:

"It was very good."

Try:

"It was excellent."

Or:

"It was incredibly impressive."

Or:

"I found it really valuable."

15. "SAY IT BETTER"

Make this a signature feature.

Users can speak or type a sentence.

The AI generates:

Original

"I don't agree with what he said."

Natural

"I don't really agree with his point."

Professional

"I respectfully disagree with that perspective."

Confident

"I don't agree with that approach. Here's why."

Advanced

"I take a different view on that matter."

Allow users to tap:

Practice This

and repeat the sentence aloud.

16. ARTICULATION LAB

Create a dedicated section.

Exercises should progressively become harder.

Level 1

Simple sentences.

Level 2

Longer sentences.

Level 3

Complex sentences.

Level 4

Professional language.

Level 5

Tongue twisters.

Level 6

Impromptu speaking.

Example:

"Clear communication requires careful thought, precise language and confident delivery."

The user speaks.

AI analyzes the attempt.

Then provides:

Clarity: 86%

Pace: Good

Pronunciation: 79%

Recommendation: Slow down slightly on longer phrases.

17. VOCABULARY BUILDER

Create personalized vocabulary learning.

Do not simply show random word lists.

Generate vocabulary from the user's actual conversations.

Example:

User repeatedly says:

"very good"

AI recommends:

Excellent

Impressive

Exceptional

Outstanding

Remarkable

For every word provide:

Meaning

Pronunciation

Example

Context

Difficulty

Then ask the user to use it in a sentence.

18. FILLER WORD DETECTOR

Track words such as:

um

uh

like

basically

actually

you know

so

I mean

Show:

You used 14 filler words during this session.

Then teach:

Pause instead of filling the silence.

Create exercises that reduce filler-word usage.

19. CONFIDENCE MODE

Create a dedicated confidence-building practice system.

Challenges:

30-second challenge

Speak without stopping.

60-second challenge

Explain a topic.

2-minute challenge

Give an opinion.

Random topic

AI gives a topic unexpectedly.

No preparation

User must respond immediately.

The objective is to teach users to think and speak in English, rather than translating everything mentally.

20. PROGRESS SYSTEM

Track progress over time.

Create:

Weekly Report

Minutes spoken

Conversations completed

New vocabulary

Fluency improvement

Pronunciation improvement

Confidence improvement

Common mistakes

Create graphs showing progress.

Example:

Week 1: 62
Week 2: 67
Week 3: 72
Week 4: 79

21. STREAKS & GAMIFICATION

Implement:

Daily streak

XP

Levels

Achievements

Daily challenges

Weekly goals

Example:

🔥 12-day streak

🏆 Fluent Speaker

🎙️ 500 minutes spoken

💬 50 conversations

Use gamification subtly and professionally.

Do not make the application childish.

22. USER PROFILE

Allow users to view:

Name

Profile picture

English level

Learning goals

Speaking score

Current streak

Total speaking minutes

Achievements

Allow editing preferences.

23. ADMIN DASHBOARD

Create a secure admin dashboard.

Administrators should be able to see:

Total users

Active users

New registrations

Practice sessions

Average speaking scores

Most popular scenarios

Most common mistakes

Subscription statistics

Allow admins to manage:

Scenarios

Challenges

Vocabulary content

AI coaches

Pricing

Users

24. DATABASE DESIGN

Create a properly normalized PostgreSQL database.

Suggested tables:

profiles

id

user_id

name

avatar_url

english_level

goals

created_at

updated_at

speaking_sessions

id

user_id

scenario_id

duration

overall_score

fluency_score

pronunciation_score

grammar_score

vocabulary_score

articulation_score

confidence_score

created_at

conversations

id

session_id

role

message

timestamp

speech_analysis

id

session_id

transcript

filler_count

pause_count

speaking_rate

analysis

created_at

vocabulary

id

user_id

word

meaning

example

mastery_level

created_at

scenarios

id

title

description

category

difficulty

prompt

active

achievements

id

name

description

icon

user_achievements

user_id

achievement_id

earned_at

subscriptions

id

user_id

plan

status

started_at

expires_at

Implement appropriate foreign keys, indexes and constraints.

25. SECURITY

Security must be treated as a first-class requirement.

Implement:

Supabase Row Level Security

Authentication guards

Protected admin routes

Secure API calls

Environment variables

Input validation

Rate limiting where appropriate

Secure file handling

No exposed API secrets

Server-side privileged operations

Users must only be able to access their own:

Conversations

Audio

Reports

Progress

Vocabulary

Profile information

Admins must have separate authorization.

26. RESPONSIVE DESIGN

The website must work beautifully on:

Desktop

Laptop

Tablet

Mobile

Mobile should not simply be a compressed desktop layout.

Design specifically for mobile speaking practice.

The microphone interaction should be easy to use with one hand.

27. UI/UX DESIGN LANGUAGE

Use a premium modern SaaS aesthetic.

Design principles:

Clean

Minimal

Spacious

Elegant

High readability

Smooth animations

Strong typography

Rounded cards

Subtle gradients

Glass effects used sparingly

Excellent visual hierarchy

Avoid:

Clutter

Excessive animations

Cheap-looking gradients

Cartoonish language-learning visuals

Generic template aesthetics

Use a professional color system centered around a sophisticated primary accent with neutral backgrounds.

Provide:

Light mode

Dark mode

28. MICROINTERACTIONS

Use subtle animations for:

Speaking button

Recording state

AI thinking state

Score changes

Progress completion

Streak achievements

Navigation

Cards

Modals

The microphone should have an elegant visual waveform while recording.

Example:

🎙️

Listening...

with an animated waveform.

29. ERROR HANDLING

Build robust error handling.

Handle:

Microphone permissions denied

Speech recognition failure

AI API failure

Network interruption

Session timeout

Empty responses

Audio upload failure

Authentication failure

Never show raw technical errors to normal users.

Show friendly messages such as:

"We couldn't hear you clearly. Please check your microphone and try again."

Log technical errors for administrators/developers.

30. ACCESSIBILITY

Implement:

Keyboard navigation

Semantic HTML

ARIA labels

Sufficient contrast

Focus states

Screen-reader-friendly controls

Accessible forms

31. PERFORMANCE

Optimize for:

Fast initial loading

Lazy loading

Code splitting

Efficient database queries

Optimized images

Caching

Minimal unnecessary API requests

Voice interactions should feel responsive.

32. AI PROMPT ARCHITECTURE

Create separate internal AI prompts for:

Conversation Coach

Natural conversation.

Grammar Coach

Meaningful grammar correction.

Pronunciation Coach

Pronunciation feedback.

Vocabulary Coach

Vocabulary expansion.

Confidence Coach

Speaking confidence exercises.

Evaluation Engine

Structured post-session scoring.

AI responses should be returned in structured JSON wherever appropriate.

Example:

{
"overall_score": 82,
"fluency": 84,
"pronunciation": 79,
"grammar": 86,
"vocabulary": 81,
"articulation": 78,
"confidence": 83,
"filler_words": 6,
"strengths": [],
"improvements": [],
"recommended_exercises": []
}

Validate AI responses before storing them.

33. AI PERSONALIZATION

The AI should remember learning patterns.

For example:

If the user repeatedly struggles with:

Past tense

the system should increase past-tense exercises.

If the user overuses:

"very good"

the vocabulary engine should introduce stronger alternatives.

If the user has excessive pauses:

increase fluency challenges.

The learning system should therefore become increasingly personalized.

34. FREEMIUM MODEL

Create a subscription architecture.

Free

Limited daily conversations

Basic speaking analysis

Limited vocabulary exercises

Basic progress tracking

Premium

Unlimited conversations

Advanced speech analysis

Personalized coaching

Advanced scenarios

Detailed progress reports

Advanced articulation training

Full conversation history

Build the billing architecture so a payment provider can be integrated without restructuring the application.

35. NOTIFICATIONS

Allow users to receive:

Daily practice reminders

Streak reminders

Weekly progress reports

Achievement notifications

Allow notification preferences.

36. SEARCH & NAVIGATION

Create a clear application navigation.

Desktop:

Dashboard | Practice | Conversations | Articulation | Vocabulary | Progress | Profile

Mobile:

Use a bottom navigation bar for the most important sections.

37. PRODUCT QUALITY REQUIREMENT

Do not build a collection of disconnected pages.

The application must feel like one coherent product.

Every feature should connect to the user's learning journey.

For example:

Conversation

↓

Analysis

↓

Weakness detection

↓

Personalized exercise

↓

Practice

↓

Progress update

↓

Next recommended session

38. DEVELOPMENT METHODOLOGY

Before implementing complex functionality:

Analyze the requirements.

Establish the application architecture.

Create the database schema.

Build authentication.

Build the design system.

Build the core dashboard.

Build the conversation engine.

Build speech analysis.

Build personalized learning.

Build progress tracking.

Build admin functionality.

Test the complete user journey.

Fix errors.

Optimize performance.

Polish the UI.

Do not prematurely build unnecessary features before the core speaking experience works.

39. MVP PRIORITY

The first working version MUST prioritize:

P0 — Essential

Landing page

Authentication

Onboarding

Dashboard

Voice recording

Speech-to-text

AI conversation

AI response

Session analysis

Speaking score

Fluency feedback

Grammar feedback

Vocabulary feedback

Basic progress tracking

Responsive design

P1 — Important

Articulation Lab

Say It Better

Filler-word analysis

Daily challenges

Streaks

Vocabulary builder

P2 — Expansion

Advanced AI coaches

Subscriptions

Notifications

Advanced analytics

Admin dashboard

Leaderboards

Social features

40. CRITICAL UX PRINCIPLE

The user should be able to register and start their first AI speaking conversation within minutes.

Do not overwhelm new users with dozens of settings.

The primary action should always remain:

SPEAK

The application should constantly guide the user back toward speaking.

41. FINAL QUALITY STANDARD

Before considering the application complete, perform a full audit.

Verify:

Frontend

No broken routes

No console errors

Responsive layouts

Consistent typography

Consistent spacing

Functional buttons

Functional forms

Loading states

Empty states

Error states

Backend

Database relationships

Authentication

RLS policies

API security

Data validation

Error handling

AI

AI responses

Conversation context

Evaluation structure

Personalization

Fallback handling

UX

Test the complete journey:

Landing Page → Sign Up → Onboarding → Dashboard → Start Conversation → Speak → AI Response → End Session → Analysis → Practice Recommendation → Progress

Everything must work as one integrated system.

Do not leave fake buttons, dead links, unfinished screens, placeholder functionality, or non-functional navigation.

Where an external API is required but credentials are not yet available, implement a clean provider abstraction and a clearly defined configuration layer rather than hardcoding fake production behavior.

Build the application as a real scalable SaaS product, not a static prototype.

The final result should look and feel like a premium AI communication platform capable of competing with modern language-learning and AI coaching products.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://articulate1.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8a0c33e7-697e-461e-8d0b-d9ddde858543).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
