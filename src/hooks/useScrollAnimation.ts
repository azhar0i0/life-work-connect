import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.4, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (!hasTriggered || !triggerOnce) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isVisible };
}

// Hook for staggered children animations
export function useStaggeredAnimation(
  isVisible: boolean,
  itemCount: number,
  baseDelay: number = 0,
  staggerDelay: number = 100
) {
  return Array.from({ length: itemCount }, (_, i) => ({
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + i * staggerDelay}ms, 
                   transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + i * staggerDelay}ms`,
    },
  }));
}

// Hook for scroll-linked opacity (storytelling effect)
export function useScrollOpacity<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      
      // Full opacity when centered, reduces as it moves up
      if (elementCenter < windowHeight * 0.3) {
        setOpacity(0.6);
      } else if (elementCenter < windowHeight * 0.5) {
        const progress = (elementCenter - windowHeight * 0.3) / (windowHeight * 0.2);
        setOpacity(0.6 + progress * 0.4);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, opacity };
}
