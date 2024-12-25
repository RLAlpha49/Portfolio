import { useEffect, useState, RefObject } from 'react'

interface UseIntersectionObserverProps {
  ref: RefObject<Element>
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver({
  ref,
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = false,
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold, rootMargin, triggerOnce])

  return isIntersecting
}

