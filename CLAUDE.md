# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

`goldhouse-index` is the marketing/index site for **GoldHouse**, a multi-chain Web3 social platform. It is a single-page landing page plus a set of standalone legal/info pages. There is no backend, database, auth, or i18n routing layer — everything is static + client-side.

## Commands

```bash
npm run dev      # next dev  (http://localhost:3000)
npm run build    # next build
npm run start    # next start (serve the production build)
npm run lint     # eslint (flat config — eslint.config.mjs)
```

There is **no test framework** configured. Type checking happens via the Next build (`tsc` is `noEmit`, run through `next build`); there is no standalone `typecheck` script.

> `node_modules/` is not committed. Run `npm install` before relying on the AGENTS.md instruction to read `node_modules/next/dist/docs/` — that path only exists after install.

## Stack specifics (this is a recent version — verify before assuming)

- **Next.js 16.2.6, App Router, React 19.** Per `@AGENTS.md`, this Next.js version has breaking changes from older training data. Read the relevant file under `node_modules/next/dist/docs/` before writing Next-specific code (metadata, fonts, routing, caching, server/client boundaries). Heed deprecation notices.
- **Tailwind CSS v4, CSS-first config.** There is no `tailwind.config.*`. All design tokens live in the `@theme { ... }` block at the top of `src/app/globals.css` (brand colors, gradients, shadows, radii, fonts, animation durations). PostCSS wires it via `@tailwindcss/postcss`.
- **Path alias:** `@/*` → `./src/*`.
- Fonts: Geist + Geist Mono via `next/font/google`, exposed as `--font-geist-sans` / `--font-geist-mono` (consumed by `@theme`).

## Architecture

### Landing page = ordered component list
`src/app/page.tsx` renders the whole hero site as a fixed sequence of section components in `src/components/` (SplashScreen → Navbar → Hero → Pillars → FirstMinute → IMGateway → Modules → Architecture → RevenueModel → Mission → CTA → Footer). To add a section, create a component and slot it into this ordered list. In-page anchor navigation (`#pillars`, etc.) vs. real routes (`/privacy`) is unified by `src/lib/useSectionNav.ts` — use that hook for any nav link, including cross-page anchors that must route home first.

### i18n is a custom client-side system (no next-intl, no locale routing)
- Locales: `zh-CN` (default), `zh-TW`, `ko`, `en` — defined in `src/i18n/config.ts`.
- One dictionary file per locale in `src/i18n/dictionaries/`. **`zh-CN.ts` is the source of truth and exports `type Dictionary`; every other locale must match its shape.**
- `src/i18n/I18nProvider.tsx` wraps the app in `layout.tsx`. It exposes both `dict` (the typed object) and `t('dot.path')` (a string with path-as-fallback).
- **Access pattern in use:** components do `const { dict } = useI18n()` and read `dict.hero.badge` (typed). Prefer this over `t()` — `t()` is an untyped fallback helper, not the normal path.
- **Hydration constraint (do not break):** the provider always initializes to `defaultLocale` and only reads `localStorage` (`gh-locale`) *after* mount, deferred via `setTimeout(0)` to satisfy the no-setState-in-effect lint rule. Locale is client-only (localStorage + `document.documentElement.lang`); there are **no locale-prefixed URLs**. Don't render locale-dependent content at the server/hydration boundary or read the saved locale synchronously.

### Legal / info pages
`/privacy`, `/terms`, `/account-deletion`, `/child-safety`, `/announcements`, `/opensource-notice` each follow a two-file split under `src/app/<route>/`:
- `page.tsx` — server component, exports only `metadata`, renders the client component.
- `<Name>Client.tsx` — `'use client'`, renders `<Navbar/>` + content + `<Footer/>`, pulls text from `dict.<route>`.

`opensource-notice/ossData.ts` is a generated/curated data blob (OSS dependency attributions) consumed by its client component.

### Animation is hand-rolled (no GSAP / no animation lib)
- `ScrollReveal` (`src/components/ScrollReveal.tsx`): `IntersectionObserver` toggles a `.revealed` class once (then unobserves). Stagger via `delay` prop → `reveal-delay-N` classes defined in `globals.css`.
- `Parallax` (`src/components/Parallax.tsx`): single passive scroll listener throttled with `requestAnimationFrame`; self-disables under `prefers-reduced-motion`. Always honor reduced-motion for any new animation.

### Styling conventions
Brand identity is a navy/blue (#000D2B / #001440 / #0A6CFF) + cyan (#19B7FF) + gold (#FFC247) palette. Usage is currently mixed: some classes use the Tailwind theme tokens (`text-brand-cyan`), others use raw hex values (`text-[#0A6CFF]`). When adding brand-colored UI, prefer the `@theme` tokens for consistency, but match whatever the surrounding code uses.

## Conventions checklist for edits

- New user-facing strings: add to **all four** dictionary files; keep `zh-CN` as the structural template since it defines `Dictionary`.
- New landing section: create component in `src/components/`, import + place in `src/app/page.tsx`.
- New top-level page: follow the `page.tsx` + `*Client.tsx` split; include `<Navbar/>`/`<Footer/>`; add metadata in the server `page.tsx`.
- Components that need interactivity, hooks, or the dictionary must be `'use client'` (the landing/legal components all are). Pure server components are fine when they don't.
- Reach for `useSectionNav` for nav links that might be section anchors.
