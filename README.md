# Merry

Marketing landing page for **Merry**, a voice-to-text AI dictation tool and AI
notetaker. Speak naturally and Merry turns your voice into clean, ready-to-send
text everywhere you type. Available on Mac, Windows, iPhone, and Android.

This site is a **rebranded clone of the Wispr Flow landing-page layout**: it
mirrors the overall structure and section flow of that reference site, but all
branding, copy, colors, and assets are original to Merry. No third-party brand
names, trademarks, or copyrighted imagery are used.

Built with **Vite + React + TypeScript**.

## Prerequisites

- **Node.js 18+** (developed and verified on Node 20/22)
- npm (ships with Node)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # type-check (tsc) and produce a production build in dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
merry-site/
├─ index.html                 # page metadata + Google Fonts link
├─ src/
│  ├─ main.tsx                # app entry; imports the global theme
│  ├─ App.tsx                 # shell: <Header /> + <main> sections + <Footer />
│  ├─ data/
│  │  └─ content.ts           # single source of truth for all copy/data
│  ├─ styles/
│  │  └─ theme.css            # design tokens + light reset + base type
│  ├─ hooks/                  # useInView, usePrefersReducedMotion
│  ├─ components/             # reusable widgets (Header, Footer, CleanupDemo)
│  └─ sections/               # one component per landing-page section
└─ public/                    # static assets (favicon)
```

### Architecture

- **Component-per-section**: each landing section lives in its own component
  under `src/sections/` (Hero, SocialProof, HowItWorks, Tone, Capabilities,
  WhatsNew, Privacy, Testimonials, Faq, ClosingCTA).
- **Copy lives in data**: `src/data/content.ts` is the single source of truth
  for reusable copy and data — the hero before/after example, the "cleaning
  up" transcript, the tone examples, the FAQ list, the testimonials, the
  social-proof logos, and the `MERRY_EXTRAS` array (see below).
- **Reusable widgets and hooks** live under `src/components/` and `src/hooks/`.
- **Design tokens** are centralized as CSS custom properties in
  `src/styles/theme.css`, imported once from `main.tsx`. Each component has a
  co-located `.css` file.

### Interactive widgets

All animations honor `prefers-reduced-motion` and fall back to a static final
state:

- **Hero before/after reveal** — the messy transcript resolves into the
  polished Merry output when it scrolls into view.
- **WPM comparison** (SocialProof) — a "Keyboard 45 wpm" track fills ~4x slower
  than the "Merry 220 wpm" track, using looping CSS keyframes.
- **Live "Cleaning up…" demo** (HowItWorks / `components/CleanupDemo.tsx`) —
  progressively transforms the raw transcript into the clean version, surfacing
  Filler / Correction / Repetition tags. Under reduced motion it shows the
  before and after side by side.
- **Tone toggle** (Tone) — Formal / Casual / Very casual tabs (WAI-ARIA tabs
  pattern, arrow-key navigable) switch the displayed example.
- **FAQ accordion** (Faq) — keyboard-operable accordion using
  `button` + `aria-expanded` + `region` semantics.

## Section anchors

The header nav and footer link to these section ids:
`hero`, `social-proof`, `how-it-works`, `tone`, `features`, `whats-new`,
`privacy`, `testimonials`, `faq`, `closing-cta`.

## Adding your own new features ("New in Merry")

The **New in Merry** section (`#whats-new`, `src/sections/WhatsNew.tsx`) is
data-driven and designed to be extended without touching component code. It
renders the `MERRY_EXTRAS` array from **`src/data/content.ts`**.

It currently holds clearly-marked **placeholder** cards. To showcase a real
enhancement, edit `MERRY_EXTRAS` in `src/data/content.ts`: replace a
placeholder (or push a new object) and set `placeholder: false`.

```ts
// src/data/content.ts
export const MERRY_EXTRAS: MerryExtra[] = [
  {
    eyebrow: 'New',
    title: 'Real-time meeting summaries',
    body: 'Merry now turns any meeting into a shareable summary the moment it ends.',
    placeholder: false, // real feature — drops the "Placeholder" badge
  },
  // ...add more cards here
]
```

The section picks up the change automatically — no edits to `WhatsNew.tsx`
needed. Cards left with `placeholder: true` display a "Placeholder" badge so
unshipped items are obvious.
