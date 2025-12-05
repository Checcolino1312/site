'use client';

import { useEffect, useRef, RefObject } from 'react';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export function useAnimateOnScroll<T extends HTMLElement>(
  options: UseAnimateOnScrollOptions = {}
): RefObject<T | null> {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', staggerDelay = 100 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.animation = 'fadeInUp 0.6s ease forwards';
              }, index * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerDelay]);

  return ref;
}

export function useGlobalAnimateOnScroll(options: UseAnimateOnScrollOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animationDelay = `${Math.random() * 0.3}s`;
            element.style.opacity = '1';
            element.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}
