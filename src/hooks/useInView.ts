import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element and a boolean that flips to `true`
 * the first time that element scrolls into view. Used to trigger the hero
 * reveal, wpm bars, and cleaning-up demo only when the user reaches them.
 *
 * Falls back to `true` immediately when IntersectionObserver is missing.
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.3 },
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      })
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
