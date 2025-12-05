import { useEffect, useRef, useState } from "react";

/**
 * Hook for scroll-triggered fade-in animations
 * Returns a ref to attach to elements and an isVisible state
 */
export function useScrollAnimation(options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options?.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
}

