# Merry

Marketing landing page for **Merry**, a voice-to-text AI dictation tool and AI notetaker. Speak naturally and Merry turns your voice into clean, ready-to-send text everywhere you type. Available on Mac, Windows, iPhone, and Android.

Built with **Vite + React + TypeScript**.

## Getting started

```bash
npm install
npm run dev      # start the local dev server
npm run build    # type-check and produce a production build in dist/
npm run preview  # preview the production build locally
```

## Project structure

```
merry-site/
├─ index.html                 # page metadata + font links
├─ src/
│  ├─ main.tsx                # app entry; imports the global theme
│  ├─ App.tsx                 # shell: Header + <main> section stubs + Footer
│  ├─ styles/
│  │  └─ theme.css            # design tokens (color, type, spacing, radius, shadow) + reset
│  ├─ components/             # reusable widgets (Header, Footer, interactive demos)
│  └─ sections/               # one component per landing-page section
└─ public/                    # static assets (favicon)
```

### Architecture

- **Component-per-section**: each landing section lives in its own component under `src/sections/`.
- **Reusable widgets** (nav, footer, interactive demos) live under `src/components/`.
- **Design tokens** are centralized as CSS custom properties in `src/styles/theme.css`, imported once from `main.tsx`.
- Layout is responsive and mobile-first; animations respect `prefers-reduced-motion`.

## Section anchors

The header nav and footer link to these section ids, filled in by later work:
`hero`, `social-proof`, `how-it-works`, `tone`, `features`, `privacy`, `testimonials`, `faq`, `closing-cta`.
