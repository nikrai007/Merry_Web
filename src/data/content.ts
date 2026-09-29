/**
 * Merry — single source of truth for reusable landing-page copy.
 *
 * All rebranded marketing copy that is shared between the static markup
 * (FEAT-002) and the interactive widgets (FEAT-003) lives here so the
 * animated demos reuse the exact same strings.
 */

/* ------------------------------------------------------------------ *
 * Hero: messy dictation vs. the polished Merry output
 * ------------------------------------------------------------------ */
export interface DictationExample {
  /** Raw, rambling spoken input. */
  messy: string
  /** Clean, polished writing Merry produces. */
  clean: string
}

export const heroExample: DictationExample = {
  messy:
    "Umm, hope your week has started well... I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I'm not totally sure, so maybe like, can you double check with them and umm let me know?",
  clean:
    "Hope your week has started well. I spoke with Cheyene earlier, though the reception was poor. I believe they will handle the first part of the project, but I'm not entirely certain. Could you double-check with them and let me know?",
}

/* ------------------------------------------------------------------ *
 * "Cleaning up…" demo transcript
 *
 * Each token is either plain text that survives, or a token Merry
 * removes/edits. FEAT-003 animates the removal and shows the labelled
 * tags (Filler / Correction / Repetition).
 * ------------------------------------------------------------------ */
export type CleanupTokenKind = 'keep' | 'filler' | 'correction' | 'repetition'

export interface CleanupToken {
  text: string
  kind: CleanupTokenKind
}

export const cleanupTranscript: CleanupToken[] = [
  { text: 'Um,', kind: 'filler' },
  { text: 'so', kind: 'filler' },
  { text: 'I think', kind: 'keep' },
  { text: 'we should', kind: 'keep' },
  { text: 'we should', kind: 'repetition' },
  { text: 'ship the update', kind: 'keep' },
  { text: 'on Friday,', kind: 'correction' },
  { text: 'on Thursday,', kind: 'keep' },
  { text: 'you know,', kind: 'filler' },
  { text: 'before the launch.', kind: 'keep' },
]

/** Labels shown by the cleaning-up demo for each edit category. */
export const cleanupLabels: { kind: CleanupTokenKind; label: string }[] = [
  { kind: 'filler', label: 'Filler removed' },
  { kind: 'correction', label: 'Correction' },
  { kind: 'repetition', label: 'Repetition' },
]

/* ------------------------------------------------------------------ *
 * Tone / style examples
 * ------------------------------------------------------------------ */
export type ToneId = 'formal' | 'casual' | 'very-casual'

export interface ToneExample {
  id: ToneId
  label: string
  text: string
}

export const toneExamples: ToneExample[] = [
  {
    id: 'formal',
    label: 'Formal',
    text: "Hey, are you free for lunch tomorrow? Let's do 12 if that works for you.",
  },
  {
    id: 'casual',
    label: 'Casual',
    text: "Hey are you free for lunch tomorrow? Let's do 12 if that works for you",
  },
  {
    id: 'very-casual',
    label: 'Very casual',
    text: "hey are you free for lunch tomorrow? let's do 12 if that works for you",
  },
]

/* ------------------------------------------------------------------ *
 * FAQ (owned/rendered by FEAT-003's accordion, data lives here)
 * ------------------------------------------------------------------ */
export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is Merry?',
    answer:
      'Merry is a voice-to-text AI that turns your speech into clear, polished writing in every app. Speak naturally and Merry removes filler words, fixes mistakes, and formats the result so it reads like you wrote it.',
  },
  {
    question: 'Which platforms does Merry support?',
    answer:
      'Merry is available on Mac, Windows, iPhone, and Android, and it syncs seamlessly across all of your devices.',
  },
  {
    question: 'How fast is Merry compared to typing?',
    answer:
      'Most people speak about four times faster than they type. Merry lets you create, code, message, and write at the speed of thought — roughly 220 words per minute versus around 45 on a keyboard.',
  },
  {
    question: 'Does Merry work in every app?',
    answer:
      'Yes. Merry works anywhere you can type, with no plugins required. Use it in your email client, chat apps, code editor, documents, and more.',
  },
  {
    question: 'What languages does Merry understand?',
    answer:
      'Merry automatically detects and transcribes 100+ languages, so you can switch between languages naturally without changing any settings.',
  },
  {
    question: 'How does Merry protect my privacy?',
    answer:
      'Your voice stays yours. Your data is never sold, and you choose whether your data is used to help improve Merry. Merry is SOC 2 Type II, HIPAA, and ISO 27001 certified.',
  },
]

/* ------------------------------------------------------------------ *
 * Testimonials
 *
 * NOTE: These are illustrative placeholders using clearly fictional
 * names and roles. They are NOT real quotes from real people.
 * ------------------------------------------------------------------ */
export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Merry changed how I work. I talk through my emails on my commute and they come out perfectly formatted — no editing needed.",
    name: 'Jordan Ellery',
    role: 'Product Designer',
    initials: 'JE',
  },
  {
    quote:
      "I write code comments and pull request descriptions three times faster now. Merry catches the details even when I ramble.",
    name: 'Priya Nakamura',
    role: 'Software Engineer',
    initials: 'PN',
  },
  {
    quote:
      "As someone who thinks out loud, Merry is a gift. It turns my messy stream of thought into clean, professional notes.",
    name: 'Marcus Vane',
    role: 'Founder',
    initials: 'MV',
  },
  {
    quote:
      "I switch between two languages all day. Merry just keeps up, no settings, no fuss. It feels like it reads my mind.",
    name: 'Sofia Marchetti',
    role: 'Customer Success Lead',
    initials: 'SM',
  },
]

/* ------------------------------------------------------------------ *
 * Social-proof placeholder "logos" (styled text pills, not real logos)
 * ------------------------------------------------------------------ */
export const placeholderLogos: string[] = [
  'Northwind',
  'Lumen Labs',
  'Cascade',
  'Everpeak',
  'Blue Harbor',
  'Meridian',
]
