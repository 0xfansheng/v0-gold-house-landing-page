'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  threshold?: number;
}

const delayClassMap: Record<number, string> = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
  4: 'reveal-delay-4',
  5: 'reveal-delay-5',
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${delayClassMap[delay] ?? ''} ${className}`}
    >
      {children}
    </div>
  );
}
