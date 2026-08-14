# GoldHouse Website

The official GoldHouse website, built with Next.js App Router, React, and
TypeScript. The landing page is migrated from the approved GoldHouse redesign
without reinterpreting its visual system.

## Requirements

- Node.js 20.9.0 or newer
- pnpm 10.32.1

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

To verify the production output locally:

```bash
pnpm start
```

## Project structure

```text
src/app/                 App Router entry points and global metadata
src/components/landing/ Landing page components
src/config/              Verified site, download, and partner data
src/i18n/                Landing page translations
src/styles/              Landing page styles
public/assets/           Landing page images and download assets
```

## Deployment

Vercel should use pnpm and the standard `pnpm build` command. Deploy the
`new-index` branch as a Preview deployment until visual and functional review
is complete. Do not change the Production Branch during migration.
