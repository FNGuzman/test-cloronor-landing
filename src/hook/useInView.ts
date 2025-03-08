'use client'
import { useState } from 'react';

export const useInView = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = (node: HTMLElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta para evitar observar innecesariamente después de ser visible.
        }
      },
      { threshold }
    );

    observer.observe(node);
  };

  return { ref, isVisible };
};
