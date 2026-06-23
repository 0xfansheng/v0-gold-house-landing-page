'use client';

import { useRef, useEffect, type ReactNode } from 'react';

interface ParallaxProps {
  children?: ReactNode;
  /**
   * Drift factor. Positive → element moves slower than scroll (background depth).
   * Negative → element moves faster than scroll (foreground). Typical: 0.04–0.3.
   */
  speed?: number;
  className?: string;
  /** Mark purely decorative layers so screen readers skip them. */
  ariaHidden?: boolean;
}

/**
 * Lightweight scroll-driven parallax wrapper.
 * Uses a single passive scroll listener throttled with requestAnimationFrame,
 * and disables itself when the user prefers reduced motion.
 */
export default function Parallax({
  children,
  speed = 0.15,
  className = '',
  ariaHidden = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // Offset of the element's center from the viewport center.
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const translate = -centerOffset * speed;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform' }}
      aria-hidden={ariaHidden || undefined}
    >
      {children}
    </div>
  );
}
