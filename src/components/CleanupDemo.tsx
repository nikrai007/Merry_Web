import { useEffect, useMemo, useState } from 'react'
import './CleanupDemo.css'
import type { CleanupToken, CleanupTokenKind } from '../data/content'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface CleanupDemoProps {
  tokens: CleanupToken[]
  labels: { kind: CleanupTokenKind; label: string }[]
}

/**
 * Tokens that survive into the cleaned-up sentence.
 *
 * `correction` is the replacement phrase in a spoken self-correction and is
 * kept; the `superseded` phrase it replaces is dropped (along with filler and
 * repetition). This keeps the cleaned output coherent: the misspoken phrase
 * never appears next to its fix.
 */
const isKept = (kind: CleanupTokenKind) =>
  kind === 'keep' || kind === 'correction'

/**
 * Live "Cleaning up…" demo.
 *
 * Progressively walks the raw transcript token by token. As each edited
 * token is processed it is struck through and its category tag lights up
 * (Filler removed / Correction / Repetition). Filler, repetition, and the
 * superseded half of a self-correction drop out; the correction replacement
 * and plain keeps stay, leaving the polished sentence. The whole thing loops.
 *
 * Under prefers-reduced-motion it renders a static before/after view side
 * by side instead of animating.
 */
function CleanupDemo({ tokens, labels }: CleanupDemoProps) {
  const prefersReduced = usePrefersReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 })

  // How many tokens have been "processed" so far.
  const [processed, setProcessed] = useState(0)
  const [done, setDone] = useState(false)

  const cleaned = useMemo(
    () => tokens.filter((t) => isKept(t.kind)).map((t) => t.text),
    [tokens],
  )

  useEffect(() => {
    if (prefersReduced || !inView) return

    const timers: number[] = []
    let cancelled = false

    const runOnce = () => {
      if (cancelled) return
      let step = 0
      setProcessed(0)
      setDone(false)

      const interval = window.setInterval(() => {
        step += 1
        if (step > tokens.length) {
          window.clearInterval(interval)
          setDone(true)
          // Hold on the finished state, then loop again.
          timers.push(window.setTimeout(runOnce, 2600))
        } else {
          setProcessed(step)
        }
      }, 650)
      timers.push(interval)
    }

    runOnce()

    return () => {
      cancelled = true
      timers.forEach((t) => {
        window.clearInterval(t)
        window.clearTimeout(t)
      })
    }
  }, [inView, prefersReduced, tokens.length])

  /* ---- Reduced-motion fallback: static before / after ---- */
  if (prefersReduced) {
    return (
      <div
        className="cleanup-demo cleanup-demo--static"
        data-demo="cleaning-up"
        aria-label="Merry cleaning up a transcript"
      >
        <div className="cleanup-demo__head">
          <span className="cleanup-demo__status">Cleaned up</span>
          <ul className="cleanup-demo__legend">
            {labels.map((item) => (
              <li
                key={item.kind}
                className={`cleanup-tag cleanup-tag--${item.kind}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="cleanup-demo__panes">
          <div className="cleanup-demo__pane">
            <span className="cleanup-demo__pane-label">You said</span>
            <p className="cleanup-demo__transcript">
              {tokens.map((token, i) => (
                <span
                  key={i}
                  className={`cleanup-token cleanup-token--${token.kind}`}
                  data-kind={token.kind}
                >
                  {token.text}{' '}
                </span>
              ))}
            </p>
          </div>
          <div className="cleanup-demo__pane">
            <span className="cleanup-demo__pane-label cleanup-demo__pane-label--clean">
              Merry wrote
            </span>
            <p className="cleanup-demo__transcript">{cleaned.join(' ')}</p>
          </div>
        </div>
      </div>
    )
  }

  /* ---- Animated version ---- */
  // Which edit categories have been surfaced so far (for the legend glow).
  const surfacedKinds = new Set(
    tokens.slice(0, processed).map((t) => t.kind),
  )

  return (
    <div
      className="cleanup-demo"
      data-demo="cleaning-up"
      ref={ref}
      aria-label="Merry cleaning up a transcript"
    >
      <div className="cleanup-demo__head">
        <span className="cleanup-demo__status">
          {done ? 'Cleaned up' : 'Cleaning up…'}
        </span>
        <ul className="cleanup-demo__legend">
          {labels.map((item) => (
            <li
              key={item.kind}
              className={`cleanup-tag cleanup-tag--${item.kind} ${
                surfacedKinds.has(item.kind) ? 'cleanup-tag--on' : ''
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <p className="cleanup-demo__transcript" aria-live="polite">
        {tokens.map((token, i) => {
          const isProcessed = i < processed
          const dropped = isProcessed && !isKept(token.kind)
          const state = !isProcessed
            ? 'pending'
            : dropped
              ? 'dropped'
              : 'kept'
          return (
            <span
              key={i}
              className={`cleanup-token cleanup-token--${token.kind} cleanup-token--${state}`}
              data-kind={token.kind}
            >
              {token.text}{' '}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default CleanupDemo
