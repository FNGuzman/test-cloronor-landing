'use client'
import { useState, useEffect, useRef } from 'react';

export const useInViewWithDelay = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay); // Agrega retraso dinámico
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible, setDelay };
};
