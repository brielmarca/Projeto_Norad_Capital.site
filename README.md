# Norad Capital

Official repository for the Norad Capital institutional website.

Norad Capital is a Brazilian fintech specialized in the intermediation, structuring and advisory support of Home Equity and Real Estate Credit operations.

## Structure

```
/
├── Norad_Capital/              # Project context and development guidelines
│   └── contexto-ia.txt         # Full AI context for website development
├── norad-capital-site/         # Institutional website (Vite + React + TypeScript)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroLineBackground.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── pages/              # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── Sobre.tsx
│   │   │   ├── Solucoes.tsx
│   │   │   ├── HomeEquity.tsx
│   │   │   ├── CreditoImobiliario.tsx
│   │   │   ├── Processo.tsx
│   │   │   └── Contato.tsx
│   │   ├── data/
│   │   │   └── siteContent.ts  # Centralized PT-BR content
│   │   ├── assets/             # Images and logos
│   │   └── index.css           # Tailwind v4 theme + global styles
│   └── public/                 # Static assets (partner logos, _redirects)
└── *.pdf / *.docx / *.jpeg     # Internal business documents (not for the website)
```

## Website

The website (`norad-capital-site/`) is a premium institutional frontend built with Vite, React, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React and React Router DOM.

### Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, storytelling, solutions preview, audience segmentation, partners, CTA |
| `/sobre` | About Norad Capital — Company info, national presence |
| `/solucoes` | Solutions overview — Home Equity and Crédito Imobiliário |
| `/home-equity` | Home Equity detail — Educational, multi-section with CTAs |
| `/credito-imobiliario` | Real Estate Credit detail — Educational, multi-section with CTAs |
| `/processo` | Intermediation process — 5-step flow |
| `/contato` | Contact — WhatsApp, email, phone, office info |

### Design System

- **Colors:** Deep navy (950–50), white, soft gray, gold accent (#c9a84c)
- **Typography:** Inter (300–700), light weight headlines, medium body
- **Style:** Apple-inspired minimalism — clean layout, large spacing, calm animations
- **Backgrounds:** Subtle SVG line-chart decorative elements in hero sections

### Development

```bash
cd norad-capital-site
npm install
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

### Deployment

Deployed to Cloudflare Pages via Wrangler CLI:

```bash
cd norad-capital-site
npm run build
npx wrangler pages deploy dist --project-name norad-capital-site --branch production --commit-dirty=true
```

Production URL: https://norad-capital-site.pages.dev/

## Important

This is a frontend-only, premium institutional website. No backend, login, database, authentication or loan processing.

All visible content must be in Brazilian Portuguese (PT-BR).

**Full project context available at:** `Norad_Capital/contexto-ia.txt`
