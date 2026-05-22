'use client';

import { usePathname, useRouter } from 'next/navigation';

/**
 * Unified navigation for links that may point to an in-page section anchor
 * (e.g. "#pillars"), the home top ("#"/"/"), or a real route ("/privacy").
 *
 * - On the home page, anchor targets smooth-scroll to the matching section.
 * - On any other page (e.g. /privacy, /terms), anchor targets route back to
 *   the home page with the hash so the section is reached after navigation.
 * - Real routes always navigate via the router.
 */
export function useSectionNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (href: string) => {
    // Top of home page.
    if (href === '#' || href === '/') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
      return;
    }

    // In-page section anchor.
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.hash = href;
        }
      } else {
        router.push(`/${href}`);
      }
      return;
    }

    // Real route (e.g. /privacy, /terms) or external — let the router handle it.
    router.push(href);
  };
}
