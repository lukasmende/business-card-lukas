# Lukas Mendesevic — Digital Business Card

A personal portfolio site built as a digital business card for Lukas Mendesevic,
Full Stack Software Developer. Built with React, TypeScript, Vite, and
Tailwind CSS v4.

## Sections

- **Hero** — photo and short intro (image right / text left on desktop, stacked
  on mobile)
- **Projects** — selected work
- **Skills** — tech stack
- **Certificates** — awards, school certificate, internships and workshops,
  each with a PDF preview thumbnail and a link to the original document
- **Journey** — a timeline from 2001 to today (horizontal on desktop, vertical
  on mobile)
- **Footer** — social links, privacy policy, imprint

The site also ships a light/dark mode toggle (persisted in `localStorage`,
defaults to the visitor's system preference).

## Pages

This is a small multi-page Vite build with three separate entry points, so
each route works as a plain static file with no client-side router or SPA
fallback required:

| Route        | Source                                          |
| ------------ | ------------------------------------------------ |
| `/`          | `index.html` → `src/main.tsx` → `src/App.tsx`     |
| `/imprint/`  | `imprint/index.html` → `src/imprint-main.tsx`     |
| `/privacy/`  | `privacy/index.html` → `src/privacy-main.tsx`     |

`/imprint/` and `/privacy/` contain the legally required German Impressum and
Datenschutzerklärung (§ 5 DDG, Art. 13 DSGVO).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check (tsc -b) and build all three pages into dist/
npm run preview  # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  App.tsx            # home page
  Imprint.tsx         # /imprint/ page content
  PrivacyPolicy.tsx   # /privacy/ page content
  LegalLayout.tsx     # shared layout/typography for the two legal pages
  useTheme.ts          # shared dark/light mode hook
  main.tsx / imprint-main.tsx / privacy-main.tsx   # per-page entry points
public/
  certificates/        # certificate PDFs, linked from the Certificates section
  certificates/thumbnails/   # first-page JPEG previews of each PDF
```

## Deployment

Deployed on Cloudflare Pages via the GitHub integration (build on push, no
Wrangler config needed for this static site):

| Setting                 | Value          |
| ------------------------ | -------------- |
| Framework preset          | Vite            |
| Build command              | `npm run build` |
| Build output directory     | `dist`          |
| Root directory              | `/`             |

A `.node-version` file pins Node 22, since Vite 8 requires Node `^20.19.0` or
`>=22.12.0`.

## Updating content

- **Certificates**: drop new PDFs into `public/certificates/`, generate a
  thumbnail with `sips -s format jpeg -Z 600 file.pdf --out thumbnails/file.jpg`,
  and add an entry to the `certificates` array in `src/App.tsx`.
- **Projects / Skills / Journey / social links**: edit the corresponding
  arrays at the top of `src/App.tsx`.
