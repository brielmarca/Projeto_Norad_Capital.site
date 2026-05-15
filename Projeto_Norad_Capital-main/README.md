# Norad Capital

Official repository for the Norad Capital institutional website.

Norad Capital is a Brazilian fintech specialized in the intermediation, structuring and advisory support of Home Equity and Real Estate Credit operations.

## Structure

```
/
├── Norad_Capital/              # Project context and development guidelines
│   └── contexto-ia.txt         # Full AI context for website development
├── norad-capital-site/         # Institutional website (Vite + React + TypeScript)
└── *.pdf / *.docx / *.jpeg     # Internal business documents (not for the website)
```

## Website

The website (`norad-capital-site/`) is a premium institutional frontend built with Vite, React, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React and React Router DOM.

### Pages

- `/` — Home
- `/sobre` — About Norad Capital
- `/solucoes` — Solutions
- `/home-equity` — Home Equity
- `/credito-imobiliario` — Real Estate Credit
- `/processo` — Intermediation process
- `/contato` — Contact

### Development

```bash
cd norad-capital-site
npm install
npm run dev
```

## Important

This is a frontend-only, premium institutional website. No backend, login, database, authentication or loan processing.

All visible content must be in Brazilian Portuguese (PT-BR).

**Full project context available at:** `Norad_Capital/contexto-ia.txt`
