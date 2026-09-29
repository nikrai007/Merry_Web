import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the user's `prefers-reduced-motion` preference.
 *
 * Interactive widgets use this to decide whether to run motion/timers or
 * jump straight to the final, static state. Defaults to `true` (no motion)
 * during SSR / before the media query is read so nothing animates
 * unexpectedly for reduced-motion users.
 */
export function usePrefersReducedMotion(): boolean {
  const getInitial = () =>
    typeof window !== 'undefined' && 'matchMedia' in window
      ? window.matchMedia(QUERY).matches
      : true

  const [prefersReduced, setPrefersReduced] = useState<boolean>(getInitial)

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return

    const mql = window.matchMedia(QUERY)
    const onChange = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches)

    setPrefersReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return prefersReduced
}
