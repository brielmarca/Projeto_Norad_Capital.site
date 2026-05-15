# Norad Capital — Institutional Website

Premium institutional website for Norad Capital, a Brazilian fintech specialized in Home Equity and Real Estate Credit intermediation.

## Tech Stack

- **Vite** — Build tool and dev server
- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling with custom theme
- **Framer Motion** — Smooth, premium animations
- **Lucide React** — Icon library
- **React Router DOM** — Client-side routing

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Fixed navbar with logo and nav links
│   ├── Footer.tsx              # Multi-column footer with contact info
│   ├── HeroLineBackground.tsx  # SVG line-chart decorative backgrounds
│   ├── SectionTitle.tsx        # Reusable section heading component
│   └── WhatsAppButton.tsx      # WhatsApp CTA button component
├── pages/
│   ├── Layout.tsx              # Root layout with Header + Footer
│   ├── Home.tsx                # Landing page with hero, storytelling, CTAs
│   ├── Sobre.tsx               # About page with national presence section
│   ├── Solucoes.tsx            # Solutions overview
│   ├── HomeEquity.tsx          # Home Equity educational page
│   ├── CreditoImobiliario.tsx  # Real Estate Credit educational page
│   ├── Processo.tsx            # 5-step intermediation process
│   └── Contato.tsx             # Contact page
├── data/
│   └── siteContent.ts          # Centralized PT-BR content (single source of truth)
├── assets/
│   └── Noradlogo.png           # Official Norad Capital logo
└── index.css                   # Tailwind v4 theme, colors, typography
```

## Design Tokens

Defined in `src/index.css` via Tailwind v4 `@theme`:

- **Navy palette:** navy-50 through navy-950
- **Gold palette:** gold, gold-light, gold-dark, gold-muted
- **Font:** Inter (system-ui fallback)

## Content Management

All visible text content lives in `src/data/siteContent.ts`. Edit this file to update copy without touching components.

## Deployment

Built for Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist --project-name norad-capital-site --branch production --commit-dirty=true
```
